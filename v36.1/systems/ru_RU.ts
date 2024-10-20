// START-TRANSLATE

export default {
   battle: {
      death0: [ "(Вы глубоко вдохнули.)", "(Вы наполнены решимостью.)" ],
      death1: [ "Ты ещё не можешь сдаться...", "$(name)!\nСохраняй решимость..." ],
      death2: [ "Наша судьба зависит от тебя...", "$(name)!\nСохраняй решимость..." ],
      death3: [ "Ты будешь в порядке!", "$(name)!\nСохраняй решимость..." ],
      death4: [ "Не теряй надежду!", "$(name)!\nСохраняй решимость..." ],
      death5: [ "Это не может закончиться здесь!", "$(name)!\nСохраняй решимость..." ],

      flee1: "    * Удалось сбежать...",
      flee2: "    * Я сваливаю.",
      flee3: "    * У меня есть дела по важнее.",
      flee4: "    * Не мешайте мне.",
      flee5: "    * Убежали с $(x) ОП\n      и $(y)З.",

      mercy_assist: "* Помочь",
      mercy_flee: "* Сбежать",
      mercy_spare: "* Пощадить",

      victory1: "<32>{#p/story}* ПОБЕДА!\n* Награда $(x) ОП и $(y)З.",
      victory2: "<32>{#p/story}* ПОБЕДА!\n* Награда $(x) ОП и $(y)З.\n* Ваш УР повысился."
   },

   developer: {
      console: {
         header: "ОШИБКА",
         p_resume: {
            header: "ЗАКРЫТЬ",
            resume: "Нажмите чтобы закрыть"
         },
         blurb: "Произошла ошибка! Пожалуйста отправьте скриншот разработчику."
      },
      control: {
         tab: "УПРАВЛЕНИЕ",
         headers: [ "ОСНОВНОЕ", "БИТВА" ],
         items: [
            [
               "FixMusic",
               "FixPlayer",
               "InfiniteG",
               "Interact",
               "Input",
               "Movement",
               "Noclip",
               "Save",
               "SkipText",
               "Freecam"
            ],
            [
               "CanAssist",
               "ClearBox",
               "Exit",
               "ResetBox",
               "ResetMenu",
               "CanFlee",
               "InfiniteHP",
               "PacifyAll",
               "Suicide",
               "WeakenAll"
            ]
         ],
         p_speed: {
            fps: "$(x) FPS",
            halt: "Halt",
            header: "GAME SPEED",
            multiplier: "$(x)x",
            next: "More",
            prev: "Less",
            sec: "$(x)s/frame"
         }
      },
      godhome: {
         tab: "GODHOME",
         p_teleport: {
            header: "ROOM",
            action: "Teleport"
         },
         p_encounter: {
            header: "ENCOUNTER",
            action: "Start"
         },
         p_armor: {
            header: "БРОНЯ"
         },
         p_weapon: {
            header: "ОРУЖИЕ"
         }
      },
      inspect: {
         tab: "INSPECT",
         headers: [ "LAYERS", "TYPES" ],
         switches: [
            [ "Base", "Below", "Main", "Above", "Menu" ],
            [ "Hitbox", "Sprite", "Text" ]
         ],
         p_explorer: {
            header: "EXPLORER",
            layers: [ "Base (Explorer)", "Below (Explorer)", "Main (Explorer)", "Above (Explorer)", "Menu (Explorer)" ],
            letters: {
               animation: "A",
               character: "C",
               rectangle: "R",
               entity: "E",
               hitbox: "H",
               object: "O",
               player: "P",
               sprite: "S",
               text: "T"
            }
         },
         debug_instructions: "Press [TAB] to cycle debug info",
         debug: {
            a: "A", 
            acceleration: "Acceleration",
            active: "Active",
            alpha: "Alpha",
            anchor: "Anchor",
            b: "B", 
            blend: "Blend",
            border: "Border",
            compute: "Computed Size",
            content: "Content",
            crop: "Crop",
            down: "Down",
            duration: "Duration",
            exp: "ОП",
            extent: "Extent",
            f: "F", 
            face: "Face",
            false: "False",
            fill: "Fill",
            fontFamily: "Font Family",
            fontSize: "Font Size",
            frames: "Frames",
            gravity: "Gravity",
            group: "Group",
            hp: "ОЗ",
            index: "Index",
            inert: "Inert",
            key: "Key",
            lastSavedTime: "Last Saved Time",
            layer: "Layer",
            layers: "Layers",
            left: "Left",
            metadata: "Metadata",
            music: "Music",
            namespace: "Namespace",
            none1: "NONE",
            none2: "none",
            objects: "Objects",
            oversaver: "Oversaver",
            parallax: "Parallax",
            position: "Position",
            primed: "Primed",
            priority: "Priority",
            registry: "REGISTRY",
            renderer: "Renderer",
            resources: "Resources",
            reverse: "Reverse",
            right: "Right",
            room: "Room",
            roomState: "Room State",
            rotation: "Rotation",
            s: "S", 
            scale: "Scale",
            shopSelection: "Shop Selection",
            size: "Size",
            spacing: "Spacing",
            spin: "Spin",
            sprites: "Sprites",
            step: "Step",
            stroke: "Stroke",
            subcrop: "Subcrop",
            talk: "Talk",
            target: "Target",
            text: "Text",
            tint: "Tint",
            trackedAssets: "Tracked Assets",
            true: "True",
            unknown: "UNKNOWN",
            up: "Up",
            vars: "Vars",
            velocity: "Velocity",
            volatile: "Volatile"
         }
      },
      savemod: {
         tab: "SAVEMOD",
         header1: "SAVE EDITOR",
         domains: [
            "Data (Booleans)",
            "Data (Numbers)",
            "Data (Strings)",
            "Flags (Booleans)",
            "Flags (Numbers)",
            "Flags (Strings)"
         ],
         p_page: {
            header: "NAVIGATION",
            prev: "Prev",
            next: "Next"
         },
         prompt: "Enter Value",
         back: "Back"
      },
      storage: {
         tab: "STORAGE",
         header: "STORAGE EDITOR",
         p_container: { header: "SELECTION", prev: "Prev", next: "Next" },
         display: { inventory: "Inventory", dimboxA: "Dim. Box A", dimboxB: "Dim. Box B" }
      }
   },

   dialog: {
      dialog_clear_title: "Clear File",
      dialog_notice_title: "Notice",
      dialog_open: { buttonLabel: "Open", name: "SAVE files", title: "Open File" },
      dialog_save: { buttonLabel: "Save", name: "SAVE files", title: "Save File" },
      error_load: "That file could not be parsed.",
      message_alert: [ "OK" ],
      message_confirm: [ "Cancel", "OK" ],
      prompt_clear: "Clear this file?",
      prompt_demo: "Your SAVE file from the\nOUTERTALE demo has been\nmoved to a timeline slot.",
      prompt_save: "Save this file?",
      prompt_save_alternate: "Copy the text below into\na JSON file to save it\nto your device.",
      prompt_open: "Load this file?"
   },

   extra: {
      credits: [
         [
            "§fill=#ff0§< СОЗДАТЕЛЬ >§fill=#fff§",
            "spacey_432",
            "",
            "§fill=#ff0§< ПИСАТЕЛЬ >§fill=#fff§",
            "Balgamlı Kedi",
            "Bilge \"mnwary\"",
            "Efe Kaya",
            "Ghostly",
            "Kiwi \"Quinn\"",
            "My Cocoa",
            "neo9174",
            "Rise",
            "ThatGuyWhoLikesFood",
            "Turbulation",
            "Zaxento The Greedy"
         ],
         [
            "§fill=#ff0§< ХУДОЖНИК >§fill=#fff§",
            "Balgamlı Kedi",
            "Burge",
            "Deskius",
            "DESM.al",
            "Discarded Vessel",
            "Efe Kaya",
            "Fired",
            "Funtermore",
            "Ghostly",
            "HolyOranges",
            "major_memestar",
            "MattSpriteMaster",
            "NerNot1",
            "PhyreFM"
         ],
         [
            "§fill=#ff0§< ХУДОЖНИК >§fill=#fff§",
            "Pongy25",
            "PoTheWinterCorder",
            "ProctorDorkchop02",
            "ScarletScaledDragon",
            "semi",
            "SquigglyWiggley",
            "Starkiteckt",
            "supper12",
            "Valor52",
            "Zaxento The Greedy",
            "",
            "§fill=#ff0§< СПЕЦИАЛИСТ >§fill=#fff§",
            "Codetoil",
            "ws3917"
         ],
         [
            "§fill=#ff0§< ТЕСТЕР >§fill=#fff§",
            "Alden",
            "Aspey",
            "Balgamlı Kedi",
            "Bilge \"mnwary\"",
            "blue",
            "Brad",
            "brayjamin",
            "ClamsyMoe",
            "delta",
            "Discarded Vessel",
            "Dischnie",
            "DR4GON HE4RT",
            "Dubituar",
            "Efe Kaya"
         ],
         [
            "§fill=#ff0§< ТЕСТЕР >§fill=#fff§",
            "Emurry",
            "EvanGamesGoodman",
            "Fired",
            "FireWizard72X",
            "FuLiNT",
            "Funtermore",
            "gardnaeden",
            "Ghostly",
            "Gon UT",
            "Green Tea",
            "Huggies!",
            "ilovecookies",
            "InvincibleRacoon",
            "Jago128"
         ],
         [
            "§fill=#ff0§< ТЕСТЕР >§fill=#fff§",
            "Joe98912",
            "Jojoton56",
            "Jonkler",
            "Kiwi \"Quinn\"",
            "lil tanski",
            "MR. PETER",
            "MSBen",
            "Murder--Sans_MDR",
            "My Cocoa",
            "Nanorasmus",
            "neo9174",
            "NepAnime",
            "semi",
            "Shaun Duz Stuffs"
         ],
         [
            "§fill=#ff0§< ТЕСТЕР >§fill=#fff§",
            "SHCyank",
            "NerNot1",
            "PixelToons Jaafar",
            "Prezmop",
            "prymus-agd",
            "Quin",
            "RadicalRic",
            "Raelynn",
            "retr22800",
            "Rise",
            "sonicisawesome222",
            "Soup Taels",
            "spaceknife234",
            "SquigglyWiggley"
         ],
         [
            "§fill=#ff0§< ТЕСТЕР >§fill=#fff§",
            "superkippy",
            "Teecup",
            "Tem in a Cowboy Hat",
            "Tenbrooks",
            "ThatGuyWhoLikesFood",
            "The Fallen Angel",
            "Turbulation",
            "Wild Pasta",
            "xNoodlePlayz",
            "Zaxento The Greedy"
         ],
         [
            "§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§",
            "Alden",
            "§fill=#808080§За то что всегда был рядом в момент нужды, и учил меня как стать лучше.§fill=#fff§"
         ],
         [
            "§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§",
            "My Cocoa",
            "§fill=#808080§За то что ты один из \nсамых приветливых людей которых я знаю,\nверу в моё виденье и вдохновение завершить игру.§fill=#fff§"
         ],
         [
            "§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§",
            "Balgamlı Kedi",
            "§fill=#808080§For sticking with me at every\nstage of development, right from\nthe start. Regardless of the era,\nhe's always been there to help.§fill=#fff§"
         ],
         [
            "§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§",
            "Ghostly",
            "§fill=#808080§For being a voice of reason when\nit comes to many aspects of the\ngame, and encouraging me to take\ntesting seriously.§fill=#fff§"
         ],
         [
            "§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§",
            "Zaxento The Greedy",
            "§fill=#808080§For being reliable, brutally\nhonest, giving me lots of\ncriticism and ideas, and being\ntrustworthy from the day we met.§fill=#fff§"
         ],
         [
            "§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§",
            "ThatGuyWhoLikesFood",
            "§fill=#808080§For helping me write crucial\nparts of the game, supporting my\nvision, and helping me express\nmyself in a whole new way.§fill=#fff§"
         ],
         [ "Brought to you by §fill=#ff0§The Mavis & Co.§fill=#fff§" ]
      ],

      final_frontier: {
         header: "(( CAST ))",
         opponents: {
            froggit: {
               name: "FROGGIT",
               author: "ScarletScaledDragon",
               text: {
                  basic: "Pondering\nLife",
                  spare: "Professional\nFrog",
                  flirt: "Pondering\nLove",
                  bully: "Hopping In\nFear"
               }
            },
            whimsun: {
               name: "FLUTTERLYTE",
               author: "ScarletScaledDragon",
               text: {
                  basic: "Learning To\nFly",
                  spare: "Emboldening\nAviator",
                  flirt: "Searching The\nSkies",
                  bully: "Evasively\nManeuvering"
               }
            },
            moldsmal: {
               name: "GELATINI",
               author: "Toby Fox",
               text: {
                  basic: "Found A New\nSpace Station",
                  spare: "Backup\nDancer",
                  flirt: "Exotic Jelly\nDancer",
                  bully: "Found A New\nGalaxy"
               }
            },
            loox: {
               name: "OCULOUX",
               author: "ScarletScaledDragon",
               text: {
                  basic: "Slightly\nBully-Like",
                  spare: "Reformed\nBully",
                  flirt: "Slightly\nFlirtatious",
                  bully: ""
               }
            },
            migosp: {
               name: "SILENTE",
               author: "ScarletScaledDragon",
               text: {
                  basic: "Exceedingly\nAgreeable",
                  spare: "Casually\nEnjoys Life",
                  flirt: "In Love From\nAfar",
                  bully: "Endangerment\nDenier"
               }
            },
            mushy: {
               name: "MUSHY",
               author: "Balgamlı Kedi & ScarletScaledDragon",
               text: {
                  basic: "Shooting\nBlanks",
                  spare: "Quick-Draw\nMagician",
                  flirt: "Gunshot\nHeart-Throb",
                  bully: "Spraying And\nPraying"
               }
            },
            finalghost: {
               name: "LURKSALOT",
               author: "spacey_432",
               text: {
                  basic: "Keeping To\nThemselves",
                  spare: "Finally Held A\nConversation",
                  flirt: "Stoically\nUninvolved",
                  bully: ""
               }
            },
            stardrake: {
               name: "STARDRAKE",
               author: "Burge",
               text: {
                  basic: "Still Looking\nFor Laughs",
                  spare: "Semi-Successful\nComedian",
                  flirt: "Popular With The\nGrown-Ups",
                  bully: ""
               }
            },
            chilldrake: {
               name: "CHILLDRAKE",
               author: "Burge",
               text: {
                  basic: "Still Looking\nFor Supporters",
                  spare: "Gained A Cult\nFollowing",
                  flirt: "Trades Kisses\nFor Supporters",
                  bully: "Anti-Bullying\nActivist"
               }
            },
            spacetop: {
               name: "ASTRO SERF",
               author: "DESM.al",
               text: {
                  basic: "Thinking About\nIts Antenna",
                  spare: "Radio Station\nSensation",
                  flirt: "Love Is On\nThe Air",
                  bully: "Emergency\nBroadcaster"
               }
            },
            jerry: {
               name: "JERRY",
               author: "Discarded Vessel",
               text: {
                  basic: "Getting Ditched\nOn The Daily",
                  spare: "",
                  flirt: "On The Road To\nRedemption",
                  bully: ""
               }
            },
            mouse: {
               name: "WHIZKARAT",
               author: "Zaxento The Greedy & semi",
               text: {
                  basic: "Having An\nIdentity Crisis",
                  spare: "Newest Member Of\nMouse Society",
                  flirt: "Getting Frisky\nWith The Mice",
                  bully: "Scurried Back To\nCat Society"
               }
            },
            doggo: {
               name: "DOGGO",
               author: "Discarded Vessel",
               text: {
                  basic: "Believes In The\nAlmighty Wrench",
                  spare: "Found His Own\nSeeing-Eye Wolf",
                  flirt: "In Love With His\nSeeing-Eye Wolf",
                  bully: "Running To His\nSeeing-Eye Wolf"
               }
            },
            lesserdog: {
               name: "CANIS MINOR",
               author: "major_memestar",
               text: {
                  basic: "Searching For\nAffection",
                  spare: "Found A Loving\nOwner",
                  flirt: "Found An Owning\nLover",
                  bully: "Desperate For\nAffection"
               }
            },
            dogs: {
               name: "DOGAMY & DOGARESSA",
               author: "major_memestar",
               text: {
                  basic: "Still Thinking\nAbout Fetch",
                  spare: "Reigning Puppy-Dog\nEyes Champions",
                  flirt: "Caught In Each-\nOther's Gaze",
                  bully: "Defensive Puppy-\nDog Eyes Engaged"
               }
            },
            greatdog: {
               name: "CANIS MAJOR",
               author: "major_memestar",
               text: {
                  basic: "Unaware Of\nLife's Changes",
                  spare: "Excited By\nLife's Changes",
                  flirt: "Touched By\nLife's Changes",
                  bully: ""
               }
            },
            woshua: {
               name: "SKRUBBINGTON",
               author: "Discarded Vessel",
               text: {
                  basic: "Only 99.1\nPercent Clean",
                  spare: "Power-Washing\nPowerhouse",
                  flirt: "Hot Tub\nManufacturer",
                  bully: "Overpowered\nPressure Washer"
               }
            },
            moldbygg: {
               name: "GELATA",
               author: "Toby Fox",
               text: {
                  basic: "Looking For A\nBaby Sitter",
                  spare: "Slime-Powered\nBarstool",
                  flirt: "Sexy Sitcom\nRegular",
                  bully: "Glorified\nWrestling Prop"
               }
            },
            radtile: {
               name: "RADTILE",
               author: "Balgamlı Kedi & Zaxento The Greedy",
               text: {
                  basic: "Wallowing In\nImperfection",
                  spare: "Improving His\nSelf-Image",
                  flirt: "Dating His Own\nReflection",
                  bully: "Headed For An\nUgly Future"
               }
            },
            shyren: {
               name: "SHYREN",
               author: "Ghostly",
               text: {
                  basic: "Back To Taking\nPiano Lessons",
                  spare: "Mettaton's\nNew Lead Singer",
                  flirt: "In Love With\nA Ghost",
                  bully: "Can't Sing Without\nA Synthesizer"
               }
            },
            doge: {
               name: "DOGE",
               author: "major_memestar",
               text: {
                  basic: "Construction Site\nDrill Sergeant",
                  spare: "Bought A Lifetime\nSpa Subscription",
                  flirt: "Felt Puppy Love\nFor The First Time",
                  bully: ""
               }
            },
            muffet: {
               name: "MUFFET",
               author: "major_memestar",
               text: {
                  basic: "Looking For Her\nNext Payout",
                  spare: "Caring For The\nSpider Clans",
                  flirt: "Picnic Date\nMatchmaker",
                  bully: ""
               }
            },
            pyrope: {
               name: "HOTWIRE",
               author: "semi",
               text: {
                  basic: "Waiting For The\nBeat To Drop",
                  spare: "Lightning-Fast\nRapper",
                  flirt: "Rapper Turned\nLove Song Writer",
                  bully: "Rap Battling To\nThe Near-Death"
               }
            },
            tsundere: {
               name: "TSUNDERIDEX",
               author: "spacey_432",
               text: {
                  basic: "Flying Deeper\nInto Denial",
                  spare: "Sneaking Up On\nYou At Warp Speed",
                  flirt: "Tsun To Be\nYour Dere-Dere",
                  bully: "Finally Met\nIts Match"
               }
            },
            perigee: {
               name: "PERIGEE",
               author: "Discarded Vessel",
               text: {
                  basic: "Another Day,\nAnother Conflict",
                  spare: "Interplanetary\nAmbassador",
                  flirt: "Encouraging Love\nIn Others",
                  bully: "Showing Kindness\nThrough The Pain"
               }
            },
            rg: {
               name: "RG 03 & RG 04",
               author: "semi",
               text: {
                  basic: "In Search Of\nChildhood Friends",
                  spare: "Use Your\nImagination",
                  flirt: "Please Use Your\nImagination",
                  bully: "Royal Guard\nRetirees"
               }
            },
            glyde: {
               name: "GLYDE",
               author: "Burge",
               text: {
                  basic: "Not Your Ideal\nBusiness Partner",
                  spare: "A Little Less\nShady Than Usual",
                  flirt: "Not Your Ideal\nBedfellow",
                  bully: ""
               }
            },
            burgie: {
               name: "BURGERPANTS",
               author: "Pongy25",
               text: {
                  basic: "Running Hastily\nAt The Life Ahead",
                  spare: "Looking Forward\nTo The Life Ahead",
                  flirt: "Finding Love\nIn The Life Ahead",
                  bully: ""
               }
            },
            madjick: {
               name: "COZMO",
               author: "semi",
               text: {
                  basic: "Looking For A\nDictionary",
                  spare: "Famous\nMagician",
                  flirt: "Found A New Kind\nOf Magic",
                  bully: ""
               }
            },
            knightknight: {
               name: "TERRESTRIA",
               author: "major_memestar",
               text: {
                  basic: "In Search Of\nThe Past",
                  spare: "Renowned\nHistorian",
                  flirt: "Has A Crush On\nThe Homeworld",
                  bully: ""
               }
            },
            froggitex: {
               name: "FINAL FROGGIT",
               author: "ScarletScaledDragon & PoTheWinterCorder",
               text: {
                  basic: "Keeping Its\nWisdom To Itself",
                  spare: "Sharing Its\nWisdom Openly",
                  flirt: "Using Its Wisdom\nFor Love",
                  bully: "Using Its Wisdom\nFor Survival"
               }
            },
            whimsalot: {
               name: "FLUTTERKNYTE",
               author: "ScarletScaledDragon",
               text: {
                  basic: "Still Working\nEvery Day",
                  spare: "Finally Took\nA Break",
                  flirt: "Looking For Some\nPrivate Time",
                  bully: "Working Harder\nOut Of Fear"
               }
            },
            astigmatism: {
               name: "EYEWALKER PRIME",
               author: "semi",
               text: {
                  basic: "Still A\nBig Bully",
                  spare: "Domineering\nEye Doctor",
                  flirt: "Domineering\nLeather Tailor",
                  bully: "Overthrown By\nAn Oculoux"
               }
            },
            migospel: {
               name: "SILENCIO",
               author: "Balgamlı Kedi & spacey_432",
               text: {
                  basic: "Still A\nShameless Coward",
                  spare: "A Little Less Of\nA Coward",
                  flirt: "In Love With\nIts Fear",
                  bully: "Running Faster\nThan Ever Before"
               }
            },
            mushketeer: {
               name: "MUSHKETEER",
               author: "ScarletScaledDragon & Ghostly",
               text: {
                  basic: "One Mushroom\nArmy",
                  spare: "Hardened Warrior\nSeeking Peace",
                  flirt: "Defeated By The\nPower Of Love",
                  bully: "Scared\nStraight"
               }
            }
         },
         swords: {
            papyrus: {
               name: "PAPYRUS",
               author: "ProctorDorkchop02 & MattSpriteMaster"
            },
            sans: {
               name: "SANS",
               author: "ProctorDorkchop02 & Fired"
            },
            undyne: {
               name: "UNDYNE",
               author: "major_memestar"
            },
            alphys: {
               name: "ALPHYS",
               author: "major_memestar"
            },
            mewmew: {
               name: "MEW MEW",
               author: "spacey_432"
            },
            napstablook: {
               name: "NAPSTABLOOK",
               author: "spacey_432"
            },
            mettaton: {
               name: "METTATON",
               author: "supper12 & MattSpriteMaster"
            },
            toriel: {
               name: "TORIEL",
               author: "MattSpriteMaster"
            },
            asgore: {
               name: "ASGORE",
               author: "MattSpriteMaster"
            },
            monsterkid: {
               name: "MONSTER KID",
               author: "spacey_432"
            },
            asriel: {
               name: "ASRIEL",
               author: "MattSpriteMaster"
            }
         }
      },

      langPrompt: "[↑ или ↓] чтобы Выбрать / [Z или ENTER] чтобы Подтвердить",

      quitText1: "Уходим",
      quitText2: "Уходим.",
      quitText3: "Уходим..",

      real1: [
         [
            "Спасибо за то, что вы поиграли в Outertale.",
            "Для меня, работа над этим проектом была честью,",
            "и удовольствием."
         ],
         [ "When I started this journey, I never", "thought I'd get this far, but here we", "are anyway, at the end." ],
         [
            "For me, UNDERTALE was a life-changing",
            "experience, and one that was very hard to",
            "let go of after I first played it."
         ],
         [
            "So, with OUTERTALE, I wanted to give you",
            "another chance to exist in a world like it,",
            "as if it were your first time."
         ],
         [
            "I hope I've given you that chance.",
            "I hope you've come away satisfied with",
            "the time you've spent in this world."
         ],
         [
            "No matter what you've done in your life,",
            "your actions here speak volumes about the",
            "kind of person you really are."
         ],
         [
            "It's because of you that you got the ending",
            "you did, and nothing can take that",
            "experience away from you."
         ],
         [ "Despite your mistakes... you are awesome,", "and you deserve love and attention.", "Remember that, okay?" ]
      ],
      real2: "Take care of yourself, \"$(x).\"",

      end1: "THE END",
      end2: "THE END...?",

      restartText1: "Перезапуск",
      restartText2: "Перезапуск.",
      restartText3: "Перезапуск..",

      title: "OUTERTALE (RC6)",
      title_timeline: "OUTERTALE...? (RC6)"
   },

   gamepad: {
      prompt: "НАСТРОЙКА КНОПОК",
      prompt_desc:
         "Нажмите кнопку на геймпаде чтобы настроить\nеё под действие в игре.\n\nНажмите кнопку снова для подтверждения,\nили нажмите другие кнопки чтобы их тоже настроить.\n\nНажмите ESC чтобы пропустить настройку.",
      prompt_counter: "Выбранное Управление: $(x)",
      z: "[Z или ENTER] - Подтвердить",
      x: "[X или SHIFT] - Отменить",
      c: "[C или CTRL] - Меню (В игре)",
      u: "[UP или W] - Вверх",
      l: "[LEFT или A] - Влево",
      d: "[DOWN или S] - Вниз",
      r: "[RIGHT or D] - Вправо",
      f: "[F4] - Полный экран",
      prompt_done: "Настройка завершена.\nНажмите любую кнопку чтобы продолжить.",
      prompt_done_browser: "\nПримечание: На этой платформе, геймпад не\nвсегда сможет входить в Полный экран.",
      prompt_load:
         "Геймпад уже был настроен.\nНажмите любую кнопку чтобы продолжить, или\nнажмите любую кнопку три раза подряд\nчтобы перезапустить настройку.\n\nНажмите ESC чтобы пропустить настройку."
   },

   general: {
      asriel: "Азриель",
      asriel_location: "Забвение",
      disabled: "ВЫКЛЮЧЕН",
      enabled: "ВКЛЮЧЁН",
      finish: "Нажмите [X] чтобы Завершить",
      g: "З",
      hp: "ОЗ",
      inf: "INF",
      landing1: "[PRESS Z OR ENTER]",
      lv: "УР",
      mystery1: "§mystify=АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя§aaaaaa§mystify=§",
      mystery2: "{@mystify=АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя}aaaaaa{@mystify=}",
      mystery2l: "{@mystify=абвгдеёжзийклмнопрстуфхцчшщъыьэюя}aaaaaa{@mystify=}",
      mystery2u: "{@mystify=АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ}aaaaaa{@mystify=}",
      no: "Нет",
      nominal: "§fill=#0f0§NOMINAL",
      percent: "$(x)%",
      player: "player",
      settings: "Настройки",
      unknown: "?",
      xm: "ЭВ",
      yes: "Да"
   },

   menu: {
      box1: "ИНВЕНТАРЬ",
      box2: "КОРОБКА",
      key1: "БРЕЛОК",

      confirm1: "Is this name correct?",
      confirm2: "A name has already\nbeen chosen.",
      confirm3: "Go back",

      footer: "OUTERTALE V5.00 (c) 2024 SPACEY_432",

      heal1: "* (HP fully restored.)",
      heal2: "* (You recovered $(x) HP.)",
      heal3: "* (You lost $(x) HP.)",
      heal4: "* (HP fully depleted.)",

      item1: "ИСП",
      item2: "НАДЕТЬ",
      item3: "ИНФО",
      item4: "ВЫБРОС",

      load1: "Продолжить",
      load2: "Наблюдать",
      load3: "Сброс",
      load4: "Истинный Сброс",

      name1: "Назовите застрявшего человека.",
      name2: "Выйти",
      name3: "Backspace",
      name4: "Done",
      name5: "§fill=#808080§ [ESC] - Quit / [ENTER] - Done",

      save1: "Save",
      save2: "Return",
      save3: "Файл сохранён.",

      settings1: "НАСТРОЙКИ",
      settings2: "ВЫЙТИ",
      settings3: "ЯЗЫК",
      settings3a: "РУССКИЙ",
      settings4: "ЗВУКОВЫЕ ЭФФЕКТЫ",
      settings5: "МУЗЫКА",
      settings6: "ЭПИЧНЫЙ ГРАФОН",
      settings7: "МИГАЮЩИЕ ИЗОБРАЖЕНИЯ",
      settings7a: "ОБЫЧНЫЕ",
      settings7b: "УМЕНЬШЕННЫЕ",
      settings8: "СЕНСОРНОЕ УПРАВЛЕНИЕ",
      settings8a: "СЛЕВА",
      settings8b: "СПРАВА",
      settings8c: "СКРЫТЫ",
      settings9: "МЁРТВАЯ ЗОНА",
      settings10: "ОТКРЫТЬ ПАПКУ МОДОВ",
      settings11: "ПЕРЕЗАГРУЗКА",

      sidebar1: "ВЕЩИ",
      sidebar2: "СТАТ",
      sidebar3: "ТЕЛ",
      sidebar4: "КОНФ",
      sidebar5: "S",

      start1: [
         "--- Инструкция ---",
         "[Z или ENTER] - Подтвердить",
         "[X или SHIFT] - Отменить",
         "[C или CTRL] - Меню (В игре)",
         "[F4] - Полный экран",
         "[Зажать ESC] - Перезагрузка",
         "Когда ОЗ на нуле, вы проигрываете."
      ],
      start2: "Начать Игру",

      stat1: "АТ",
      stat2: "ЗЩ",
      stat3: "ОРУЖИЕ",
      stat4: "БРОНЯ",
      stat5: "ЗОЛОТО",
      stat6: "ОП",
      stat7: "СЛЕД",
      stat8: "§fill=#ff0§Внимание:\nНе-каноничная\nлиния времени.",
      stat9: "УБИТО",
      stat10: "ЗАПУГАНО",
      stat11: "ЗАИГРАНО",
      stat12: "СТАТУС",
      stat13: "\"$(x)\"",

      story1: [ "<24>{#p/storyteller}Давным-давно, два вида правили солнечной системой: ЛЮДИ и МОНСТРЫ.{^35}{}" ],
      story2: [ "<24>Со временем, между ними разрослась война.{^35}{}" ],
      story3: [ "<24>Когда родная планета МОНСТРОВ была уничтожена, ЛЮДИ объявили победу.{^35}{}" ],
      story4: [ "<24>Оставшихся МОНСТРОВ изгнали на заброшенный аванпост.{^35}{}" ],
      story5: [ "<24>Мощный силовой барьер был возведён, и МОНСТРОВ запечатали в нём.{^35}{}" ],
      story6: [ "<24>Много лет спустя.{^8}.{^8}.{^35}{}" ],
      story7: [ "<#24>     СЕКТОР ЭБОТТ     \n         251X{^35}{}" ],
      story8: [ "<24>Легенды гласят, что космические корабли никогда не возвращаются оттуда.{^35}{}" ],
      story9: [ "<24>{^100}{}" ],
      story10: [ "<24>{^100}{}" ],
      story11: [ "<24>{^35}{}" ]
   },

   timeline: {
      main: "Resume Canon Timeline",
      main_ex: "Start Canon Timeline",
      timelines: "Other Slots",
      bisect: "Bisect",
      delete: "Delete",
      instruction: "[ESC] to Cancel / [ENTER] to Confirm",
      instruction_gamepad: "Press any button on your gamepad to open the keyboard.",
      launch: "Launch",
      rename: "Rename",
      create: "Create New",
      placeholder: "Enter Timeline Name",
      confirm: "Are You Sure?"
   }
};


// END-TRANSLATE
