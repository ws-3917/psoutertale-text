// START-TRANSLATE

export default {
   disclaimer: {
      title: "- DISCLAIMER -",
      content: "1. PS!OUTERTALE is made by Spacey_432. \nAnd our team is working on the Chinese translation. \n2. If you find any untranslated texts or dialogues, stop complaining and calling us lazy. Show some basic respect to ws3917, Spacey, and the PS!OUTERTALE translation team.We don't owe you anything.\n3. Stop asking extremely stupid questions(like \"How do I change the language to Chinese?\", \"How do I kill Toriel?\", or \"How do I extract the game files?\").These questions are already in the FAQ.Our translators don't have time for this nonsense.\n4. If you don't like the game and don't want to test it anymore, just delete it and leave the group.We won't stop you. We insist that you stop bothering and insulting us. The game is Spacey's and translated by us, not yours."
   },
   battle: {
      death0: ["(You take a deep breath.)", "(ケツイが　みなぎった)"],
      death1: ["あきらめては　いけない…", "$(name)！\nケツイを　ちからに　かえるんだ！"],
      death2: ["われわれの　うんめいが  かかっている…", "$(name)！\nケツイを　ちからに　かえるんだ！"],
      death3: ["しっかりしろ！", "$(name)！\nケツイを　ちからに　かえるんだ！"],
      death4: ["きぼうを　すてるな！", "$(name)！\nケツイを　ちからに　かえるんだ！"],
      death5: ["あきらめては　ダメだ！", "$(name)！\nケツイを　ちからに　かえるんだ！"],

      flee1: "    ＊バトルからにげた…",
      flee2: "    ＊さようなら。",
      flee3: "    ＊こんなことを　している　ばあいじゃない。",
      flee4: "    ＊とめないで。",
      flee5: "    ＊バトルからにげた。\n       $(x)EXPと$(y)ゴールドを　てにいれた。",

      mercy_assist: "* Assist",
      mercy_flee: "＊にげる",
      mercy_spare: "＊にがす",

      victory1: "<16>{#p/story}＊YOU WIN！\n＊$(x)EXPと$(y)ゴールドを　かくとく。",
      victory2: "<16>{#p/story}＊YOU WIN！\n＊$(x)EXPと$(y)ゴールドを　かくとく。\n＊LOVEが　あがった。"
   },

   developer: {
      console: {
         header: "エラー",
         p_resume: {
            header: "無視",
            resume: "エラーを無視"
         },
         blurb: "エラーが発生しました！\n開発者にスクリーンショットを送ってください。"
      },
      control: {
         tab: "§stretch=0.5§コントロール§stretch=0.1§",
         headers: ["一般", "バトル"],
         items: [
            [
               "BGMを修正",
               "プレイヤー修正",
               "ゴールド無限",
               "調査を有効化",
               "入力を有効化",
               "移動を有効化",
               "壁を無視",
               "セーブ",
               "§stretch=0.5§テキストをスキップ§stretch=0.1§",
               "自由な視点"
            ],
            [
               "援助を有効化",
               "弾を削除",
               "やめる",
               "§stretch=0.5§額縁サイズをリセット§stretch=0.1§",
               "メニューリセット",
               "にげる可能",
               "むげんHP",
               "敵全体をにがす",
               "じさつ",
               "敵全体を弱める"
            ]
         ],
         p_speed: {
            fps: "$(x) FPS",
            halt: "一時停止",
            header: "ゲーム倍速",
            multiplier: "$(x)倍速",
            next: "加速",
            prev: "減速",
            sec: "$(x)秒 / フレーム"
         }
      },
      godhome: {
         tab: "ゴッド",
         p_teleport: {
            header: "ルーム",
            action: "テレポート"
         },
         p_encounter: {
            header: "バトル",
            action: "始まる"
         },
         p_armor: {
            header: "AMR"
         },
         p_weapon: {
            header: "WPN"
         }
      },
      inspect: {
         tab: "レイヤー",
         headers: ["レイヤー", "タイプ"],
         switches: [
            ["底", "下", "メイン", "上", "メニュー"],
            ["ヒットボックス", "イラスト", "テクスト"]
         ],
         p_explorer: {
            header: "閲覧",
            layers: ["底 (閲覧)", "下 (閲覧)", "メイン (閲覧)", "上 (閲覧)", "メイン (閲覧)"],
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
         debug_instructions: "[TAB]でデバッグ情報を閲覧します",
         debug: {
            a: "A", 
            acceleration: "Acceleration",
            active: "アクティブ",
            alpha: "Alpha",
            anchor: "Anchor",
            b: "B", 
            blend: "Blend",
            border: "Border",
            compute: "計算サイズ",
            content: "Content",
            crop: "Crop",
            down: "下",
            duration: "Duration",
            exp: "EXP",
            extent: "Extent",
            f: "F", 
            face: "方向",
            false: "いいえ",
            fill: "色を充填",
            fontFamily: "フォントファミリー",
            fontSize: "フォントサイズ",
            frames: "Frames",
            gravity: "Gravity",
            group: "グループ",
            hp: "HP",
            index: "Index",
            inert: "Inert",
            key: "キー",
            lastSavedTime: "前回セーブの時間",
            layer: "レイヤー",
            layers: "レイヤー",
            left: "左",
            metadata: "メタデータ",
            music: "BGM",
            namespace: "名前空間",
            none1: "NONE",
            none2: "none",
            objects: "対象",
            oversaver: "Oversaver",
            parallax: "Parallax",
            position: "位置",
            primed: "Primed",
            priority: "Priority",
            registry: "レジストリ",
            renderer: "Renderer",
            resources: "リソース",
            reverse: "Reverse",
            right: "Right",
            room: "ルーム",
            roomState: "ルーム状態",
            rotation: "Rotation",
            s: "S", 
            scale: "スケーリング",
            shopSelection: "店の選択肢",
            size: "サイズ",
            spacing: "Spacing",
            spin: "Spin",
            sprites: "Sprites",
            step: "Step",
            stroke: "Stroke",
            subcrop: "Subcrop",
            talk: "会話",
            target: "Target",
            text: "テクスト",
            tint: "Tint",
            trackedAssets: "使用されている資源",
            true: "はい",
            unknown: "UNKNOWN",
            up: "上",
            vars: "変数",
            velocity: "Velocity",
            volatile: "Volatile"
         }
      },
      savemod: {
         tab: "セーブ",
         header1: "セーブ　エディタ",
         domains: [
            "データ (ブーリアン)",
            "データ (ナンバー)",
            "データ (文字列)",
            "フラグ (ブーリアン)",
            "フラグ (ナンバー)",
            "フラグ (文字列)"
         ],
         p_page: {
            header: "ページをめくる",
            prev: "前のページ",
            next: "次のページ"
         },
         prompt: "Enter Value",
         back: "もどる"
      },
      storage: {
         tab: "在庫",
         header: "在庫のエディタ",
         p_container: { header: "容器を選ぶ", prev: "前のページ", next: "次のページ" },
         display: { inventory: "アイテム", dimboxA: "いじげんボックスA", dimboxB: "いじげんボックスB" }
      }
   },

   dialog: {
      dialog_clear_title: "セーブファイルを消去",
      dialog_notice_title: "注意",
      dialog_open: { buttonLabel: "開く", name: "セーブファイル", title: "セーブファイルを輸入" },
      dialog_save: { buttonLabel: "セーブ", name: "セーブファイル", title: "セーブファイルを輸出" },
      error_load: "ファイルは解析できませんでした。",
      message_alert: ["確定"],
      message_confirm: ["やめる", "確定"],
      prompt_clear: "Clear this file?",
      prompt_demo: "OUTERTALE demoのセーブファイルを\n他のタイムラインに移動しました。",
      prompt_save: "セーブしますか？",
      prompt_save_alternate: "新たにJSONファイルを作成し\n以下の内容をコピーして\nデバイスに保存します。",
      prompt_open: "ロードしますか？"
   },

   extra: {
      credits: [
         [
            "§fill=#ff0§< かいはつ >§fill=#fff§",
            "spacey_432",
            "",
            "§fill=#ff0§< テキスト >§fill=#fff§",
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
            "§fill=#ff0§< びじゅつ >§fill=#fff§",
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
            "§fill=#ff0§< びじゅつ >§fill=#fff§",
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
            "§fill=#ff0§< ぎじゅつ >§fill=#fff§",
            "Codetoil",
            "ws3917"
         ],
         [
            "§fill=#ff0§< テスター >§fill=#fff§",
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
            "§fill=#ff0§< テスター >§fill=#fff§",
            "Emurry",
            "Enzolos",
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
            "InvincibleRacoon"
         ],
         [
            "§fill=#ff0§< テスター >§fill=#fff§",
            "Jago128",
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
            "semi"
         ],
         [
            "§fill=#ff0§< テスター >§fill=#fff§",
            "Shaun Duz Stuffs",
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
            "spaceknife234"
         ],
         [
            "§fill=#ff0§< テスター >§fill=#fff§",
            "SquigglyWiggley",
            "superkippy",
            "Teecup",
            "Tem in a Cowboy Hat",
            "Tenbrooks",
            "ThatGuyWhoLikesFood",
            "The Fallen Angel",
            "TheAsriel",
            "Turbulation",
            "Wild Pasta",
            "xNoodlePlayz",
            "Zaxento The Greedy"
         ],
         [
            "§fill=#ff0§< スペシャル・サンクス >§fill=#fff§",
            "Alden",
            "§fill=#808080§わたしを　ささえてくれて\nじんせいのどうりを　おしえてくれて\nよくなってくれて\nありがとうございます。§fill=#fff§"
         ],
         [
            "§fill=#ff0§< スペシャル・サンクス >§fill=#fff§",
            "My Cocoa",
            "§fill=#808080§わたしのゆめを　サポートする\nさいしょのひと　もっとも\nあたたかい　パートナーです。\nあなたに　はげまされて\nこのゲームを　かんせいさせてくれて\nありがとうございます。§fill=#fff§"
         ],
         [
            "§fill=#ff0§< スペシャル・サンクス >§fill=#fff§",
            "Balgamlı Kedi",
            "§fill=#808080§ゲームかいはつ　とうしょから\nいつも　いっしょに　いてくれて\nありがとうございます。\nいつもわたしが　いちばんたすけが\nひつようなときに　ささえてくれて\nありがとうございます。§fill=#fff§"
         ],
         [
            "§fill=#ff0§< スペシャル・サンクス >§fill=#fff§",
            "Ghostly",
            "§fill=#808080§すばらしい　アドバイス\nゲームテストに　しんけんに\nとりくむよう　はげましてくれて\nありがとうございます。§fill=#fff§"
         ],
         [
            "§fill=#ff0§< スペシャル・サンクス >§fill=#fff§",
            "Zaxento The Greedy",
            "§fill=#808080§しりあったとき　から\nとても　たよりになります。\nそっちょくな　アドバイスを　いただき\nありがとうございます。§fill=#fff§"
         ],
         [
            "§fill=#ff0§< スペシャル・サンクス >§fill=#fff§",
            "ThatGuyWhoLikesFood",
            "§fill=#808080§ゲームの　キーストーリーを\nかいてくれて　いつもわたしを\nおうえんしてくれて　あたらしい\nひょうげんが　できるように\nありがとうございます。§fill=#fff§"
         ],
         ["§fill=#ff0§Mavisとおともたち§fill=#fff§　ていきょう"]
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
                  spare: "Seeking\nPhysical Contact",
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
                  spare: "Getting Ditched\nSlightly Less",
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

      langPrompt: "[↑ / ↓]で　せんたく / [Z or ENTER]で　けってい",

      quitText1: "しゅうりょうしています",
      quitText2: "しゅうりょうしています…",
      quitText3: "しゅうりょうしています……",

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

      end1: "THE END",
      end2: "THE END…？",

      restartText1: "さいきどうしています",
      restartText2: "さいきどうしています…",
      restartText3: "さいきどうしています……",

      title: "OUTERTALE (RC8)",
      title_timeline: "OUTERTALE...? (RC8)"
   },

   gamepad: {
      prompt: "GAMEPAD SETUP",
      prompt_desc:
         "ゲームパッドから　ボタンを　せんたくして\nゲームのそうさを　せっていします。\n\nおなじボタンを　おして　けっていするか\nべつのボタンを　おして　さいせっていします。\n\n[ESC]で　せっていを　スキップします。",
      prompt_counter: "せんたく　すみ：$(x)",
      z: "[Z / ENTER] - かくてい",
      x: "[X / SHIFT] - キャンセル",
      c: "[C / CTRL] - フィールドメニュー",
      u: "[↑ / W] - うえ",
      l: "[← / A] - ひだり",
      d: "[↓ / S] - した",
      r: "[→ / D] - みぎ",
      f: "[F4] - フルスクリーン",
      prompt_done: "せってい　かんりょうしました。\nにんいのボタンを　おして　つづけます。",
      prompt_done_browser: "\nちゅうい：本プラットフォームで　プレイするばあい\nコントローラーで　ぜんがめんを　ひらくことが\nできないばあいが　あります。",
      prompt_load:
         "コントローラーのせってい　かんりょうしました。\nにんいのボタンを　おして　つづけます。\nあるいは　あるボタンを　3回おして\nコントローラーを　リセットします。\n\n[ESC]で　せっていを　スキップします。"
   },

   general: {
      asriel: "Asriel",
      asriel_location: "The Oblivion",
      disabled: "オフ",
      enabled: "オン",
      finish: "[X]で　もどる",
      frisk: "Frisk",
      g: "G",
      hp: "HP",
      inf: "INF",
      landing1: "[PRESS Z OR ENTER]",
      lv: "LV",
      mystery1: "§mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz§aaaaaa§mystify=§",
      mystery2: "{@mystify=あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉゃゅょっゎゑアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォャュョッヮヰヱヵヶ}ああああああ{@mystify=}",
      mystery2l: "{@mystify=あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉゃゅょっゎゑ}ああああああ{@mystify=}",
      mystery2u: "{@mystify=アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォャュョッヮヰヱヵヶ}ああああああ{@mystify=}",
      no: "いいえ",
      nominal: "§fill=#0f0§NOMINAL",
      percent: "$(x)%",
      player: "player",
      settings: "せってい",
      unknown: "?",
      xm: "XM",
      yes: "はい"
   },

   menu: {
      box1: "INVENTORY",
      box2: "ボークス",
      key1: "KEYRING",

      confirm1: "このなまえで\nよろしいですか？",
      confirm2: "すでに　なまえが\nつけられています。",
      confirm3: "もどる",

      footer: "OUTERTALE V5.00 (c) 2024 SPACEY_432 にほんご",

      heal1: "＊(HPが　まんタンになった)",
      heal2: "＊(HPが　$(x)かいふくした)",
      heal3: "＊(HPが　$(x)へった)",
      heal4: "＊(HPが　0になった)",
      heal5: "* (You gained $(x) HP.)",

      item1: "USE",
      item2: "EQUIP",
      item3: "INFO",
      item4: "DROP",

      load1: "コンティニュー",
      load2: "Observe",
      load3: "リセット",
      load4: "本当のリセット",

      name1: "じこにあったニンゲンに　なまえをつけてください",
      name2: "やめる",
      name3: "さくじょ",
      name4: "かくてい",
      name5: "§fill=#808080§ [ESC] - やめる / [ENTER] - かくてい",

      save1: "セーブ",
      save2: "もどる",
      save3: "セーブしました。",

      settings1: "せってい",
      settings2: "もどる",
      settings3: "げんご",
      settings3a: "にほんご",
      settings4: "SE",
      settings5: "BGM",
      settings6: "こうがしつ",
      settings7: "てんめつ",
      settings7a: "ノーマル",
      settings7b: "低",
      settings8: "TOUCH CONTROLS",
      settings8a: "LEFT",
      settings8b: "RIGHT",
      settings8c: "HIDDEN",
      settings9: "デッドゾーン",
      settings10: "Modフォルダをひらく",
      settings11: "さいきどう",

      sidebar1: "ITEM",
      sidebar2: "STAT",
      sidebar3: "PHONE",
      sidebar4: "CONF",
      sidebar5: "S",

      start1: [
         "― ボタンそうさ ―",
         "[Z / ENTER] - かくてい",
         "[X / SHIFT] - キャンセル",
         "[C / CTRL] - フィールドメニュー",
         "[F4] - フルスクリーン",
         "[ESCながおし] - さいきどう",
         "HPが0になるとゲームオーバー"
      ],
      start2: "ゲームをはじめる",

      stat1: "AT",
      stat2: "DF",
      stat3: "WPN",
      stat4: "AMR",
      stat5: "ゴールド",
      stat6: "EXP",
      stat7: "NEXT",
      stat8: "§fill=#ff0§けいこく：\nほかの\nタイムライン",
      stat9: "KILLS",
      stat10: "BULLY",
      stat11: "FLIRT",
      stat12: "STATUS",
      stat13: "\"$(x)\"",

      story1: ["<16>{#p/storyteller}むかしむかし　たいようけいには\nニンゲンと　モンスターという\n2つのしゅぞくが　いました。{^35}{}"],
      story2: ["<16>ときが　たつにつれ\n2つのしゅぞくの　あいだに\nせんそうが　おきました。{^35}{}"],
      story3: ["<16>そして　モンスターたちの\n母星を　はかいされたのすえ\nニンゲンが　しょうりしました。{^35}{}"],
      story4: ["<16>のこりの　モンスターたちは　ほうきされた　ぜんしょうきちに　ついほうされた。{^35}{}"],
      story5: ["<16>ニンゲンは　フォース\nフィールドで　モンスターたちを\nとじこめました。{^35}{}"],
      story6: ["<16>それから　さらに\nながい　ときが　ながれ…{^8}…{^8}…{^35}{}"],
      story7: ["<#24>     イビト　セクター    \n      251X年{^35}{}"],
      story8: ["<16>それは　「うちゅうきは\nにどと　もどらない」といわれる\nてんせつのセクターでした。{^35}{}"],
      story9: ["<16>{^100}{}"],
      story10: ["<16>{^100}{}"],
      story11: ["<16>{^35}{}"]
   },

   timeline: {
      main: "メインタイムラインに　もどる",
      main_ex: "メインタイムラインに　はじまる",
      timelines: "ほかの　タイムライン",
      bisect: "ぶんかつ",
      delete: "さくじょ",
      instruction: "[ESC]で　やめる / [ENTER]で　かくてい",
      instruction_gamepad: "Press any button on your gamepad to open the keyboard.",
      launch: "はいる",
      rename: "リネーム",
      create: "Create New",
      placeholder: "タイムラインを　命名",
      confirm: "ほんとう？"
   }
};


// END-TRANSLATE
