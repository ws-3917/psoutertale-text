// START-TRANSLATE

export default {
   battle: {
      death0: [ '(Zhluboka se nadechnete.)', "(Jsi plný odhodlání.)" ],
      death1: [ 'Ještě se nesmíš vzdát...', '$(name)!\nZůstaňte odhodlaní...' ],
      death2: [ 'Náš osud spočívá na tobě...', '$(name)!\nZůstaňte odhodlaní...' ],
      death3: [ "Budeš v pořádku!", '$(name)!\nZůstaňte odhodlaní...' ],
      death4: [ "Neztrácejte naději!", '$(name)!\nZůstaňte odhodlaní...' ],
      death5: [ 'Teď to nemůže skončit!', '$(name)!\nZůstaňte odhodlaní...' ],

      flee1: '    *Utekl jsi...',
      flee2: "        * Jsem odsud pryč.",
      flee3: "    * Mám lepší práci.",
      flee4: "    * Nezpomaluj mě.",
      flee5: '    * Utekl jsi s $(x) BP\n      a $(y)Z.',

      mercy_assist: '* Asistence',
      mercy_flee: '* Utéct',
      mercy_spare: '* Ušetřete',

      victory1: '<32>{#p/story}* YOU WON!\n* You earned $(x) BP and $(y)Z.',
      victory2: '<32>{#p/story}* VYHRÁLI JSTE!\n* Dostali jste $(x) BP a $(y)Z.\n* Vaše ÚN vzrostla.'
   },

   developer: {
      console: {
         header: 'CHYBA',
         p_resume: {
            header: 'PROPUSTIT',
            resume: 'Klepnutím zavřít'
         },
         blurb: 'Došlo k chybě! Prosím o zaslání\nsnímek obrazovky vývojáři.'
      },
      control: {
         tab: 'ŘÍZENÍ',
         headers: [ 'GENERÁL', 'BITVA' ],
         items: [
            [
               'OpravitHudba',
               'OpravitHráč',
               'NekonečnýG',
               'Interagujte',
               'Vstup',
               'Pohyb',
               'Noclip',
               'Uložit',
               'PřeskočitText',
               'Freecam'
            ],
            [
               'CanAssist',
               'ClearBox',
               'Exit',
               'ResetBox',
               'ResetMenu',
               'MůžeUtéct',
               'NekonečnáHP',
               'PacifyAll',
               'Sebevražda',
               'WeakenAll'
            ]
         ],
         p_speed: {
            fps: '$(x) SZS',
            halt: 'Zastavit',
            header: 'RYCHLOST HRY',
            multiplier: '$(x)x ',
            next: 'Více',
            prev: 'Méně ',
            sec: '$(x)s/snímek'
         }
      },
      godhome: {
         tab: 'KMOTR',
         p_teleport: {
            header: 'POKOJ',
            action: 'Teleportovat'
         },
         p_encounter: {
            header: 'SETKÁNÍ',
            action: 'Start'
         },
         p_armor: {
            header: 'BRNĚNÍ'
         },
         p_weapon: {
            header: 'ZBRAŇ'
         }
      },
      inspect: {
         tab: 'PROZKOUMAT',
         headers: [ 'VRSTVY', 'TYPY' ],
         switches: [
            [ 'Základna', 'Pod', 'Hlavní', 'Nad', 'Menu' ],
            [ 'Hitbox', 'Skřítek', 'Text' ]
         ],
         p_explorer: {
            header: 'PRŮZKUMNÍK',
            layers: [ 'Základní (Průzkumník)', 'Níže (Průzkumník)', 'Hlavní (Průzkumník)', 'Nahoře (průzkumník)', 'Nabídka (průzkumník)' ],
            letters: {
               animation: 'A',
               character: 'C',
               rectangle: 'R',
               entity: 'E',
               hitbox: 'H',
               object: 'O',
               player: 'P',
               sprite: 'S',
               text: 'T'
            }
         },
         debug_instructions: 'Stisknutím klávesy [TAB] můžete cyklicky přepínat informace o ladění',
         debug: {
            a: 'A', 
            acceleration: 'Zrychlení',
            active: 'Aktivní',
            alpha: 'Alfa',
            anchor: 'Kotva',
            b: 'B', 
            blend: 'Směs',
            border: 'Hranice',
            compute: 'Vypočtená velikost',
            content: 'Obsah',
            crop: 'Plodina',
            down: 'Dolů',
            duration: 'Trvání',
            exp: 'BP',
            extent: 'Rozsah',
            f: 'F', 
            face: 'Obličej',
            false: 'Falešný',
            fill: 'Vyplnit',
            fontFamily: 'Rodina písem',
            fontSize: 'Velikost písma',
            frames: 'Snímky',
            gravity: 'Gravitace',
            group: 'Skupina',
            hp: 'ZB',
            index: 'Index',
            inert: 'Inertní',
            key: 'Klíč',
            lastSavedTime: 'Poslední uložený čas',
            layer: 'Vrstva',
            layers: 'Vrstvy',
            left: 'Vlevo',
            metadata: 'Metadata',
            music: 'Hudba',
            namespace: 'Namespace',
            none1: 'ŽÁDNÝ',
            none2: 'žádný',
            objects: 'Objekty',
            oversaver: 'Přílišný spořič',
            parallax: 'Paralaxa',
            position: 'Postavení',
            primed: 'Natřený základní barvou',
            priority: 'Priorita',
            registry: 'REGISTR',
            renderer: 'Vykreslovač',
            resources: 'Prostředky',
            reverse: 'Rezerva',
            right: 'Vpravo',
            room: 'Místnost',
            roomState: 'Stav místnosti',
            rotation: 'Rotace',
            s: 'S', 
            scale: 'Škála',
            shopSelection: 'Výběr obchodu',
            size: 'Velikost',
            spacing: 'Rozteč',
            spin: 'Příst',
            sprites: 'Skřítci',
            step: 'Krok',
            stroke: 'Mrtvice',
            subcrop: 'Dílčí plodina',
            talk: 'Hovořit',
            target: 'Cíl',
            text: 'Text',
            tint: 'Odstín',
            trackedAssets: 'Sledované datové zdroje',
            true: 'Pravdivý',
            unknown: 'NEZNÁMÝ',
            up: 'Nahoru',
            vars: 'Vars',
            velocity: 'Rychlost',
            volatile: 'Nestálý'
         }
      },
      savemod: {
         tab: 'SAVEMOD',
         header1: 'ULOŽIT EDITOR',
         domains: [
            'Data (logické hodnoty)',
            'Data (čísla)',
            'Data (řetězce)',
            'Příznaky (Booleans)',
            'Příznaky (Čísla)',
            'Příznaky (řetězce)'
         ],
         p_page: {
            header: 'NAVIGACE',
            prev: 'Před',
            next: 'Další'
         },
         prompt: 'Zadejte hodnotu',
         back: 'Zpět'
      },
      storage: {
         tab: 'SKLADOVÁNÍ',
         header: 'EDITOR ÚLOŽIŠTĚ',
         p_container: { header: 'SELEKCE', prev: 'Před', next: 'Další' },
         display: { inventory: 'Inventář', dimboxA: 'Roz. rámeček A', dimboxB: 'Roz. Rámeček B' }
      }
   },

   dialog: {
      dialog_clear_title: 'Vymazat soubor',
      dialog_notice_title: 'Oznámení',
      dialog_open: { buttonLabel: 'Otevřít', name: 'UKLÁDÁNÍ souborů', title: 'Otevřít soubor' },
      dialog_save: { buttonLabel: 'Uložit', name: 'UKLÁDÁNÍ souborů', title: 'Uložit soubor' },
      error_load: 'Tento soubor nebylo možné analyzovat.',
      message_alert: [ 'OK' ],
      message_confirm: [ 'Zrušit', 'OK' ],
      prompt_clear: 'Vymazat tento soubor?',
      prompt_demo: 'Váš soubor SAVE z\nOUTERTALE demo bylo\npřesunuto do slotu časové osy.',
      prompt_save: 'Uložit tento soubor?',
      prompt_save_alternate: 'Zkopírujte níže uvedený text do\nsoubor JSON pro jeho uložení\ndo vašeho zařízení.',
      prompt_open: 'Načíst tento soubor?'
   },

   extra: {
      credits: [
         [
            '§fill=#ff0§< VÝVOJÁŘ >§fill=#fff§',
            'spacey_432',
            '',
            '§fill=#ff0§< SPISOVATEL >§fill=#fff§',
            'Balgamlı Kedi',
            'Bilge \"mnwary\"',
            'Dischnie',
            'Efe Kaya',
            'Ghostly',
            'InvincibleRacoon',
            'Jojoton56',
            'Kiwi \"Quinn\"',
            'My Aster',
            'neo9174',
            'Rise'
         ],
         [
            '§fill=#ff0§< SPISOVATEL >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            'Turbulation',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< UMĚLEC >§fill=#fff§',
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
            '§fill=#ff0§< UMĚLEC >§fill=#fff§',
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
            '§fill=#ff0§< UMĚLEC >§fill=#fff§',
            'supper12',
            'Valor52',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< TECHNIK >§fill=#fff§',
            'Codetoil',
            'ryi3r',
            'ws3917',
            '',
            '§fill=#ff0§< ZKOUŠEČ >§fill=#fff§',
            'Alden',
            'Aspey',
            'Balgamlı Kedi',
            'Bilge \"mnwary\"'
         ],
         [
            '§fill=#ff0§< ZKOUŠEČ >§fill=#fff§',
            'blue',
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
            'Fired'
         ],
         [
            '§fill=#ff0§< ZKOUŠEČ >§fill=#fff§',
            'FireWizard72X',
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
            'Jonkler'
         ],
         [
            '§fill=#ff0§< ZKOUŠEČ >§fill=#fff§',
            'Kiwi \"Quinn\"',
            'lil tanski',
            'MR. PETER',
            'MSBen',
            'Murder--Sans_MDR',
            'My Aster',
            'Nanorasmus',
            'neo9174',
            'NepAnime',
            'semi',
            'Shaun Duz Stuffs',
            'SHCyank',
            'NerNot1',
            'petar3644'
         ],
         [
            '§fill=#ff0§< ZKOUŠEČ >§fill=#fff§',
            'PixelToons Jaafar',
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
            'superkippy'
         ],
         [
            '§fill=#ff0§< ZKOUŠEČ >§fill=#fff§',
            'Teecup',
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
            '§fill=#ff0§< ZVLÁŠTNÍ PODĚKOVÁNÍ >§fill=#fff§',
            'Alden',
            '§fill=#808080§Za to, že je tu pro mě, když\nPotřebuji někoho, o koho se může opřít, a\nUčí mě životní lekce, které\nze mě udělaly lepšího člověka.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ZVLÁŠTNÍ PODĚKOVÁNÍ >§fill=#fff§',
            'My Aster',
            '§fill=#808080§Za to, že je jedním z nejpřátelštějších\nlidé, které znám, první osoba\nvěřit v mou vizi a\ninspirující mě k dokončení hry.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ZVLÁŠTNÍ PODĚKOVÁNÍ >§fill=#fff§',
            'Balgamlı Kedi',
            "§fill=#808080§Za to, že je se mnou zůstal na každém\nfáze vývoje, již od\nzačátek. Bez ohledu na dobu,\nvždycky tu byl, aby pomohl.§fill=#fff§"
         ],
         [
            '§fill=#ff0§< ZVLÁŠTNÍ PODĚKOVÁNÍ >§fill=#fff§',
            'Ghostly',
            '§fill=#808080§Za to, že je hlasem rozumu, když\ntýká se to mnoha aspektů\nhry, a povzbuzuje mě, abych si vzal\ntestování vážně.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ZVLÁŠTNÍ PODĚKOVÁNÍ >§fill=#fff§',
            'Zaxento The Greedy',
            '§fill=#808080§Za to, že je spolehlivý, brutální\nupřímný, dává mi spoustu\nkritika a myšlenky a bytí\ndůvěryhodný ode dne, kdy jsme se potkali.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ZVLÁŠTNÍ PODĚKOVÁNÍ >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            '§fill=#808080§Za pomoc při psaní zásadních\nčásti hry, podporující můj\nvize a pomáhá mi vyjádřit\nÚplně novým způsobem.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< ZVLÁŠTNÍ PODĚKOVÁNÍ >§fill=#fff§',
            'Bilge \"mnwary\"',
            "§fill=#808080§Za to, že je tam byl, abys pomohl\nukončení vývoje a\nzajištění psaní hry\ndosahuje svého plného potenciálu.§fill=#fff§"
         ],
         [ 'Přináší vám §fill=#ff0§The Mavis & Co.§fill=#fff§' ]
      ],

      final_frontier: {
         header: '(( OBSAZENÍ ))',
         opponents: {
            froggit: {
               name: 'FROGGIT',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Přemítání\no životě',
                  spare: 'Profesionální\nžába',
                  flirt: 'Přemítání\no lásce',
                  bully: 'Poskakování\nve strachu'
               }
            },
            whimsun: {
               name: 'FLUTTERLYTE',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Učí se\nlétat',
                  spare: 'Povzbudivý\nletec',
                  flirt: 'Prohledávání\noblohy',
                  bully: 'Vyhýbavé\nmanévrování'
               }
            },
            moldsmal: {
               name: 'GELATINI',
               author: 'spacey_432',
               text: {
                  basic: 'Našel novou\nvesmírnou stanici',
                  spare: 'Doprovodný\nTanečník',
                  flirt: 'Exotická želé\nTanečnice',
                  bully: 'Objevil novou\ngalaxii'
               }
            },
            loox: {
               name: 'OCULOUX',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Mírně\ntyranský',
                  spare: 'Reformovaný\ntyran',
                  flirt: 'Mírně\nkoketní',
                  bully: ''
               }
            },
            migosp: {
               name: 'SILENTE',
               author: 'ScarletScaledDragon',
               text: {
                  basic: 'Nesmírně\nPříjemné',
                  spare: 'Příležitostně\nsi užívá života',
                  flirt: 'Zamilovaní\nZ daleka',
                  bully: 'Popírač\nOhrožení'
               }
            },
            mushy: {
               name: 'MUSHY',
               author: 'Balgamlı Kedi & ScarletScaledDragon',
               text: {
                  basic: 'Střílí slepými\nNáboji',
                  spare: 'Kouzelník\nrychlého tahu',
                  flirt: 'Výstřel z\nPistole Srdcař',
                  bully: 'Stříká\na modlí se'
               }
            },
            finalghost: {
               name: 'LURKSALOT',
               author: 'spacey_432',
               text: {
                  basic: 'Drží se\nsami sebe',
                  spare: 'Vyhledání\nFyzického kontaktu',
                  flirt: 'Stoicky\nnezúčastněný',
                  bully: ''
               }
            },
            stardrake: {
               name: 'STARDRAKE',
               author: 'Burge',
               text: {
                  basic: 'Stále\nhledá smích',
                  spare: 'Poloúspěšný\nkomik',
                  flirt: 'Oblíbený\nu dospělý',
                  bully: ''
               }
            },
            chilldrake: {
               name: 'CHILLDRAKE',
               author: 'Burge',
               text: {
                  basic: 'Stále hledá\npodporovatele',
                  spare: 'Získal kultovní\nnásledovníky',
                  flirt: '­Výměna polibků\nPro fanoušky',
                  bully: 'Aktivista proti\nŠikaně'
               }
            },
            spacetop: {
               name: 'ASTRO SERF',
               author: 'DESM.al',
               text: {
                  basic: 'Přemýšlení o\njeho anténě',
                  spare: 'Rozhlasová\nsenzace',
                  flirt: 'Láska je\nVe vzduchu',
                  bully: '‘Nouzový vysílač'
               }
            },
            jerry: {
               name: 'JERRY',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Každodenní\npříkop',
                  spare: 'Dostává se do\nPříkopů něco méně',
                  flirt: 'Na cestě k\nvykoupení',
                  bully: ''
               }
            },
            mouse: {
               name: 'WHIZKARAT',
               author: 'Zaxento The Greedy & semi',
               text: {
                  basic: 'Krize\nidentity',
                  spare: 'Nejnovější člen\nmyší společnosti',
                  flirt: 'Začíná si\nHrát s myšmi',
                  bully: 'Uháněl zpět do\nkočičí společnosti'
               }
            },
            doggo: {
               name: 'DOGGO',
               author: 'Discarded Vessel',
               text: {
                  basic: 'Věří ve\nvšemocný klíč',
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
               name: 'RG 03 & RG 04',
               author: 'semi',
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
               name: 'FINAL FROGGIT',
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
               name: 'PAPYRUS',
               author: 'ProctorDorkchop02 & MattSpriteMaster'
            },
            sans: {
               name: 'SANS',
               author: 'ProctorDorkchop02 & Fired'
            },
            undyne: {
               name: 'UNDYNE',
               author: 'major_memestar'
            },
            alphys: {
               name: 'ALPHYS',
               author: 'major_memestar'
            },
            mewmew: {
               name: 'MEW MEW',
               author: 'spacey_432'
            },
            napstablook: {
               name: 'NAPSTABLOOK',
               author: 'spacey_432'
            },
            mettaton: {
               name: 'METTATON',
               author: 'MattSpriteMaster'
            },
            toriel: {
               name: 'TORIEL',
               author: 'MattSpriteMaster'
            },
            asgore: {
               name: 'ASGORE',
               author: 'MattSpriteMaster'
            },
            monsterkid: {
               name: 'MONSTER KID',
               author: 'spacey_432'
            },
            asriel: {
               name: 'ASRIEL',
               author: 'Medi0creking & MattSpriteMaster'
            }
         }
      },

      langPrompt: '[↑ or ↓] to Select / [Z or ENTER] to Confirm',
      epilepsyInfo:
         'To whom it may concern,\n\nThis game contains §fill=#ff0§flashing images§fill=#fff§\nwhich may be reduced via the\n§fill=#ff0§settings menu§fill=#fff§.\n\n',
      epilepsyKeys: '§fill=#808080§Press [Z or ENTER] to Continue',

      quitText1: 'Quitting',
      quitText2: 'Quitting.',
      quitText3: 'Quitting..',

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

      end1: 'THE END',
      end2: 'THE END...?',

      restartText1: 'Restarting',
      restartText2: 'Restarting.',
      restartText3: 'Restarting..',

      title: 'OUTERTALE',
      title_timeline: 'OUTERTALE...?'
   },

   gamepad: {
      prompt: 'GAMEPAD SETUP',
      prompt_desc:
         'Use an input on your gamepad to assign\nit to the in-game action.\n\nUse the input again to confirm, or use\nother inputs to assign those as well.\n\nPress ESC to skip setup.',
      prompt_counter: 'Inputs Assigned: $(x)',
      z: '[Z or ENTER] - Confirm',
      x: '[X nebo SHIFT] - Zrušit',
      c: '[C nebo CTRL] - Menu (V her)',
      u: '[UP nebo W] - Pohyb nahoru',
      l: '[LEFT nebo A] - Pohyb Levé',
      d: '[DOWN nebo S] - Pohyb Dolů',
      r: '[RIGHT nebo D] - Pohyb Pravá',
      f: '[F4] - Fullscreen',
      prompt_done: 'Setup complete.\nPress any button to continue.',
      prompt_done_browser: '\nNote: On this platform, the gamepad may\nnot always be able to enter fullscreen.',
      prompt_load:
         'A gamepad has already been set up.\nPress any button to continue, or press\nany button three times in rapid\nsuccession to restart setup.\n\nPress ESC to skip setup.'
   },

   general: {
      asriel: 'Asriel',
      asriel_location: 'The Oblivion',
      disabled: 'DISABLED',
      enabled: 'ENABLED',
      finish: 'Press [X] to Finish',
      frisk: 'Frisk',
      g: 'G',
      hp: 'ZB',
      inf: 'INF',
      landing1: '[PRESS Z OR ENTER]',
      lv: 'ÚN',
      mystery1: '§mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz§aaaaaa§mystify=§',
      mystery2: '{@mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify=}',
      mystery2l: '{@mystify=abcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify=}',
      mystery2u: '{@mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZ}aaaaaa{@mystify=}',
      no: 'No',
      nominal: '§fill=#0f0§NOMINAL',
      percent: '$(x)%',
      player: 'player',
      settings: 'Settings',
      unknown: '?',
      xm: 'XM',
      yes: 'Ano'
   },

   menu: {
      box1: 'INVENTORY',
      box2: 'BOX',
      key1: 'KEYRING',

      confirm1: 'Is this name correct?',
      confirm2: 'A name has already\nbeen chosen.',
      confirm3: 'Go back',

      footer: 'OUTERTALE V5.02 (c) 2024 SPACEY_432',

      heal1: '* (HP fully restored.)',
      heal2: '* (You recovered $(x) HP.)',
      heal3: '* (You lost $(x) HP.)',
      heal4: '* (HP fully depleted.)',
      heal5: '* (You gained $(x) HP.)',

      item1: 'USE',
      item2: 'EQUIP',
      item3: 'INFO',
      item4: 'DROP',

      load1: 'Pokračovat',
      load2: 'Observe',
      load3: 'Reset',
      load4: 'True Reset',

      name1: 'Name the stranded human.',
      name2: 'Quit',
      name3: 'Backspace',
      name4: 'Done',
      name5: '§fill=#808080§ [ESC] - Quit / [ENTER] - Done',

      save1: 'Uložit',
      save2: 'Return',
      save3: 'File saved.',

      settings1: 'SETTINGS',
      settings2: 'EXIT',
      settings3: 'LANGUAGE',
      settings3a: 'ČEŠTINA',
      settings4: 'SOUND FX',
      settings5: 'MUSIC',
      settings6: 'FANCY GRAPHICS',
      settings7: 'FLASHING IMAGERY',
      settings7a: 'NORMAL',
      settings7b: 'REDUCED',
      settings8: 'TOUCH CONTROLS',
      settings8a: 'LEFT',
      settings8b: 'RIGHT',
      settings8c: 'HIDDEN',
      settings9: 'DEADZONE',
      settings10: 'OPEN MOD FOLDER',
      settings11: 'RESTART',

      sidebar1: 'ITEM',
      sidebar2: 'STAT',
      sidebar3: 'CELL',
      sidebar4: 'CONF',
      sidebar5: 'S',

      start1: [
         '--- Instruction ---',
         '[Z or ENTER] - Confirm',
         '[X nebo SHIFT] - Zrušit',
         '[C nebo CTRL] - Menu (V her)',
         '[F4] - Fullscreen',
         '[Hold ESC] - Restart',
         'When HP is 0, you lose.'
      ],
      start2: 'Begin Game',

      stat1: 'AT',
      stat2: 'DF',
      stat3: 'ZBRAŇ',
      stat4: 'BRNĚNÍ',
      stat5: 'GOLD',
      stat6: 'BP',
      stat7: 'NEXT',
      stat8: '§fill=#ff0§Warning:\nNon-canon\ntimeline.',
      stat9: 'KILLS',
      stat10: 'BULLY',
      stat11: 'FLIRT',
      stat12: 'STATUS',
      stat13: '\"$(x)\"',

      story1: [ '<24>{#p/storyteller}Long ago, two species ruled the solar system: HUMANS and MONSTERS.{^35}{}' ],
      story2: [ '<24>As time passed, a war broke out between the two species.{^35}{}' ],
      story3: [ "<24>After the MONSTERS' home planet was destroyed, HUMANS declared victory.{^35}{}" ],
      story4: [ '<24>The remaining MONSTERS were banished to an abandoned outpost.{^35}{}' ],
      story5: [ '<24>A powerful force field was erected, and the MONSTERS were sealed in.{^35}{}' ],
      story6: [ '<24>Many years later.{^8}.{^8}.{^35}{}' ],
      story7: [ '<#24>     EBOTT SECTOR     \n         251X{^35}{}' ],
      story8: [ '<24>Tales speak of a place from which spacecraft never return.{^35}{}' ],
      story9: [ '<24>{^100}{}' ],
      story10: [ '<24>{^100}{}' ],
      story11: [ '<24>{^35}{}' ]
   },

   timeline: {
      main: 'Resume Canon Timeline',
      main_ex: 'Start Canon Timeline',
      timelines: 'Other Slots',
      bisect: 'Bisect',
      delete: 'Delete',
      instruction: '[ESC] to Cancel / [ENTER] to Confirm',
      instruction_gamepad: 'Press any button on your gamepad to open the keyboard.',
      launch: 'Launch',
      rename: 'Rename',
      create: 'Create New',
      placeholder: 'Enter Timeline Name',
      confirm: 'Are You Sure?'
   }
};


// END-TRANSLATE
