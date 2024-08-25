// START-TRANSLATE

export default {
   battle: {
      death0: [ '（你深吸了一口气。）', "（你充满了决心。）" ],
      death1: [ '现在还不能放弃...', '$(name)！\n保持你的决心...' ],
      death2: [ '我们的命运都\n寄托于你...', '$(name)！\n保持你的决心...' ],
      death3: [ "你会没事的！", '$(name)！\n保持你的决心...' ],
      death4: [ "别失去希望！", '$(name)！\n保持你的决心...' ],
      death5: [ '现在还不能结束！', '$(name)！\n保持你的决心...' ],

      flee1: '   * 先走一步...',
      flee2: "   * 我先撤了。",
      flee3: "   * 我还有别的事要做。",
      flee4: "   * 别拖我后腿。",
      flee5: '   * 你逃跑了，\n   * 你获得了$(x) EXP和$(y)G。',

      mercy_assist: '* 外援',
      mercy_flee: '* 逃跑',
      mercy_spare: '* 饶恕',

      victory1: '<32>{#p/story}* 你胜利了！\n* 你获得了$(x) EXP和$(y)G。',
      victory2: '<32>{#p/story}* 你胜利了！\n* 你获得了$(x) EXP和$(y)G。\n* 你的LOVE增加了。'
   },

   developer: {
      console: {
         header: '错误',
         p_resume: {
            header: '忽略',
            resume: '点击此处忽略错误'
         },
         blurb: '程序出现错误！\n请将错误信息截图发给开发者。'
      },
      control: {
         tab: '快捷功能',
         headers: [ '主世界', '战斗中' ],
         items: [
            [
               '音乐初始化',
               '角色初始化',
               '无限金钱',
               '允许角色交互',
               '允许游戏输入',
               '允许角色移动',
               '无视墙体',
               '快速存档',
               '跳过文本',
               '自由视角'
            ],
            [
               '允许外援',
               '清除弹幕',
               '退出战斗',
               '重置框体大小',
               '重置菜单',
               '允许逃跑',
               '无限HP',
               '安抚所有敌人',
               '自杀',
               '清空敌人血条'
            ]
         ],
         p_speed: {
            fps: '$(x)帧',
            halt: '暂停',
            header: '游戏倍速',
            multiplier: '$(x)倍速',
            next: '加速',
            prev: '减速',
            sec: '每帧$(x)秒'
         }
      },
      godhome: {
         tab: '传送/战斗',
         p_teleport: {
            header: '房间',
            action: '传送'
         },
         p_encounter: {
            header: '战斗',
            action: '开始'
         },
         p_armor: {
            header: '防具'
         },
         p_weapon: {
            header: '武器'
         }
      },
      inspect: {
         tab: '察看图层',
         headers: [ '图层', '类型' ],
         switches: [
            [ '基层', '下层', '主层', '上层', '菜单层' ],
            [ '碰撞箱', '贴图', '文本' ]
         ],
         p_explorer: {
            header: '浏览',
            layers: [ '基层', '下层', '主层', '上层', '菜单层' ],
            letters: {
               animation: '动',
               character: 'NPC',
               rectangle: '方',
               entity: '形',
               hitbox: '箱',
               object: '物',
               player: '人',
               sprite: '图',
               text: '文'
            }
         },
         debug_instructions: '按[TAB]键浏览调试信息',
         debug: {
            a: '动', 
            acceleration: 'Acceleration',
            active: '动态',
            alpha: 'Alpha',
            anchor: 'Anchor',
            b: 'B', 
            blend: 'Blend',
            border: 'Border',
            compute: '实际尺寸',
            content: 'Content',
            crop: 'Crop',
            down: '下',
            duration: 'Duration',
            exp: 'EXP',
            extent: 'Extent',
            f: 'F', 
            face: '面部朝向',
            false: '否',
            fill: '填充颜色',
            fontFamily: 'Font Family',
            fontSize: '字体大小',
            frames: 'Frames',
            gravity: 'Gravity',
            group: '战斗组',
            hp: 'HP',
            index: 'Index',
            inert: 'Inert',
            key: '名称',
            lastSavedTime: '上次存档时间',
            layer: '图层编号',
            layers: 'Layers',
            left: '左',
            metadata: '数据说明',
            music: '音乐',
            namespace: '命名空间',
            none1: 'NONE',
            none2: 'none',
            objects: '对象数',
            oversaver: 'Oversaver',
            parallax: 'Parallax',
            position: '位置坐标',
            primed: 'Primed',
            priority: 'Priority',
            registry: '存档变量',
            renderer: 'Renderer',
            resources: '已使用资源',
            reverse: 'Reverse',
            right: '右',
            room: '房间',
            roomState: '房间状态',
            rotation: 'Rotation',
            s: '图', 
            scale: '缩放',
            shopSelection: '当前选项（商店菜单）',
            size: '设定尺寸',
            spacing: 'Spacing',
            spin: 'Spin',
            sprites: 'Sprites',
            step: 'Step',
            stroke: 'Stroke',
            subcrop: 'Subcrop',
            talk: '正在说话',
            target: 'Target',
            text: '文本',
            tint: 'Tint',
            trackedAssets: '正在使用的资源',
            true: '是',
            unknown: 'UNKNOWN',
            up: '上',
            vars: '变量',
            velocity: 'Velocity',
            volatile: 'Volatile'
         }
      },
      savemod: {
         tab: '编辑存档',
         header1: '存档编辑器',
         domains: [
            '数据（布尔型）',
            '数据（数值型）',
            '数据（字符串型）',
            '节点（布尔型）',
            '节点（数值型）',
            '节点（字符串型）'
         ],
         p_page: {
            header: '翻页',
            prev: '上一页',
            next: '下一页'
         },
         prompt: '输入变量值',
         back: '返回'
      },
      storage: {
         tab: '物品库存',
         header: '物品库存编辑器',
         p_container: { header: '选择容器', prev: '上一页', next: '下一页' },
         display: { inventory: '物品栏', dimboxA: '次元箱 A', dimboxB: '次元箱 B' }
      }
   },

   dialog: {
      dialog_clear_title: '删除存档',
      dialog_notice_title: '提示',
      dialog_open: { buttonLabel: '打开', name: '存档文件', title: '导入存档' },
      dialog_save: { buttonLabel: '保存', name: '存档文件', title: '导出存档' },
      error_load: '无法解析存档。',
      message_alert: [ '确定' ],
      message_confirm: [ '取消', '确定' ],
      prompt_clear: '删除这个存档吗？',
      prompt_demo: '已将您的OUTERTALE demo存档\n移动到其他时间线槽位中。',
      prompt_save: '将存档保存到其他位置吗？',
      prompt_save_alternate: '新建一个JSON文件，\n将下列内容复制进去\n并保存到设备中。',
      prompt_open: '读取这个存档吗？'
   },

   extra: {
      credits: [
         [
            '§fill=#ff0§< 游戏开发者 >§fill=#fff§',
            'spacey_432',
            '',
            '§fill=#ff0§< 文本编写 >§fill=#fff§',
            'Balgamlı Kedi',
            'Bilge \"mnwary\"',
            'Dischnie',
            'Efe Kaya',
            'Ghostly',
            'InvincibleRacoon',
            'Jojoton56',
            'Kiwi \"Quinn\"',
            'My Cocoa',
            'neo9174',
            'Rise'
         ],
         [
            '§fill=#ff0§< 文本编写 >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            'Turbulation',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< 美工 >§fill=#fff§',
            'Balgamlı Kedi',
            'Burge',
            'Deskius',
            'DESM.al',
            'Discarded Vessel',
            'Efe Kaya',
            'Fired',
            'Funtermore',
            'Ghostly'
         ],
         [
            '§fill=#ff0§< 美工 >§fill=#fff§',
            'HolyOranges',
            'major_memestar',
            'MattSpriteMaster',
            'Medi0creking',
            'NerNot1',
            'PhyreFM',
            'Pongy25',
            'PoTheWinterCorder',
            'ProctorDorkchop02',
            'ScarletScaledDragon',
            'semi',
            'Soup Taels',
            'SquigglyWiggley',
            'Starkiteckt'
         ],
         [
            '§fill=#ff0§< 美工 >§fill=#fff§',
            'supper12',
            'Valor52',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< 技术助理 >§fill=#fff§',
            'Codetoil',
            'ws3917',
            '',
            '§fill=#ff0§< 游戏测试 >§fill=#fff§',
            'Alden',
            'Aspey',
            'Balgamlı Kedi',
            'Bilge \"mnwary\"',
            'blue'
         ],
         [
            '§fill=#ff0§< 游戏测试 >§fill=#fff§',
            'Brad',
            'brayjamin',
            'ClamsyMoe',
            'delta',
            'Discarded Vessel',
            'Dischnie',
            'DR4GON HE4RT',
            'Dubituar',
            'Efe Kaya',
            'Emurry',
            'Enzolos',
            'EvanGamesGoodman',
            'Fired',
            'FireWizard72X'
         ],
         [
            '§fill=#ff0§< 游戏测试 >§fill=#fff§',
            'FuLiNT',
            'Funtermore',
            'gardnaeden',
            'Ghostly',
            'Gon UT',
            'Green Tea',
            'Huggies!',
            'ilovecookies',
            'InvincibleRacoon',
            'Jago128',
            'Joe98912',
            'Jojoton56',
            'Jonkler',
            'Kiwi \"Quinn\"'
         ],
         [
            '§fill=#ff0§< 游戏测试 >§fill=#fff§',
            'lil tanski',
            'MR. PETER',
            'MSBen',
            'Murder--Sans_MDR',
            'My Cocoa',
            'Nanorasmus',
            'neo9174',
            'NepAnime',
            'semi',
            'Shaun Duz Stuffs',
            'SHCyank',
            'NerNot1',
            'petar3644',
            'PixelToons Jaafar'
         ],
         [
            '§fill=#ff0§< 游戏测试 >§fill=#fff§',
            'Prezmop',
            'prymus-agd',
            'Quin',
            'RadicalRic',
            'Raelynn',
            'retr22800',
            'Rise',
            'RoCtD_14159',
            'sonicisawesome222',
            'Soup Taels',
            'spaceknife234',
            'SquigglyWiggley',
            'superkippy',
            'Teecup'
         ],
         [
            '§fill=#ff0§< 游戏测试 >§fill=#fff§',
            'Tem in a Cowboy Hat',
            'Tenbrooks',
            'ThatGuyWhoLikesFood',
            'The Fallen Angel',
            'TheAsriel',
            'Turbulation',
            'Wild Pasta',
            'Xiao_Akatsuki',
            'xNoodlePlayz',
            'Zaxento The Greedy'
         ],
         [
            '§fill=#ff0§< 特别鸣谢 >§fill=#fff§',
            'Alden',
            '§fill=#808080§感谢你给我依靠，\n教会我人生的道理，\n让我变得更好。§fill=#fff§'
         ],
         [
            '§fill=#ff0§< 特别鸣谢 >§fill=#fff§',
            'My Cocoa',
            '§fill=#808080§你是第一个支持我梦想的人，\n也是我最暖心的伙伴。\n在你的激励下，\n我才能完成这款游戏。§fill=#fff§'
         ],
         [
            '§fill=#ff0§< 特别鸣谢 >§fill=#fff§',
            'Balgamlı Kedi',
            "§fill=#808080§感谢你从游戏开发之初\n就一直陪伴我。\n无论何时，你总会在\n我最需要帮助的时候支持我。§fill=#fff§"
         ],
         [
            '§fill=#ff0§< 特别鸣谢 >§fill=#fff§',
            'Ghostly',
            '§fill=#808080§感谢你在游戏的许多方面\n给出了很棒的建议，\n鼓励我认真对待测试工作。§fill=#fff§'
         ],
         [
            '§fill=#ff0§< 特别鸣谢 >§fill=#fff§',
            'Zaxento The Greedy',
            '§fill=#808080§感谢你直言不讳，\n给予我大量批评和建议。\n从认识的那天起\n你就非常值得信赖。§fill=#fff§'
         ],
         [
            '§fill=#ff0§< 特别鸣谢 >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            '§fill=#808080§感谢你帮助我撰写了\n游戏中的关键剧情，\n并始终支持我的梦想，\n让我能以全新的方式表达自我。§fill=#fff§'
         ],
         [
            '§fill=#ff0§< 特别鸣谢 >§fill=#fff§',
            'Bilge \"mnwary\"',
            "§fill=#808080§For being there to help towards\nthe end of development, and\nensuring the game's writing\nreaches its full potential.§fill=#fff§"
         
        ],
         [
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "",
            "§fill=#ff7§【组长】§fill=#fff§",
            "ws3917",
            "§fill=#ff7§【程序】§fill=#fff§",
            "ws3917",
            "§fill=#ff7§【文翻】§fill=#fff§",
            "ws3917",
            "Murder--Sans_MDR",
            "R.o.C.t.D./π/3.1415⑨",
            "1个渣渣",
            "§fill=#ff7§【文校】§fill=#fff§",
            "ws3917",
            "R.o.C.t.D./π/3.1415⑨",
            "晓晓_Akatsuki"
        ],
        [
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "",
            "§fill=#ff7§【美术】§fill=#fff§",
            "晓晓_Akatsuki",
            "屑moons月亮君",
            "御魂_",
            "mustad（边框Mod）",
            "§fill=#ff7§【精神支持&推广】§fill=#fff§",
            "幻-_-风",
            "AX暗星233",
            "屑moons月亮君"
        ],
        [
            "§fill=#ff0§< 汉化组成员 >§fill=#fff§",
            "",
            "§fill=#ff7§【汉化测试】§fill=#fff§",
            "ws3917",
            "Murder--Sans_MDR",
            "雪理奈",
            "（以及其他汉化组成员）",
            "感谢汉化组成员的努力付出！",
            "同时，也感谢您对这款游戏的喜爱！",
            "",
            "§fill=#808080§P.S. 汉化组正在为游戏制作各种Mod！\n欢迎B站关注@ws3917\n了解最新Mod开发进度！§fill=#fff§"
        ],
[ '特别鸣谢 由§fill=#ff0§Mavis与朋友们§fill=#fff§提供' ]
      ],

      final_frontier: {
         header: '(( 演员表 ))',
         opponents: {
            froggit: {
               name: '蛙吉特',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Pondering\nLife',
                  spare: 'Professional\nFrog',
                  flirt: 'Pondering\nLove',
                  bully: 'Hopping In\nFear'
               }
            },
            whimsun: {
               name: 'FLUTTERLYTE',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Learning To\nFly',
                  spare: 'Emboldening\nAviator',
                  flirt: 'Searching The\nSkies',
                  bully: 'Evasively\nManeuvering'
               }
            },
            moldsmal: {
               name: 'GELATINI',
               author: 'spacey_432',
               text: {
                  basic: 'Found A New\nSpace Station',
                  spare: 'Backup\nDancer',
                  flirt: 'Exotic Jelly\nDancer',
                  bully: 'Found A New\nGalaxy'
               }
            },
            loox: {
               name: 'OCULOUX',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Slightly\nBully-Like',
                  spare: 'Reformed\nBully',
                  flirt: 'Slightly\nFlirtatious',
                  bully: ''
               }
            },
            migosp: {
               name: 'SILENTE',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Exceedingly\nAgreeable',
                  spare: 'Casually\nEnjoys Life',
                  flirt: 'In Love From\nAfar',
                  bully: 'Endangerment\nDenier'
               }
            },
            mushy: {
               name: '蘑西',
               author: 'Balgamlı Kedi & ScarletScaledDragon',
               text: {
                  basic: 'Shooting\nBlanks',
                  spare: 'Quick-Draw\nMagician',
                  flirt: 'Gunshot\nHeart-Throb',
                  bully: 'Spraying And\nPraying'
               }
            },
            finalghost: {
               name: 'LURKSALOT',
               author: 'spacey_432',
               text: {
                  basic: 'Keeping To\nThemselves',
                  spare: 'Seeking\nPhysical Contact',
                  flirt: 'Stoically\nUninvolved',
                  bully: ''
               }
            },
            stardrake: {
               name: 'STARDRAKE',
               author: 'Burge',
               text: {
                  basic: 'Still Looking\nFor Laughs',
                  spare: 'Semi-Successful\nComedian',
                  flirt: 'Popular With The\nGrown-Ups',
                  bully: ''
               }
            },
            chilldrake: {
               name: 'CHILLDRAKE',
               author: 'Burge',
               text: {
                  basic: 'Still Looking\nFor Supporters',
                  spare: 'Gained A Cult\nFollowing',
                  flirt: 'Trades Kisses\nFor Supporters',
                  bully: 'Anti-Bullying\nActivist'
               }
            },
            spacetop: {
               name: 'ASTRO SERF',
               author: 'DESM.al',
               text: {
                  basic: 'Thinking About\nIts Antenna',
                  spare: 'Radio Station\nSensation',
                  flirt: 'Love Is On\nThe Air',
                  bully: 'Emergency\nBroadcaster'
               }
            },
            jerry: {
               name: '杰瑞',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Getting Ditched\nOn The Daily',
                  spare: 'Getting Ditched\nSlightly Less',
                  flirt: 'On The Road To\nRedemption',
                  bully: ''
               }
            },
            mouse: {
               name: 'WHIZKARAT',
               author: 'Zaxento The Greedy & semi',
               text: {
                  basic: 'Having An\nIdentity Crisis',
                  spare: 'Newest Member Of\nMouse Society',
                  flirt: 'Getting Frisky\nWith The Mice',
                  bully: 'Scurried Back To\nCat Society'
               }
            },
            doggo: {
               name: '遁狗',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Believes In The\nAlmighty Wrench',
                  spare: 'Found His Own\nSeeing-Eye Wolf',
                  flirt: 'In Love With His\nSeeing-Eye Wolf',
                  bully: 'Running To His\nSeeing-Eye Wolf'
               }
            },
            lesserdog: {
               name: '小犬座',
               author: 'major_memestar',
               text: {
                  basic: 'Searching For\nAffection',
                  spare: 'Found A Loving\nOwner',
                  flirt: 'Found An Owning\nLover',
                  bully: 'Desperate For\nAffection'
               }
            },
            dogs: {
               name: '狗来米 & 狗媳儿',
               author: 'major_memestar',
               text: {
                  basic: 'Still Thinking\nAbout Fetch',
                  spare: 'Reigning Puppy-Dog\nEyes Champions',
                  flirt: "Caught In Each-\nOther's Gaze",
                  bully: 'Defensive Puppy-\nDog Eyes Engaged'
               }
            },
            greatdog: {
               name: '大犬座',
               author: 'major_memestar',
               text: {
                  basic: "Unaware Of\nLife's Changes",
                  spare: "Excited By\nLife's Changes",
                  flirt: "Touched By\nLife's Changes",
                  bully: ''
               }
            },
            woshua: {
               name: 'SKRUBBINGTON',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Only 99.1\nPercent Clean',
                  spare: 'Power-Washing\nPowerhouse',
                  flirt: 'Hot Tub\nManufacturer',
                  bully: 'Overpowered\nPressure Washer'
               }
            },
            moldbygg: {
               name: 'GELATA',
               author: 'spacey_432',
               text: {
                  basic: 'Looking For A\nBaby Sitter',
                  spare: 'Slime-Powered\nBarstool',
                  flirt: 'Sexy Sitcom\nRegular',
                  bully: 'Glorified\nWrestling Prop'
               }
            },
            radtile: {
               name: 'RADTILE',
               author: 'Balgamlı Kedi & Zaxento The Greedy',
               text: {
                  basic: 'Wallowing In\nImperfection',
                  spare: 'Improving His\nSelf-Image',
                  flirt: 'Dating His Own\nReflection',
                  bully: 'Headed For An\nUgly Future'
               }
            },
            shyren: {
               name: 'SHYREN',
               author: 'Ghostly',
               text: {
                  basic: 'Back To Taking\nPiano Lessons',
                  spare: "Mettaton's\nNew Lead Singer",
                  flirt: 'In Love With\nA Ghost',
                  bully: "Can't Sing Without\nA Synthesizer"
               }
            },
            doge: {
               name: 'DOGE',
               author: 'major_memestar',
               text: {
                  basic: 'Construction Site\nDrill Sergeant',
                  spare: 'Bought A Lifetime\nSpa Subscription',
                  flirt: 'Felt Puppy Love\nFor The First Time',
                  bully: ''
               }
            },
            muffet: {
               name: '玛菲特',
               author: 'major_memestar',
               text: {
                  basic: 'Looking For Her\nNext Payout',
                  spare: 'Caring For The\nSpider Clans',
                  flirt: 'Picnic Date\nMatchmaker',
                  bully: ''
               }
            },
            pyrope: {
               name: 'HOTWIRE',
               author: 'semi',
               text: {
                  basic: 'Waiting For The\nBeat To Drop',
                  spare: 'Lightning-Fast\nRapper',
                  flirt: 'Rapper Turned\nLove Song Writer',
                  bully: 'Rap Battling To\nThe Near-Death'
               }
            },
            tsundere: {
               name: 'TSUNDERIDEX',
               author: 'spacey_432',
               text: {
                  basic: 'Flying Deeper\nInto Denial',
                  spare: 'Sneaking Up On\nYou At Warp Speed',
                  flirt: 'Tsun To Be\nYour Dere-Dere',
                  bully: 'Finally Met\nIts Match'
               }
            },
            perigee: {
               name: 'PERIGEE',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Another Day,\nAnother Conflict',
                  spare: 'Interplanetary\nAmbassador',
                  flirt: 'Encouraging Love\nIn Others',
                  bully: 'Showing Kindness\nThrough The Pain'
               }
            },
            rg: {
               name: '三号守卫 & 四号守卫',
               author: 'semi',
               text: {
                  basic: 'In Search Of\nChildhood Friends',
                  spare: 'Use Your\nImagination',
                  flirt: 'Please Use Your\nImagination',
                  bully: 'Royal Guard\nRetirees'
               }
            },
            glyde: {
               name: '老滑头',
               author: 'Burge',
               text: {
                  basic: 'Not Your Ideal\nBusiness Partner',
                  spare: 'A Little Less\nShady Than Usual',
                  flirt: 'Not Your Ideal\nBedfellow',
                  bully: ''
               }
            },
            burgie: {
               name: 'BURGERPANTS',
               author: 'Pongy25',
               text: {
                  basic: 'Running Hastily\nAt The Life Ahead',
                  spare: 'Looking Forward\nTo The Life Ahead',
                  flirt: 'Finding Love\nIn The Life Ahead',
                  bully: ''
               }
            },
            madjick: {
               name: 'COZMO',
               author: 'semi',
               text: {
                  basic: 'Looking For A\nDictionary',
                  spare: 'Famous\nMagician',
                  flirt: 'Found A New Kind\nOf Magic',
                  bully: ''
               }
            },
            knightknight: {
               name: 'TERRESTRIA',
               author: 'major_memestar',
               text: {
                  basic: 'In Search Of\nThe Past',
                  spare: 'Renowned\nHistorian',
                  flirt: 'Has A Crush On\nThe Homeworld',
                  bully: ''
               }
            },
            froggitex: {
               name: 'FINAL 蛙吉特',
               author: 'PoTheWinterCorder',
               text: {
                  basic: 'Keeping Its\nWisdom To Itself',
                  spare: 'Sharing Its\nWisdom Openly',
                  flirt: 'Using Its Wisdom\nFor Love',
                  bully: 'Using Its Wisdom\nFor Survival'
               }
            },
            whimsalot: {
               name: 'FLUTTERKNYTE',
               author: 'spacey_432',
               text: {
                  basic: 'Still Working\nEvery Day',
                  spare: 'Finally Took\nA Break',
                  flirt: 'Looking For Some\nPrivate Time',
                  bully: 'Working Harder\nOut Of Fear'
               }
            },
            astigmatism: {
               name: 'EYEWALKER PRIME',
               author: 'semi',
               text: {
                  basic: 'Still A\nBig Bully',
                  spare: 'Domineering\nEye Doctor',
                  flirt: 'Domineering\nLeather Tailor',
                  bully: 'Overthrown By\nAn Oculoux'
               }
            },
            migospel: {
               name: 'SILENCIO',
               author: 'Balgamlı Kedi',
               text: {
                  basic: 'Still A\nShameless Coward',
                  spare: 'A Little Less Of\nA Coward',
                  flirt: 'In Love With\nIts Fear',
                  bully: 'Running Faster\nThan Ever Before'
               }
            },
            mushketeer: {
               name: 'MUSHKETEER',
               author: 'Balgamlı Kedi & Ghostly',
               text: {
                  basic: 'One Mushroom\nArmy',
                  spare: 'Hardened Warrior\nSeeking Peace',
                  flirt: 'Defeated By The\nPower Of Love',
                  bully: 'Scared\nStraight'
               }
            }
         },
         swords: {
            papyrus: {
               name: '帕派瑞斯',
               author: 'ProctorDorkchop02 & MattSpriteMaster'
            },
            sans: {
               name: '衫斯',
               author: 'ProctorDorkchop02 & Fired'
            },
            undyne: {
               name: '安黛因',
               author: 'major_memestar'
            },
            alphys: {
               name: '艾菲斯',
               author: 'major_memestar'
            },
            mewmew: {
               name: 'MEW MEW',
               author: 'spacey_432'
            },
            napstablook: {
               name: '纳普斯特',
               author: 'spacey_432'
            },
            mettaton: {
               name: '镁塔顿',
               author: 'MattSpriteMaster'
            },
            toriel: {
               name: '托丽尔',
               author: 'MattSpriteMaster'
            },
            asgore: {
               name: '艾斯戈尔',
               author: 'MattSpriteMaster'
            },
            monsterkid: {
               name: '怪物小孩',
               author: 'spacey_432'
            },
            asriel: {
               name: '艾斯利尔',
               author: 'Medi0creking & MattSpriteMaster'
            }
         }
      },

      langPrompt: '[↑或↓] 选择语言 / [Z 或 ENTER] 确认',
      epilepsyInfo:
         '警告：\n\n游戏内包含§fill=#ff0§闪烁画面§fill=#fff§。\n如果您对此十分敏感或无法耐受，\n可以通过§fill=#ff0§游戏设置§fill=#fff§将其关闭。\n',
      epilepsyKeys: '§fill=#808080§按[Z或ENTER]继续',

      quitText1: '正在退出',
      quitText2: '正在退出.',
      quitText3: '正在退出..',

      real1: [
         [
            'Thank you for playing Outertale.',
            'Working on this project has been an honor,',
            'and a pleasure on my part.'
         ],
         [ 'When I started this journey, I never', "thought I'd get this far, but here we", 'are anyway, at the end.' ],
         [
            'For me, UNDERTALE was a life-changing',
            'experience, and one that was very hard to',
            'let go of after I first played it.'
         ],
         [
            'So, with OUTERTALE, I wanted to give you',
            'another chance to exist in a world like it,',
            'as if it were your first time.'
         ],
         [
            "I hope I've given you that chance.",
            "I hope you've come away satisfied with",
            "the time you've spent in this world."
         ],
         [
            "No matter what you've done in your life,",
            'your actions here speak volumes about the',
            'kind of person you really are.'
         ],
         [
            "It's because of you that you got the ending",
            'you did, and nothing can take that',
            'experience away from you.'
         ],
         [ 'Despite your mistakes... you are awesome,', 'and you deserve love and attention.', 'Remember that, okay?' ]
      ],
      real2: 'Take care of yourself, \"$(x).\"',

      end1: '剧终',
      end2: '剧终...？',

      restartText1: '正在重启',
      restartText2: '正在重启.',
      restartText3: '正在重启..',

      title: 'OUTERTALE / 域外传说',
      title_timeline: 'OUTERTALE...? / 域外传说..？'
   },

   gamepad: {
      prompt: '手柄设定',
      prompt_desc:
         '从游戏手柄上选择一个按键\n用来控制游戏中的某个操作。\n\n按下相同的按键进行确认，\n或按下其他按键重新设置。\n\n按 [ESC] 跳过设置。',
      prompt_counter: '输入分配到：$(x)',
      z: '[Z 或 ENTER] - 确认/交互',
      x: '[X 或 SHIFT] - 返回',
      c: '[C 或 CTRL] - 菜单（游戏内）',
      u: '[↑ 或 W] - 上移',
      l: '[← 或 A] - 左移',
      d: '[↓ 或 S] - 下移',
      r: '[→ 或 D] - 右移',
      f: '[F4] - 全屏',
      prompt_done: '设置完成。\n按任意键继续。',
      prompt_done_browser: '\n注意：在本平台运行游戏时，\n可能无法用手柄开启全屏。',
      prompt_load:
         '游戏手柄设置完成，\n按任意键继续。\n或者连按某个键三次\n重新设置手柄。'
   },

   general: {
      asriel: '艾斯利尔',
      asriel_location: '幻境',
      disabled: '关闭',
      enabled: '开启',
      finish: '按 [X] 返回',
      frisk: 'Frisk',
      g: 'G',
      hp: 'HP',
      inf: '\u221e',
      landing1: '[按 Z 或 ENTER]',
      lv: 'LV',
      mystery1: '§mystify=天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐§新名字§mystify=§',
      mystery2: '{@mystify=天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐}新名字{@mystify=}',
      mystery2l: '{@mystify=天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐}新名字{@mystify=}',
      mystery2u: '{@mystify=天地玄黄宇宙洪荒日月盈昃辰宿列张寒来暑往秋收冬藏闰余成岁律吕调阳云腾致雨露结为霜金生丽水玉出昆冈剑号巨阙珠称夜光果珍李柰菜重芥姜海咸河淡鳞潜羽翔龙师火帝鸟官人皇始制文字乃服衣裳推位让国有虞陶唐}新名字{@mystify=}',
      no: '否',
      nominal: '§fill=#0f0§正常',
      percent: '$(x)%',
      player: '玩家',
      settings: '游戏设置',
      unknown: '?',
      xm: 'XM',
      yes: '是'
   },

   menu: {
      box1: '物品栏',
      box2: '箱子',
      key1: '钥匙串',

      confirm1: '确定要选择这个名字吗？',
      confirm2: '已经选定了一个名字。',
      confirm3: '返回',

      footer: 'OUTERTALE V5.02 (c) 2024 SPACEY_432 简体中文版 PSOT汉化组',

      heal1: '* （HP已回满。）',
      heal2: '* （你回复了$(x) HP。）',
      heal3: '* （你失去了$(x) HP。）',
      heal4: '* （HP已清零。）',
      heal5: '* （你额外获得$(x) HP。）',

      item1: '使用',
      item2: '装备',
      item3: '信息',
      item4: '丢弃',

      load1: '继续',
      load2: '旁观',
      load3: '重置',
      load4: '真正的重置',

      name1: '为受困的人类命名：',
      name2: '返回',
      name3: '删除',
      name4: '确定',
      name5: '§fill=#808080§键盘输入，支持中文。\n\n[ENTER] - 确定\n[BACKSPACE] - 删除\n[ESC] - 返回',

      save1: '保存',
      save2: '返回',
      save3: '进度已保存！',

      settings1: '游戏设置',
      settings2: '返回',
      settings3: '语言',
      settings3a: '简体中文(人名翻译)',
      settings4: '音效',
      settings5: '音乐',
      settings6: '视觉特效',
      settings7: '闪烁画面',
      settings7a: '默认',
      settings7b: '削减',
      settings8: '方向键位置',
      settings8a: '左侧',
      settings8b: '右侧',
      settings8c: '隐藏',
      settings9: '摇杆死区',
      settings10: '打开Mod目录',
      settings11: '重启',

      sidebar1: '物品',
      sidebar2: '状态',
      sidebar3: '手机',
      sidebar4: '设置',
      sidebar5: '体征',

      start1: [
         '---- 操作介绍 ----',
         '[Z 或 ENTER] - 确认/交互',
         '[X 或 SHIFT] - 返回',
         '[C 或 CTRL] - 菜单（游戏内）',
         '[F4] - 全屏',
         '[长按 ESC] - 重启',
         '当 HP 降至 0，你就输了。'
      ],
      start2: '开始游戏',

      stat1: '攻击',
      stat2: '防御',
      stat3: '武器',
      stat4: '防具',
      stat5: '金钱',
      stat6: 'EXP',
      stat7: '升级需',
      stat8: '§fill=#ff0§警告：\n不是\n主时间线。',
      stat9: '击杀',
      stat10: '击败',
      stat11: '调情',
      stat12: '生命体征',
      stat13: '“$(x)”',

      story1: [ '<24>{#p/storyteller}很久以前，\n太阳系由两个物种统治着：\n人类和怪物。{^35}{}' ],
      story2: [ '<24>随着时间的推移，\n两个物种之间爆发了战争。{^35}{}' ],
      story3: [ "<24>最终，\n怪物的母星被摧毁，\n人类宣布了胜利。{^35}{}" ],
      story4: [ '<24>他们将剩下的怪物\n流放到一个废弃的前哨站。{^35}{}' ],
      story5: [ '<24>随后，建起一道强大的力场，\n将怪物们封印在内。{^35}{}' ],
      story6: [ '<24>许多年后.{^16}.{^16}.{^35}{}' ],
      story7: [ '<#24>       EBOTT区      \n        251X{^35}{}' ],
      story8: [ '<24>传说，宇宙中有一个地方，\n发射到那里的飞船\n都再也没有返航。{^35}{}' ],
      story9: [ '<24>{^100}{}' ],
      story10: [ '<24>{^100}{}' ],
      story11: [ '<24>{^35}{}' ]
   },

   timeline: {
      main: '重返主时间线',
      main_ex: '开启主时间线',
      timelines: '其他时间线槽位',
      bisect: '切分',
      delete: '删除',
      instruction: '[ESC]取消 / [ENTER]确定',
      instruction_gamepad: '按手柄上任意按钮打开键盘。',
      launch: '进入',
      rename: '重命名',
      create: '新建',
      placeholder: '输入时间线名称',
      confirm: '确定删除吗？'
   }
};


// END-TRANSLATE
