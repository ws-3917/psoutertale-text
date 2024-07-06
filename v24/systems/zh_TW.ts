// START-TRANSLATE

export default {
   battle: {
      death0: [ "(You take a deep breath.)", "{#1/x2}（你充滿了決心。）" ],
      death1: [ "現在還不能放棄...", "$(name)！\n保持你的決心..." ],
      death2: [ "我們的命運都\n寄託於你...", "$(name)！\n保持你的決心..." ],
      death3: [ "你會沒事的！", "$(name)！\n保持你的決心..." ],
      death4: [ "別失去希望！", "$(name)！\n保持你的決心..." ],
      death5: [ "現在還不能結束！", "$(name)！\n保持你的決心..." ],

      flee1: "   * 先走一步...",
      flee2: "   * 我先撤了。",
      flee3: "   * 我還有別的事要做。",
      flee4: "   * 別拖我後腿。",
      flee5: "   * 你逃跑了，\n   * 你獲得了$(x) EXP和$(y)G。",

      mercy_assist: "* 外援",
      mercy_flee: "* 逃跑",
      mercy_spare: "* 饒恕",

      victory1: "<32>{#p/story}* 你勝利了！\n* 你獲得了$(x) EXP和$(y)G。",
      victory2: "<32>{#p/story}* 你勝利了！\n* 你獲得了$(x) EXP和$(y)G。\n* 你的LOVE增加了。"
   },

   developer: {
      console: {
         header: "錯誤",
         p_resume: {
            header: "忽略",
            resume: "點擊此處忽略錯誤"
         },
         blurb: "程式出現錯誤！\n請將錯誤資訊截圖發給開發者。"
      },
      control: {
         tab: "快捷功能",
         headers: [ "主世界", "戰鬥中" ],
         items: [
            [
               "音樂初始化",
               "角色初始化",
               "無限金錢",
               "允許角色互動",
               "允許遊戲鍵入",
               "允許角色行動",
               "無視牆體",
               "快速存檔",
               "跳過文本",
               "自由視角"
            ],
            [
               "允許外援",
               "清除彈幕",
               "退出戰鬥",
               "重置框體大小",
               "重置選單",
               "允許逃跑",
               "無限HP",
               "安撫所有敵人",
               "自殺",
               "清空敵方血條"
            ]
         ],
         p_speed: {
            fps: "$(x)幀",
            halt: "暫停",
            header: "遊戲倍速",
            multiplier: "$(x)倍速",
            next: "加速",
            prev: "減速",
            sec: "每幀$(x)秒"
         }
      },
      godhome: {
         tab: "傳送/戰鬥",
         p_teleport: {
            header: "房間",
            action: "傳送"
         },
         p_encounter: {
            header: "戰鬥",
            action: "開始"
         },
         p_armor: {
            header: "防具"
         },
         p_weapon: {
            header: "武器"
         }
      },
      inspect: {
         tab: "察看圖層",
         headers: [ "圖層", "類別" ],
         switches: [
            [ "基層", "下層", "主層", "上層", "選單層" ],
            [ "碰撞箱", "貼圖", "文本" ]
         ],
         p_explorer: {
            header: "瀏覽",
            layers: [ "基層", "下層", "主層", "上層", "選單層" ],
            letters: {
               animation: "動",
               character: "NPC",
               rectangle: "矩",
               entity: "形",
               hitbox: "箱",
               object: "物",
               player: "角",
               sprite: "圖",
               text: "文"
            }
         },
         debug_instructions: "按[TAB]鍵瀏覽除錯資訊",
         debug: {
            a: "動", 
            acceleration: "Acceleration",
            active: "動態",
            alpha: "Alpha",
            anchor: "Anchor",
            b: "B", 
            blend: "Blend",
            border: "Border",
            compute: "實際尺寸",
            content: "Content",
            crop: "Crop",
            down: "下",
            duration: "Duration",
            exp: "EXP",
            extent: "Extent",
            f: "F", 
            face: "面部朝向",
            false: "否",
            fill: "填充顏色",
            fontFamily: "Font Family",
            fontSize: "字體大小",
            frames: "Frames",
            gravity: "Gravity",
            group: "戰鬥組",
            hp: "HP",
            index: "Index",
            inert: "Inert",
            key: "名稱",
            lastSavedTime: "上次存檔時間",
            layer: "圖層編號",
            layers: "Layers",
            left: "左",
            metadata: "資料說明",
            music: "音樂",
            namespace: "命名空間",
            none1: "NONE",
            none2: "none",
            objects: "對象數",
            oversaver: "Oversaver",
            parallax: "Parallax",
            position: "位置座標",
            primed: "Primed",
            priority: "Priority",
            registry: "存檔變量",
            renderer: "Renderer",
            resources: "已使用資源",
            reverse: "Reverse",
            right: "右",
            room: "房間",
            roomState: "房間狀態",
            rotation: "Rotation",
            s: "圖", 
            scale: "縮放",
            shopSelection: "當前選項（商店選單）",
            size: "設定尺寸",
            spacing: "Spacing",
            spin: "Spin",
            sprites: "Sprites",
            step: "Step",
            stroke: "Stroke",
            subcrop: "Subcrop",
            talk: "正在說話",
            target: "Target",
            text: "文本",
            tint: "Tint",
            trackedAssets: "正在使用的資源",
            true: "是",
            unknown: "UNKNOWN",
            up: "上",
            vars: "變量",
            velocity: "Velocity",
            volatile: "Volatile"
         }
      },
      savemod: {
         tab: "編輯存檔",
         header1: "存檔編輯器",
         domains: [
            "資料（布爾型）",
            "資料（數值型）",
            "資料（字符串型）",
            "節點（布爾型）",
            "節點（數值型）",
            "節點（字符串型）"
         ],
         p_page: {
            header: "察看圖層",
            prev: "上一頁",
            next: "下一頁"
         },
         prompt: "鍵入變量值",
         back: "返回"
      },
      storage: {
         tab: "物品庫存",
         header: "物品庫存編輯器",
         p_container: { header: "選擇容器", prev: "上一頁", next: "下一頁" },
         display: { inventory: "物品欄", dimboxA: "次元箱 A", dimboxB: "次元箱 B" }
      }
   },

   dialog: {
      dialog_clear_title: "刪除存檔",
      dialog_error_title: "錯誤",
      dialog_notice_title: "提示",
      dialog_open: { buttonLabel: "打開", name: "存檔檔案", title: "匯入存檔" },
      dialog_save: { buttonLabel: "儲存", name: "存檔檔案", title: "匯出存檔" },
      error_access: "存檔檔案無效：“$(x)”",
      error_load: "無法解析存檔。",
      error_mod: "無法加載Mod：“$(x)”。",
      message_alert: [ "確定" ],
      message_confirm: [ "取消", "確定" ],
      prompt_clear: "刪除這個存檔嗎？",
      prompt_demo: "已將您的OUTERTALE demo存檔\n行動到其他時間軸槽位中。",
      prompt_save: "將存檔儲存到其他位置嗎？",
      prompt_save_alternate: "新建一個JSON檔案，\n將下列內容複製進去\n並儲存到裝置中。",
      prompt_open: "讀取這個存檔嗎？"
   },

   extra: {
      credits: [
         [
            "§fill:#ff0§< 遊戲開發者 >§fill:#fff§",
            "spacey_432",
            "",
            "§fill:#ff0§< 文本編寫 >§fill:#fff§",
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
            "NerNot1",
            "PhyreFM"
         ],
         [
            "§fill:#ff0§< 美工 >§fill:#fff§",
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
            "§fill:#ff0§< 技術助理 >§fill:#fff§",
            "Codetoil",
            "ws3917"
         ],
         [
            "§fill:#ff0§< 遊戲測試 >§fill:#fff§",
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
            "§fill:#ff0§< 遊戲測試 >§fill:#fff§",
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
            "§fill:#ff0§< 遊戲測試 >§fill:#fff§",
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
            "§fill:#ff0§< 遊戲測試 >§fill:#fff§",
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
            "§fill:#ff0§< 遊戲測試 >§fill:#fff§",
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
            "§fill:#ff0§< 特別鳴謝 >§fill:#fff§",
            "Alden",
            "§fill:#808080§感謝你給我依靠，\n教會我人生的道理，\n讓我變得更好。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特別鳴謝 >§fill:#fff§",
            "My Cocoa",
            "§fill:#808080§你是第一個支援我夢想的人，\n也是我最暖心的夥伴。\n在你的激勵下，\n我才能完成這款遊戲。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特別鳴謝 >§fill:#fff§",
            "Balgamlı Kedi",
            "§fill:#808080§感謝你從遊戲開發之初\n就一直陪伴我。\n無論何時，你總會在\n我最需要幫助的時候支援我。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特別鳴謝 >§fill:#fff§",
            "Ghostly",
            "§fill:#808080§感謝你在遊戲的許多方面\n給出了很棒的建議，\n鼓勵我認真對待測試工作。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特別鳴謝 >§fill:#fff§",
            "Zaxento The Greedy",
            "§fill:#808080§感謝你直言不諱，\n給予我大量批評和建議。\n從認識的那天起\n你就非常值得信賴。§fill:#fff§"
         ],
         [
            "§fill:#ff0§< 特別鳴謝 >§fill:#fff§",
            "ThatGuyWhoLikesFood",
            "§fill:#808080§感謝你幫助我撰寫了\n遊戲中的關鍵劇情，\n並始終支援我的夢想，\n讓我能以全新的方式表達自我。§fill:#fff§"
         
        ],
         [
            "§fill:#ff0§< 漢化組成員 >§fill:#fff§",
            "§fill:#ff7§【組長】§fill:#fff§",
            "ws3917",
            "§fill:#ff7§【程式】§fill:#fff§",
            "ws3917",
            "§fill:#ff7§【文翻】§fill:#fff§",
            "ws3917",
            "Murder--Sans_MDR",
            "R.o.C.t.D./π/3.1415⑨",
            "1個渣渣",
            "§fill:#ff7§【文校】§fill:#fff§",
            "ws3917",
            "R.o.C.t.D./π/3.1415⑨",
            "曉曉_Akatsuki（前文校）"
        ],
        [
            "§fill:#ff0§< 漢化組成員 >§fill:#fff§",
            "§fill:#ff7§【美術】§fill:#fff§",
            "曉曉_Akatsuki",
            "屑moons月亮君",
            "彳卸雲鬼_",
            "mustad（邊框Mod）",
            "",
            "§fill:#ff7§【精神支援&推廣】§fill:#fff§",
            "幻-_-風",
            "Murder--Sans_MDR",
            "AX暗星233",
            "屑moons月亮君"
        ],
        [
            "§fill:#ff0§< 漢化組成員 >§fill:#fff§",
            "",
            "§fill:#ff7§【漢化測試】§fill:#fff§",
            "ws3917",
            "Murder--Sans_MDR",
            "雪理奈",
            "（以及其他漢化組成員）",
            "",
            "感謝漢化組成員的努力付出！",
            "同時，也感謝您對這款遊戲的喜愛！",
            "",
            "§fill:#808080§P.S. 漢化組正在為遊戲製作各種Mod！\n歡迎B站跟隨@ws3917\n瞭解最新Mod開發進度！§fill:#fff§"
        ],
[ "特別鳴謝 由§fill:#ff0§Mavis與朋友們§fill:#fff§提供" ]
      ],

      final_frontier: {
         header: "(( 演員表 ))",
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
               name: "3號守衛 & 4號守衛",
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
               name: "怪物小孩",
               author: "spacey_432"
            },
            asriel: {
               name: "ASRIEL",
               author: "MattSpriteMaster"
            }
         },
         end: "劇終"
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
      real3: "劇終",

      restartText1: "正在重啟",
      restartText2: "正在重啟.",
      restartText3: "正在重啟..",

      title: "OUTERTALE (BETA V24)",
      title_timeline: "OUTERTALE...? (BETA V24)"
   },

   gamepad: {
      prompt: "手柄設定",
      prompt_desc:
         "從遊戲手柄上選擇一個按鍵\n用來控制遊戲中的某個操作。\n\n按下相同的按鍵進行確認，\n或按下其他按鍵重新設定。\n\n按[ESC]跳過設定。",
      prompt_counter: "鍵入分配到：$(x)",
      z: "[Z 或 ENTER] - 確認/互動",
      x: "[X 或 SHIFT] - 返回",
      c: "[C 或 CTRL] - 選單（遊戲內）",
      u: "[↑ 或 W] - 上移",
      l: "[← 或 A] - 左移",
      d: "[↓ 或 S] - 下移",
      r: "[→ 或 D] - 右移",
      f: "[F4] - 全螢幕",
      prompt_done: "設定完成。\n按任意鍵繼續。",
      prompt_done_browser: "\n注意：在本平臺執行遊戲時，\n可能無法用手柄開啟全螢幕。",
      prompt_load:
         "遊戲手柄設定完成，\n按任意鍵繼續。\n或者連按某個鍵三次\n重新設定手柄。"
   },

   general: {
      asriel: "Asriel",
      asriel_location: "The Oblivion",
      disabled: "關閉",
      enabled: "開啟",
      finish: "按 [X] 返回",
      g: "G",
      hp: "HP",
      inf: "INF",
      landing1: "[按 Z 或 ENTER]",
      lv: "LV",
      mystery1: "§mystify:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz§aaaaaa§mystify:§",
      mystery2: "{@mystify:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify:}",
      mystery2l: "{@mystify:abcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify:}",
      mystery2u: "{@mystify:ABCDEFGHIJKLMNOPQRSTUVWXYZ}aaaaaa{@mystify:}",
      no: "否",
      nominal: "§fill:#0f0§正常",
      percent: "$(x)%",
      player: "玩家",
      settings: "遊戲設定",
      unknown: "?",
      xm: "XM",
      yes: "是"
   },

   menu: {
      box1: "物品欄",
      box2: "箱子",
      key1: "鑰匙串",

      confirm1: "確定要選擇這個名字嗎？",
      confirm2: "已經選定了一個名字。",
      confirm3: "返回",

      footer: "OUTERTALE V5.00 (c) 2024 SPACEY_432 繁體中文版 PSOT漢化組",

      heal1: "* （HP已回滿。）",
      heal2: "* （你回覆了$(x) HP。）",
      heal3: "* （你失去了$(x) HP。）",
      heal4: "* （HP已清零。）",

      item1: "使用",
      item2: "裝備",
      item3: "資訊",
      item4: "丟棄",

      load1: "繼續",
      load2: "旁觀",
      load3: "重置",
      load4: "真正的重置",

      name1: "為受困的人類命名：",
      name2: "返回",
      name3: "刪除",
      name4: "確定",
      name5: "§fill:#808080§鍵盤鍵入，支援中文。\n\n[ENTER] - 確定\n[BACKSPACE] - 刪除\n[ESC] - 返回",

      save1: "儲存",
      save2: "返回",
      save3: "進度已儲存！",

      settings1: "遊戲設定",
      settings2: "返回",
      settings3: "語言",
      settings3a: "繁體中文",
      settings4: "音效",
      settings5: "音樂",
      settings6: "高品質貼圖",
      settings7: "閃爍畫面",
      settings7a: "預設",
      settings7b: "削減",
      settings8: "TOUCH CONTROLS",
      settings8a: "左側",
      settings8b: "右側",
      settings8c: "HIDDEN",
      settings9: "搖桿死區",
      settings10: "打開Mod目錄",

      sidebar1: "雜物",
      sidebar2: "狀況",
      sidebar3: "手機",
      sidebar4: "設定",
      sidebar5: "圖",

      start1: [
         "---- 操作介紹 ----",
         "[Z 或 ENTER] - 確認/互動",
         "[X 或 SHIFT] - 返回",
         "[C 或 CTRL] - 選單（遊戲內）",
         "[F4] - 全螢幕",
         "[長按 ESC] - 重啟",
         "當 HP 降至 0，你就輸了。"
      ],
      start2: "開始遊戲",

      stat1: "攻擊",
      stat2: "防禦",
      stat3: "武器",
      stat4: "防具",
      stat5: "金錢",
      stat6: "EXP",
      stat7: "升級需",
      stat8: "§fill:#ff0§警告：\n不是\n主時間軸。",
      stat9: "擊殺",
      stat10: "擊敗",
      stat11: "調情",
      stat12: "狀態",

      story1: [ "Long ago, {^3}two species ruled the solar system: {^6}HUMANS and MONSTERS." ],
      story2: [ "{#i/x2}隨著時間的步步推演，{^3}\n兩者間的緊張局勢{^1}\n終升級為一場星際戰爭。" ],
      story3: [ "{#i/x2}戰火紛飛之際，{^3}\n最終以怪物族的母星\n遭受重創、崩潰告終，{^3}\n人類宣佈獲取勝利。" ],
      story4: [ "{#i/x2}並將戰敗的怪物族群{^1}\n遷徙至一座{^1}\n荒廢的邊境前哨站。" ],
      story5: [ "{#i/x2}隨即興建起{^3}\n一道強度非凡的力場。{^3}\n將其牢牢封鎖於內。" ],
      story6: [ "{#i/x2}歷經\n漫長時日的沉寂.{^8}.{^8}." ],
      story7: [ "µµµµµµ EBOTT區域 µµµµ\nµµµµµµµµ 251X{^20}{}" ],
      story8: [ "{#i/x2}據古老傳說所述，{^3}\n在浩瀚宇宙的某個幽渺之境，{^1}\n存在著一艘艘{^1}\n一去不復返的飛船。{^20}{}" ],
      story9: [ "{^100}{}" ],
      story10: [ "{^100}{}" ],
      story11: [ "{^50}{}" ]
   },

   timeline: {
      main: "重返主時間軸",
      timelines: "其它時間軸的位置",
      bisect: "切分",
      delete: "刪除",
      instruction: "[ESC]取消 / [ENTER]確定",
      instruction_gamepad: "按手柄上任意按鈕打開鍵盤。",
      launch: "進入",
      rename: "重命名",
      create: "新建",
      placeholder: "鍵入時間軸名稱",
      confirm: "確定刪除嗎？"
   }
};


// END-TRANSLATE
