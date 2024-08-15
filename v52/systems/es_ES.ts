// START-TRANSLATE

export default {
   battle: {
      death0: [ '(Tomas un respiro profundo.)', "(Estas lleno de determinación.)" ],
      death1: [ 'No puedes rendirte aún...', '$¡(nombre)!\nMantente determinado...' ],
      death2: [ 'Nuestro destino esta en tus manos...', '$¡(nombre)!\nMantente determinado...' ],
      death3: [ "Estarás bien!", '$¡(nombre)!\nMantente determinado...' ],
      death4: [ "No te rindas!", '$¡(nombre)!\nMantente determinado...' ],
      death5: [ 'No puede acabar ahora!', '$¡(nombre)!\nMantente determinado...' ],

      flee1: '. . . . * Escapaste...',
      flee2: ". . . . * Me voy.",
      flee3: ". . . . * Tengo mejores cosas que hacer.",
      flee4: ". . . . * No me ralentices.",
      flee5: '. . . . * Huiste con $(x) de EXP\n. . . . . . y $(y) de O.',

      mercy_assist: '* Asistir',
      mercy_flee: '* Huir',
      mercy_spare: '* Perdonar',

      victory1: '<32>{#p/story}* GANASTE!\n* Obtuviste $(x) de EXP y $(y) de O.',
      victory2: '<32>{#p/story}* GANASTE!\n* Obtuviste $(x) de EXP y $(y) de O.\n* Tu AMOR aumentó.'
   },

   developer: {
      console: {
         header: 'ERROR',
         p_resume: {
            header: 'CERRAR',
            resume: 'Click Para Cerrar'
         },
         blurb: 'Un error ocurrió! Por favor manda\nuna captura de pantalla al desarrollador.'
      },
      control: {
         tab: 'CONTROL',
         headers: [ 'GENERAL', 'COMBATE' ],
         items: [
            [
               'CorrMusica',
               'CorrJugador',
               'OroInfinito',
               'Interactuar',
               'Entrada',
               'Movimiento',
               'Noclip',
               'Guardar',
               'SaltarTexto',
               'CamaraLibre'
            ],
            [
               'PuedAsistir',
               'LimpiarCaja',
               'Salir',
               'ResetCaja',
               'ResetMenu',
               'PuedHuir',
               'HPInfinita',
               'PacificarTodos',
               'Suicidar',
               'DebilitarTodos'
            ]
         ],
         p_speed: {
            fps: '$(x) FPS',
            halt: 'Parar',
            header: 'VEL DEL JUEGO',
            multiplier: '$(x)x',
            next: 'Más',
            prev: 'Menos',
            sec: '$(x)s/fotograma'
         }
      },
      godhome: {
         tab: 'CENTROMANDO',
         p_teleport: {
            header: 'HABITACION',
            action: 'Teletransportar'
         },
         p_encounter: {
            header: 'COMBATE',
            action: 'Inicar'
         },
         p_armor: {
            header: 'ARMADURA'
         },
         p_weapon: {
            header: 'ARMA'
         }
      },
      inspect: {
         tab: 'INSPECIONAR',
         headers: [ 'CAPAS', 'TIPOS' ],
         switches: [
            [ 'Base', 'Debajo', 'Principal', 'Encima', 'Menú' ],
            [ 'Hitbox', 'Sprite', 'Texto' ]
         ],
         p_explorer: {
            header: 'EXPLORADOR',
            layers: [ 'Base (Explorador)', 'Debajo (Explorador)', 'Principal (Explorador)', 'Encima (Explorador)', 'Menú (Explorador)' ],
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
         debug_instructions: 'Presiona [TAB] para ciclar la info',
         debug: {
            a: 'A', 
            acceleration: 'Aceleración',
            active: 'Activo',
            alpha: 'Alfa',
            anchor: 'Ancla',
            b: 'B', 
            blend: 'Mezclar',
            border: 'Borde',
            compute: 'Tamaño Computado',
            content: 'Contenidos',
            crop: 'Recortar',
            down: 'Abajo',
            duration: 'Duración',
            exp: 'EXP',
            extent: 'Extensión',
            f: 'F', 
            face: 'Cara',
            false: 'Falso',
            fill: 'Llenar',
            fontFamily: 'Tipo de Letra',
            fontSize: 'Tamaño de Letra',
            frames: 'Frames',
            gravity: 'Gravedad',
            group: 'Grupo',
            hp: 'PS',
            index: 'Índice',
            inert: 'Inerte',
            key: 'Tecla',
            lastSavedTime: 'Ultimo Guardado',
            layer: 'Capa',
            layers: 'Capas',
            left: 'Restante',
            metadata: 'Metadatos',
            music: 'Musica',
            namespace: 'EspaciodNombre',
            none1: 'NULO',
            none2: 'nulo',
            objects: 'Objetos',
            oversaver: 'SobreGuardado',
            parallax: 'Paralax',
            position: 'Posición',
            primed: 'Primed',
            priority: 'Prioridad',
            registry: 'REGISTRAR',
            renderer: 'Renderizar',
            resources: 'Recursos',
            reverse: 'Invertir',
            right: 'Derecha',
            room: 'Habitación',
            roomState: 'EstadHabitación',
            rotation: 'Rotación',
            s: 'S', 
            scale: 'Escala',
            shopSelection: 'SelecdeTienda',
            size: 'Tamaño',
            spacing: 'Espaciado',
            spin: 'Giro',
            sprites: 'Sprites',
            step: 'Paso',
            stroke: 'Golpe',
            subcrop: 'Subcrop',
            talk: 'Hablar',
            target: 'Objetivo',
            text: 'Texto',
            tint: 'Tinte',
            trackedAssets: 'Recursos Monitoreados',
            true: 'Verdad',
            unknown: 'DESCONOCIDO',
            up: 'Arriba',
            vars: 'Vars',
            velocity: 'Velocidad',
            volatile: 'Volátil'
         }
      },
      savemod: {
         tab: 'GUARDARMOD',
         header1: 'GUARDAR EDITOR',
         domains: [
            'Data (Booleans)',
            'Info (Números)',
            'Data (Strings)',
            'Flags (Booleans)',
            'Flags (Numbers)',
            'Flags (Strings)'
         ],
         p_page: {
            header: 'NAVEGACIÓN',
            prev: 'Anterior',
            next: 'Siguiente'
         },
         prompt: 'Enter Value',
         back: 'Back'
      },
      storage: {
         tab: 'ALMACENAMIENTO',
         header: 'EDITOR ALMACENAMIENTO',
         p_container: { header: 'SELECCIÓN', prev: 'Anterior', next: 'Siguiente' },
         display: { inventory: 'Inventario', dimboxA: 'Caja Dimensional A', dimboxB: 'Caja Dimensional B' }
      }
   },

   dialog: {
      dialog_clear_title: 'Limpiar Archivo',
      dialog_notice_title: 'Notice',
      dialog_open: { buttonLabel: 'Open', name: 'SAVE files', title: 'Abrir Archivo' },
      dialog_save: { buttonLabel: 'Guardar', name: 'SAVE files', title: 'Guardar Archivo' },
      error_load: 'That file could not be parsed.',
      message_alert: [ 'OK' ],
      message_confirm: [ 'Cancel', 'OK' ],
      prompt_clear: 'Clear this file?',
      prompt_demo: 'Your SAVE file from the\nOUTERTALE demo has been\nmoved to a timeline slot.',
      prompt_save: '¿Guardar este archivo?',
      prompt_save_alternate: 'Copy the text below into\na JSON file to save it\nto your device.',
      prompt_open: '¿Cargar este archivo?'
   },

   extra: {
      credits: [
         [
            '§fill=#ff0§< DEVELOPER >§fill=#fff§',
            'spacey_432',
            '',
            '§fill=#ff0§< WRITER >§fill=#fff§',
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
            '§fill=#ff0§< WRITER >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            'Turbulation',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< ARTIST >§fill=#fff§',
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
            '§fill=#ff0§< ARTIST >§fill=#fff§',
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
            '§fill=#ff0§< ARTIST >§fill=#fff§',
            'supper12',
            'Valor52',
            'Zaxento The Greedy',
            '',
            '§fill=#ff0§< TECHNICIAN >§fill=#fff§',
            'Codetoil',
            'ws3917',
            '',
            '§fill=#ff0§< TESTER >§fill=#fff§',
            'Alden',
            'Aspey',
            'Balgamlı Kedi',
            'Bilge \"mnwary\"',
            'blue'
         ],
         [
            '§fill=#ff0§< TESTER >§fill=#fff§',
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
            '§fill=#ff0§< TESTER >§fill=#fff§',
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
            '§fill=#ff0§< TESTER >§fill=#fff§',
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
            '§fill=#ff0§< TESTER >§fill=#fff§',
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
            '§fill=#ff0§< TESTER >§fill=#fff§',
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
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Alden',
            '§fill=#808080§For being there for me when I\nneed someone to lean on, and\nteaching me life lessons that\nhave made me a better person.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'My Cocoa',
            '§fill=#808080§For being one of the friendliest\npeople I know, the first person\nto believe in my vision, and\ninspiring me to finish the game.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Balgamlı Kedi',
            "§fill=#808080§For sticking with me at every\nstage of development, right from\nthe start. Regardless of the era,\nhe's always been there to help.§fill=#fff§"
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Ghostly',
            '§fill=#808080§For being a voice of reason when\nit comes to many aspects of the\ngame, and encouraging me to take\ntesting seriously.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'Zaxento The Greedy',
            '§fill=#808080§For being reliable, brutally\nhonest, giving me lots of\ncriticism and ideas, and being\ntrustworthy from the day we met.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
            'ThatGuyWhoLikesFood',
            '§fill=#808080§For helping me write crucial\nparts of the game, supporting my\nvision, and helping me express\nmyself in a whole new way.§fill=#fff§'
         ],
         [
            '§fill=#ff0§< SPECIAL THANKS >§fill=#fff§',
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
      x: '[X or SHIFT] - Cancel',
      c: '[C or CTRL] - Menu (In-game)',
      u: '[FLECHA ARRIBA o W] - Moverte hacia Arriba',
      l: '[FLECHA IZQUIERDA o A] - Moverte hacia la izquierda',
      d: '[FLECHA ABAJO o S] - Moverte hacia abajo',
      r: '[FLECHA DERECHA o D] - Moverte hacia la derecha',
      f: '[F4] - Pantalla Completa',
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
      hp: 'PS',
      inf: 'INF',
      landing1: '[PRESIONA Z O ENTER]',
      lv: 'NV',
      mystery1: '§mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz§aaaaaa§mystify=§',
      mystery2: '{@mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify=}',
      mystery2l: '{@mystify=abcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify=}',
      mystery2u: '{@mystify=ABCDEFGHIJKLMNOPQRSTUVWXYZ}aaaaaa{@mystify=}',
      no: 'No',
      nominal: '§fill=#0f0§NOMINAL',
      percent: '$(x)%',
      player: 'player',
      settings: 'Ajustes',
      unknown: '?',
      xm: 'XM',
      yes: 'Si'
   },

   menu: {
      box1: 'INVENTARIO',
      box2: 'CAJA',
      key1: 'KEYRING',

      confirm1: '¿Es este nombre correcto?',
      confirm2: 'Un nombre ya ha sido\nescogido.',
      confirm3: 'Regresar',

      footer: 'OUTERTALE V5.02 (c) 2024 SPACEY_432',

      heal1: '* (HP fully restored.)',
      heal2: '* (You recovered $(x) HP.)',
      heal3: '* (You lost $(x) HP.)',
      heal4: '* (HP fully depleted.)',
      heal5: '* (You gained $(x) HP.)',

      item1: 'USAR',
      item2: 'EQUIPAR',
      item3: 'INFO',
      item4: 'TIRAR',

      load1: 'Continuar',
      load2: 'Observar',
      load3: 'Reiniciar',
      load4: 'Reinicio Real',

      name1: 'Name the stranded human.',
      name2: 'Quit',
      name3: 'Backspace',
      name4: 'Done',
      name5: '§fill=#808080§ [ESC] - Quit / [ENTER] - Done',

      save1: 'Guardar',
      save2: 'Regresar',
      save3: 'Archivo Guardado.',

      settings1: 'AJUSTES',
      settings2: 'SALIR',
      settings3: 'IDIOMA',
      settings3a: 'INGLES',
      settings4: 'SOUND FX',
      settings5: 'MÚSICA',
      settings6: 'FANCY GRAPHICS',
      settings7: 'FLASHING IMAGERY',
      settings7a: 'NORMAL',
      settings7b: 'REDUCED',
      settings8: 'TOUCH CONTROLS',
      settings8a: 'IZQUIERDA',
      settings8b: 'DERECHA',
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
         '[X or SHIFT] - Cancel',
         '[C or CTRL] - Menu (In-game)',
         '[F4] - Pantalla Completa',
         '[Hold ESC] - Restart',
         'When HP is 0, you lose.'
      ],
      start2: 'Begin Game',

      stat1: 'AT',
      stat2: 'DF',
      stat3: 'ARMA',
      stat4: 'ARMADURA',
      stat5: 'GOLD',
      stat6: 'EXP',
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
