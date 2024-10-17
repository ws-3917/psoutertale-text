import { helmetdyneAttack } from '../../code/common/extras';
import { music } from '../../code/systems/assets';
import { battler, choicer, iFancyYourVilliany, pager, player, world } from '../../code/systems/framework';
import { SAVE } from '../../code/systems/save';

// START-TRANSLATE

export default {
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
            "<32>{#p/human}* （前哨站没有任何变化。）"
         ],
         [
            "<32>{#p/human}* （你找遍了每个角落，\n  希望能发现生命的迹象。）\n* （一无所获。）",
            "<32>{#p/human}* （你找了一遍，一遍，又一遍...）",
            "<32>{#p/human}* （一无所获。）"
         ],
         [
            "<32>{#p/human}* （你找到了之前乘坐的飞船。）\n* （它已经彻底被毁。）",
            "<32>{#p/human}* （你试图寻找怪物留下的飞船。）",
            "<32>{#p/human}* （但似乎...\n  哪怕一艘，都没给你留下。）"
         ],
         [
            "<32>{#p/human}* （你去了实验室，\n  希望能找到飞船的蓝图和部件。）",
            "<32>{#p/human}* （蓝图还在，部件也有剩余...）",
            "<32>{#p/human}* （然而，此时核心能量已所剩无几。\n  无法让你发射飞船。）"
         ],
         [
            "<32>{#p/human}* （你试图重置。）\n* （什么都没发生。）",
            "<32>{#p/human}* （你再次尝试重置。）",
            "<32>{#p/human}* （什么都没发生。）"
         ],
         [
            "<32>{#p/human}* （绝望之中，你拨了Toriel的号码。）\n* （没有回应。）",
            "<32>{#p/human}* （你又给Papyrus，Undyne打电话...）",
            "<32>{#p/human}* （没有回应。）"
         ],
         [
            "<32>{#p/human}* （...）",
            "<32>{#p/human}* （你已经不记得在这里度过了多久。）",
            "<32>{#p/human}* （几个星期？几个月？几年？）\n* （无从得知。）",
            "<32>{#p/human}* （你把核心的能量消耗调至最低...）",
            "<32>{#p/human}* （即便如此，终有一天也会用尽。）"
         ],
         [
            "<32>{#p/human}* （重力逐渐消失。）",
            "<32>{#p/human}* （温度开始下降。）",
            "<32>{#p/human}* （大气层即将解体。）",
            "<32>{#p/human}* （没有了能量，前哨站将无法生存。）"
         ],
         [
            "<32>{#p/human}* （不知为何，你感到平静。）",
            "<32>{#p/human}* （你平静地接受了自己的死亡。）",
            "<32>{#p/human}* （既然不可避免，那就随它去吧。）",
            "<32>{#p/human}* （空气即将消散。）\n* （最后一刻，你回忆起自己的旅程。）",
            "<32>{#p/human}* （从你离开人类世界的那一天，\n  一直到怪物重获自由的那一天。）"
         ],
         [
            "<32>{#p/human}* （空气彻底消失。）",
            "<32>{#p/human}* （你开始窒息。）",
            "<32>{#p/human}* （生命正在离你而去。）",
            "<32>{#p/human}* （看来，终点就是...）"
         ]
      ],
      
      neutral0 () {
         let k = "";
         let m = music.ending;
         const atext = [ "<32>{#s/phone}{#p/event}* 滴滴，滴滴..." ] as string[];
         const btext = [] as string[];

         const a = (lines: string[]) => atext.push(...lines);
         const b = (lines: string[]) => btext.push(...lines);

         
         const torielDead = SAVE.data.n.state_wastelands_toriel === 2;
         const doggoDead = SAVE.data.n.state_starton_doggo === 2;
         const lesserdogDead = SAVE.data.n.state_starton_lesserdog === 2;
         const greatdogDead = SAVE.data.n.state_starton_greatdog === 2;
         const dogsDead = SAVE.data.n.state_starton_dogs === 2;
         const papyrusDead = SAVE.data.n.state_starton_papyrus === 1;
         const dogeDead = SAVE.data.n.state_foundry_doge === 1;
         const muffetDead = SAVE.data.n.state_foundry_muffet === 1;
         const shyrenDead = SAVE.data.b.killed_shyren;
         const maddummyDead = SAVE.data.n.state_foundry_maddummy === 1;
         const undyneDead = SAVE.data.n.state_foundry_undyne === 2;
         const royalguardsDead = SAVE.data.n.state_aerialis_royalguards === 1;
         const glydeDead = SAVE.data.b.killed_glyde;
         const madjickDead = SAVE.data.b.killed_madjick;
         const knightknightDead = SAVE.data.b.killed_knightknight;
         const mushketeerDead = world.killed_mushketeer;

         
         const outlandsKills = SAVE.data.n.kills_wastelands;
         const startonKills = SAVE.data.n.kills_starton;
         const foundryKills = SAVE.data.n.kills_foundry;
         const aerialisKills = SAVE.data.n.kills_aerialis;
         const coreKills = SAVE.data.n.corekills;

         const outlandsBullies = SAVE.data.n.bully_wastelands;
         const startonBullies = SAVE.data.n.bully_starton;
         const foundryBullies = SAVE.data.n.bully_foundry;
         const aerialisBullies = SAVE.data.n.bully_aerialis;

         const outlandsBullied = world.bullied_area("w");
         const startonBullied = world.bullied_area("s");
         const foundryBullied = world.bullied_area("f");
         const aerialisBullied = world.bullied_area("a");

         const outlandsPopulation = world.population_area("w");
         const startonPopulation = world.population_area("s");
         const foundryPopulation = world.population_area("f");
         const aerialisPopulation = world.population_area("a");

         
         const kills = world.trueKills;
         const bullied = SAVE.data.n.bully;
         const alphysKills = world.alphys_percieved_kills;

         
         const helmetdyne = helmetdyneAttack();
         const respect = SAVE.data.b.undyne_respecc;
         const moniker = iFancyYourVilliany();
         const fearsome = helmetdyne || 30 <= bullied;
         const dateLevel = 2.1 <= SAVE.data.n.plot_date ? 2 : 1.1 <= SAVE.data.n.plot_date ? 1 : 0;
         const papreal = world.dead_skeleton || (SAVE.data.n.plot < 31 && (world.edgy || world.killed0));

         
         const royals = [
            !doggoDead,
            !lesserdogDead,
            !dogsDead,
            !greatdogDead,
            !dogeDead,
            !royalguardsDead,
            !madjickDead,
            !knightknightDead
         ].filter(v => v).length;

         
         const overreaction1 = kills < 20 && 4 <= royals;
         const overreaction2 = kills < 10 && 6 <= royals;

         
         if (world.bad_robot) {
            if (!undyneDead) {
               if (royals < 2) {
                  k = "dark_death";
                  m = music.youscreweduppal;
                  
                  
                  if (overreaction1) {
                     
                  }
                  if (!papyrusDead) {
                     
                  }
               } else {
                  k = "dark_undyne";
                  
                  
                  if (overreaction1) {
                     
                  }
                  if (!torielDead) {
                     
                  }
               }
            } else if (overreaction1) {
               if (!papyrusDead) {
                  k = "dark_papyrus";
                  
                  
               } else if (!maddummyDead) {
                  k = "dark_mew";
                  
                  
                  if (SAVE.data.n.state_wastelands_toriel === 0) {
                     
                     
                  } else if (16 <= SAVE.data.n.kills_wastelands) {
                     
                     
                  } else if (SAVE.data.n.state_foundry_maddummy === 3) {
                     
                     
                  } else {
                     
                  }
               } else {
                  k = "dark_charles";
                  m = music.letsmakeabombwhydontwe;
                  
                  
               }
            } else if (royals < 2) {
               k = "dark_alphys";
               
               
               if (!papyrusDead) {
                  if (royals === 1) {
                     
                     
                     if (!doggoDead) {
                        
                     } else if (!lesserdogDead) {
                        
                     } else if (!dogsDead) {
                        
                     } else if (!greatdogDead) {
                        
                     } else if (!dogeDead) {
                        
                     } else if (!royalguardsDead) {
                        
                     } else if (!madjickDead) {
                        
                     } else if (!knightknightDead) {
                        
                     }
                  } else {
                     
                  }
               } else {
                  if (royals === 1) {
                     
                  } else {
                     
                  }
               }
            } else if (!papyrusDead) {
               k = "dark_burgie";
               
               
            } else {
               k = "dark_generic";
               
               
            }
         } else if (world.bad_lizard > 1) {
            k = "dark_aborted";
            
            
            if (fearsome) {
               
            } else {
               
            }
         } else if (SAVE.data.b.ubershortcut) {
            k = "dark_uber";
            
            
         } else if (SAVE.data.b.ultrashortcut) {
            k = "light_ultra";
            m = music.sansdate;
            
            
         } else if (SAVE.data.n.exp > 0) {
            if (!undyneDead) {
               k = "light_undyne";
               
               a([
                  "<25>{#p/alphys}{#f/4}* H-hiya...",
                  "<25>{#p/alphys}{#f/20}* Is anyone there?",
                  "<25>{#p/alphys}{#f/11}* ... I hope it's not too much trouble...",
                  "<25>{#p/alphys}{#f/4}* I just... w-wanted to let you know how things are going out here."
               ]);
               b([
                  "<25>{#p/alphys}{#f/20}* So... after you left, the king sort of... d-disappeared.",
                  "<25>{#p/alphys}{#f/14}* When I broke the news, it... hurt the people's morale pretty badly.",
                  "<25>{#p/alphys}{#f/10}* Technically, as royal scientist, I was meant to replace him, but...",
                  "<25>{#p/alphys}{#f/4}* I didn't really feel like I'd be the best fit for the job.",
                  "<26>{#p/alphys}{#f/20}* Well, Undyne approached me with an offer to take over, and...",
                  "<25>{#p/alphys}{#f/20}* I agreed, and appointed her as the queen."
               ]);
               if (papyrusDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to Papyrus's death..." ]);
                  if (royals < 2) {
                     b([ "<26>{#p/alphys}{#f/13}* ... not to mention the collapse of the guard..." ]);
                  } else if (royals < 7) {
                     b([ "<25>{#p/alphys}{#f/13}* ... not to mention the loss of those guards..." ]);
                  }
               } else if (royals < 2) {
                  b([ "<26>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the collapse of the guard..." ]);
               } else if (royals < 7) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of those guards..." ]);
               } else if (doggoDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Doggo..." ]);
               } else if (lesserdogDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Canis Minor..." ]);
               } else if (dogsDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to those married dogs' deaths..." ]);
               } else if (greatdogDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Canis Major..." ]);
               } else if (dogeDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Doge..." ]);
               } else if (royalguardsDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to 03 and 04's deaths..." ]);
               } else if (madjickDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Cozmo..." ]);
               } else if (knightknightDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the loss of Terrestria..." ]);
               } else if (torielDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the former queen's death..." ]);
               } else if (muffetDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to the spider queen's death..." ]);
               } else if (kills > 1) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to those monsters' deaths..." ]);
               } else if (outlandsKills === 1) {
                  b([ "<26>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death in the Outlands..." ]);
               } else if (startonKills === 1) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death in Starton..." ]);
               } else if (foundryKills === 1 || shyrenDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death in the Foundry..." ]);
               } else if (aerialisKills === 1 || glydeDead) {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death in Aerialis..." ]);
               } else {
                  b([ "<25>{#p/alphys}{#f/13}* ... I was worried she'd overreact to that death at the CORE..." ]);
               }
               if (royals < 2) {
                  b([ "<25>{#p/alphys}{#f/17}* But all she did was re- establish the royal guard and its forces." ]);
               } else {
                  b([ "<25>{#p/alphys}{#f/17}* But all she did was bolster the royal guard's forces." ]);
               }
               if (respect) {
                  b([ "<25>{#p/alphys}{#f/19}* And... make a speech about how humans are dishonorable warriors." ]);
               } else if (dateLevel === 2) {
                  b([ "<25>{#p/alphys}{#f/19}* And... make a speech about how humans are backstabbing traitors." ]);
               } else {
                  b([ "<25>{#p/alphys}{#f/19}* And... make a speech about how humans are irredeemable killers." ]);
               }
               if (overreaction2) {
                  b([ "<25>{#p/alphys}{#f/20}* A speech that only got people on her side..." ]);
                  if (fearsome) {
                     b([ "<25>{#p/alphys}{#f/26}* ... after they were reminded of your bullying." ]);
                  } else {
                     b([
                        "<25>{#p/alphys}{#f/20}* ... after she mentioned the circumstances of ASGORE's disappearance."
                     ]);
                  }
               } else {
                  b([ "<25>{#p/alphys}{#f/20}* A speech that... actually got a lot of people on her side." ]);
                  if (fearsome) {
                     b([ "<25>{#p/alphys}{#f/26}* ... beating everyone up certainly didn't help your case." ]);
                  } else {
                     b([ "<25>{#p/alphys}{#f/5}* ... monsters are pretty wary of humans these days because of that." ]);
                  }
               }
               b([
                  "<25>{#p/alphys}{#f/10}* As for the actual humans still alive on the outpost...?",
                  "<25>{#p/alphys}{#f/4}* Well, after what she said, I... didn't want to take any chances.",
                  "<25>{#p/alphys}{#f/20}* So... I had the archive moved to a spire house in Aerialis.",
                  "<25>{#p/alphys}{#f/20}* In secret.",
                  "<25>{#p/alphys}{#f/5}* ... Undyne saw the lack of humans, or... human SOULs, and...",
                  "<25>{#p/alphys}{#f/10}* Assumed they'd been lost, too."
               ]);
               if (torielDead) {
                  b([
                     "<25>{#p/alphys}{#f/3}* I, ahah, tried to talk her out of announcing it in public, but...",
                     "<25>{#p/alphys}{#f/3}* ... there was nothing I could do...!",
                     "<25>{#p/alphys}{#f/30}* ...\n* Everyone thinks we're back at square one now."
                  ]);
                  if (papyrusDead) {
                     b([
                        "<25>{#p/alphys}{#f/31}* Many have lost hope that we'll... ever get out of here.",
                        "<25>{#p/alphys}{#f/31}* ...",
                        "<25>{#p/alphys}{#f/30}* People are angry.\n* They're scared, and they all want to leave.",
                        "<25>{#p/alphys}{#f/31}* I don't know how much longer I can keep this secret from everyone.",
                        "<25>{#p/sans}{#f/0}* hey, you still talking to yourself in there?",
                        "<25>{#p/sans}{#f/3}* c'mon, the humans are due for their daily checkup.",
                        "<25>{#p/alphys}{#f/20}* Uh... could you come in for just a moment?",
                        "<25>{#p/sans}{#f/0}* on it.",
                        "<25>{#p/sans}{#f/0}* ... and i'm here.",
                        "<25>{#p/alphys}{#f/20}* So... I'm not really talking to myself.",
                        "<25>{#p/alphys}{#f/19}* Actually, I'm leaving a message for the human.\n* It's recording now...",
                        "<25>{#p/sans}{#f/0}* hmm... i see.",
                        "<25>{#p/sans}{#f/2}* mind if i take over while you go look after the kids?",
                        "<26>{#p/alphys}{#f/5}* S-sure, I'll... go do that.",
                        "<25>{#p/sans}{#f/3}* ...",
                        "<25>{#p/sans}{#f/0}* ok, look, i won't take up much of your time.",
                        "<25>{#p/sans}{#f/0}* to be honest, i just took over the phone so i could hang it up.",
                        "<25>{#p/sans}{#f/3}* alphys has a habit of making phone calls that stress her out.",
                        "<25>{#p/sans}{#f/0}* but... before i go.",
                        "<25>{#p/sans}{#f/0}* undyne's announcement wasn't the only bad news we received.",
                        "<26>{#p/sans}{#f/3}* reports of the former queen's death hit people pretty hard, too.",
                        "<25>{#p/sans}{#f/0}* shops closed down, people quit their jobs...",
                        "<25>{#p/sans}{#f/0}* they're saying morale is the lowest it's ever been.",
                        "<25>{#p/sans}{#f/2}* ... on the bright side, at least grillby's gets a lot of business now.",
                        "<25>{#p/sans}{#f/3}* but no amount of junk food can make up for the loss of my...",
                        "<26>{#p/sans}{#f/3}* ... well, i think you know who i mean.",
                        "<26>{#p/sans}{#f/0}* ...",
                        "<25>{#p/sans}{#f/0}* humanity's reputation is honestly pretty terrible now.",
                        "<25>{#p/sans}{#f/0}* alphys and i will do our best to protect the next human who comes...",
                        "<25>{#p/sans}{#f/3}* but i wouldn't be surprised if they end up getting killed.",
                        "<25>{#p/sans}{#f/0}* ... that's just the way things are now.",
                        "<25>{#p/alphys}{#f/27}* Uh, hey, sorry to interrupt, but...",
                        "<26>{#p/alphys}{#f/20}* I think we may have a... b-bit of a problem.",
                        "<25>{#p/sans}{#f/0}* eh, i said all i wanted to, anyway.",
                        "<25>{#p/sans}{#f/0}* i'm hanging up the phone now.",
                        "<25>{#p/sans}{#f/3}* ... goodbye."
                     ]);
                  } else {
                     b([
                        "<18>{#p/papyrus}{#f/0}EVERYONE EXCEPT FOR YOU, ME, AND MY BROTHER!",
                        "<25>{#p/alphys}{#f/27}* Oh, hey Papyrus.\n* I take it the archive is still working?",
                        "<18>{#p/papyrus}{#f/0}INDEED IT IS!",
                        "<18>{#p/papyrus}{#f/9}I ALSO GAVE THE HUMANS THEIR DAILY CHECKUP!",
                        "<25>{#p/alphys}{#f/10}* Awesome, thanks.",
                        "<25>{#p/alphys}{#f/10}* ... maybe... you'd like to say a few things to the human...?",
                        "<25>{#p/alphys}{#f/5}* I'm leaving a message about what's happened since they left.",
                        "<18>{#p/papyrus}{#f/0}OH, SURE THING!",
                        "<18>{#p/papyrus}{#f/0}... HELLO, HUMAN.\nI TRUST YOU'RE DOING WELL.",
                        "<18>{#p/papyrus}{#f/5}IT'S BEEN HARD KEEPING SECRETS FROM EVERYONE...",
                        "<18>{#p/papyrus}{#f/6}ESPECIALLY WHEN THEY'RE ALL JUST SO SAD!!!",
                        "<18>{#p/papyrus}{#f/5}ALL THOSE PEOPLE THINKING THEY'LL NEVER ESCAPE...",
                        "<18>{#p/papyrus}{#f/5}WONDERING IF THEY STILL HAVE A FUTURE...",
                        "<18>{#p/papyrus}{#f/0}BUT HEY!!\nIT'LL BE ALRIGHT!!",
                        "<18>{#p/papyrus}{#f/5}ONE DAY, THEY'LL COME TO KNOW THE TRUTH...",
                        "<18>{#p/papyrus}{#f/0}AND THE TRUTH WILL SET THEM FREE.",
                        "<25>{#p/alphys}{#f/8}* Papyrus, why don't you tell them about your new job?",
                        "<18>{#p/papyrus}{#f/0}OH RIGHT!!\nHOW COULD I FORGET ABOUT THAT!?",
                        "<18>{#p/papyrus}{#f/0}... UNDYNE FINALLY LET ME JOIN THE ROYAL GUARD.",
                        "<18>{#p/papyrus}{#f/4}TECHNICALLY, I'M THE GUARD'S MORALE OFFICER...",
                        "<18>{#p/papyrus}{#f/0}BUT I STILL DO A VERY IMPORTANT JOB!",
                        "<18>{#p/papyrus}{#f/5}YOU SEE, A GUARD CAN'T DO THEIR BEST...",
                        "<18>{#p/papyrus}{#f/5}IF THEY'RE DOWN IN THE DUMPS.",
                        "<18>{#p/papyrus}{#f/0}SO... THAT'S WHERE I COME IN!",
                        "<18>{#p/papyrus}{#f/4}UM, METAPHORICALLY OF COURSE.",
                        "<18>{#p/papyrus}{#f/4}I WOULDN'T ACTUALLY GO DOWN INTO A DUMP.",
                        "<18>{#p/papyrus}{#f/7}... THERE'S ENOUGH PEOPLE DOING THAT ALREADY!!!",
                        "<18>{#p/papyrus}{#f/5}IT'S STRANGE...\nTHEY NEVER SEEM TO COME BACK.",
                        "<25>{#p/alphys}{#f/10}* Eheh, I wouldn't worry about that.",
                        "<25>{#p/alphys}{#f/3}* They must just be so obsessed with trash, they never leave!",
                        "<18>{#p/papyrus}{#f/0}YEAH...\nTHAT MUST BE IT.",
                        "<18>{#p/papyrus}{#f/5}...",
                        "<18>{#p/papyrus}{#f/5}IT'S STILL KIND OF CONCERNING, THOUGH.",
                        "<25>{#p/alphys}{#f/31}* ... yeah.",
                        "<25>{#p/sans}{#f/0}* oh.\n* hey guys.\n* sorry i'm late...",
                        "<25>{#p/sans}{#f/2}* the people on the floor below us want me to make breakfast.",
                        "<25>{#p/alphys}{#f/25}* Well aren't they just a needy bunch.",
                        "<18>{#p/papyrus}{#f/7}UGH... LIVING IN A SPIRE HOUSE MUST BE SO ANNOYING!!",
                        "<18>{#p/papyrus}{#f/4}DO THEY NOT KNOW HOW TO COOK FOR THEMSELVES?",
                        "<25>{#p/sans}{#f/0}* i mean, i can't say i blame 'em.",
                        "<25>{#p/sans}{#f/0}* after undyne's announcement about our progress, and...",
                        "<25>{#p/sans}{#f/0}* those reports of the former queen's death...?",
                        "<25>{#p/sans}{#f/3}* i'd probably want someone else to cook for me, too.",
                        "<25>{#p/sans}{#f/2}* but hey.\n* that's why i have you.",
                        "<18>{#p/papyrus}{#f/0}YEAH!!\nWHO NEEDS SOMEONE ELSE TO COOK...",
                        "<18>{#p/papyrus}{#f/9}... WHEN YOU HAVE THE ONE AND ONLY GREAT PAPYRUS!",
                        "<26>{#p/sans}{#f/0}* heh.",
                        "<26>{#p/sans}{#f/0}* well, i should probably get started on that breakfast now.",
                        "<26>{#p/sans}{#f/3}* papyrus, would you mind coming with me?",
                        "<18>{#p/papyrus}{#f/0}OF COURSE!\nI'LL GO WITH YOU RIGHT AWAY!",
                        "<26>{#p/sans}{#f/0}* alrighty, then.\n* ... on we go!",
                        "<25>{#p/alphys}{#f/17}* Have fun.",
                        "<25>{#p/alphys}{#f/17}* ...",
                        "<25>{#p/alphys}{#f/5}* I guess I should probably hang up the phone now.",
                        "<25>{#p/alphys}{#f/6}* Just, if this ever gets to you, then...",
                        "<25>{#p/alphys}{#f/14}* I hope you're doing better than we are right now.",
                        "<25>{#p/alphys}{#f/20}* ...",
                        "<25>{#p/alphys}{#f/20}* See you later."
                     ]);
                  }
               } else {
                  b([
                     "<25>{#p/alphys}{#f/5}* F-fortunately, the former queen returned, and...",
                     "<25>{#p/alphys}{#f/5}* Managed to convince her not to make an announcement about it.",
                     "<25>{#p/alphys}{#f/10}* There was some tension between them at first, but...",
                     "<25>{#p/alphys}{#f/6}* ... things feel like they're kind of back to normal, now."
                  ]);
                  if (papyrusDead) {
                     b([
                        "<25>{#p/alphys}{#f/4}* The only difference from before is...",
                        "<25>{#p/alphys}{#f/17}* ... I have to keep the archive a secret.",
                        "<25>{#p/alphys}{#f/20}* Well, I guess that's not really much of a difference.",
                        "<25>{#p/alphys}{#f/14}* It's just weird not having... anyone around to help anymore.",
                        "<25>{#p/sans}{#f/0}* didja forget about me?",
                        "<25>{#p/alphys}{#f/2}* O-oh, uh, that's not what I meant!",
                        "<25>{#p/sans}{#f/3}* hey, i get it.\n* it's not the same as it was with asgore.",
                        "<25>{#p/sans}{#f/0}* but i'd like to think i do a good job.",
                        "<25>{#p/alphys}{#f/6}* Yeah... you do.",
                        "<26>{#p/alphys}{#f/5}* I just miss having him around and stuff.",
                        "<25>{#p/sans}{#f/3}* ... by the way...",
                        "<25>{#p/sans}{#f/0}* you should probably go give the humans their daily checkup.",
                        "<25>{#p/sans}{#f/2}* i can take over on the phone while you're gone.",
                        "<26>{#p/alphys}{#f/6}* Sounds good.\n* I'll go do that now.",
                        "<25>{#p/sans}{#f/3}* ..."
                     ]);
                     if (kills === 1) {
                        b([
                           "<25>{#p/sans}{#f/0}* so here we are, then.",
                           "<25>{#p/sans}{#f/0}* now, since you left, i've been asking myself...",
                           "<25>{#p/sans}{#f/3}* \"why would they go out of their way solely to kill him?\"",
                           "<25>{#p/sans}{#f/0}* and i'm not talking about asgore.",
                           "<25>{#p/sans}{#f/3}* ...",
                           "<25>{#p/sans}{#f/3}* i think we both know the reason.",
                           "<25>{#p/sans}{#f/3}* i think we both know it wasn't out of self- defense.",
                           "<25>{#p/sans}{#f/0}* come on.\n* let's be honest with ourselves here.",
                           "<25>{#p/sans}{#f/0}* you just did it to see what'd happen.",
                           "<25>{#p/sans}{#f/0}* to see what i'd have to say about it.",
                           "<25>{#p/sans}{#f/0}* well, congratulations!\n* you got your answer, bucko!",
                           "<25>{#p/sans}{#f/0}* i hope you're happy with the outcome.",
                           "<27>{#p/sans}{#f/3}* just kidding.\n* i don't really hope that.",
                           "<27>{#p/sans}{#f/0}* ...",
                           "<27>{#p/sans}{#f/0}* ... well, that's all."
                        ]);
                     } else {
                        b([
                           "<25>{#p/sans}{#f/0}* hey.\n* hope you're doing well.",
                           "<25>{#p/sans}{#f/0}* for the most part, we're doing well, too.",
                           "<25>{#p/sans}{#f/3}* people are still going about their lives, day after day...",
                           "<25>{#p/sans}{#f/0}* waiting for the next human to come along and set us free."
                        ]);
                        if (kills > 9) {
                           b([
                              "<25>{#p/sans}{#f/0}* ... i just wish i could say the same about my brother.",
                              "<25>{#p/sans}{#f/3}* and the other people you killed, for that matter."
                           ]);
                        } else {
                           b([ "<25>{#p/sans}{#f/3}* ... i just wish i could say the same about my brother." ]);
                        }
                        b([
                           "<25>{#p/sans}{#f/3}* ...",
                           "<25>{#p/sans}{#f/3}* hmm...\n* what else should i mention?",
                           "<26>{#p/sans}{#f/0}* ... right.\n* new living arrangements.",
                           "<25>{#p/sans}{#f/3}* so, after the former queen returned...",
                           "<25>{#p/sans}{#f/0}* she and i recognized eachother and got to talking.",
                           "<25>{#p/sans}{#f/0}* one thing led to another, and...",
                           "<25>{#p/sans}{#f/0}* she agreed to move in with me to my house in starton town.",
                           "<25>{#p/sans}{#f/0}* ... sure.\n* there's a lot we were excited about.",
                           "<25>{#p/sans}{#f/3}* the books i gave her, the recipes she tried to teach me...",
                           "<25>{#p/sans}{#f/0}* but... y'know...",
                           "<25>{#p/sans}{#f/3}* none of that stuff ever made up for what happened to papyrus.",
                           "<25>{#p/sans}{#f/3}* she still feels pretty bad about that.",
                           "<25>{#p/sans}{#f/0}* not just because she cares about me, but also...",
                           "<25>{#p/sans}{#f/0}* because she cared about you.",
                           "<25>{#p/sans}{#f/3}* you can imagine how she felt when she realized what you'd done.",
                           "<25>{#p/sans}{#f/0}* spoiler alert.\n* not good.",
                           "<25>{#p/sans}{#f/3}* ... and the public at large doesn't seem to feel much better.",
                           "<25>{#p/sans}{#f/0}* at least in terms of your reputation.",
                           "<25>{#p/sans}{#f/0}* still.\n* could be worse.",
                           "<25>{#p/sans}{#f/0}* at the very least, alphys and i are confident...",
                           "<25>{#p/sans}{#f/3}* in our ability to escort the next human to safety.",
                           "<25>{#p/sans}{#f/0}* so that's something.",
                           "<25>{#p/alphys}{#f/27}* Uh, hey, sorry to interrupt, but...",
                           "<26>{#p/alphys}{#f/20}* I think we may have a... b-bit of a problem.",
                           "<25>{#p/sans}{#f/3}* welp.\n* looks like i'll have to cut this short.",
                           "<25>{#p/sans}{#f/0}* just... think about what i've said, ok?",
                           "<25>{#p/sans}{#f/0}* ...",
                           "<25>{#p/sans}{#f/0}* ... well, that's all."
                        ]);
                     }
                  } else {
                     b([
                        "<18>{#p/papyrus}{#f/0}YEAH!!\nTHEY'RE REALLY NOT THAT BAD!",
                        "<18>{#p/papyrus}{#f/5}ASIDE FROM ALL THE SECRET-KEEPING.",
                        "<18>{#p/papyrus}{#f/5}NOT A BIG FAN OF THAT PARTICULAR THING.",
                        "<25>{#p/alphys}{#f/11}* But if Undyne were to find out, then...",
                        "<18>{#p/papyrus}{#f/4}YES, YES, I KNOW WHAT YOU'RE GOING TO SAY.",
                        "<18>{#p/papyrus}{#f/4}SHE'LL GET UPSET AND TRY TO TAKE THE HUMANS' SOULS.",
                        "<18>{#p/papyrus}{#f/7}YOU DON'T HAVE TO REMIND ME!!",
                        "<25>{#p/alphys}{#f/23}* He's been arguing with me about this for a while.",
                        "<18>{#p/papyrus}{#f/5}(SIGH...)",
                        "<18>{#p/papyrus}{#f/5}I FEEL LIKE WE COULD CONVINCE HER IF WE JUST TRIED.",
                        "<25>{#p/alphys}{#f/3}* ... Papyrus, why don't you tell them about your new job?",
                        "<18>{#p/papyrus}{#f/0}OH RIGHT!!\nHOW COULD I FORGET ABOUT THAT!?",
                        "<18>{#p/papyrus}{#f/0}... UNDYNE FINALLY LET ME JOIN THE ROYAL GUARD.",
                        "<18>{#p/papyrus}{#f/9}I'M THE GUARD'S NEWEST TRAINING EXPERT!",
                        "<18>{#p/papyrus}{#f/0}SO... WHILE UNDYNE TRAINS THE OTHER GUARDS...",
                        "<18>{#p/papyrus}{#f/0}I'M RESPONSIBLE FOR KEEPING THEM ALL MOTIVATED.",
                        "<18>{#p/papyrus}{#f/9}TURNS OUT I'M PRETTY DARN GOOD AT IT, TOO!",
                        "<18>{#p/papyrus}{#f/2}HER WORDS -AND- MINE.",
                        "<25>{#p/alphys}{#f/5}* Sounds like fun.\n* Maybe I'll visit you on the job sometime.",
                        "<18>{#p/papyrus}{#f/0}SURE, I'LL LET YOU VISIT.",
                        "<18>{#p/papyrus}{#f/4}AFTER YOU AGREE TO TELL UNDYNE OUR SECRET.",
                        "<25>{#p/alphys}{#f/20}* ...",
                        "<18>{#p/papyrus}{#f/0}SO, HOW ABOUT IT?\nYOU, ME, UNDYNE, CONVINCING?",
                        "<25>{#p/sans}{#f/0}* ... huh?\n* what's this about?",
                        "<25>{#p/sans}{#f/3}* sorry i'm late, by the way.",
                        "<25>{#p/sans}{#f/2}* the people on the floor above us want me to make dinner.",
                        "<25>{#p/alphys}{#f/25}* Well aren't they just a needy bunch.",
                        "<18>{#p/papyrus}{#f/4}AREN'T YOU GOING TO TELL HIM WHAT WE TALKED ABOUT?",
                        "<25>{#p/alphys}{#f/32}* ...",
                        "<25>{#p/alphys}{#f/3}* Papyrus thinks we should tell Undyne the truth.",
                        "<25>{#p/sans}{#f/0}* you really think that'd go well, bro?",
                        "<18>{#p/papyrus}{#f/0}WELL, AS A MEMBER OF THE ROYAL GUARD...",
                        "<18>{#p/papyrus}{#f/0}MY OPINION -SHOULD- CARRY SOME REAL WEIGHT!",
                        "<25>{#p/sans}{#f/0}* hmm... normally i'd say no to something like this, but...",
                        "<25>{#p/sans}{#f/0}* undyne does seem to have a certain respect for you.",
                        "<25>{#p/sans}{#f/3}* besides, i've been thinking about it too.",
                        "<25>{#p/alphys}{#f/22}* W-well, don't go saying anything unless I give the OK!",
                        "<25>{#p/sans}{#f/2}* wouldn't dream of it.",
                        "<18>{#p/papyrus}{#f/0}YEAH!!\nWE'LL JUST PICTURE IT IN OUR HEADS.",
                        "<18>{#p/papyrus}{#f/5}UNLESS THAT ALSO COUNTS AS DREAMING.",
                        "<26>{#p/sans}{#f/0}* heh.",
                        "<26>{#p/sans}{#f/0}* well, i should probably get started on that dinner now.",
                        "<26>{#p/sans}{#f/3}* papyrus, would you mind coming with me?",
                        "<18>{#p/papyrus}{#f/0}OF COURSE!\nI'LL GO WITH YOU RIGHT AWAY!",
                        "<26>{#p/sans}{#f/0}* alrighty, then.\n* ... on we go!",
                        "<25>{#p/alphys}{#f/17}* Have fun.",
                        "<25>{#p/alphys}{#f/17}* ...",
                        "<25>{#p/alphys}{#f/5}* To be honest...",
                        "<25>{#p/alphys}{#f/5}* It would be nice to not have to hide all of this anymore.",
                        "<25>{#p/alphys}{#f/6}* So... maybe, if there's really a chance this could succeed...",
                        "<25>{#p/alphys}{#f/6}* ...",
                        "<25>{#p/alphys}{#f/8}* I-I'll think about it after I hang up the phone.",
                        "<25>{#p/alphys}{#f/10}* ...",
                        "<25>{#p/alphys}{#f/16}* T-take care!!"
                     ]);
                  }
               }
            } else if (!torielDead) {
               if (SAVE.data.b.w_state_lateleave) {
                  k = "light_runaway";
                  
                  a([
                     "<25>{#p/toriel}{#f/1}* Hello?",
                     "<25>{#p/toriel}{#f/5}* This is... Toriel.",
                     "<25>{#p/toriel}{#f/1}* ... I know we did not part ways on the best of terms, but...",
                     "<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure."
                  ]);
                  b([
                     "<25>{#p/toriel}{#f/9}* After you ran away from me, I reconsidered my own decisions.",
                     "<25>{#p/toriel}{#f/13}* I felt... guilty.\n* For trying to keep you in the Outlands.",
                     "<25>{#p/toriel}{#f/13}* For trying to keep ALL the humans there.",
                     "<25>{#p/toriel}{#f/9}* I decided I could stay there no longer.",
                     "<26>{#p/toriel}{#f/13}* I worked up the courage to leave, and returned to the Citadel.",
                     "<25>{#p/toriel}{#f/18}* ... when I saw that the humans were trapped in those boxes...",
                     "<25>{#p/toriel}{#f/13}* I released them without a second thought.",
                     "<26>{#p/toriel}{#f/10}* I did not want them to be trapped any more than I wanted you to be.",
                     "<25>{#p/toriel}{#f/9}* ... but this decision was not without its consequences.",
                     "<25>{#p/toriel}{#f/13}* Not only were the humans traumatized by ASGORE's archive...",
                     "<25>{#p/toriel}{#f/13}* But one of them ran off, and was discovered by the public.",
                     "<25>{#p/toriel}{#f/18}* I did not want to keep them here against their will, but...",
                     "<25>{#p/toriel}{#f/9}* The death of the royal guard's captain, and loss of the king...",
                     "<25>{#p/toriel}{#f/9}* ... placed humanity's reputation in a rather difficult position.",
                     "<25>{#p/toriel}{#f/13}* With the public knowing the truth about the humans...",
                     "<25>{#p/toriel}{#f/9}* I had no choice but to do whatever I could to safeguard them.",
                     "<25>{#p/alphys}{#f/15}* Uh, not to interrupt, but... you have a visitor.",
                     "<25>{#p/toriel}{#f/10}* Let me guess.\n* Sans?",
                     "<25>{#p/alphys}{#f/3}* ...",
                     "<25>{#p/toriel}{#f/0}* There is no need to be so formal when he is the one at the gate.",
                     "<25>{#p/toriel}{#f/9}* System, unlock the gate, authorization Toriel PIE-1-1-0.",
                     "<25>{#p/sans}{#f/0}* ...\n* it's about time.",
                     "<25>{#p/sans}{#f/0}* you still on the phone with the human?",
                     "<25>{#p/alphys}{#f/23}* On the WHAT!?",
                     "<25>{#p/toriel}{#f/0}* Yes, I thought it would be nice if they heard from you, Sans.",
                     "<25>{#p/toriel}{#f/1}* Perhaps Alphys would like to join us as well?",
                     "<25>{#p/alphys}{#f/21}* ...",
                     "<25>{#p/alphys}{#f/21}* No.\n* Alphys would not.",
                     "<25>{#p/alphys}{#f/21}* In fact, Alphys would like to leave now.",
                     "<25>{#p/alphys}{#f/24}* ... I'll be outside if you need me.",
                     "<25>{#p/sans}{#f/0}* ...",
                     "<25>{#p/toriel}{#f/5}* ..."
                  ]);
                  if (SAVE.data.n.state_foundry_undyne === 1) {
                     b([
                        "<25>{#p/sans}{#f/3}* she's... still pretty upset about what happened to undyne.",
                        "<25>{#p/sans}{#f/0}* about what she's had to do as a result."
                     ]);
                  } else {
                     b([
                        "<25>{#p/sans}{#f/3}* she's... still pretty angry about what you did to undyne.",
                        "<25>{#p/sans}{#f/0}* about what she's had to do as a result."
                     ]);
                  }
                  if (papyrusDead) {
                     b([
                        "<25>{#p/sans}{#f/3}* and you know what?",
                        "<25>{#p/sans}{#f/0}* i really get it.",
                        "<25>{#p/sans}{#f/0}* i know what alphys must be going through right now.",
                        "<25>{#p/sans}{#f/0}* after all...",
                        "<25>{#p/sans}{#f/3}* she's not the only one who lost someone."
                     ]);
                  } else {
                     if (SAVE.data.n.state_foundry_undyne === 1) {
                        b([ "<25>{#p/sans}{#f/3}* and while i wouldn't blame you for running away..." ]);
                     } else {
                        b([ "<25>{#p/sans}{#f/3}* and while i wouldn't blame you for trying to defend yourself..." ]);
                     }
                     b([
                        "<25>{#p/sans}{#f/0}* i can't help but wonder if there was a better way to go about things.",
                        "<25>{#p/sans}{#f/0}* if, maybe somehow, this all could have been avoided.",
                        "<25>{#p/sans}{#f/3}* but i digress.",
                        "<25>{#p/sans}{#f/0}* there's too much at stake in the present to worry about the past."
                     ]);
                  }
                  if (royals < 2) {
                     b([
                        "<25>{#p/sans}{#f/0}* ...",
                        "<25>{#p/sans}{#f/0}* it's been difficult without the royal guard to protect us.",
                        "<25>{#p/sans}{#f/3}* not that i was a big fan of those guys before, but...",
                        "<25>{#p/sans}{#f/0}* at a time like this, it'd be nice to have them around.",
                        "<25>{#p/toriel}{#f/13}* Yes, sadly, I am inclined to agree.",
                        "<25>{#p/toriel}{#f/13}* It seems not a day goes by without an angered citizen at the gate.",
                        "<25>{#p/toriel}{#f/9}* But it cannot be helped.",
                        "<25>{#p/toriel}{#f/9}* There are few who share my willingness to treat humans as individuals.",
                        "<32>{#p/human}{#v/1}{@fill:#42fcff}* Toriel, are we in danger?",
                        "<25>{#p/toriel}{#f/1}* ... oh, hello!",
                        "<25>{#p/toriel}{#f/0}* Do not worry, my child.\n* I will always be here to protect you.",
                        "<32>{#p/human}{#v/1}{@fill:#42fcff}* ... thank you...",
                        "<25>{#p/toriel}{#f/0}* Now, please go back and wait with the others.",
                        "<25>{#p/toriel}{#f/0}* I will be with you shortly.",
                        "<32>{#p/human}{#v/1}{@fill:#42fcff}* Okay, I'll go...",
                        "<25>{#p/toriel}{#f/10}* ... very good.",
                        "<25>{#p/toriel}{#f/9}* ..."
                     ]);
                     if (papyrusDead) {
                        b([
                           "<25>{#p/toriel}{#f/10}* I suppose I cannot judge the citizens too harshly...",
                           "<25>{#p/toriel}{#f/9}* ... knowing the sorts of choices you made during your time here.",
                           "<25>{#p/toriel}{#f/13}* It was... difficult, even for me, to accept what you had done."
                        ]);
                     } else {
                        b([ "<25>{#p/toriel}{#f/13}* It is... an unfortunate situation we find ourselves in." ]);
                     }
                     b([
                        "<25>{#p/sans}{#f/0}* y'know...",
                        "<25>{#p/sans}{#f/0}* i wanted to go to grillby's the other day, but...",
                        "<25>{#p/sans}{#f/3}* their entire stock got raided last week.",
                        "<25>{#p/sans}{#f/0}* turns out grillby was a pro-human supporter.",
                        "<25>{#p/toriel}{#f/13}* I am... sorry to hear that, Sans.\n* You liked going there.",
                        "<25>{#p/sans}{#f/3}* yeah, being pro-human is basically a death sentence these days.",
                        "<25>{#p/sans}{#f/0}* at least where your business is concerned.",
                        "<25>{#p/toriel}{#f/12}* ... this is not the only instance of this happening.",
                        "<25>{#p/toriel}{#f/11}* Many others have had the same fate.",
                        "<25>{#p/sans}{#f/0}* yeah, but you know what the worst part is?",
                        "<25>{#p/sans}{#f/3}* this isn't what monsters are supposed to be like.",
                        "<25>{#p/sans}{#f/0}* the homeworld was said to be peaceful, and even during the war...",
                        "<25>{#p/sans}{#f/0}* at least we were still united as a species.",
                        "<25>{#p/sans}{#f/3}* now, it just feels like... people can't get along."
                     ]);
                     if (papyrusDead) {
                        b([ "<25>{#p/sans}{#f/0}* i could really use my brother's encouragement right about now." ]);
                     } else {
                        b([ "<25>{#p/sans}{#f/0}* and that really stinks." ]);
                     }
                     b([
                        "<25>{#p/alphys}{#f/3}* Uh... guys?",
                        "<25>{#p/alphys}{#f/3}* I think you need to come see this.",
                        "<25>{#p/toriel}{#f/3}* What is that rumbling?\n* Do you hear that?",
                        "<25>{#p/alphys}{#f/23}* You need to look outside.",
                        "<25>{#p/sans}{#f/0}* toriel, did you lock the gate after i got through?",
                        "<25>{#p/toriel}{#f/2}* ...",
                        "<25>{#p/alphys}{#f/22}* Come outside, NOW!!",
                        "<25>{|}{#p/toriel}{#f/2}* I... I am sorry!\n* I have to- {%}"
                     ]);
                  } else {
                     b([
                        "<25>{#p/sans}{#f/0}* ...",
                        "<25>{#p/sans}{#f/0}* at least we have the royal guard around to back us up.",
                        "<25>{#p/sans}{#f/3}* what's left of it, anyway.",
                        "<25>{#p/toriel}{#f/14}* It is fortunate we have their support.",
                        "<25>{#p/toriel}{#f/13}* I do not know how we would fare without it.",
                        "<32>{#p/human}{#v/2}{@fill:#ff993d}* Yeah!\n* That royal guard is awesome!",
                        "<25>{#p/toriel}{#f/2}* ... huh!?",
                        "<32>{#p/human}{#v/2}{@fill:#ff993d}* You'll see!",
                        "<32>{#p/human}{#v/2}{@fill:#ff993d}* When I'm older, I'm gonna join them and protect everyone!",
                        "<25>{#p/toriel}{#f/0}* Hee hee.\n* Perhaps you will.",
                        "<25>{#p/toriel}{#f/1}* Hmm...",
                        "<25>{#p/toriel}{#f/0}* For now, your orders are to return to and guard the others first.",
                        "<32>{#p/human}{#v/2}{@fill:#ff993d}* Aye aye, captain!\n* I'll do so right away!",
                        "<25>{#p/toriel}{#f/0}* Stay safe!",
                        "<25>{#p/sans}{#f/0}* heh.\n* don't push 'em too hard out there.",
                        "<25>{#p/sans}{#f/3}* they've... still got all that archive stuff to deal with.",
                        "<26>{#p/toriel}{#f/5}* That IS true, however...",
                        "<25>{#p/toriel}{#f/0}* It does not mean they must focus on it all the time.",
                        "<25>{#p/toriel}{#f/1}* They are still only children, are they not?",
                        "<25>{#p/sans}{#f/2}* ... welp, you know more about these things than me.",
                        "<25>{#p/toriel}{#f/9}* ...",
                        "<25>{#p/toriel}{#f/9}* I do still worry about the outpost overall.",
                        "<25>{#p/toriel}{#f/13}* The royal guard has helped to keep the outpost in check, but...",
                        "<25>{#p/toriel}{#f/18}* Many people still do not see the value in what we are doing."
                     ]);
                     if (papyrusDead) {
                        b([
                           "<25>{#p/toriel}{#f/10}* Though, I suppose I cannot judge them too harshly...",
                           "<25>{#p/toriel}{#f/9}* ... knowing the sorts of choices you made during your time here.",
                           "<25>{#p/toriel}{#f/13}* It was... difficult, even for me, to accept what you had done."
                        ]);
                     } else {
                        b([ "<25>{#p/toriel}{#f/13}* It is... an unfortunate situation we find ourselves in." ]);
                     }
                     b([
                        "<25>{#p/sans}{#f/0}* y'know...",
                        "<25>{#p/sans}{#f/0}* i wanted to go to grillby's the other day, but...",
                        "<25>{#p/sans}{#f/3}* the place was utterly full of protesters.",
                        "<25>{#p/sans}{#f/0}* turns out grillby was a pro-human supporter.",
                        "<25>{#p/toriel}{#f/13}* I am... sorry to hear that, Sans.\n* Was a guard not there?",
                        "<25>{#p/sans}{#f/3}* well, yeah, but it's not like they can kick 'em out.",
                        "<25>{#p/sans}{#f/0}* they WERE still paying customers.",
                        "<25>{#p/toriel}{#f/1}* ... that does not seem like an effective means of protest.",
                        "<25>{#p/toriel}{#f/6}* But I wish them well.",
                        "<25>{#p/sans}{#f/0}* yeah, i guess that's kinda funny.\n* but at the same time...",
                        "<25>{#p/sans}{#f/3}* this isn't what monsters are supposed to be like.",
                        "<25>{#p/sans}{#f/0}* the homeworld was said to be peaceful, and even during the war...",
                        "<25>{#p/sans}{#f/0}* at least we were still united as a species.",
                        "<25>{#p/sans}{#f/3}* now, it just feels like... people can't get along."
                     ]);
                     if (papyrusDead) {
                        b([ "<25>{#p/sans}{#f/0}* i could really use my brother's encouragement right about now." ]);
                     } else {
                        b([ "<25>{#p/sans}{#f/0}* and that really stinks." ]);
                     }
                     b([
                        "<25>{#p/alphys}{#f/27}* Uh, Toriel?\n* I think you left the security gate open.",
                        "<25>{#p/alphys}{#f/20}* Don't worry, I closed it for you.\n* Again.",
                        "<25>{#p/toriel}{#f/1}* Oh, um, thank you...",
                        "<26>{#p/alphys}{#f/23}* Maybe don't do that\n  next time?\n* It's there for a reason.",
                        "<25>{#p/toriel}{#f/5}* ...",
                        "<25>{#p/toriel}{#f/9}* Perhaps now would be a good time to end this message.",
                        "<25>{#p/sans}{#f/0}* yeah, sounds good.",
                        "<25>{#p/sans}{#f/3}* sorry, bucko... can't talk to you forever."
                     ]);
                     if (papyrusDead) {
                        b([
                           "<25>{#p/sans}{#f/0}* fly safe out there, i guess...",
                           "<25>{#p/sans}{#f/3}* ... or not.\n* i don't really care."
                        ]);
                     } else {
                        b([ "<25>{#p/sans}{#f/0}* fly safe out there, will ya?", "<25>{#p/sans}{#f/3}* ..." ]);
                     }
                  }
               } else {
                  k = "light_toriel";
                  
                  if (SAVE.data.n.state_wastelands_toriel === 0) {
                     a([
                        "<25>{#p/toriel}{#f/1}* Hello?",
                        "<25>{#p/toriel}{#f/0}* ...\n* This is Toriel.",
                        "<25>{#p/toriel}{#f/1}* I know it is not the kind of call we would normally have, but...",
                        "<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure."
                     ]);
                     b([ "<25>{#p/toriel}{#f/9}* Despite our calling arrangements, I could not help but worry." ]);
                  } else {
                     a([
                        "<25>{#p/toriel}{#f/1}* Hello?",
                        "<25>{#p/toriel}{#f/0}* ...\n* This is Toriel.",
                        "<25>{#p/toriel}{#f/1}* I know the circumstances are not ideal at the moment, but...",
                        "<25>{#p/toriel}{#f/5}* I feel that you should know what has happened since your departure."
                     ]);
                     b([ "<25>{#p/toriel}{#f/9}* After our time in the Outlands, I could not help but worry." ]);
                  }
                  b([
                     "<25>{#p/toriel}{#f/5}* I knew you were the last human ASGORE would have needed.",
                     "<25>{#p/toriel}{#f/1}* Despite my fear of leaving the Outlands...",
                     "<25>{#p/toriel}{#f/5}* I knew I could not afford to remain there any longer.",
                     "<25>{#p/toriel}{#f/9}* I ran to the Citadel as fast as I could to stop him from hurting you.",
                     "<25>{#p/toriel}{#f/10}* But when I got there...",
                     "<25>{#p/toriel}{#f/9}* I realized I had been wrong about him this whole time.",
                     "<25>{#p/toriel}{#f/5}* He was not the killer I had made him out to be.",
                     "<25>{#p/toriel}{#f/1}* ...",
                     "<25>{#p/toriel}{#f/1}* I had a talk with Alphys later that day.",
                     "<25>{#p/toriel}{#f/1}* We discussed ASGORE, the humans...",
                     "<25>{#p/toriel}{#f/3}* As well as something about a \"Mew Mew Space Adventure?\"",
                     "<25>{#p/toriel}{#f/4}* I still do not know what that means.",
                     "<25>{#p/toriel}{#f/0}* Anyhoo, to summarize... she wasn't ready to become the queen.",
                     "<25>{#p/toriel}{#f/1}* And she agreed to appoint me instead.",
                     "<25>{#p/toriel}{#f/5}* Only then, did I hear about the royal guard captain's death..."
                  ]);
                  if (kills === 0) {
                     b([
                        "<25>{#p/toriel}{#f/9}* And the fact that, had you acted, you might have saved her.",
                        "<25>{#p/toriel}{#f/5}* I only have my own cowardice to blame, however.",
                        "<25>{#p/toriel}{#f/1}* If I had simply posessed the courage leave sooner...",
                        "<25>{#p/toriel}{#f/5}* I could have gone with you and pointed you in the right direction."
                     ]);
                  } else {
                     if (kills === 1) {
                        b([ "<25>{#p/toriel}{#f/9}* And the fact that you were the one to have killed her." ]);
                     } else if (papyrusDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of Sans's brother, Papyrus." ]);
                     } else if (royals < 2) {
                        b([ "<26>{#p/toriel}{#f/9}* As well as the deaths of the rest of the royal guard." ]);
                     } else if (royals < 7) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the deaths of other royal guard members." ]);
                     } else if (doggoDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Doggo." ]);
                     } else if (lesserdogDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Canis Minor." ]);
                     } else if (dogsDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of her subordinates, Dogamy and Dogaressa." ]);
                     } else if (greatdogDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Canis Major." ]);
                     } else if (dogeDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Doge" ]);
                     } else if (royalguardsDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of her subordinates, 03 and 04." ]);
                     } else if (madjickDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Cozmo." ]);
                     } else if (knightknightDead) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of her subordinate, Terrestria." ]);
                     } else if (kills > 9) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the deaths of many other monsters." ]);
                     } else if (kills > 2) {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the deaths of a few other monsters." ]);
                     } else {
                        b([ "<25>{#p/toriel}{#f/9}* As well as the death of one other monster." ]);
                     }
                     b([
                        "<25>{#p/toriel}{#f/5}* I only have my own cowardice to blame, however.",
                        "<25>{#p/toriel}{#f/1}* If I had simply posessed the courage leave sooner...",
                        "<25>{#p/toriel}{#f/5}* I could have gone with you and encouraged a more peaceful path."
                     ]);
                  }
                  b([
                     "<26>{#p/toriel}{#f/9}* Alas, there was nothing more to be done.",
                     "<25>{#p/toriel}{#f/5}* As queen, I did not have time to dwell on such matters.",
                     "<25>{#p/toriel}{#f/9}* The humans' safety was at stake, and I would not lose them again.",
                     "<25>{#p/toriel}{#f/10}* My first act as queen would be to increase their protection."
                  ]);
                  if (royals < 2) {
                     b([
                        "<26>{#p/toriel}{#f/5}* Admittedly, this would be difficult, given the lack of a royal guard."
                     ]);
                  } else {
                     b([
                        "<25>{#p/toriel}{#f/5}* Admittedly, I was out of practice in handling these sorts of matters."
                     ]);
                  }
                  b([
                     "<25>{#p/toriel}{#f/1}* But with the help of an old friend, Gerson, and his contacts...",
                     "<25>{#p/toriel}{#f/1}* I was able to arrange a minimal security detail here in the Citadel.",
                     "<25>{#p/toriel}{#f/0}* It is not much, but the humans and their secret are safer now.",
                     "<25>{#p/toriel}{#f/1}* ...",
                     "<25>{#p/toriel}{#f/1}* Since then, life has carried on as usual..."
                  ]);
                  if (royals < 2) {
                     b([ "<25>{#p/toriel}{#f/5}* Despite the loss of the king, and royal guard as a whole..." ]);
                  } else {
                     b([ "<25>{#p/toriel}{#f/5}* Despite the loss of the king, and former royal guard captain..." ]);
                  }
                  b([
                     "<25>{#p/toriel}{#f/1}* The people still have hope for their freedom.",
                     "<25>{#p/toriel}{#f/5}* Hope that... I will deliver it to them.",
                     "<25>{#p/toriel}{#f/9}* ...",
                     "<25>{#p/toriel}{#f/9}* In a way, I understand what ASGORE must have been going through now.",
                     "<25>{#p/toriel}{#f/10}* The weight of such outrageous demands being made of me...",
                     "<25>{#p/toriel}{#f/9}* ... it is changing who I am as a person.",
                     "<25>{#p/toriel}{#f/5}* Earlier today, in fact."
                  ]);
                  if (papyrusDead) {
                     b([
                        "<25>{#p/toriel}{#f/5}* When Sans came to reminisce about his brother, I...",
                        "<25>{#p/toriel}{#f/9}* I declined out of a desire to be left alone.",
                        "<25>{#p/toriel}{#f/1}* He shrugged, and walked off like nothing was wrong...",
                        "<25>{#p/toriel}{#f/5}* But I knew he must have been disappointed."
                     ]);
                  } else {
                     b([
                        "<25>{#p/toriel}{#f/5}* When Papyrus came to reminisce about Undyne, I...",
                        "<25>{#p/toriel}{#f/9}* I declined out of a desire to be left alone.",
                        "<25>{#p/toriel}{#f/1}* He tried to act like nothing was wrong...",
                        "<25>{#p/toriel}{#f/5}* But I knew he was probably upset."
                     ]);
                  }
                  b([
                     "<25>{#p/toriel}{#f/9}* ... I felt guilty, but with all this pressure bearing down on me...",
                     "<25>{#p/toriel}{#f/5}* I did not see myself having the energy to discuss such a topic.",
                     "<25>{#p/toriel}{#f/5}* ...",
                     "<25>{#p/toriel}{#f/1}* Still.\n* I have not given up on our future.",
                     "<25>{#p/toriel}{#f/1}* No matter what happens to me, or my own well-being...",
                     "<25>{#p/toriel}{#f/0}* At least monsterkind will go free one day.",
                     "<25>{#p/toriel}{#f/1}* That is what matters now, is it not?",
                     "<25>{#p/toriel}{#f/1}* ...",
                     "<25>{#p/toriel}{#f/5}* ...",
                     "<25>{#p/toriel}{#f/9}* ... I suppose... it would be a good time to end the call now.",
                     "<25>{#p/toriel}{#f/9}* There is not much else for me to say.",
                     "<25>{#p/toriel}{#f/5}* ...",
                     "<25>{#p/toriel}{#f/5}* Goodbye, little one."
                  ]);
               }
            } else if (royals === 5 && !doggoDead && !lesserdogDead && !dogsDead && !greatdogDead && !dogeDead) {
               k = "light_dog";
               m = music.dogsong;
               
               a([
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!",
                  "<32>{#p/basic}* (Much to say since your departure!)\n* (Much to be excited for!)",
                  "<32>{#s/bark}{#p/event}* Bark!",
                  "<32>{#p/basic}* (Wouldn't you like to know more!?)"
               ]);
               b([
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!\n* Bark!",
                  "<32>{#p/basic}* (When you left, the king was nowhere to be found!)",
                  "<32>{#p/basic}* (Everyone, confused!)\n* (Alphys, unable to take his place!)",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!\n* Bark!",
                  "<32>{#p/basic}* (But she spoke to all of royal guard.)\n* (Guard came to an agreement!)",
                  "<32>{#p/basic}* (Doge returned to duty, only this time as queen of the outpost.)",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!\n* Bark!",
                  "<32>{#p/basic}* (It was fun to reunite with all the other dogs.)",
                  "<32>{#p/basic}* (My time as a guard is long gone, but still, I felt so proud of them!)",
                  "<32>{#p/basic}* (Of course, I taught them all they know.)",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!",
                  "<32>{#p/basic}* (In the end, they formed the council of dogs to make all decisions.)",
                  "<32>{#p/basic}* (Everyone gets belly rubs and treats for their hard work!)",
                  "<32>{#p/basic}* Huh?\n* Who's there?\n* Did I see someone MOVE!?",
                  "<32>{#s/bark}{#p/event}* Bark!",
                  "<32>{#p/basic}* Oh, it's just you.",
                  "<32>{#p/basic}* ...",
                  "<32>{#p/basic}* Wait, who are you talking to!?",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!",
                  "<32>{#p/basic}* (I think Doggo wants to talk to you.)\n* (Good luck!)",
                  "<32>{#p/basic}* Give me that thing!",
                  "<32>{#p/basic}* ...\n* So it's you, huh?"
               ]);
               if (
                  SAVE.data.n.state_starton_doggo === 0 &&
                  SAVE.data.n.state_starton_lesserdog === 0 &&
                  SAVE.data.n.state_starton_dogs === 0 &&
                  SAVE.data.n.state_starton_greatdog === 0
               ) {
                  if (SAVE.data.n.state_foundry_doge === 2) {
                     b([
                        "<32>{#p/basic}* You're the one who thought it'd be funny to pet us all!",
                        "<32>{#p/basic}* Not that... I'm complaining.",
                        "<32>{#p/basic}* But... argh!\n* I couldn't even see you!",
                        "<32>{#p/basic}* That was so unfair."
                     ]);
                  } else {
                     b([
                        "<32>{#p/basic}* You're the one who thought it'd be funny to pet us all!",
                        "<32>{#p/basic}* Except for Doge.\n* She's really hard to pet.",
                        "<32>{#p/basic}* But... argh!\n* I couldn't even see you!",
                        "<32>{#p/basic}* I wonder what her secret is..."
                     ]);
                  }
               } else if (
                  SAVE.data.n.state_starton_doggo === 1 &&
                  SAVE.data.n.state_starton_lesserdog === 1 &&
                  SAVE.data.n.state_starton_dogs === 1 &&
                  SAVE.data.n.state_starton_greatdog === 1
               ) {
                  b([
                     "<32>{#p/basic}* You're the one who thought you could get past us by throwing a wrench around.",
                     "<32>{#p/basic}* I mean, OK, it worked.",
                     "<32>{#p/basic}* But it was really annoying when I found out!",
                     "<32>{#p/basic}* Maybe...",
                     "<32>{#p/basic}* ... we can play again sometime?",
                     "<32>{#p/basic}* No, no, forget I said that.\n* I shouldn't indulge in my fantasies this much."
                  ]);
               } else if (
                  SAVE.data.n.state_starton_doggo === 3 &&
                  SAVE.data.n.state_starton_lesserdog === 3 &&
                  SAVE.data.n.state_starton_dogs === 3
               ) {
                  if (SAVE.data.n.state_starton_greatdog === 3) {
                     b([
                        "<32>{#p/basic}* You're the one who tried to beat us all up!",
                        "<32>{#p/basic}* You even managed to disappoint Canis Major...",
                        "<32>{#p/basic}* What's wrong with you!?\n* You're awful!",
                        "<32>{#p/basic}* ... that's what the others would say."
                     ]);
                  } else {
                     b([
                        "<32>{#p/basic}* You're the one who tried to beat us all up!",
                        "<32>{#p/basic}* At least you made Canis Major happy.",
                        "<32>{#p/basic}* So, maybe you're not all bad?",
                        "<32>{#p/basic}* ... to be honest, I didn't mind it..."
                     ]);
                  }
               } else if (SAVE.data.n.state_starton_doggo === 0) {
                  b([
                     "<32>{#p/basic}* You're the one who pet me when I couldn't even see you!",
                     "<32>{#p/basic}* I bet you thought that was really funny.",
                     "<32>{#p/basic}* I bet I looked really cute.",
                     "<32>{#p/basic}* ... no, wait, I didn't mean that!"
                  ]);
               } else if (SAVE.data.n.state_starton_doggo === 1) {
                  b([
                     "<32>{#p/basic}* You're the one who played fetch with me, right?",
                     "<32>{#p/basic}* Wow!\n* I'd love to do that again sometime.",
                     "<32>{#p/basic}* But... that's just a fantasy."
                  ]);
               } else {
                  b([
                     "<32>{#p/basic}* You're the one who tried to beat me up!",
                     "<32>{#p/basic}* That was really rude.\n* And mean.",
                     "<32>{#p/basic}* I definitely didn't like that.",
                     "<32>{#p/basic}* ..."
                  ]);
               }
               b([
                  "<32>{#p/basic}* Anyway!\n* Did you hear about the humans we released!?",
                  "<32>{#p/basic}* They were all asleep in some weird archive thing.\n* It's way above my paw grade.",
                  "<32>{#p/basic}* All I know is, I get to take care of a human!",
                  "<32>{#p/basic}* It was Canis Maximus's idea.\n* We all get one human each.",
                  "<32>{#p/basic}* They're like pets???",
                  "<32>{#p/basic}* Don't worry, we don't mistreat them.\n* They're under our protection!",
                  "<32>{#p/basic}* Which is weird... since we were like, trying to hunt them down before or something."
               ]);
               if (kills > 9) {
                  b([
                     "<32>{#p/basic}* Still, they kind of have to be.",
                     "<32>{#p/basic}* People really seem to dislike humans these days.\n* More than EVER."
                  ]);
               } else {
                  b([ "<32>{#p/basic}* But times change.\n* And so must we!" ]);
               }
               b([
                  "<32>{#p/basic}* Hey, WAIT!!\n* My human is coming this way RIGHT NOW!!",
                  "<32>{#p/human}{#v/3}{@fill:#003cff}* Master Doggo!\n* Master Doggo!\n* You have to come and see!",
                  "<32>{#p/basic}* What is it now.",
                  "<32>{#p/human}{#v/3}{@fill:#003cff}* You're going to miss the grand opening!",
                  "<32>{#p/basic}* Guess I better go see what this is...",
                  "<32>{#p/basic}* ...",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!\n* Bark!",
                  "<32>{#p/basic}* I get it, OK!?\n* Heck, I'm almost there!",
                  "<32>{#p/basic}* ...",
                  "<32>{#p/basic}* What the...\n* WHAT IS THAT THING!?",
                  "<32>{#p/basic}* THAT WASN'T PART OF THE CITY'S SKYLINE BEFORE!!",
                  "<32>{#p/human}{#v/3}{@fill:#003cff}* It's your brand new dog shrine!\n* Just like you wanted!",
                  "<32>{#p/basic}* It's... in constant motion...",
                  "<32>{#p/basic}* WELL THIS IS SOMETHING!",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!\n* Bark!"
               ]);
               if (fearsome) {
                  b([
                     "<32>{#p/basic}* (Shrines, good for peace!)\n* (Help relieve fears of being attacked by humans!)",
                     "<32>{#p/basic}* (A reminder of the stability our new regime offers you, dog or otherwise!)"
                  ]);
               } else {
                  b([
                     "<32>{#p/basic}* (Shrines, good for peace!)\n* (Encourage good behavior in all citizens!)",
                     "<32>{#p/basic}* (A reminder of the blessings you may recieve for being good, dog or otherwise!)"
                  ]);
               }
               b([
                  "<32>{#p/basic}* Yes, yes, I know.\n* It looks great... looks just like me.",
                  "<32>{#p/basic}* ... thanks.",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!",
                  "<32>{#p/basic}* (And that's the last one!)\n* (All council dogs have shrines now!)",
                  "<32>{#p/basic}* PERFECT!!\n* Can I go back to my phone call now?",
                  "<32>{#s/bark}{#p/event}* Bark!",
                  "<32>{#p/human}{#v/3}{@fill:#003cff}* I'll have to show the others!",
                  "<32>{#p/basic}* HEY!\n* Before you go...",
                  "<32>{#p/basic}* I wouldn't have seen it on time without you.\n* Have a treat.",
                  "<32>{#p/human}{#v/3}{@fill:#003cff}* Master Doggo...!",
                  "<32>{#p/basic}* Go on, tell your friends.\n* BUT DON'T SHARE!",
                  "<32>{#p/basic}* ...",
                  "<32>{#p/basic}* So, around here, everyone understands how things work.",
                  "<32>{#p/basic}* You visit the shrine, do a good job at work, and be good at home, too.",
                  "<32>{#p/basic}* And maybe, if you're really really good, you'll get rewarded!",
                  "<32>{#p/basic}* It's perfect.\n* Nobody breaks the rules.",
                  "<32>{#p/basic}* Except those pesky shopkeepers at the rec center.",
                  "<32>{#p/basic}* THEY'RE JUST LAZY AND DISORGANIZED!",
                  "<32>{#p/basic}* But they sell cool junk, so we give them a pass.",
                  "<32>{#p/basic}* Hold on.\n* Are we giving anyone else a pass??",
                  "<32>{#p/basic}* WHAT HAS OUR SOCIETY COME TO!",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!\n* Bark!"
               ]);
               if (!muffetDead) {
                  b([
                     "<32>{#p/basic}* (Doggo, new job for you!)\n* (Spider queen, stirring up trouble again.)",
                     "<32>{#p/basic}* (A punishment is required!)",
                     "<32>{#p/basic}* ... ugh.\n* I don't like disciplining people.",
                     "<32>{#s/bark}{#p/event}* Bark!",
                     "<32>{#p/basic}* (Without discipline, dog society falls out of balance.)",
                     "<32>{#p/basic}* I guess.\n* But can't someone else do it?",
                     "<32>{#s/bark}{#p/event}* Bark!\n* Bark!",
                     "<32>{#p/basic}* (All council dogs must practice discipline.)\n* (It's your turn!)"
                  ]);
               } else if (!papyrusDead) {
                  b([
                     "<32>{#p/basic}* (Doggo, new job for you!)\n* (Tall skeleton, deserving of bonus rewards.)",
                     "<32>{#p/basic}* (Please offer them!)",
                     "<32>{#p/basic}* ... ugh.\n* I swear we give him bonus rewards every day.",
                     "<32>{#s/bark}{#p/event}* Bark!",
                     "<32>{#p/basic}* (Tall skeleton sets a very good example!)",
                     "<32>{#p/basic}* At this rate, he'll be on the dog council himself.",
                     "<32>{#s/bark}{#p/event}* Bark!\n* Bark!",
                     "<32>{#p/basic}* (We are considering the possibility.)\n* (Now do your duty!)"
                  ]);
               } else {
                  b([
                     "<32>{#p/basic}* (Doggo, new job for you!)\n* (Our supply of dog chow is running low.)",
                     "<32>{#p/basic}* (Can you help refill?)",
                     "<32>{#p/basic}* ... ugh.\n* Why do I get all the dirty work around here.",
                     "<32>{#s/bark}{#p/event}* Bark!",
                     "<32>{#p/basic}* (Doggo, only dog who doesn't mind dirty work.)",
                     "<32>{#p/basic}* Lies.\n* Doge likes doing dirty jobs way more than me.",
                     "<32>{#s/bark}{#p/event}* Bark!\n* Bark!",
                     "<32>{#p/basic}* (Doge cannot do this job.)\n* (Doge is queen.)"
                  ]);
               }
               b([
                  "<32>{#p/basic}* OK.\n* Fine.",
                  "<32>{#p/basic}* Well, I guess I'll have to end the message here.",
                  "<32>{#p/basic}* Have fun out there, wherever you are.",
                  "<32>{#p/basic}* ... I'd give the phone back to Canis Maximus, but the message would never end.",
                  "<32>{#p/basic}* HOW CAN YOU TALK FOR SO LONG WITHOUT GETTING TIRED!?",
                  "<32>{#s/bark}{#p/event}* Bark!\n* Bark!\n* Bark!",
                  "<32>{#p/basic}* OK already!\n* Quit rushing me!!"
               ]);
            } else if (!muffetDead) {
               k = "light_muffet";
               m = music.spiderboss;
               
               a([
                  "<32>{#p/basic}{#s/spiderLaugh}* Oh, hello, dearie~",
                  "<32>{#p/basic}* Are you doing well?",
                  "<32>{#p/basic}* Oh, who am I kidding~\n* It's not like I cared about you anyway~",
                  "<32>{#p/basic}* I just wanted to let you know about all the fun you're missing out on!"
               ]);
               b([
                  "<32>{#p/basic}{#s/spiderLaugh}* So, after you departed from the outpost...",
                  "<32>{#p/basic}* By line of succession, Alphys was put in charge as queen~",
                  "<32>{#p/basic}* But you see, dearie, she didn't think she could do it!"
               ]);
               if (royals < 2) {
                  b([
                     "<32>{#p/basic}* It's so unfortunate there was nobody left to take charge, don't you think?",
                     "<32>{#p/basic}* Lucky for her, I was more than willing to appoint myself~",
                     "<32>{#p/basic}* Ahuhuhu~\n* She rejected me at first, but after a little \"persuasion...\"",
                     "<32>{#p/basic}* She was quite eager to hand the outpost over to me!"
                  ]);
               } else {
                  b([
                     "<32>{#p/basic}* She held a meeting with the royal guards to hire someone else, but...",
                     "<32>{#p/basic}* Without their captain, they'd fallen into disorder!\n* They needed direction~",
                     "<32>{#p/basic}* Ahuhuhu~\n* Thankfully, I was more than willing to give it to them!",
                     "<32>{#p/basic}* And from there, the outpost was all but mine."
                  ]);
               }
               if (fearsome) {
                  if (kills > 9) {
                     b([
                        "<33>{#p/basic}* With your killing and bullying, the people were made so afraid and obedient~"
                     ]);
                  } else {
                     b([ "<32>{#p/basic}* With your bullying, the people were made so afraid and obedient~" ]);
                  }
                  b([
                     "<32>{#p/basic}* Like they were just begging for a strong, assertive leader to take her rightful place!",
                     "<32>{#p/basic}* It's incredible just how quickly they all came around.",
                     "<32>{#p/basic}* For that, dearie, I have you to thank~",
                     "<25>{#p/alphys}{#f/21}* Oh, come ON.\n* You think you can just blame it all on THEM?"
                  ]);
               } else {
                  b([
                     "<32>{#p/basic}* Oh, dearie...\n* It's a shame you're not here to see this~",
                     "<32>{#p/basic}* Not only do the people do whatever I want, whenever I want...",
                     "<32>{#p/basic}* But some of them even do it willingly!",
                     "<32>{#p/basic}* Most of them still whine and complain like babies, though.",
                     "<25>{#p/alphys}{#f/21}* Well GEE, I wonder why THAT might be."
                  ]);
               }
               b([
                  "<32>{#p/basic}{#s/spiderLaugh}* Oh, Alphys-dear~\n* Didn't I tell you to clean out the fluid network today?",
                  "<32>{#p/basic}* It's gotten so dirty after all these years...",
                  "<32>{#p/basic}* If you don't clean it, then who will?"
               ]);
               if (royals < 2) {
                  b([
                     "<25>{#p/alphys}{#f/22}* I DON'T KNOW, MAYBE SOMEONE WHO'S ACTUALLY QUALIFIED!?",
                     "<32>{#p/basic}{#s/spiderLaugh}* Oh, you ARE such a pest, aren't you~",
                     "<32>{#p/basic}* But... ahuhuhu~\n* You know what happens to pests, don't you?",
                     "<25>{#p/alphys}{#f/2}* ... n-no, please, I...",
                     "<25>{#p/alphys}{#f/3}* I-I'll do it!\n* You just watch me, I'll do it right now!",
                     "<32>{#p/basic}{#s/spiderLaugh}* Too late, Alphys-dear~",
                     "<32>{#p/basic}* Spiders, take her away!",
                     "<32>{#p/basic}* It would seem she needs another stay in the Aurora Zone~",
                     "<25>{#p/alphys}{#f/22}* No, please!!\n* I'll do anything!!",
                     "<32>{#p/basic}{#s/spiderLaugh}* See you on the other side~"
                  ]);
               } else {
                  b([
                     "<26>{#p/alphys}{#f/24}* Maybe you'd like to try.",
                     "<32>{#p/basic}{#s/spiderLaugh}* Oh, but you know that'll never happen~",
                     "<32>{#p/basic}* And... ahuhuhu~\n* Talk like that is what gets you in trouble, I'm afraid~",
                     "<25>{#p/alphys}{#f/27}* Oh, does it now?",
                     "<25>{#p/alphys}{#f/28}* Eheh...\n* Maybe you'll be the one who's in trouble soon.",
                     "<32>{#p/basic}{#s/spiderLaugh}* Enough talk, Alphys-dear~\n* I know exactly what kind of punishment you deserve!",
                     "<32>{#p/basic}* Spiders, take her away!",
                     "<32>{#p/basic}* It would seem she needs another stay in the Aurora Zone~",
                     "<25>{#p/alphys}{#f/29}* Enjoy your last moments in power.",
                     "<32>{#p/basic}{#s/spiderLaugh}* Like I'd fall for that~"
                  ]);
               }
               b([
                  "<32>{#p/basic}* ...",
                  "<32>{#p/basic}* Ahuhuhu~\n* Poor Alphys-dear, always getting into trouble~",
                  "<32>{#p/basic}* It's a good thing we have the Aurora Zone to straighten out her behavior!",
                  "<32>{#p/basic}* With the power of the archive, we can send a monster into a virtual world~",
                  "<32>{#p/basic}* Best of all, we control how time passes there~",
                  "<32>{#p/basic}* Days, months, years...",
                  "<32>{#p/basic}* All going by in the blink of an eye!",
                  "<32>{#p/basic}* We spiders LOVE to make them suffer for a long time when they misbehave!",
                  "<32>{#p/mettaton}* YOU DONE BOASTING ABOUT YOUR ACCOMPLISHMENTS YET?",
                  "<32>{#p/mettaton}* I'M HERE, JUST AS REQUESTED.",
                  "<32>{#p/basic}{#s/spiderLaugh}* Ahuhuhu~\n* Just the robot I've been wanting to see!",
                  "<32>{#p/basic}* So would you say audiences are enjoying the new TV lineup?",
                  "<32>{#p/mettaton}* THE RATINGS ARE TERRIBLE.\n* NOBODY LIKES IT.",
                  "<32>{#p/basic}{#s/spiderLaugh}* Oh, wonderful!\n* Like music to my ears~",
                  "<32>{#p/mettaton}* YOU KNOW..."
               ]);
               if (moniker) {
                  b([ "<32>{#p/mettaton}* PEOPLE WANT VILLAINS, AND SOMEBODY TO ROOT AGAINST." ]);
               } else {
                  b([ "<32>{#p/mettaton}* PEOPLE WANT VARIETY, AND FAMOUS GUEST ROLES." ]);
               }
               b([
                  "<32>{#p/mettaton}* NOT THE UTTER GARBAGE -YOU'RE- PUSHING ON EVERYONE.",
                  "<32>{#p/basic}{#s/spiderLaugh}* The point isn't to give people what they want...",
                  "<32>{#p/basic}* It's to dull their minds until they can't refuse me anymore~",
                  "<32>{#p/mettaton}* ... UGH, CAN I GO NOW?"
               ]);
               if (papyrusDead) {
                  b([
                     "<32>{#p/mettaton}* I'M EXHAUSTED ENOUGH AS IT IS.",
                     "<32>{#p/basic}{#s/spiderLaugh}* Sure thing, darling-dear~",
                     "<32>{#p/basic}* Just remember why you're doing this for me~"
                  ]);
               } else {
                  b([
                     "<32>{#p/mettaton}* PAPYRUS IS STILL OUT THERE WAITING FOR ME.",
                     "<32>{#p/basic}{#s/spiderLaugh}* Is he now?",
                     "<33>{#p/mettaton}* WE'RE TRYING OUT A NEW TV SHOW.\n* A SPIDER BAKERY SHOW.",
                     "<32>{#p/basic}{#s/spiderLaugh}* A bakery show, you say~",
                     "<32>{#p/basic}* Hmm...",
                     "<32>{#p/basic}* Well, as long as the audiences can't stand it!"
                  ]);
               }
               if (royals < 2) {
                  b([
                     "<32>{#p/mettaton}* ...",
                     "<32>{#p/mettaton}* GOODBYE.",
                     "<32>{#p/basic}{#s/spiderLaugh}* ... as you can see, I have complete control of the entertainment here, too!",
                     "<32>{#p/basic}* Isn't it just blissful?",
                     "<32>{#p/basic}* Ahuhuhu~\n* I so badly want to see how you'd fare here~",
                     "<32>{#p/basic}* The other humans have been doing splendidly!",
                     "<32>{#p/basic}* In fact, despite them being traumatized when they first left the archive...",
                     "<32>{#p/basic}* They've become my most loyal servants!",
                     "<32>{#p/basic}* Oh, dearie...\n* You must be so lonely without a direction in life~",
                     "<32>{#p/basic}* If it ever becomes too much, you're always welcome here with us!",
                     "<32>{#p/basic}* But for now~\n* I'll be seeing you~",
                     "<32>{#p/basic}* On the other side~"
                  ]);
               } else {
                  b([
                     "<32>{#p/mettaton}* ...",
                     "<32>{#p/mettaton}* NOW, ALPHYS!\n* NOW'S YOUR CHANCE!",
                     "<32>{#p/basic}* Ahuhuhu~\n* What are you- hngh!",
                     "<25>{#p/alphys}{#f/28}* Well, well...\n* Look who we have here.",
                     "<32>{#p/basic}{#s/spiderLaugh}* No, let me go...!",
                     "<32>{#p/basic}* You royal guards... y-you're all the same!",
                     "<32>{#p/basic}* You need a strong leader who can tell you what's right and what's wrong!",
                     "<25>{#p/alphys}{#f/29}* It's no use.\n* They've chosen ME as their leader now.",
                     "<32>{#p/basic}{#s/spiderLaugh}* But... how?",
                     "<32>{#p/basic}* I had you in custody, the spiders had you under escort~",
                     "<32>{#p/basic}* And you...\n* You're supposed to be weak!",
                     "<32>{#p/basic}* You couldn't hope to command the royal guard~",
                     "<25>{#p/alphys}{#f/17}* Y'know, I've learned a lot since you took over the outpost.",
                     "<25>{#p/alphys}{#f/5}* Everything you've done to make all our lives miserable...",
                     "<25>{#p/alphys}{#f/16}* Surviving it only made me more determined to stop you!",
                     "<25>{#p/alphys}{#f/7}* God, I've always wanted to say that...",
                     "<32>{#p/basic}{#s/spiderLaugh}* No... no!\n* You can't do this to me!",
                     "<25>{#p/alphys}{#f/27}* Guards...?",
                     "<32>{#p/basic}{#s/spiderLaugh}* No~\n* Please!",
                     "<25>{#p/alphys}{#f/29}* Let's see how SHE likes the Aurora Zone.",
                     "<25>{#p/alphys}{#f/27}* ...",
                     "<25>{#p/alphys}{#f/27}* Huh... what's this?",
                     "<25>{#p/alphys}{#f/27}* Was she... talking to someone on this thing?",
                     "<25>{#p/alphys}{#f/17}* Weird."
                  ]);
               }
            } else if (!papyrusDead) {
               k = "light_papyrus";
               m = music.papyrus;
               
               a([
                  "<18>{#p/papyrus}{#f/4}IS THIS THING EVEN WORKING?",
                  "<18>{#p/papyrus}{#f/0}OH! OH!\nIT JUST WENT TO VOICE-MAIL!",
                  "<18>{#p/papyrus}{#f/6}NO WONDER I WAS SO CONFUSED!",
                  "<18>{#p/papyrus}{#f/5}WELL HELLO, HUMAN!\nI HAVE... A LOT TO TALK ABOUT."
               ]);
               b([
                  "<18>{#p/papyrus}{#f/4}SO... I KIND OF BECAME THE KING.",
                  "<18>{#p/papyrus}{#f/6}WAIT!!\nDON'T CLICK OFF!!",
                  "<18>{#p/papyrus}{#f/5}IT'S NOT AS CRAZY AS IT SOUNDS...",
                  "<18>{#p/papyrus}{#f/0}UH, I'LL JUST START FROM THE BEGINNING.",
                  "<18>{#p/papyrus}{#f/5}SO, AFTER YOU LEFT...",
                  "<18>{#p/papyrus}{#f/5}THE OUTPOST'S LEADERSHIP KIND OF FELL APART.",
                  "<18>{#p/papyrus}{#f/6}ALPHYS, WHO WAS MEANT TO TAKE ASGORE'S PLACE...",
                  "<18>{#p/papyrus}{#f/5}DIDN'T REALLY WANT TO BE THE QUEEN.",
                  "<18>{#p/papyrus}{#f/5}AND SINCE UNDYNE STILL HASN'T RE-APPEARED...",
                  "<18>{#p/papyrus}{#f/4}ALPHYS HAD TO HOLD A MEETING TO FIND A NEW LEADER."
               ]);
               if (royals < 2) {
                  b([
                     "<18>{#p/papyrus}{#f/4}UNFORTUNATELY, THE ROYAL GUARD WAS ALL BUT GONE.",
                     "<18>{#p/papyrus}{#f/5}SO... THAT MEETING NEVER HAPPENED."
                  ]);
               } else {
                  b([
                     "<18>{#p/papyrus}{#f/4}THE ROYAL GUARD ARGUED, AND ARGUED SOME MORE...",
                     "<18>{#p/papyrus}{#f/5}BUT NOBODY AGREED ON WHO'D BE THE BEST FIT."
                  ]);
               }
               b([
                  "<18>{#p/papyrus}{#f/6}AFTER THAT, ALPHYS JUST SORT OF... LEFT.",
                  "<18>{#p/papyrus}{#f/6}LEFT US WITH NOBODY IN CHARGE, THAT IS.",
                  "<18>{#p/papyrus}{#f/5}AND FOR A WHILE...",
                  "<18>{#p/papyrus}{#f/6}THINGS WERE... SURPRISINGLY CALM!",
                  "<18>{#p/papyrus}{#f/0}BUT I KNEW THAT WOULDN'T LAST.",
                  "<18>{#p/papyrus}{#f/4}SO, EVENTUALLY...",
                  "<18>{#p/papyrus}{#f/9}I TOOK MATTERS INTO MY OWN HANDS!",
                  "<18>{#p/papyrus}{#f/5}YOU CAN GUESS HOW I BECAME THE KING FROM THERE.",
                  "<18>{#p/papyrus}{#f/0}BUT HEY!\nTHINGS HAVE BEEN GOING WELL!",
                  "<18>{#p/papyrus}{#f/0}I'VE ENSTATED A FEW POLICIES TO HELP MAKE FRIENDS.",
                  "<18>{#p/papyrus}{#f/4}NOT JUST -MY- FRIENDS...",
                  "<18>{#p/papyrus}{#f/0}BUT EVERYONE ELSE'S FRIENDS, TOO!",
                  "<18>{#p/papyrus}{#f/9}AS A RESULT, OUTPOST MORALE IS ON THE RISE!",
                  "<19>{#p/papyrus}{#f/4}AND ONCE OUR FRIENDSHIP POWER REACHES CRITICAL...",
                  "<18>{#p/papyrus}{#f/9}I'LL EVEN BE ABLE TO RELEASE THE HUMANS!",
                  "<18>{#p/papyrus}{#f/0}HOPEFULLY WITH ONLY MINIMAL RIOTING.",
                  "<25>{#p/sans}{#f/0}* heh.\n* that'll be nice.",
                  "<25>{#p/sans}{#f/3}* people have been clinging to their anger for too long.",
                  "<18>{#p/papyrus}{#f/0}OH, HELLO SANS!\nI'M HAPPY TO SEE YOU UP AND ABOUT.",
                  "<25>{#p/sans}{#f/0}* actually, i just got off from work.",
                  "<25>{#p/sans}{#f/3}* it's a holiday today.",
                  "<18>{#p/papyrus}{#f/4}A HOLIDAY, EH?",
                  "<18>{#p/papyrus}{#f/5}(SIGH...)",
                  "<18>{#p/papyrus}{#f/5}EVER SINCE YOU STARTED WORKING AT GRILLBY'S...",
                  "<18>{#p/papyrus}{#f/4}THEY'VE BEEN GIVING YOU MORE OF THOSE THINGS.",
                  "<25>{#p/sans}{#f/3}* nah, don't worry.\n* you'll like this one...",
                  "<25>{#p/sans}{#f/2}* it's the new semi- annual \"get-along day.\"",
                  "<18>{#p/papyrus}{#f/1}OH!!! RIGHT!!!\nI TOTALLY FORGOT I ENSTATED THAT!!!",
                  "<18>{#p/papyrus}{#f/0}THE DAY WHERE ALL YOUR ENEMIES TURN TO FRIENDS.",
                  "<18>{#p/papyrus}{#f/4}SO DID YOU MAKE ANY \"FRENEMIES\" TODAY???",
                  "<25>{#p/sans}{#f/0}* hmm...",
                  "<25>{#p/sans}{#f/3}* that'd require having enemies to begin with.",
                  "<18>{#p/papyrus}{#f/5}WELL... UH...",
                  "<18>{#p/papyrus}{#f/6}YOU CAN JUST BETTER AN EXISTING FRIENDSHIP THEN!",
                  "<25>{#p/sans}{#f/2}* well, all my friendships are already pretty good.",
                  "<25>{#p/sans}{#f/3}* ... guess this just isn't my holiday.",
                  "<18>{#p/papyrus}{#f/0}OH.\nTHAT'S OKAY.",
                  "<18>{#p/papyrus}{#f/9}\"NEW PALS DAY\" IS RIGHT AROUND THE CORNER!",
                  "<25>{#p/sans}{#f/0}* lemme guess... the day where you make even MORE friends?",
                  "<18>{#p/papyrus}{#f/0}NYEH HEH HEH!\nOF COURSE!",
                  "<25>{#p/sans}{#f/0}* i look forward to it, then.",
                  "<25>{#p/sans}{#f/3}* ...",
                  "<25>{#p/sans}{#f/3}* y'know, buddo... when you first left the outpost...",
                  "<25>{#p/sans}{#f/0}* things weren't as rosy as they are now.",
                  "<25>{#p/sans}{#f/3}* people blamed eachother for letting it all happen...",
                  "<25>{#p/sans}{#f/3}* for what you did to them...",
                  "<25>{#p/sans}{#f/0}* but, over time, my brother really turned things around."
               ]);
               if (royals < 2) {
                  b([
                     "<25>{#p/sans}{#f/3}* heck, despite the fall of the royal guard...",
                     "<25>{#p/sans}{#f/0}* he still made the best of it.",
                     "<18>{#p/papyrus}{#f/0}YEAH!! I'M REALLY HAPPY WITH HOW I'VE DONE.",
                     "<18>{#p/papyrus}{#f/9}THE OUTPOST HAS NEVER BEEN BETTER!"
                  ]);
               } else {
                  b([
                     "<25>{#p/sans}{#f/2}* heck, even the royal guard improved.",
                     "<18>{#p/papyrus}{#f/0}YEAH!! INSTEAD OF GUARDING AGAINST HUMANS...",
                     "<18>{#p/papyrus}{#f/9}THEY PROTECT US MONSTERS FROM SPITE AND VITRIOL!"
                  ]);
               }
               b([
                  "<18>{#p/papyrus}{#f/5}...",
                  "<18>{#p/papyrus}{#f/5}WHATEVER YOU MAY HAVE DONE, HUMAN...",
                  "<18>{#p/papyrus}{#f/0}JUST KNOW THAT THINGS TURNED OUT OKAY.",
                  "<18>{#p/papyrus}{#f/6}AND THAT I FORGIVE YOU!!!"
               ]);
               if (papreal) {
                  b([ "<18>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE GOT OFF TO A ROUGH START..." ]);
               } else if (dateLevel < 1) {
                  if (SAVE.data.b.flirt_papyrus) {
                     b([ "<18>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HAD THAT DATE..." ]);
                  } else {
                     b([ "<18>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HUNG OUT..." ]);
                  }
               } else {
                  b([ "<18>{#p/papyrus}{#f/5}BECAUSE, EVEN IF WE NEVER HUNG OUT AT UNDYNE'S..." ]);
               }
               b([
                  "<18>{#p/papyrus}{#f/0}I'D STILL BE HAPPY TO CALL YOU MY FRIEND.",
                  "<25>{#p/sans}{#f/2}* aw, that's sweet.",
                  "<25>{#p/sans}{#f/3}* it's too bad we won't get to hear their reaction.",
                  "<18>{#p/papyrus}{#f/5}YEAH, BUT IT'S STILL WORTH SAYING.",
                  "<18>{#p/papyrus}{#f/4}...\nWHATEVER YOU'RE DOING OUT THERE...",
                  "<18>{#p/papyrus}{#f/5}DON'T FRET, OKAY?",
                  "<18>{#p/papyrus}{#f/6}B-BECAUSE...",
                  "<18>{#p/papyrus}{#f/8}EVERYTHING'S GONNA BE OKAY!!!",
                  "<25>{#p/sans}{#f/0}* heh.",
                  "<25>{#p/sans}{#f/0}* take care of yourself out there.",
                  "<25>{#p/sans}{#f/2}* 'cause at least one person's rootin' for ya."
               ]);
            } else {
               k = "light_sans";
               m = music.muscle;
               
               a([ "<25>{#p/sans}{#f/0}* heya.", "<25>{#p/sans}{#f/3}* it's been a while, huh?" ]);
               b([
                  "<25>{#p/sans}{#f/0}* after you left, the king vanished into thin air.",
                  "<25>{#p/sans}{#f/3}* why?\n* nobody knows.",
                  "<25>{#p/sans}{#f/2}* ... maybe he just went on vacation.",
                  "<25>{#p/sans}{#f/0}* anyway, alphys was supposed to replace him.",
                  "<25>{#p/sans}{#f/3}* but she didn't consider herself to be cut out for the job."
               ]);
               if (royals < 2) {
                  b([
                     "<25>{#p/sans}{#f/0}* she thought about putting a royal guard in her place...",
                     "<25>{#p/sans}{#f/0}* but those guys all but vanished, too.",
                     "<25>{#p/sans}{#f/3}* why?\n* hard to say.",
                     "<25>{#p/sans}{#f/2}* ... maybe they just got bored of their jobs."
                  ]);
               } else {
                  b([
                     "<25>{#p/sans}{#f/0}* she thought about putting a royal guard in her place...",
                     "<25>{#p/sans}{#f/0}* but with their captain gone, they couldn't make up their minds.",
                     "<25>{#p/sans}{#f/3}* why?\n* hard to say.",
                     "<25>{#p/sans}{#f/2}* ... maybe undyne just couldn't be bothered anymore."
                  ]);
               }
               b([
                  "<25>{#p/sans}{#f/0}* after that, alphys fled the citadel and left us without a leader.",
                  "<25>{#p/sans}{#f/3}* you'd think the former queen might return, or...",
                  "<25>{#p/sans}{#f/3}* maybe someone overzealous would take the throne instead.",
                  "<25>{#p/sans}{#f/0}* and yet, neither of those things happened.",
                  "<25>{#p/sans}{#f/3}* why?\n* you tell me.",
                  "<25>{#p/sans}{#f/2}* ... maybe all the potential leaders out there just gave up.",
                  "<25>{#p/sans}{#f/0}* regardless, i realized it'd be up to me to do something.",
                  "<25>{#p/sans}{#f/0}* so i took over for asgore and alphys myself.",
                  "<25>{#p/sans}{#f/3}* it hasn't been easy, what with all the leadership troubles...",
                  "<25>{#p/sans}{#f/3}* not to mention keeping the humans' existence a secret.",
                  "<25>{#p/sans}{#f/0}* but after i implemented my pro-slacker policy...",
                  "<25>{#p/sans}{#f/2}* people seemed to relax quite a bit."
               ]);
               if (fearsome) {
                  b([ "<25>{#p/sans}{#f/3}* a far cry from how scared they were of being beat up before." ]);
               } else {
                  b([ "<26>{#p/sans}{#f/3}* a far cry from how distraught they were about asgore and undyne." ]);
               }
               b([
                  "<25>{#p/sans}{#f/0}* all in all, things are going pretty well.",
                  "<25>{#p/sans}{#f/0}* the humans are safe and sound, the citizens still have hope...",
                  "<25>{#p/sans}{#f/3}* so what's the catch?",
                  "<25>{#p/sans}{#f/0}* why does it all feel so... hopeless?",
                  "<25>{#p/sans}{#f/3}* well, to be honest, it's anyone's guess.",
                  "<25>{#p/sans}{#f/3}* ...",
                  "<25>{*}{#x0}{#p/darksans}{#f/1}{#i/5}* ... maybe you're just a dirty brother killer."
               ]);
            }
         } else {
            k = "light_generic";
            
            a([
               "<25>{#p/alphys}{#f/4}* H-hiya...",
               "<25>{#p/alphys}{#f/20}* Is anyone there?",
               "<25>{#p/alphys}{#f/11}* ... I hope it's not too much trouble...",
               "<25>{#p/alphys}{#f/8}* I just... w-wanted to let you know how things are going out here."
            ]);
            b([
               "<25>{#p/alphys}{#f/20}* So... after you left, the king sort of... d-disappeared.",
               "<25>{#p/alphys}{#f/14}* When I broke the news, it... hurt the people's morale pretty badly.",
               "<25>{#p/alphys}{#f/10}* Technically, as royal scientist, I was meant to replace him, but...",
               "<25>{#p/alphys}{#f/4}* I didn't really feel like I'd be the best fit for the job.",
               "<26>{#p/alphys}{#f/5}* Well, I had a talk with some of the royal guards, and...",
               "<25>{#p/alphys}{#f/6}* We agreed Terrestria should be appointed as the queen instead.",
               "<25>{#p/alphys}{#f/19}* Her first action was a little controversial, though...",
               "<25>{#p/alphys}{#f/20}* Cutting the royal guard in half and loosening its policies."
            ]);
            if (respect) {
               b([
                  "<25>{#p/alphys}{#f/31}* Undyne wasn't happy about it at first, but...",
                  "<25>{#p/alphys}{#f/20}* She came around to it in the end.",
                  "<25>{#p/alphys}{#f/27}* Apparently she thinks not all humans are... bad now?",
                  "<25>{#p/alphys}{#f/27}* ...",
                  "<25>{#p/undyne}{#f/17}* Are you kidding?\n* Of COURSE they're not all bad!!",
                  "<25>{#p/alphys}{#f/10}* U-Undyne!?",
                  "<25>{#p/undyne}{#f/1}* That last human proved their kind CAN fight with honor.",
                  "<25>{#p/undyne}{#f/1}* That they CAN show respect to their opponents in battle.",
                  "<25>{#p/undyne}{#f/16}* ... and it's a good thing, too, because...",
                  "<25>{#p/undyne}{#f/14}* I doubt the royal guard'll expand again any time soon.",
                  "<25>{#p/undyne}{#f/1}* Especially after the former queen returned, and...",
                  "<25>{#p/undyne}{#f/1}* ... gave the new one her full support."
               ]);
            } else if (dateLevel === 2) {
               b([
                  "<25>{#p/alphys}{#f/31}* Undyne wasn't happy about it at first, but...",
                  "<25>{#p/alphys}{#f/20}* She came around to it in the end.",
                  "<25>{#p/alphys}{#f/27}* Apparently she thinks not all humans are... bad now?",
                  "<25>{#p/alphys}{#f/27}* ...",
                  "<25>{#p/undyne}{#f/17}* Are you kidding?\n* Of COURSE they're not all bad!!",
                  "<25>{#p/alphys}{#f/10}* U-Undyne!?",
                  "<25>{#p/undyne}{#f/14}* That last human proved their kind CAN in fact be... well, kind.",
                  "<25>{#p/undyne}{#f/1}* That they CAN show mercy to their opponents in battle.",
                  "<25>{#p/undyne}{#f/16}* ... and it's a good thing, too, because...",
                  "<25>{#p/undyne}{#f/14}* I doubt the royal guard'll expand again any time soon.",
                  "<25>{#p/undyne}{#f/1}* Especially after the former queen returned, and...",
                  "<25>{#p/undyne}{#f/1}* ... gave the new one her full support."
               ]);
            } else {
               b([
                  "<25>{#p/alphys}{#f/31}* Undyne... wasn't happy about this at all.",
                  "<25>{#p/alphys}{#f/13}* She still blames you for what happened to the king, so...",
                  "<25>{#p/alphys}{#f/20}* It's... understandable why she'd be opposed to it.",
                  "<25>{#p/alphys}{#f/20}* ...",
                  "<25>{#p/undyne}{#f/16}* Yeah, it's a pretty stupid policy if you ask me.",
                  "<25>{#p/alphys}{#f/10}* U-Undyne!?",
                  "<25>{#p/undyne}{#f/17}* No matter HOW many nice humans come along, we CAN'T lower our guard!",
                  "<25>{#p/undyne}{#f/9}* ... but not many people would agree with me these days.",
                  "<25>{#p/undyne}{#f/16}* With the former queen's return, and her support for the new one...",
                  "<25>{#p/undyne}{#f/9}* I doubt the royal guard will ever be as strong as it once was."
               ]);
            }
            b([
               "<25>{#p/alphys}{#f/5}* ...\n* About the former queen.",
               "<26>{#p/alphys}{#f/5}* By the time she returned, things were mostly back to normal...",
               "<25>{#p/alphys}{#f/21}* And then she decided to reveal the truth about the humans.",
               "<25>{#p/alphys}{#f/21}* Like... RIGHT after she found out herself."
            ]);
            if (fearsome) {
               b([
                  "<25>{#p/alphys}{#f/20}* ... eheh...\n* The people didn't react well at first.",
                  "<25>{#p/alphys}{#f/13}* They were more scared than anything...",
                  "<25>{#p/alphys}{#f/26}* A fact not helped by a certain human beating everyone up.",
                  "<25>{#p/alphys}{#f/20}* Thankfully, over time, Terrestria was able to calm them down...",
                  "<25>{#p/alphys}{#f/20}* ... by reminding them nobody had died.",
                  "<25>{#p/alphys}{#f/18}* I'm glad it worked.\n* I would have caused a riot saying that.",
                  "<25>{#p/alphys}{#f/8}* But... yeah, people are mostly positive about humanity now."
               ]);
            } else {
               b([
                  "<25>{#p/alphys}{#f/15}* ... thankfully, this DIDN'T cause a mass uprising...",
                  "<25>{#p/alphys}{#f/17}* Though, I guess being so well-known helped her out with that.",
                  "<25>{#p/alphys}{#f/8}* In fact, people are mostly positive about humanity now."
               ]);
            }
            b([
               "<25>{#p/alphys}{#f/8}* So that's something.",
               "<26>{#p/undyne}{#f/16}* Heh, tell me about it...",
               "<25>{#p/undyne}{#f/10}* It's a weird reality we live in now.",
               "<25>{#p/undyne}{#f/1}* By the way, did you mention all the new schools being built?",
               "<25>{#p/alphys}{#f/10}* Uh... yeah!\n* I totally... didn't.",
               "<25>{#p/alphys}{#f/6}* Eheh...\n* The education system's doing well, too.",
               "<25>{#p/alphys}{#f/1}* Suffice it to say, tuition prices have never been lower!",
               "<25>{#p/alphys}{#f/8}* There's been so many new students learning all sorts of things.",
               "<18>{#p/papyrus}{#f/0}... HEY GUYS!\nI JUST GOT BACK FROM MATH CLASS!!",
               "<18>{#p/papyrus}{#f/4}WHO KNEW FOLDING SPACETIME COULD BE SO COMPLICATED...",
               "<25>{#p/alphys}{#f/10}* ... yep, Papyrus took a class on warp field theory.",
               "<18>{#p/papyrus}{#f/6}WHAT?? ARE YOU REFERRING TO ME IN THE THIRD PERSON??",
               "<25>{#p/alphys}{#f/17}* ... and a writing class, from the sounds of it.",
               "<25>{#p/undyne}{#f/12}* That's still a thing??",
               "<18>{#p/papyrus}{#f/4}... WAIT...",
               "<18>{#p/papyrus}{#f/7}WHO ARE YOU TALKING TO ON THE PHONE!?",
               "<25>{#p/undyne}{#f/1}* It's the human.",
               "<18>{#p/papyrus}{#f/0}OH!! OH!!\nLET ME TALK TO THEM!!",
               "<25>{#p/undyne}{#f/14}* Be my guest.\n* I gotta get back to teaching my class.",
               "<25>{#p/undyne}{#f/17}* They've been struggling with the \"magical self- defense\" excersize.",
               "<18>{#p/papyrus}{#f/0}... HELLO HUMAN!!\nHOW HAVE -YOU- BEEN LATELY!?",
               "<18>{#p/papyrus}{#f/0}...",
               "<18>{#p/papyrus}{#f/5}I GUESS YOU CAN'T REALLY ANSWER THAT.",
               "<18>{#p/papyrus}{#f/6}BUT I HOPE YOU'RE DOING WELL!!"
            ]);
            if (dateLevel === 0) {
               b([ "<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE OUR EPIC SHOWDOWN." ]);
            } else if (SAVE.data.b.flirt_papyrus) {
               b([ "<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE THAT DATE WE HAD." ]);
            } else {
               b([ "<18>{#p/papyrus}{#f/0}I'VE BEEN THINKING ABOUT YOU SINCE WE HUNG OUT." ]);
            }
            b([
               "<18>{#p/papyrus}{#f/5}I TOLD EVERYONE IN MY CLASS ABOUT YOU, AND...",
               "<18>{#p/papyrus}{#f/5}... ALL OF THEM WISHED YOU'D COME BACK SOMEDAY."
            ]);
            if (SAVE.data.b.f_state_kidd_betray) {
               b([
                  "<18>{#p/papyrus}{#f/4}... ALMOST ALL OF THEM, ANYWAY.",
                  "<18>{#p/papyrus}{#f/5}ONE CLASSMATE WHO SITS NEXT TO ME SAYS THAT YOU...",
                  "<18>{#p/papyrus}{#f/5}... UH, THEY SAY YOU BETRAYED THEM, SOMEHOW.",
                  "<18>{#p/papyrus}{#f/6}BUT LISTEN!!\nIF YOU EVER -DO- COME BACK...",
                  "<18>{#p/papyrus}{#f/0}I'LL HELP THE TWO OF YOU GET BACK ON GOOD TERMS!!"
               ]);
            } else {
               b([
                  "<18>{#p/papyrus}{#f/0}ONE OF THEM EVEN WISHES THEY COULD GO WITH YOU!!",
                  "<18>{#p/papyrus}{#f/5}IT'S A CLASSMATE WHO SITS NEXT TO ME, ACTUALLY.",
                  "<18>{#p/papyrus}{#f/6}THEY SAY THEY OWE YOU THEIR VERY LIFE!!",
                  "<18>{#p/papyrus}{#f/4}... A HERO, EH?\nIF YOU EVER -DO- COME BACK...",
                  "<18>{#p/papyrus}{#f/0}I'LL BE SURE TO INVITE THEM TO YOUR RETURN PARTY."
               ]);
            }
            b([
               "<18>{#p/papyrus}{#f/9}YOU HAVE MY PERSONAL PAPYRUS PROMISE! (TM)",
               "<25>{#p/alphys}{#f/27}* ... hey, isn't that one of Mettaton's lines?",
               "<18>{#p/papyrus}{#f/4}IN THE PAST, MAYBE... BUT NOT NOW.",
               "<18>{#p/papyrus}{#f/5}APPARENTLY, HE'S DITCHING HIS OLD FORMAT ENTIRELY...",
               "<18>{#p/papyrus}{#f/4}ALL TO START THE \"MTT CINEMATIC UNIVERSE.\"",
               "<25>{#p/alphys}{#f/17}* Oh yeah, I heard a rumor about that."
            ]);
            if (moniker) {
               b([
                  "<25>{#p/alphys}{#f/21}* They say he's doubling down on the whole \"villain\" thing.",
                  "<18>{#p/papyrus}{#f/4}... LIKE THAT'S NOT GOING TO BACKFIRE.",
                  "<25>{#p/alphys}{#f/22}* I KNOW, RIGHT!?!?"
               ]);
               if (fearsome) {
                  b([
                     "<25>{#p/alphys}{#f/10}* The people aren't going to want a reminder of what the human was.",
                     "<25>{#p/alphys}{#f/26}* ... no offense."
                  ]);
               } else {
                  b([
                     "<25>{#p/alphys}{#f/10}* People don't even dislike humans anymore, so...",
                     "<25>{#p/alphys}{#f/3}* I don't really see the point in it."
                  ]);
               }
            } else {
               b([
                  "<25>{#p/alphys}{#f/21}* They say he's doubling down on the whole \"killer robot\" thing.",
                  "<18>{#p/papyrus}{#f/4}LIKE THAT'S NOT GOING TO BACKFIRE.",
                  "<25>{#p/alphys}{#f/22}* I KNOW, RIGHT!?!?"
               ]);
               if (fearsome) {
                  b([
                     "<25>{#p/alphys}{#f/10}* The people aren't going to want a reminder of the human's violence.",
                     "<25>{#p/alphys}{#f/26}* ... no offense."
                  ]);
               } else {
                  b([
                     "<25>{#p/alphys}{#f/10}* People are just trying to be positive nowadays, so...",
                     "<25>{#p/alphys}{#f/3}* I don't really see the point in it."
                  ]);
               }
            }
            b([
               "<18>{#p/papyrus}{#f/5}YEAH... EVERYONE'S JUST TRYING TO HAVE HOPE NOW.",
               "<18>{#p/papyrus}{#f/6}... INCLUDING MY BROTHER!!",
               "<18>{#p/papyrus}{#f/0}AFTER THE ROYAL GUARD WAS REDUCED IN SIZE...",
               "<18>{#p/papyrus}{#f/0}HE LEFT TO START A BUSINESS WITH BRATTY AND CATTY.",
               "<18>{#p/papyrus}{#f/4}A SECOND-HAND TRASH BUSINESS.",
               "<18>{#p/papyrus}{#f/5}I CAN'T SAY I APPROVE, BUT AT LEAST HE'S HAPPY.",
               "<25>{#p/sans}{#f/0}* of course i'm happy.\n* selling trash is basically my calling.",
               "<18>{#p/papyrus}{#f/7}SANS!! STOP COMING OUT OF NOWHERE LIKE THAT!!",
               "<25>{#p/sans}{#f/2}* heh.\n* so how are ya, bucko?",
               "<25>{#p/sans}{#f/0}* i hope my efforts to warn and protect you weren't in vain.",
               "<18>{#p/papyrus}{#f/9}I KNEW IT!!\nYOU WERE A MOLE- RAT ALL ALONG!",
               "<25>{#p/sans}{#f/0}* true.\n* i did infiltrate the royal guard.",
               "<25>{#p/sans}{#f/3}* but i'd like to think i made a positive influence.",
               "<25>{#p/sans}{#f/2}* after all, it was MY idea to put terrestria in charge.",
               "<18>{#p/papyrus}{#f/1}WHAT!?\nYOUR IDEA!?",
               "<18>{#p/papyrus}{#f/5}WOWIE...",
               "<25>{#p/sans}{#f/3}* ... but that's all in the past now.",
               "<25>{#p/sans}{#f/0}* the way i see it, i'm just glad things didn't end up worse.",
               "<25>{#p/alphys}{#f/17}* I'm a little surprised you didn't come back to work at the lab.",
               "<25>{#p/alphys}{#f/5}* You know, like you said you'd do when you were done with the guard.",
               "<25>{#p/sans}{#f/0}* well, to be honest, i needed a break after all that serious stuff.",
               "<25>{#p/sans}{#f/2}* but hey, at least papyrus is doing a bang-up job, right?",
               "<25>{#p/alphys}{#f/6}* Eheh.\n* Yeah, he is.",
               "<18>{#p/papyrus}{#f/0}I TRY MY BEST!!",
               "<25>{#p/alphys}{#f/20}* ... though, there is this one thing that's been on my mind.",
               "<25>{#p/sans}{#f/0}* what is it?",
               "<25>{#p/alphys}{#f/27}* Well, according to the telescopes...",
               "<25>{#p/alphys}{#f/27}* Something strange happened to the stars a while back.",
               "<18>{#p/papyrus}{#f/6}STRANGE!?\nHOW CAN A STAR BE STRANGE!?",
               "<25>{#p/alphys}{#f/15}* Well, okay, it wasn't actually the STAR that was strange.",
               "<26>{#p/alphys}{#f/23}* It was the way it moved.",
               "<25>{#p/alphys}{#f/20}* Or... didn't move?",
               "<25>{#p/alphys}{#f/20}* It was more like... a jump, of sorts.\n* A sudden shift.",
               "<25>{#p/alphys}{#f/26}* As if time outside the forcefield just... lept ahead a few years.",
               "<18>{#p/papyrus}{#f/7}YEARS!?\nBUT THAT CAN'T BE RIGHT!!",
               "<25>{#p/alphys}{#f/20}* Well I checked, and double- checked, and triple-checked...",
               "<18>{#p/papyrus}{#f/6}BUT DID YOU QUADRUPLE-CHECK!?",
               "<25>{#p/alphys}{#f/21}* Of course I did.",
               "<25>{#p/alphys}{#f/5}* But it didn't change the result.",
               "<25>{#p/sans}{#f/0}* huh.\n* how strange.",
               "<25>{#p/sans}{#f/3}* whoops.\n* the recording's almost at its time limit now.",
               "<25>{#p/alphys}{#f/17}* ... oh.\n* I guess we should wrap this up, then.",
               "<25>{#p/alphys}{#f/6}* Well, I... I hope you're doing alright out there.",
               "<25>{#p/alphys}{#f/5}* If we managed to find happiness here, then... so can you.",
               "<18>{#p/papyrus}{#f/0}WELL SAID, ALPHYS.\nWELL SAID.",
               "<25>{#p/sans}{#f/2}* heh.\n* take care, okay?",
               "<18>{#p/papyrus}{#f/9}YEAH!!\nUNTIL NEXT TIME!!",
               "<25>{#p/alphys}{#f/8}* ... until next time."
            ]);
         }
         b([ "<32>{#s/equip}{#p/event}* 滴..." ]);
         return { a: atext, b: btext, k, m };
      },
      
      neutral1 () {
         return [ "<32>{#s/phone}{#p/event}* 滴滴，滴滴...", "<32>{#s/equip}{#p/event}* 滴..." ];
      },
      
      neutral2 () {
         return [ "<32>{#s/phone}{#p/event}* 滴滴，滴滴...", "<32>{#s/equip}{#p/event}* 滴..." ];
      },
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
            "<32>* considering what we recently found out about humanity...",
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
               ? [ "<32>{#p/napstablook}* ...", "<32>* speaking of family..." ]
               : [ "<32>{#p/napstablook}* ...", "<32>* hey...\n* even if my family's not doing too well..." ]),
            "<32>* that human i adopted is... really something, heh",
            "<32>* they say i'm their favorite monster...",
            "<32>* ... knowing what they went through in the archive, that really means something.",
            "<32>* and... they always find a way to make me smile.",
            "<32>* like, a few hours ago, when the walls were still being put in...",
            "<32>* they wanted to go outside to see the construction before it was too late.",
            "<32>* when i said they could, they were so happy...",
            "<32>* now, i finally understand why people like raising children."
         ],
         () => [
            "<32>* y'know... about your childhood...",
            "<32>* i'd say it's only just getting started.",
            ...(SAVE.data.b.f_state_kidd_betray
               ? [ "<32>* you might not have any new siblings, but..." ]
               : SAVE.data.b.svr
               ? [ "<32>* along with those new siblings of yours..." ]
               : [ "<32>* along with that new sibling of yours..." ]),
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
      save1: "<32>{#p/human}{@fill:#f00}* （还剩下$(x)个。）",
      save2: "<32>{#p/human}{@fill:#f00}* （决心。）",
      save3: "<32>{#p/human}{@fill:#3f00ff}* （还剩下$(x)个。）",
      save4: "<32>{#p/human}{@fill:#3f00ff}* （决心。）",
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
      balcony0: [ "<25>{#p/kidd}{#f/3}* Oh, hey Frisk...", "<25>{#f/1}* I was getting worried you would never wake up!" ],
      balcony1: () => [
         "<25>{#p/kidd}{#f/3}* ... haha.",
         ...(SAVE.data.b.ufokinwotm8
            ? [ "<25>{#f/2}* I can't believe I actually...", "<25>{#f/4}* ... have..." ]
            : [
                 "<25>{#f/2}* I can't believe I actually have a home now.",
                 "<25>{#f/7}* And with King Asgore!?",
                 "<25>{#f/1}* All the other kids are gonna want to hang out with us...",
                 "<25>{#f/1}* We'll get to throw house parties ALL the time!"
              ])
      ],
      balcony2: () =>
         SAVE.data.b.ufokinwotm8
            ? [
                 "<25>{#p/kidd}{#f/4}* Uh... are you okay?",
                 "<25>{#f/8}* I'm kinda worried about you, dude...",
                 "<25>{#f/7}* Is something wrong?"
              ]
            : [
                 "<25>{#p/kidd}{#f/1}* Man, the books in the librarby were one thing...",
                 "<25>{#p/kidd}{#f/7}* But being on a planet for REAL!?",
                 "<25>{#f/13}* It's SOOOO much cooler!",
                 "<25>{#f/2}* Imagine if we tried to explore it all...",
                 "<25>{#f/1}* We'd never EVER be finished!"
              ],
      balcony3: () =>
         SAVE.data.b.ufokinwotm8
            ? [
                 "<25>{#p/kidd}{#f/4}* (Man, I'm really getting worried now.)",
                 "<25>{#f/7}* Frisk, come on...!",
                 "<25>{#f/7}* You gotta say something to me, dude!",
                 "<25>{#f/8}* I didn't do anything wrong... did I?"
              ]
            : [ "<25>{#p/kidd}{#f/2}* Aren't you excited?", "<25>{#f/1}* You and I are gonna do EVERYTHING together!" ],
      balcony0a: [ "<25>{#p/kidd}{#f/1}* Is THIS what living on a planet is like?\n* This is INCREDIBLE!" ],
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
               : [ "<32>{#p/basic}* There is a crumpled up recipe for Starling Tea.\n* That's not his trash can..." ])
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
                  "<32>* \"When it comes to Starling flowers, the line between growth and stagnation...\"",
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
                          "<32>* \"Ever since Frisk forwarded the professor's equations, I've made steady progress.\"",
                          "<32>* \"I've even managed to send small objects through the aperture...\"",
                          "<32>* \"In my next test, I'll send a tethered scanner through and see what it picks up.\"",
                          "<32>* \"Wormholes for monster travel could be here as soon as K-616.05!\""
                       ]
                     : [
                          "<32>{#p/basic}* \"Wormhole experiment report.\"\n* \"From Dr. Alphys to Asgore\"",
                          "<32>* \"Progress on my wormhole experiment has hit a snag.\"",
                          "<32>* \"The professor's incomplete equations haven't been enough to get things working.\"",
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
                          "<32>{#p/basic}* The fridge is mostly empty, save for a single cup of Starling tea from Undyne.",
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
      advice: "* 建议",
      agree: "* 认同",
      alphys: "* Alphys",
      analyze: "* Analyze",
      annoy: "* 发火",
      appease: "* 安抚",
      approach: "* 靠近",
      asgore: "* Asgore",
      asriel: "* Asriel",
      asrieldreemurr: "§fill:#ff7f7f§§swirl:2,1,1.05,1§§hue§* Asriel Dreemurr",
      bathe: "* 洗澡",
      beckon: "* 招呼过来",
      bedtime: "* 睡觉时间",
      blind: "* Blind",
      boast: "* 自夸",
      boo: "* 喝倒彩",
      boost: "* 帮助",
      bow: "* 鞠躬",
      break: "* Break",
      burn: "* Burn",
      carry: "* Carry",
      challenge: "* 挑战",
      charge: "* Charge",
      check: "* 查看",
      cheer: "* 鼓励",
      clean: "* 清洁",
      cocoa: "* Cocoa",
      comfort: "* 安抚",
      compliment: "* 称赞",
      compose: "* 作曲",
      conclude: "* Conclude",
      console: "* Console",
      counter: "* 反驳",
      create: "* 自己制作",
      criticize: "* 批评",
      cuddle: "* 拥抱",
      cut: "* Cut",
      dance: "* 跳舞",
      dream: "* 梦想",
      dinnertime: "* 晚餐时间",
      direct: "* Direct",
      disarm: "* 缴械",
      disown: "* Disown",
      diss: "* 贬损",
      distance: "* Distance",
      distract: "* Distract",
      ditch: "* 甩掉",
      dontpick: "* 不招惹",
      encourage: "* 鼓励",
      escort: "* 护送",
      flash: "* 闪光",
      flirt: "* 调情",
      grin: "* 微笑",
      guide: "* 引导",
      handshake: "* 握手",
      hangout: "* 消遣",
      heckle: "* 责难",
      heel: "* 翻脸",
      highfive: "* High Five",
      home: "* 回家",
      hope: "* 希望",
      hug: "* 拥抱",
      hum: "* 哼唱",
      hypothesize: "* Hypothesize",
      ignore: "* 无视",
      imitate: "* 模仿",
      inquire: "* 询问",
      insult: "* 辱骂",
      joke: "* 讲笑话",
      agreement: "* Agreement",
      call: "* 电话",
      dinner: "* 晚餐",
      judgement: "* 审判",
      laugh: "* 大笑",
      lecture: "* Lecture",
      leech: "* Leech",
      lesson: "* 教学",
      mislead: "* 误导",
      mix: "* 混音",
      mystify: "* 迷惑",
      notes: "* 笔记",
      object: "* 拒绝",
      papyrus: "* Papyrus",
      password: "* 密码",
      pat: "* 轻拍",
      pay: "* 付钱",
      perch: "* 栖息",
      pet: "* 抚摸",
      pick: "* 招惹",
      play: "* 玩耍",
      playdead: "* 装死",
      plead: "* 求饶",
      pluck: "* Pluck",
      poke: "* 戳刺",
      pose: "* 摆姿势",
      praise: "* 称赞",
      promise: "* 许诺",
      punch: "* Punch",
      puzzle: "* 谜题",
      puzzlehelp: "* 谜题求助",
      rap: "* 说唱",
      reassure: "* Re-Assure",
      release: "* Release",
      resniff: "* 重新闻闻",
      rest: "* 休息",
      roll: "* 打滚",
      sample: "* 采样",
      sans: "* Sans",
      scream: "* 尖叫",
      secret: "* 秘密",
      shout: "* 喊叫",
      shove: "* Shove",
      siphon: "* 抽取",
      sit: "* 坐下",
      slap: "* 击打",
      smile: "* 微笑",
      someoneelse: "* 别的什么人",
      spark: "* 引燃",
      stare: "* 凝视",
      steal: "* 偷窃",
      storytime: "* 故事时间",
      suggest: "* Suggest",
      talk: "* 交谈",
      taunt: "* 嘲讽",
      tea: "* Tea",
      telloff: "* 批判",
      terrorize: "* 恐吓",
      test_a: "* Binding",
      test_b: "* Prosthesis",
      test_c: "* Infusion",
      threaten: "* 威胁",
      tickle: "* Tickle",
      topple: "* 推倒",
      toriel: "* Toriel",
      translate: "* 翻译",
      travel: "* Travel",
      trivia: "* 琐事",
      tug: "* 拽下",
      turn: "* Turn",
      undyne: "* Undyne",
      walk: "* 遛狗",
      water: "* 喝水",
      whisper: "* 耳语",
      whistle: "* 吹口哨",
      yell: "* Yell"
   },

   b_group_common: {
      nobody: () => (!world.genocide && world.bullied ? "* ...但是人们都逃走了。" : "* ...但是谁也没有来。")
   },

   b_opponent_dummy: {
      act_check: [ "<32>{#p/story}* DUMMY - 攻击0 防御0\n* 壳中幽灵，祝君安宁。" ],
      act_flirt: [
         "<32>{#p/human}* （你向人偶调情。）",
         "<32>{#p/basic}* 它的反应和你想的完全一样。",
         "<32>* Toriel强忍住不笑。"
      ],
      act_hug: [ "<32>{#p/human}* （你抱了抱人偶。）" ],
      act_slap: [ "<32>{#p/human}* （你扇了人偶一巴掌。）" ],
      act_talk: [
         "<32>{#p/human}* （你和人偶说了会话。）",
         "<32>{#p/basic}* 它好像不怎么健谈。",
         "<32>* Toriel看起来很高兴。"
      ],
      bored: [ "<32>{#p/basic}* 人偶厌倦了你意味不明的把戏。" ],
      hugged: [ "<32>{#p/basic}* 人偶不知为何... 脸红了。" ],
      name: "* Dummy",
      slapped: [ "<32>{#p/basic}* 突然...！" ],
      status1: [ "<32>{#p/story}* 你遭遇了训练人偶。" ],
      status2: [ "<32>{#p/story}* 人偶看起来有些厌倦了。" ],
      status3: [ "<32>{#p/story}* The dummy looks like it's lost in itself." ],
      status4: [ "<32>{#p/story}* 人偶好像要倒下了。" ],
      talk: [ "<09>{#p/basic}{#i/10}{~}....." ]
   },
   b_opponent_maddummy: {
      epiphaNOPE1: [ "<11>{#p/basic}{~}{#x3}Ugh, you're WASTING my time!" ],
      epiphaNOPE2: [ "<08>{#p/basic}{~}Oh.. how strange." ],
      act_check: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [ "<32>{#p/story}* GLAD DUMMY - 攻击0 防御0\n* 它的梦想成真啦！" ]
            : [ "<32>{#p/story}* MAD DUMMY - 攻击30 防御255\n* 免疫一切物理攻击。" ],
      act_flirt: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
                 "<32>{#p/human}* （你向Glad Dummy调情。）",
                 "<32>{#p/basic}* They're too distracted with themselves to hear you."
              ]
            : [ "<32>{#p/human}* (You flirt with Mad Dummy.)", "<32>* 它的反应和你想的完全一样。" ],
      act_hug: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [ "<32>{#p/human}* （你抱了抱Glad Dummy。）" ]
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
                 "<32>{#p/human}* （你想和Glad Dummy说说话。）",
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
      gladTalk1: [ "<08>{#p/basic}{~}谢啦！" ],
      gladTalk2: [ "<08>{#p/basic}{~}谢谢你！" ],
      gladTalk3: [ "<08>{#p/basic}{~}你真棒！" ],
      gladTalk4: [ "<08>{#p/basic}{~}干得好哇！" ],
      gladTalk5: [ "<08>{#p/basic}{~}OK!" ],
      gladTalk6: [ "<08>{#p/basic}{~}..." ],
      hugTalk1: () =>
         16 <= SAVE.data.n.kills_wastelands
            ? [
                 "<08>{#p/basic}{~}My haphe- phobia!",
                 "<08>{#p/basic}{~}It's gone!",
                 "<08>{#p/basic}{~}人类...\n谢谢你...",
                 "<08>{#p/basic}{~}我从未\n感到\n如此幸福..."
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
            ? [ "<32>{#p/story}* Glad Dummy 打算放你走。" ]
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
      act_check0: [ "<32>{#p/asriel2}* Gelatini，没脑子的粘球。\n* 有什么好说的？" ],
      act_check: [ "<32>{#p/story}* GELATINI - 攻击6 防御0\n* 典型印象：身段妖娆气质好，\n  就是没大脑..." ],
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
         "<32>{#p/human}* （你使劲地给了Galatini一巴掌。）",
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
         world.goatbro ? [ "<32>{#p/asriel2}* Gelatini squared." ] : [ "<32>{#p/story}* 一对Gelatini跳了过来。" ],
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
            ? [ "<32>{#p/asriel2}* Astro Serf，宇航员，渴望引人注目。\n* 除了自己的天线，他什么都不在乎。" ]
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
         world.goatbro ? [ "<32>{#p/asriel2}* 离死不远了。" ] : [ "<32>{#p/story}* Astro Serf's suit is loose." ],
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
         world.goatbro ? [ "<32>{#p/asriel2}* 也要去见阎王了。" ] : [ "<32>{#p/story}* It's disintegrating." ],
      idleTalk1: [ "<08>{#p/basic}{~}I..\nI.." ],
      idleTalk2: [ "<08>{#p/basic}{~}What can I say.." ],
      idleTalk3: [ "<08>{#p/basic}{~}What's the point.." ],
      idleTalk4: [ "<08>{#p/basic}{~}So.. alone.." ],
      name: "* Lithium",
      randStatus1: [ "<32>{#p/story}* \"Astro Serf\" is no more." ],
      randStatus2: [ "<32>{#p/story}* Smells like battery power." ]
   },

   b_party_kidd: {
      mkNobody: [ "<25>{#p/kidd}{#f/4}* 周围怎么一个人也没有，\n  是我的错觉吗..." ],
      mkDeath1: [
         "<32>{#p/kidding}* 呃...",
         "<32>* 对手为啥是这样消失的呢？",
         "<32>* 嗯... 我们打了对手。\n  估计太害怕，就传送走了。\n* 哈哈，肯定是的。"
      ],
      mkDeath2: [ "<32>{#p/kidding}* 又消失了？", "<32>* 该死，为啥我没有\n  这么酷的传送器呢！？" ],
      mkDeath3: [ "<32>{#p/kidding}* 消失了..." ],
      mkDeath4: [ "<32>{#p/kidding}* ..." ],
      mkDeath1OW: [
         "<25>{#p/kidd}{#f/4}* 呃...",
         "<25>* 对手为啥是这样消失的呢？",
         "<25>{#f/1}* 嗯... 我们打了对手，所以...",
         "<25>* 估计太害怕，就传送走了。\n* 哈哈，肯定是的。"
      ],
      mkDeath2OW: [
         "<25>{#p/kidd}{#f/4}* 又消失了？",
         "<25>{#f/1}* 该死，为啥我没有\n  这么酷的传送器呢！？"
      ],
      mkDeath3OW: [ "<25>{#p/kidd}{#f/4}* 消失了..." ],
      mkDeath4OW: [ "<25>{#p/kidd}{#f/4}* ..." ],
      mkBully1: [
         "<32>{#p/kidding}* 呃...",
         "<32>* 对手好像吓坏了...",
         "<32>* 希望我们下手没那么重..."
      ],
      mkBully2: [ "<32>{#p/kidding}* 那位也...！", "<32>* 我们打得那么狠吗...？" ],
      mkBully3: [ "<32>{#p/kidding}* ..." ],
      mkBully1OW: [
         "<25>{#p/kidd}{#f/4}* 呃...",
         "<25>* They seemed really scared...",
         "<25>* I hope we didn't hurt them too badly or something..."
      ],
      mkBully2OW: [ "<25>{#p/kidd}{#f/7}* 那位也...！", "<25>{#f/4}* 我们打得那么狠吗...？" ],
      mkBully3OW: [ "<25>{#p/kidd}{#f/4}* ..." ],
      mkShyrenDeath: [ "<25>{#p/kidd}{#f/4}* 嘿...", "<25>{#p/kidd}{#f/1}* 大家都去哪了？" ],
      mkMagic1: [
         "<32>{#p/kidding}* 哟... 我还不会释放很酷的魔法...",
         "<32>{#p/kidding}* 不过，嗯... 我可以帮你疗伤！"
      ],
      mkMagic2a: [ "<32>{#p/kidding}* 治疗术！" ],
      mkMagic2b: [ "<32>{#p/kidding}* 健康与你同在！" ],
      mkMagic2c: [ "<32>{#p/kidding}* 看好了！" ],
      mkNope: [ "<32>{#p/kidding}* 不要再让我战斗了..." ],
      mkTurn1: [ "<32>{#p/kidding}* 帮帮我，我从来没战斗过！\n* 我要怎么做！？" ],
      mkTurn2: [ "<32>{#p/kidding}* 呃... 帮我！" ],
      mkTurn3: [ "<32>{#p/kidding}* 我... 我好像会了。" ],
      mkTurnAct1: [ "<32>{#p/kidding}* 哦！哦！", "<32>* 我知道要怎么行动！", "<32>* 看好了...！" ],
      mkWeaken1: [ "<32>{#p/kidding}* 真的要这么做吗...？\n* 对手好像不喜欢这样...", "<32>* ..." ],
      mkWeaken2: [ "<32>{#p/kidding}* 这么做真的好吗...？", "<32>* ..." ],
      mkWeaken3a: [ "<32>{#p/kidding}* 呃..." ],
      mkWeaken3b: [ "<32>{#p/kidding}* 嗯..." ],
      mkWeaken3c: [ "<32>{#p/kidding}* 呃..." ],
      
      mkTurnActRand1: (opponent: string) =>
         opponent === 'muffet' // NO-TRANSLATE

            ? [
                 [ "<32>{#p/story}* Monster Kid struggled in the web and made a scary face." ],
                 [ "<32>{#p/story}* Monster Kid struggled in the web and yelled." ],
                 [ "<32>{#p/story}* Monster Kid gave out a menacing laugh." ]
              ]
            : opponent === 'shyren' // NO-TRANSLATE

            ? [
                 [ "<32>{#p/story}* Monster Kid sang a scary tune." ],
                 [ "<32>{#p/story}* Monster Kid yelled overly edgy lyrics." ],
                 [ "<32>{#p/story}* Monster Kid drummed loudly with their feet." ]
              ]
            : opponent === 'woshua' // NO-TRANSLATE

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
         opponent === 'muffet' // NO-TRANSLATE

            ? [
                 [ "<32>{#p/story}* Monster Kid complimented Muffet on her eloquent taste in clothing." ],
                 [ "<32>{#p/story}* Monster Kid told Muffet her pastries are the best known to monsterkind." ],
                 [ "<32>{#p/story}* Monster Kid said no webs are as strong as Muffet's." ]
              ]
            : opponent === 'shyren' // NO-TRANSLATE

            ? [
                 [ "<32>{#p/story}* Monster Kid hummed a pretty melody." ],
                 [ "<32>{#p/story}* Monster Kid complimented Shyren's hair." ],
                 [ "<32>{#p/story}* Monster Kid complimented Shyren's voice." ]
              ]
            : opponent === 'woshua' // NO-TRANSLATE

            ? [
                 [ "<32>{#p/story}* Monster Kid called Skrubbington the cleanest monster on the block." ],
                 [ "<32>{#p/story}* Monster Kid appreciated Skrubbington's efforts to freshen up the factory." ],
                 [ "<32>{#p/story}* Monster Kid noted Skrubbington's committment to perfection." ]
              ]
            : opponent === 'radtile' // NO-TRANSLATE

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
         opponent === 'muffet' // NO-TRANSLATE

            ? [
                 [ "<32>{#p/story}* Monster Kid tried asking Muffet about spider clans." ],
                 [ "<32>{#p/story}* Monster Kid tried asking Muffet about bakeries." ],
                 [ "<32>{#p/story}* Monster Kid tried asking Muffet about tea." ]
              ]
            : opponent === 'shyren' // NO-TRANSLATE

            ? [
                 [ "<32>{#p/story}* Monster Kid debated about musical notation." ],
                 [ "<32>{#p/story}* Monster Kid spoke about music theory." ],
                 [ "<32>{#p/story}* Monster Kid discussed their favorite music genres." ]
              ]
            : opponent === 'woshua' // NO-TRANSLATE

            ? [
                 [ "<32>{#p/story}* Monster Kid waxed poetic about proper hygiene." ],
                 [ "<32>{#p/story}* Monster Kid rapped about hazard safety." ],
                 [ "<32>{#p/story}* Monster Kid showed off their polished sewer pipe set." ]
              ]
            : opponent === 'radtile' // NO-TRANSLATE

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
         opponent === 'muffet' // NO-TRANSLATE

            ? [ [ "<32>{#p/story}* Monster Kid tried telling Muffet there's no point in all this!" ] ]
            : opponent === 'shyren' || opponent === 'radtile' // NO-TRANSLATE

            ? [ [ "<32>{#p/story}* Monster Kid claimed a spatial distortion was approaching fast!" ] ]
            : opponent === 'woshua' // NO-TRANSLATE

            ? [ [ "<32>{#p/story}* Monster Kid claimed an airborne viral agent was on its way!" ] ]
            : [ [ "<32>{#p/story}* Monster Kid claimed the nearby pipes were leaking acid!" ] ],
      mkTurnActResult0: [ "<32>{#p/story}* Nothing happened." ],
      mkTurnActResult1: (opponent: string) =>
         opponent === 'woshua' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Skrubbington was grossed out!\n* Skrubbington's DEFENSE down!" ]
            : opponent === 'shyren' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Shyren felt uncomfortable!\n* Shyren's DEFENSE down!" ]
            : opponent === 'radtile' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Radtile felt uncomfortable!\n* Radtile's DEFENSE down!" ]
            : [ "<32>{#p/story}* $(x) felt uncomfortable!\n* $(x)'s DEFENSE down!" ],
      mkTurnActResult2: (opponent: string) =>
         opponent === 'woshua' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Skrubbington felt flattered!\n* Skrubbington's ATTACK down!" ]
            : opponent === 'shyren' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Shyren felt flattered!\n* Shyren's ATTACK down!" ]
            : opponent === 'radtile' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Radtile felt respected!\n* Radtile's ATTACK down!" ]
            : [ "<32>{#p/story}* $(x) felt respected!\n* $(x)'s ATTACK down!" ],
      mkTurnActResult3: (opponent: string, multiple: boolean) =>
         opponent === 'woshua' // NO-TRANSLATE

            ? multiple
               ? [ "<32>{#p/story}* Skrubbington and the others were distracted by Monster Kid and forgot their turn!" ]
               : [ "<32>{#p/story}* Skrubbington was distracted by Monster Kid and forgot their turn!" ]
            : opponent === 'shyren' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Distracted by Monster Kid, Shyren forgot her turn!" ]
            : multiple
            ? [ "<32>{#p/story}* Entranced by Monster Kid, $(x) and the others forgot their turn!" ]
            : opponent === 'radtile' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Entranced by Monster Kid, Radtile forgot his turn!" ]
            : [ "<32>{#p/story}* Entranced by Monster Kid, $(x) forgot their turn!" ],
      mkTurnActResult4: (opponent: string, multiple: boolean, allowpac: boolean) =>
         opponent === 'woshua' // NO-TRANSLATE

            ? [
                 "<32>{#p/story}* Fearful for its life, Skrubbington panicked and left the battle!",
                 ...(multiple ? [ "<32>{#p/story}* The other monsters continue to fight you." ] : [])
              ]
            : opponent === 'shyren' // NO-TRANSLATE

            ? allowpac
               ? [ "<32>{#p/story}* Fearful for her life, Shyren panicked and left the battle!" ]
               : [ "<32>{#p/story}* Encouraged by her own performance, Shyren braved the threat!" ]
            : opponent === 'radtile' // NO-TRANSLATE

            ? [ "<32>{#p/story}* Fearful for his life, Radtile panicked and left the battle!" ]
            : [
                 "<32>{#p/story}* Fearful for its life, $(x) panicked and left the battle!",
                 ...(multiple ? [ "<32>{#p/story}* The other monsters continue to fight you." ] : [])
              ],
      mkTurnFight1: [
         "<32>{#p/kidding}* 你... 你-你让我战斗？\n* 真的吗？",
         choicer.create("* （确定战斗吗？）", "是", "否")
      ],
      mkTurnFight2a: [ "<32>{#p/kidding}* 好吧... 那我试试..." ],
      mkTurnFight2b: [ "<32>{#p/kidding}* 哦，好...", "<32>* 那我就饶恕他们吧！" ],
      mkTurnFight3a: [ "<32>* 呀哈...！" ],
      mkTurnFight3b: [ "<32>* 嘿呀...！" ],
      mkTurnFight3c: [ "<32>* 我打！" ],
      mkTurnMercy1: [ "<32>{#p/kidding}* 仁慈？\n* 让我饶恕对手吗？", "<32>{#p/kidding}* 哈哈，容易！" ],
      mkTurnX: [ choicer.create("* （Monster Kid应该怎么做？）", "仁慈", "行动", "魔法", "战斗") ]
   },

   c_name_common: {
      keyring: "钥匙串",
      hello_asgore: "打招呼",
      about_asgore: "介绍下自己",
      dad: "叫他“爸爸”",
      flirt_asgore: "调情",
      insult_asgore: "辱骂"
   },

   c_call_common: {
      start: "<32>{#s/phone}{#p/event}* 滴滴滴...",
      end: "<32>{#s/equip}{#p/event}* 滴...",
      nobody0: [ "<32>{#p/human}* (Too much interference.)" ],
      nobody1: [ "<32>{#p/human}* （没有回应。）" ],
      nobody2: [ "<32>{#p/basic}* ...但是谁也没有来。" ],
      nobody3: [ "<32>{#p/human}* （没有信号。）" ],
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
         description: "它的气味很像一氧化二氢。",
         name: "水"
      },
      drop: [ "<32>{#p/human}* (You throw away the Water.)" ],
      info: () =>
         SAVE.data.b.svr || SAVE.data.b.ufokinwotm8
            ? [ "<32>{#p/human}* （12 HP。）" ]
            : [ "<32>{#p/basic}* “水” 回复 12 HP\n* 它的气味很像一氧化二氢。" ],
      name: "水",
      use: () => [
         "<32>{#p/human}* (You drank the Water.)",
         ...(SAVE.data.b.ufokinwotm8 ? [] : [ "<33>{#p/human}* （你充满了一氧化二氢的力量。）" ]) 
      ]
   },

   s_save_common: {
      _cockpit: {
         name: "Deep Space",
         text: []
      },
      _frontier1: {
         name: "Your Room",
         text: [ "<32>{#p/human}* （你充满了决心。）" ]
      },
      _frontier8: {
         name: "Eurybia",
         text: []
      }
   }
};


// END-TRANSLATE
