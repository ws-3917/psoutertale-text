// START-TRANSLATE

export default {
   battle: {
      death0: [ '(Вы глубоко вдохнули.)', "(Вы наполнены решимостью.)" ],
      death1: [ 'Ты ещё не можешь сдаться...', '$(name)!\nСохраняй решимость...' ],
      death2: [ 'Наша судьба зависит от тебя...', '$(name)!\nСохраняй решимость...' ],
      death3: [ "Ты будешь в порядке!", '$(name)!\nСохраняй решимость...' ],
      death4: [ "Не теряй надежду!", '$(name)!\nСохраняй решимость...' ],
      death5: [ 'Это не может закончиться здесь!', '$(name)!\nСохраняй решимость...' ],

      flee1: '    * Удалось сбежать...',
      flee2: "    * Я сваливаю.",
      flee3: "    * У меня есть дела по важнее.",
      flee4: "    * Не мешайте мне.",
      flee5: '    * Убежали с $(x) ОП\n      и $(y)З.',

      mercy_assist: '* Помочь',
      mercy_flee: '* Сбежать',
      mercy_spare: '* Пощадить',

      victory1: '<32>{#p/story}* ПОБЕДА!\n* Награда $(x) ОП и $(y)З.',
      victory2: '<32>{#p/story}* ПОБЕДА!\n* Награда $(x) ОП и $(y)З.\n* Ваш УР повысился.'
   },

   developer: {
      console: {
         header: 'ОШИБКА',
         p_resume: {
            header: 'ЗАКРЫТЬ',
            resume: 'Нажмите чтобы закрыть'
         },
         blurb: 'Произошла ошибка! Пожалуйста отправьте скриншот разработчику.'
      },
      control: {
         tab: 'УПРАВЛЕНИЕ',
         headers: [ 'ОСНОВНОЕ', 'БИТВА' ],
         items: [
            [
               'Фиксированная музыка',
               'Фиксированный игрок',
               'Бесконечные Монеты',
               'Взаимодействовать',
               'Ввод',
               'Движение',
               'Ноклип',
               'Сохранить',
               'Пропустить текст',
               'Бесплатная камера'
            ],
            [
               'Может помочь',
               'Прозрачный ящик',
               'Выход',
               'Перезапустить ящик',
               'Перезапустить меню',
               'Суметь сбежать',
               'Бесконечное здоровье',
               'Усмирить всех',
               'Суицид',
               'Ослабить всех'
            ]
         ],
         p_speed: {
            fps: '$(x) ФПС',
            halt: 'Остановка',
            header: 'СКОРОСТЬ ИГРЫ',
            multiplier: '$(x)x',
            next: 'Больше',
            prev: 'Менее',
            sec: '$(x)s/frame'
         }
      },
      godhome: {
         tab: 'Дом бога',
         p_teleport: {
            header: 'КОМНАТА',
            action: 'Телепорт'
         },
         p_encounter: {
            header: 'Столкновение',
            action: 'Старт'
         },
         p_armor: {
            header: 'БРОНЯ'
         },
         p_weapon: {
            header: 'ОРУЖИЕ'
         }
      },
      inspect: {
         tab: 'Проверить',
         headers: [ 'Слои', 'Виды' ],
         switches: [
            [ 'База', 'Ниже', 'Главный', 'Выше', 'Меню' ],
            [ 'Хитбокс', 'Спрайт', 'Текст' ]
         ],
         p_explorer: {
            header: 'Исследователь',
            layers: [ 'Базированый (Проводник)', 'Нижний (Проводник)', 'Главный (Проводник)', 'Верхний (Проводник)', 'Меню (Проводник)' ],
            letters: {
               animation: 'А',
               character: 'С',
               rectangle: 'R',
               entity: 'E',
               hitbox: 'H',
               object: 'O',
               player: 'P',
               sprite: 'S',
               text: 'T'
            }
         },
         debug_instructions: 'Нажмите [TAB], чтобы просмотреть отладочную информацию',
         debug: {
            a: 'А', 
            acceleration: 'Ускорение',
            active: 'Активный',
            alpha: 'Альфа',
            anchor: 'Якорь',
            b: 'B', 
            blend: 'Смесь',
            border: 'Граница',
            compute: 'Вычисленный размер',
            content: 'Контент',
            crop: 'Урожай',
            down: 'Вниз',
            duration: 'Продолжительность',
            exp: 'ОП',
            extent: 'Степень',
            f: 'F', 
            face: 'Лицо',
            false: 'Ложный',
            fill: 'Заполнить',
            fontFamily: 'Семейство шрифтов',
            fontSize: 'Размер шрифта',
            frames: 'Кадры',
            gravity: 'Гравитация',
            group: 'Группа',
            hp: 'ОЗ',
            index: 'Индекс',
            inert: 'Вялый',
            key: 'Ключ',
            lastSavedTime: 'Последнее сохраненное время',
            layer: 'Слой',
            layers: 'Слои',
            left: 'Лево',
            metadata: 'Метаданные',
            music: 'Музыка',
            namespace: 'Название помещения',
            none1: 'Никто',
            none2: 'никто',
            objects: 'Объект',
            oversaver: 'Над спасателем',
            parallax: 'Смещение',
            position: 'Позиция',
            primed: 'Загрунтованный',
            priority: 'Приоритет',
            registry: 'Регистрация',
            renderer: 'Рендеринг',
            resources: 'Ресурсы',
            reverse: 'Реверс',
            right: 'Право',
            room: 'Комната',
            roomState: 'Состояние комнаты',
            rotation: 'Вращение',
            s: 'S', 
            scale: 'Масштаб',
            shopSelection: 'Выбор магазина',
            size: 'Размер',
            spacing: 'Расстояние',
            spin: 'Вращение',
            sprites: 'Спрайты',
            step: 'Шаг',
            stroke: 'Инсульт',
            subcrop: 'Субкультура',
            talk: 'Говорить',
            target: 'Цель',
            text: 'Текст',
            tint: 'Оттенок',
            trackedAssets: 'Отслеживаемые активы',
            true: 'Да',
            unknown: 'НЕИЗВЕСТНЫЙ',
            up: 'Вверх',
            vars: 'Вары',
            velocity: 'Скорость',
            volatile: 'Летучий'
         }
      },
      savemod: {
         tab: 'Cохранить мод',
         header1: 'Cохранить редактор',
         domains: [
            'Данные (логические)',
            'Данные (Номера)',
            'Данные (Строки)',
            'Флаги (логические)',
            'Флаги (Цифры)',
            'Флаги (Строки)'
         ],
         p_page: {
            header: 'Навигация',
            prev: 'Предыдущий',
            next: 'Следующий'
         },
         prompt: 'Введите значение',
         back: 'Назад'
      },
      storage: {
         tab: 'ХРАНИЛИЩЕ',
         header: 'РЕДАКТОР ХРАНИЛИЩА',
         p_container: { header: 'ВЫБОР', prev: 'Предыдущий', next: 'Следующий' },
         display: { inventory: 'Инвентарь', dimboxA: 'Объёмный. Ящик А', dimboxB: 'Объёмный. Ящик Б' }
      }
   },

   dialog: {
      dialog_clear_title: 'Очистить файл',
      dialog_notice_title: 'Уведомление',
      dialog_open: { buttonLabel: 'Открыть', name: 'Сохранить файлы', title: 'Открыть Файл' },
      dialog_save: { buttonLabel: 'Сохранить', name: 'Сохранить файлы', title: 'Сохранить Файл' },
      error_load: 'Этот файл не удалось разобрать.',
      message_alert: [ 'ОК' ],
      message_confirm: [ 'Отменить', 'ОК' ],
      prompt_clear: 'Очистить этот файл?',
      prompt_demo: 'Ваш сохраненный файл из\nдемо-версии OUTERTALE был\nперемещен в раздел временной шкалы.',
      prompt_save: 'Сохранить этот файл?',
      prompt_save_alternate: 'Скопируйте приведенный ниже текст в\nJSON-файл, чтобы сохранить его\nна своем устройстве.',
      prompt_open: 'Загрузить этот файл?'
   },

   extra: {
      credits: [
         [
            '§fill=#ff0§< СОЗДАТЕЛЬ >§fill=#fff§',
            'spacey_432',
            '',
            '§fill=#ff0§< ПИСАТЕЛЬ >§fill=#fff§',
            'Balgamlı Kedi',
            'Bilge \"mnwary\"',
            'Обеденный стол',
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
            '§fill=#ff0§< ПИСАТЕЛЬ >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            'Turbulation',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< ХУДОЖНИК >§fill=#fff§',
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
            '§fill=#ff0§< ХУДОЖНИК >§fill=#fff§',
            'HolyOranges',
            'major_memestar',
            'MattSpriteMaster',
            'Medi0creking',
            'NerNot1',
            'PhyreFM',
            'Pongy25',
            'По Зимней границе',
            'ProctorDorkchop02',
            'Алый чешуйчатый дракон',
            'полу',
            'Soup Taels',
            'Волнистый, извивающийся',
            'Starkiteckt'
         ],
         [
            '§fill=#ff0§< ХУДОЖНИК >§fill=#fff§',
            'supper12',
            'Valor52',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< СПЕЦИАЛИСТ >§fill=#fff§',
            'Codetoil',
            'ws3917',
            '',
            '§fill=#ff0§< ТЕСТЕР >§fill=#fff§',
            'Alden',
            'Aspey',
            'Balgamlı Kedi',
            'Bilge \"mnwary\"',
            'Синий'
         ],
         [
            '§fill=#ff0§< ТЕСТЕР >§fill=#fff§',
            'Brad',
            'brayjamin',
            'ClamsyMoe',
            'Дельта',
            'Discarded Vessel',
            'Обеденный стол',
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
            '§fill=#ff0§< ТЕСТЕР >§fill=#fff§',
            'FuLiNT',
            'Funtermore',
            'gardnaeden',
            'Ghostly',
            'Gon UT',
            'Зелёный Чай',
            'Обнимашки!',
            'ilovecookies',
            'InvincibleRacoon',
            'Jago128',
            'Joe98912',
            'Jojoton56',
            'Jonkler',
            'Kiwi \"Quinn\"'
         ],
         [
            '§fill=#ff0§< ТЕСТЕР >§fill=#fff§',
            'lil tanski',
            'MR. PETER',
            'MSBen',
            'Murder--Sans_MDR',
            'My Cocoa',
            'Nanorasmus',
            'neo9174',
            'NepAnime',
            'полу',
            'Shaun Duz Stuffs',
            'SHCyank',
            'NerNot1',
            'petar3644',
            'PixelToons Jaafar'
         ],
         [
            '§fill=#ff0§< ТЕСТЕР >§fill=#fff§',
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
            'Волнистый, извивающийся',
            'superkippy',
            'Teecup'
         ],
         [
            '§fill=#ff0§< ТЕСТЕР >§fill=#fff§',
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
            '§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§',
            'Alden',
            '§fill=#808080§За то, что был рядом со мной,\nкогда я нуждался в поддержке, и\nпреподал мне жизненные уроки,\nкоторые сделали меня лучше.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§',
            'My Cocoa',
            '§fill=#808080§For being one of the friendliest\npeople I know, the first person\nto believe in my vision, and\ninspiring me to finish the game.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§',
            'Balgamlı Kedi',
            "§fill=#808080§For sticking with me at every\nstage of development, right from\nthe start. Regardless of the era,\nhe's always been there to help.§fill=#fff§"
         ],
         [
            '§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§',
            'Ghostly',
            '§fill=#808080§For being a voice of reason when\nit comes to many aspects of the\ngame, and encouraging me to take\ntesting seriously.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§',
            'Zaxento The Greedy',
            '§fill=#808080§For being reliable, brutally\nhonest, giving me lots of\ncriticism and ideas, and being\ntrustworthy from the day we met.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            '§fill=#808080§For helping me write crucial\nparts of the game, supporting my\nvision, and helping me express\nmyself in a whole new way.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ОСОБАЯ БЛАГОДАРНОСТЬ >§fill=#fff§',
            'Bilge \"mnwary\"',
            "§fill=#808080§For being there to help towards\nthe end of development, and\nensuring the game's writing\nreaches its full potential.§fill=#fff§"
         ],
         [ 'Brought to you by §fill=#ff0§The Mavis & Co.§fill=#fff§' ]
      ],

      final_frontier: {
         header: '(( CAST ))',
         opponents: {
            froggit: {
               name: 'FROGGIT',
               author: 'Алый чешуйчатый дракон',
               text: {
                  basic: 'Pondering\nLife',
                  spare: 'Professional\nFrog',
                  flirt: 'Pondering\nLove',
                  bully: 'Hopping In\nFear'
               }
            },
            whimsun: {
               name: 'FLUTTERLYTE',
               author: 'Алый чешуйчатый дракон',
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
               author: 'Алый чешуйчатый дракон',
               text: {
                  basic: 'Slightly\nBully-Like',
                  spare: 'Reformed\nBully',
                  flirt: 'Slightly\nFlirtatious',
                  bully: ''
               }
            },
            migosp: {
               name: 'SILENTE',
               author: 'Алый чешуйчатый дракон',
               text: {
                  basic: 'Exceedingly\nAgreeable',
                  spare: 'Casually\nEnjoys Life',
                  flirt: 'In Love From\nAfar',
                  bully: 'Endangerment\nDenier'
               }
            },
            mushy: {
               name: 'MUSHY',
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
               name: 'JERRY',
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
               name: 'DOGGO',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Believes In The\nAlmighty Wrench',
                  spare: 'Found His Own\nSeeing-Eye Wolf',
                  flirt: 'In Love With His\nSeeing-Eye Wolf',
                  bully: 'Running To His\nSeeing-Eye Wolf'
               }
            },
            lesserdog: {
               name: 'CANIS MINOR',
               author: 'major_memestar',
               text: {
                  basic: 'Searching For\nAffection',
                  spare: 'Found A Loving\nOwner',
                  flirt: 'Found An Owning\nLover',
                  bully: 'Desperate For\nAffection'
               }
            },
            dogs: {
               name: 'DOGAMY & DOGARESSA',
               author: 'major_memestar',
               text: {
                  basic: 'Still Thinking\nAbout Fetch',
                  spare: 'Reigning Puppy-Dog\nEyes Champions',
                  flirt: "Caught In Each-\nOther's Gaze",
                  bully: 'Defensive Puppy-\nDog Eyes Engaged'
               }
            },
            greatdog: {
               name: 'CANIS MAJOR',
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
               name: 'MUFFET',
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
               author: 'полу',
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
               name: 'RG 03 & RG 04',
               author: 'полу',
               text: {
                  basic: 'In Search Of\nChildhood Friends',
                  spare: 'Use Your\nImagination',
                  flirt: 'Please Use Your\nImagination',
                  bully: 'Royal Guard\nRetirees'
               }
            },
            glyde: {
               name: 'GLYDE',
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
               author: 'полу',
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
               name: 'FINAL FROGGIT',
               author: 'По Зимней границе',
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
               author: 'полу',
               text: {
                  basic: 'Остался\nБольшим задирой',
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
                  bully: 'Боится\nСилы'
               }
            }
         },
         swords: {
            papyrus: {
               name: 'ПАПИРУС',
               author: 'ProctorDorkchop02 и MattSpriteMaster'
            },
            sans: {
               name: 'САНС',
               author: 'ProctorDorkchop02 & Fired'
            },
            undyne: {
               name: 'АНДАЙН',
               author: 'major_memestar'
            },
            alphys: {
               name: 'АЛЬФИС',
               author: 'major_memestar'
            },
            mewmew: {
               name: 'МЯУ МЯУ',
               author: 'spacey_432'
            },
            napstablook: {
               name: 'НАБСТАБЛУК',
               author: 'spacey_432'
            },
            mettaton: {
               name: 'МЕТТАТОН',
               author: 'MattSpriteMaster'
            },
            toriel: {
               name: 'ТОРИЭЛЬ',
               author: 'MattSpriteMaster'
            },
            asgore: {
               name: 'АЗГОР',
               author: 'MattSpriteMaster'
            },
            monsterkid: {
               name: 'МОНСТРЁНОК',
               author: 'spacey_432'
            },
            asriel: {
               name: 'АЗРИЭЛЬ',
               author: 'Medi0creking и MattSpriteMaster'
            }
         }
      },

      langPrompt: '[↑ или ↓] чтобы Выбрать / [Z или ENTER] чтобы Подтвердить',
      epilepsyInfo:
         'To whom it may concern,\n\nThis game contains §fill=#ff0§flashing images§fill=#fff§\nwhich may be reduced via the\n§fill=#ff0§settings menu§fill=#fff§.\n\n',
      epilepsyKeys: '§fill=#808080§Press [Z or ENTER] to Continue',

      quitText1: 'Выходим',
      quitText2: 'Выходим.',
      quitText3: 'Выходим..',

      real1: [
         [
            'Спасибо за то, что сыграли в Outertale.',
            'Работа над этим проектом была для меня большой честью,',
            'и с удовольствием с моей стороны.'
         ],
         [ 'Когда я начинал это приключение, я никогда', "Не думал, что заберусь так далеко, но вот мы", 'в любом случае, в конце.' ],
         [
            'Для меня UNDERTALE стал судьбоносным.',
            'опыт, который было очень трудно',
            'после того, как я впервые сыграл в нее.'
         ],
         [
            'Поэтому, создавая «OUTERTALE», я хотел дать тебе',
            'еще один шанс на существование в мире, подобном этому,',
            'как будто это твой первый раз.'
         ],
         [
            "Надеюсь, я дал тебе этот шанс.",
            "Я надеюсь, что ты остался доволен",
            "время, проведенное в этом мире."
         ],
         [
            "Неважно, что ты сделал в своей жизни,",
            'твои действия здесь говорят о том',
            'каким человеком ты на самом деле являешься.'
         ],
         [
            "Это благодаря тебе ты получил концовку",
            'ты сделал это, и ничто не может это отменить',
            'опыт, который ты отнимаешь у себя.'
         ],
         [ 'Несмотря на ошибки... ты потрясающий,', 'и ты заслуживаешь любви и внимания.', 'Помни это, хорошо?' ]
      ],
      real2: 'Береги себя, «$(x)».',

      end1: 'КОНЕЦ',
      end2: 'КОНЕЦ...?',

      restartText1: 'Перезапуск',
      restartText2: 'Перезапуск.',
      restartText3: 'Перезапуск..',

      title: 'OUTERTALE',
      title_timeline: 'OUTERTALE...?'
   },

   gamepad: {
      prompt: 'НАСТРОЙКА КНОПОК',
      prompt_desc:
         'Нажмите кнопку на геймпаде чтобы настроить\nеё под действие в игре.\n\nНажмите кнопку снова для подтверждения,\nили нажмите другие кнопки чтобы их тоже настроить.\n\nНажмите ESC чтобы пропустить настройку.',
      prompt_counter: 'Выбранное Управление: $(x)',
      z: '[Z или ENTER] - Подтвердить',
      x: '[X или SHIFT] - Отменить',
      c: '[C или CTRL] - Меню (В игре)',
      u: '[UP или W] - Вверх',
      l: '[LEFT или A] - Влево',
      d: '[DOWN или S] - Вниз',
      r: '[RIGHT or D] - Вправо',
      f: '[F4] - Полный экран',
      prompt_done: 'Настройка завершена.\nНажмите любую кнопку чтобы продолжить.',
      prompt_done_browser: '\nПримечание: На этой платформе, геймпад не\nвсегда сможет входить в Полный экран.',
      prompt_load:
         'Геймпад уже был настроен.\nНажмите любую кнопку чтобы продолжить, или\nнажмите любую кнопку три раза подряд\nчтобы перезапустить настройку.\n\nНажмите ESC чтобы пропустить настройку.'
   },

   general: {
      asriel: 'Азриель',
      asriel_location: 'Забвение',
      disabled: 'ВЫКЛЮЧЕНЫ',
      enabled: 'ВКЛЮЧЕНЫ',
      finish: 'Нажмите [X] чтобы Завершить',
      frisk: 'Фриск',
      g: 'З',
      hp: 'ОЗ',
      inf: 'БЕСК.',
      landing1: '[НАЖМИТЕ Z ИЛИ ENTER]',
      lv: 'УР',
      mystery1: '§mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz§aaaaaa§mystify=§',
      mystery2: '{@mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify=}',
      mystery2l: '{@mystify=abcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify=}',
      mystery2u: '{@mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZ}aaaaaa{@mystify=}',
      no: 'Нет',
      nominal: '§fill=#0f0§НОМИНАЛ',
      percent: '$(x)%',
      player: 'игрок',
      settings: 'Настройки',
      unknown: '?',
      xm: 'ЭВ',
      yes: 'Да'
   },

   menu: {
      box1: 'ИНВЕНТАРЬ',
      box2: 'КОРОБКА',
      key1: 'БРЕЛОК',

      confirm1: 'Это верное имя?',
      confirm2: 'Имя уже было выбрано.',
      confirm3: 'Назад',

      footer: 'OUTERTALE V5.02 (c) 2024 SPACEY_432',

      heal1: '* (ОЗ полностью восстановлено.)',
      heal2: '* (Вы восстановили $(x) ОЗ.)',
      heal3: '* (Вы потеряли $(x) ОЗ.)',
      heal4: '* (ОЗ полностью утрачено.)',
      heal5: '* (Вы получили $(x) ОЗ.)',

      item1: 'ИСП',
      item2: 'ОСНАСТИТЬ',
      item3: 'ИНФО',
      item4: 'ВЫБРОС',

      load1: 'Продолжить',
      load2: 'Наблюдать',
      load3: 'Сброс',
      load4: 'Истинный Сброс',

      name1: 'Назовите застрявшего человека.',
      name2: 'Выйти',
      name3: 'Удалить',
      name4: 'Готово',
      name5: '§fill=#808080§ [ESC] - Выйти / [ENTER] - Готово',

      save1: 'Сохранить',
      save2: 'Назад',
      save3: 'Файл сохранён.',

      settings1: 'НАСТРОЙКИ',
      settings2: 'ВЫЙТИ',
      settings3: 'ЯЗЫК',
      settings3a: 'РУССКИЙ',
      settings4: 'ЗВУКОВЫЕ ЭФФЕКТЫ',
      settings5: 'МУЗЫКА',
      settings6: 'СПЕЦ. ЭФФЕКТЫ',
      settings7: 'МИГАЮЩИЕ ИЗОБРАЖЕНИЯ',
      settings7a: 'ОБЫЧНЫЕ',
      settings7b: 'УМЕНЬШЕННЫЕ',
      settings8: 'СЕНСОРНОЕ УПРАВЛЕНИЕ',
      settings8a: 'СЛЕВА',
      settings8b: 'СПРАВА',
      settings8c: 'СКРЫТЫ',
      settings9: 'МЁРТВАЯ ЗОНА',
      settings10: 'ОТКРЫТЬ ПАПКУ МОДОВ',
      settings11: 'ПЕРЕЗАГРУЗКА',

      sidebar1: 'ВЕЩИ',
      sidebar2: 'СТАТ',
      sidebar3: 'ТЕЛ',
      sidebar4: 'КОНФ',
      sidebar5: 'S',

      start1: [
         '--- Инструкция ---',
         '[Z или ENTER] - Подтвердить',
         '[X или SHIFT] - Отменить',
         '[C или CTRL] - Меню (В игре)',
         '[F4] - Полный экран',
         '[Зажать ESC] - Перезагрузка',
         'Когда ОЗ будет на нуле, вы проиграете.'
      ],
      start2: 'Начать Игру',

      stat1: 'АТ',
      stat2: 'ЗЩ',
      stat3: 'ОРУЖИЕ',
      stat4: 'БРОНЯ',
      stat5: 'ЗОЛОТО',
      stat6: 'ОП',
      stat7: 'СЛЕД',
      stat8: '§fill=#ff0§Внимание:\nНе-каноничная\nлиния времени.',
      stat9: 'УБИТО',
      stat10: 'ЗАПУГАНО',
      stat11: 'ФЛИРТЫ',
      stat12: 'СТАТУС',
      stat13: '\"$(x)\"',

      story1: [ '<24>{#p/storyteller}Давным-давно, два вида правили солнечной системой: ЛЮДИ и МОНСТРЫ.{^35}{}' ],
      story2: [ '<24>Со временем, между ними разрослась война.{^35}{}' ],
      story3: [ "<24>Когда родная планета МОНСТРОВ была уничтожена, ЛЮДИ объявили победу.{^35}{}" ],
      story4: [ '<24>Оставшихся МОНСТРОВ изгнали на заброшенный аванпост.{^35}{}' ],
      story5: [ '<24>Мощный силовой барьер был возведён, и МОНСТРОВ запечатали в нём.{^35}{}' ],
      story6: [ '<24>Много лет спустя.{^8}.{^8}.{^35}{}' ],
      story7: [ '<#24>     СЕКТОР ЭБОТТ     \n         251X{^35}{}' ],
      story8: [ '<24>Легенды гласят, что космические корабли никогда не возвращаются оттуда.{^35}{}' ],
      story9: [ '<24>{^100}{}' ],
      story10: [ '<24>{^100}{}' ],
      story11: [ '<24>{^35}{}' ]
   },

   timeline: {
      main: 'Продолжить Каноничный Таймлайн',
      main_ex: 'Начать Каноничный Таймлайн',
      timelines: 'Другие Слоты',
      bisect: 'Создать',
      delete: 'Удал.',
      instruction: '[ESC] чтобы отменить / [ENTER] чтобы подтвердить',
      instruction_gamepad: 'Нажмите любую клавишу на геймпаде, чтобы открыть клавиатуру.',
      launch: 'Запуск',
      rename: 'Имя',
      create: 'Создать новый',
      placeholder: 'Введите имя таймлайна',
      confirm: 'Вы уверены?'
   }
};


// END-TRANSLATE
