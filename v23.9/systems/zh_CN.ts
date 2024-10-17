// START-TRANSLATE

const text = {
   battle: {
      death0: ["{#p/human}（你深吸了一口气。）", "（你充满了决心。）"],
      death1: ["现在还不能放弃...", "$(name)！\n保持你的决心..."],
      death2: ["我们的命运都\n寄托于你...", "$(name)！\n保持你的决心..."],
      death3: ["你会没事的！", "$(name)！\n保持你的决心..."],
      death4: ["别失去希望！", "$(name)！\n保持你的决心..."],
      death5: ["现在还不能结束！", "$(name)！\n保持你的决心..."],

      flee1: "   * 先走一步...",
      flee2: "   * 我先撤了。",
      flee3: "   * 我还有别的事要做。",
      flee4: "   * 别拖我后腿。",
      flee5: "   * 你逃跑了，\n     你获得了$(x) EXP和$(y)G。",

      mercy_assist: "* 外援",
      mercy_flee: "* 逃跑",
      mercy_spare: "* 饶恕",

      victory1: "<32>{#p/story}* 你胜利了！\n* 你获得了$(x) EXP和$(y)G。",
      victory2: "<32>{#p/story}* 你胜利了！\n* 你获得了$(x) EXP和$(y)G。\n* 你的LOVE增加了。"
   },

   developer: {
      console: {
         header: "错误",
         p_resume: {
            header: "忽略",
            resume: "点击此处忽略错误"
         },
         blurb: "程序出现错误！\n请将屏幕截图发给开发者。"
      },
      control: {
         tab: "控制",
         headers: ["常规", "战斗中"],
         items: [
            [
               "音乐初始化",
               "角色初始化",
               "无限金钱",
               "允许角色交互",
               "允许游戏输入",
               "允许角色移动",
               "无视墙体",
               "快速存档",
               "跳过文本",
               "自由镜头"
            ],
            [
               "允许外援",
               "清除弹幕",
               "退出战斗",
               "重置框体大小",
               "重置菜单",
               "允许逃跑",
               "无限HP",
               "安抚敌方全体",
               "自杀",
               "削弱敌方全体"
            ]
         ],
         p_speed: {
            fps: "$(x)帧",
            halt: "停止",
            header: "游戏倍速",
            multiplier: "$(x)x",
            next: "加速",
            prev: "减速",
            sec: "每帧$(x)秒"
         }
      },
      godhome: {
         tab: "测试",
         p_teleport: {
            header: "房间",
            action: "传送"
         },
         p_encounter: {
            header: "遭遇战",
            action: "开始"
         },
         p_armor: {
            header: "防具"
         },
         p_weapon: {
            header: "武器"
         }
      },
      inspect: {
         tab: "查看",
         headers: ["图层", "类型"],
         switches: [
            ["基层", "下层", "主层", "上层", "菜单层"],
            ["碰撞箱", "贴图", "文本"]
         ],
         p_explorer: {
            header: "浏览",
            layers: ["基层", "下层", "主层", "上层", "菜单层"],
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
         debug_instructions: "按[TAB]键浏览调试信息",
         debug: {
            a: "A", 
            acceleration: "Acceleration",
            active: "动态",
            alpha: "Alpha",
            anchor: "Anchor",
            b: "B", 
            blend: "Blend",
            border: "Border",
            charset: "字符集",
            compute: "实际尺寸",
            content: "Content",
            crop: "Crop",
            down: "下",
            duration: "Duration",
            exp: "EXP",
            extent: "Extent",
            f: "F", 
            face: "面部朝向",
            false: "否",
            fill: "填充颜色",
            fontName: "字体名称",
            fontSize: "字体大小",
            frames: "Frames",
            gravity: "Gravity",
            group: "战斗组",
            hp: "HP",
            index: "Index",
            inert: "Inert",
            key: "名称",
            lastSavedTime: "上次存档时间",
            layer: "图层编号",
            layers: "Layers",
            left: "左",
            metadata: "数据说明",
            music: "音乐",
            namespace: "命名空间",
            none1: "NONE",
            none2: "none",
            objects: "对象数",
            oversaver: "Oversaver",
            parallax: "Parallax",
            position: "位置坐标",
            primed: "Primed",
            priority: "Priority",
            registry: "存档变量",
            renderer: "Renderer",
            resources: "已使用资源",
            reverse: "Reverse",
            right: "右",
            room: "房间",
            roomState: "房间状态",
            rotation: "Rotation",
            s: "S", 
            scale: "缩放",
            shopSelection: "当前选项（商店菜单）",
            size: "设定尺寸",
            spacing: "Spacing",
            spin: "Spin",
            sprites: "Sprites",
            step: "Step",
            stroke: "Stroke",
            subcrop: "Subcrop",
            talk: "正在说话",
            target: "Target",
            text: "文本",
            tint: "Tint",
            trackedAssets: "正在使用的资源",
            true: "是",
            unknown: "UNKNOWN",
            up: "上",
            vars: "变量",
            velocity: "Velocity",
            volatile: "Volatile"
         }
      },
      savemod: {
         tab: "存档",
         header1: "存档编辑器",
         domains: [
            "数据 (布尔型)",
            "数据 (数值型)",
            "数据 (字符串型)",
            "节点 (布尔型)",
            "节点 (数值型)",
            "节点 (字符串型)"
         ],
         p_page: {
            header: "浏览",
            prev: "上一页",
            next: "下一页"
         },
         prompt: "输入数值",
         back: "返回"
      },
      storage: {
         tab: "物品",
         header: "物品库存编辑器",
         p_container: { header: "选择容器", prev: "上一页", next: "下一页" },
         display: { inventory: "物品栏", dimboxA: "次元箱 A", dimboxB: "次元箱 B" }
      }
   },

   dialog: {
      dialog_clear_title: "删除存档",
      dialog_error_title: "错误",
      dialog_notice_title: "提示",
      dialog_open: { buttonLabel: "打开", name: "存档文件", title: "打开存档" },
      dialog_save: { buttonLabel: "保存", name: "存档文件", title: "保存存档" },
      error_access: "存档文件无效：“$(x)”",
      error_load: "无法解析存档。",
      error_mod: "模组“$(x)”无法加载。",
      message_alert: ["确定"],
      message_confirm: ["取消", "确定"],
      prompt_clear: "删除这个存档吗？",
      prompt_demo: "已将您的OUTERTALE demo存档\n移动到其他时间线槽位中。",
      prompt_save: "将存档保存到其他位置吗？",
      prompt_save_alternate: "将下列文本\n复制到JSON文件，\n并保存到设备中。",
      prompt_open: "读取这个存档吗？"
   },

   extra: {
      credits: [
         [
            "§fill:#ff0§< 游戏开发者 >§fill:#fff§",
            "spacey_432",
            "",
            "§fill:#ff0§< 文本编写 >§fill:#fff§",
            "Balgamlı Kedi",
            "Bilge \"mnwary\"",
            "Efe Kaya",
            "Ghostly",
            "My Cocoa",
            "neo9174",
            "Rise",
            "ThatGuyWhoLikesFood",
            "Turbulation",
            "Zaxento The Greedy"
         ],
         [
            "§fill:#ff0§< 技术助理 >§fill:#fff§",
            "Codetoil",
            "ws3917",
            "",
            "§fill:#ff0§< 测试人员 >§fill:#fff§",
            "Alden",
            "Aspey",
            "Balgamlı Kedi",
            "Bilge \"mnwary\"",
            "blue",
            "brayjamin",
            "ClamsyMoe",
            "delta",
            "Discarded Vessel"
         ],
         [
            "§fill:#ff0§< 测试人员 >§fill:#fff§",
            "Dischnie",
            "Dubituar",
            "Efe Kaya",
            "Emurry",
            "EvanGamesGoodman",
            "Fired",
            "FireWizard72X",
            "FuLiNT",
            "Funtermore",
            "gardnaeden",
            "Ghostly",
            "Gon UT",
            "Green Tea"
         ],
         [
            "§fill:#ff0§< 测试人员 >§fill:#fff§",
            "Huggies!",
            "ilovecookies",
            "InvincibleRacoon",
            "Jago128",
            "Joe98912",
            "Jojoton56",
            "Kiwi \"Quinn\"",
            "lil tanski",
            "MR. PETER",
            "MSBen",
            "Murder--Sans_MDR",
            "My Cocoa",
            "Nanorasmus"
         ],
         [
            "§fill:#ff0§< 测试人员 >§fill:#fff§",
            "neo9174",
            "NerNot1",
            "petar3644",
            "PixelToons Jaafar",
            "Prezmop",
            "prymus-agd",
            "Quin",
            "RadicalRic",
            "Raelynn",
            "retr22800",
            "Rise",
            "semi",
            "Shaun Duz Stuffs"
         ],
         [
            "§fill:#ff0§< 测试人员 >§fill:#fff§",
            "SHCyank",
            "sonicisawesome222",
            "Soup Taels",
            "spaceknife234",
            "SquigglyWiggley",
            "superkippy",
            "Teecup",
            "Tenbrooks",
            "ThatGuyWhoLikesFood",
            "Turbulation",
            "Wild Pasta",
            "xNoodlePlayz",
            "Zaxento The Greedy"
         ],
         [
            "§fill:#ff0§< 美工 >§fill:#fff§",
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
            "NerNot1"
         ],
         [
            "§fill:#ff0§< 美工 >§fill:#fff§",
            "PhyreFM",
            "Pongy25",
            "PoTheWinterCorder",
            "ProctorDorkchop02",
            "ScarletScaledDragon",
            "semi",
            "SquigglyWiggley",
            "Starkiteckt",
            "supper12",
            "Valor52",
            "Zaxento The Greedy"
         ],
         [
            "§fill:#ff0§< 特别鸣谢 >§fill:#fff§",
            "My Cocoa",
            "§fill:#808080§你是我认识的最暖心的人，\n是第一个支持我梦想的人。\n在你的激励下，\n我才能完成这款游戏。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特别鸣谢 >§fill:#fff§",
            "Alden",
            "§fill:#808080§感谢你在我需要支持时陪伴我，\n教会我许多做人做事的道理，\n让我变得更好。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特别鸣谢 >§fill:#fff§",
            "Ghostly",
            "§fill:#808080§感谢你在游戏的许多方面\n给出了很棒的建议，\n鼓励我认真对待测试工作。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特别鸣谢 >§fill:#fff§",
            "Balgamlı Kedi",
            "§fill:#808080§感谢你从游戏开发之初\n就一直陪伴我。\n不管什么时候，你总会在\n我最需要帮助的时候支持我。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特别鸣谢 >§fill:#fff§",
            "Zaxento The Greedy",
            "§fill:#808080§感谢你直言不讳，\n给予我大量批评和建议。\n从认识的那天起\n你就非常值得信赖。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特别鸣谢 >§fill:#fff§",
            "ThatGuyWhoLikesFood",
            "§fill:#808080§感谢你帮助我完成了\n游戏的几个关键部分，\n并始终支持我的梦想。§fill:#fff§"
         
        ],
         [
            "§fill:#ff0§< 汉化组成员 >§fill:#fff§",
            "",
            "§fill:#ff7§【组长】§fill:#fff§",
            "ws3917",
            "§fill:#ff7§【程序】§fill:#fff§",
            "ws3917",
            "",
            "§fill:#ff7§【文翻】§fill:#fff§",
            "ws3917",
            "Murder--Sans_MDR",
            "1个渣渣",
            "§fill:#ff7§【文校】§fill:#fff§",
            "ws3917",
            "晓晓_Akatsuki"
        ],
        [
            "§fill:#ff0§< 汉化组成员 >§fill:#fff§",
            "",
            "§fill:#ff7§【美术】§fill:#fff§",
            "晓晓_Akatsuki",
            "屑moons月亮君",
            "彳卸云鬼_",
            "mustad（边框Mod）",
            "",
            "§fill:#ff7§【精神支持&推广】§fill:#fff§",
            "幻-_-风",
            "Murder--Sans_MDR",
            "AX暗星233",
            "屑moons月亮君"
        ],
        [
            "§fill:#ff0§< 汉化组成员 >§fill:#fff§",
            "",
            "§fill:#ff7§【汉化测试】§fill:#fff§",
            "ws3917",
            "Murder--Sans_MDR",
            "雪理奈",
            "（以及其他汉化组成员）",
            "",
            "感谢汉化组成员的努力付出！",
            "同时，也感谢您对这款游戏的喜爱！",
            "",
            "§fill:#808080§P.S. 汉化组正在为游戏制作各种Mod！\n欢迎B站关注@ws3917\n了解最新Mod开发进度！§fill:#fff§"
        ],
["特别鸣谢 由 §fill:#ff0§Mavis与朋友们§fill:#fff§ 提供"]
      ],

      final_frontier: {
         header: "(( 演员表 ))",
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
               name: "?",
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
         },
         end: "剧终"
      },

      quitText1: "正在退出",
      quitText2: "正在退出.",
      quitText3: "正在退出..",

      real1: [
         [
            "Thank you for playing Outertale.",
            "Working on this project has been an honor,",
            "and a pleasure on my part."
         ],
         ["When I started this journey, I never", "thought I'd get this far, but here we", "are anyway, at the end."],
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
         ["Despite your mistakes... you are awesome,", "and you deserve love and attention.", "Remember that, okay?"]
      ],
      real2: "Take care of yourself, \"$(x).\"",
      real3: "剧终",

      restartText1: "正在重启",
      restartText2: "正在重启.",
      restartText3: "正在重启..",

      title: "OUTERTALE (BETA V23)"
   },

   gamepad: {
      prompt: "手柄设定",
      prompt_desc:
         "从游戏手柄上选择一个按键\n用来控制游戏中的某个操作。\n\n按下相同的按键进行确认，\n或按下其他按键重新设置。\n\n按[ESC]跳过设置。",
      prompt_counter: "输入分配到：$(x)",
      z: "[Z 或 ENTER] - 确认/交互",
      x: "[X 或 SHIFT] - 取消",
      c: "[C 或 CTRL] - 菜单（游戏内）",
      u: "[↑ 或 W] - 上移",
      l: "[← 或 A] - 左移",
      d: "[↓ 或 S] - 下移",
      r: "[→ 或 D] - 右移",
      f: "[F4] - 全屏",
      prompt_done: "设置完成。\n按任意键继续。",
      prompt_done_browser: "\n注意：在本平台运行游戏时，\n使用游戏手柄可能无法全屏游玩。",
      prompt_load:
         "游戏手柄设置完成，\n按任意键继续。\n或者连按某个键三次\n重新设置手柄。"
   },

   general: {
      asriel: "Asriel",
      asriel_location: "The Oblivion",
      disabled: "关闭",
      enabled: "开启",
      finish: "按 [X] 返回",
      g: "G",
      hp: "HP",
      inf: "INF",
      landing1: "[按下 Z 或 ENTER]",
      lv: "LV",
      mystery1: "§mystify:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz§aaaaaa§mystify:§",
      mystery2: "{@mystify:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify:}",
      mystery2l: "{@mystify:abcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify:}",
      mystery2u: "{@mystify:ABCDEFGHIJKLMNOPQRSTUVWXYZ}aaaaaa{@mystify:}",
      no: "否",
      nominal: "§fill:#0f0§正常",
      percent: "$(x)%",
      player: "玩家",
      settings: "游戏设置",
      unknown: "?",
      xm: "XM",
      yes: "是"
   },

   menu: {
      box1: "物品栏",
      box2: "箱子",
      key1: "钥匙串",

      confirm1: "确定要选择这个名字吗？",
      confirm2: "已经选定了一个名字。",
      confirm3: "返回",

      footer: "OUTERTALE V5.00 (c) 2024 SPACEY_432 简体中文版 PSOT汉化组",

      heal1: "* （HP已回满。）",
      heal2: "* （你回复了$(x) HP。）",
      heal3: "* （你失去了$(x) HP。）",
      heal4: "* （HP已清零。）",

      item1: "使用",
      item2: "装备",
      item3: "信息",
      item4: "丢弃",

      load1: "继续",
      load2: "旁观",
      load3: "重置",
      load4: "真正的重置",

      name1: "为受困的人类命名：",
      name2: "返回",
      name3: "删除",
      name4: "确定",
      name5: "§fill:#808080§键盘输入，支持中文。\n\n[ENTER] - 确定\n[BACKSPACE] - 删除\n[ESC] - 返回",

      save1: "保存",
      save2: "返回",
      save3: "进度已保存！",

      settings1: "游戏设置",
      settings2: "返回",
      settings3: "语言",
      settings3a: "简体中文",
      settings4: "音效",
      settings5: "音乐",
      settings6: "精致图像",
      settings7: "闪烁画面",
      settings7a: "默认",
      settings7b: "削减",
      settings8: "控制按钮位置",
      settings8a: "左",
      settings8b: "右",
      settings9: "摇杆死区",
      settings10: "打开模组目录",

      sidebar1: "物品",
      sidebar2: "状态",
      sidebar3: "电话",
      sidebar4: "设置",
      sidebar5: "S",

      start1: [
         "---- 操作介绍 ----",
         "[Z 或 ENTER] - 确认/交互",
         "[X 或 SHIFT] - 取消",
         "[C 或 CTRL] - 菜单（游戏内）",
         "[F4] - 全屏",
         "[长按 ESC] - 重启",
         "当 HP 降至 0，你就输了。"
      ],
      start2: "开始游戏",

      stat1: "攻击",
      stat2: "防御",
      stat3: "武器",
      stat4: "防具",
      stat5: "金钱",
      stat6: "EXP",
      stat7: "下级",
      stat8: "§fill:#ff0§警告：\n不是\n主时间线。",
      stat9: "击杀",
      stat10: "伤害",
      stat11: "调情",
      stat12: "状态",

      story1: ["{#i/x2}很久以前，{^3}太阳系由\n两个物种统治着：{^5}\n人类和怪物。"],
      story2: ["{#i/x2}随着时间的推移，{^3}\n两个物种之间爆发了战争。"],
      story3: ["{#i/x2}最终，\n怪物的母星被摧毁，\n人类宣布了胜利。{^5}"],
      story4: ["{#i/x2}他们将剩下的怪物流放到{^1}\n一个废弃的前哨站。{^5}"],
      story5: ["{#i/x2}人类建起一道强大的力场，{^3}\n将怪物们封印在内。{^5}"],
      story6: ["{#i/x2}许多年后.{^8}.{^8}."],
      story7: ["µµµµµµµ EBOTT区 µµµµ\nµµµµµµµµ 251X{^20}{}"],
      story8: ["{#i/x2}传说，宇宙中有一个地方，{^3}\n发射到那里的飞船{^1}\n都再也没有返航。{^20}{}"],
      story9: ["{^100}{}"],
      story10: ["{^100}{}"],
      story11: ["{^50}{}"]
   },

   timeline: {
      main: "重返主时间线",
      timelines: "其他时间线槽位",
      bisect: "切分",
      delete: "删除",
      instruction: "[ESC] 取消 / [ENTER] 确定",
      instruction_gamepad: "按手柄上任意按钮打开键盘。",
      launch: "启动",
      rename: "重命名",
      create: "新建",
      placeholder: "输入时间线名称",
      confirm: "确定删除吗？"
   }
};


// END-TRANSLATE

export default text;
