import { CosmosUtils } from "./engine/utils";

export default {
   b_death1: ['<20>不能就这么放弃...', '<20>$(name)!\n保持你的决心...'],
   b_death2: ['<20>我们的命运都取决于你...', '<20>$(name)!\n保持你的决心...'],
   b_death3: ["<20>你会没事的！", '<20>$(name)!\n保持你的决心...'],
   b_death4: ["<20>不要失去希望！", '<20>$(name)!\n保持你的决心...'],
   b_death5: ['<20>现在还不能结束！', '<20>$(name)!\n保持你的决心...'],

   b_flee1: "    * 我先撤了。",
   b_flee2: "    * 我还有别的事要做。",
   b_flee3: "    * 别拖我后腿。",
   b_flee4: '    * 先走一步...',
   b_flee5: '    * 带着 $(x) EXP 和 $(y) G\n      逃跑了。',

   b_heal1: '* HP 已回满。',
   b_heal2: '* 你回复了 $(x) HP。',

   b_mercy_assist: '* 援助',
   b_mercy_flee: '* 逃跑',
   b_mercy_spare: '* 饶恕',

   b_victory1: '<32>{#p/story}* 你赢了！\n* 你获得了 $(x) EXP 和 $(y) G.',
   b_victory2: '<32>{#p/human}* (你的 LOVE 上升了。)',

   d_console: {
      header: '错误',
      p_resume: {
         header: '恢复游戏',
         resume: '点击此处恢复游戏'
      },
      blurb: '程序出现错误！\n请将屏幕截图发给开发者。'
   },

   d_control: {
      tab: '控制',
      headers: ['常规', '战斗中'],
      items: [
         [
            '音乐初始化',
            '角色初始化',
            '无限金钱',
            '允许角色交互',
            '允许按键输入',
            '允许角色移动',
            '无视墙体',
            '快速存档',
            '跳过文本',
            '自由镜头'
         ],
         [
            '允许外援',
            '清除弹幕',
            '立即退出',
            '重置框体大小',
            '重置菜单',
            '允许逃跑',
            '无限HP',
            '安抚敌方全体',
            '自杀',
            '削弱敌方全体'
         ]
      ],
      p_speed: {
         header: '游戏倍速',
         prev: '减速',
         next: '加速'
      }
   },
   /* 这段debug代码采用机翻 */
   d_editor: {
      delete: '删除',
      property: {
         active: '活动',
         anchor: '锚点',
         args: '参数',
         auto: '自动',
         background: '背景',
         filter: '滤镜',
         filters: '滤镜',
         frames: '帧',
         gain: '增益',
         layer: '层',
         music: '音乐',
         name: '名称',
         neighbors: '邻居',
         objects: '对象',
         position: '位置',
         preload: '预加载',
         rate: '速率',
         regionMax: '区域最大',
         regionMin: '区域最小',
         resources: '资源',
         reverb: '混响',
         rotation: '旋转',
         score: '分数',
         size: '大小',
         spawn: '生成',
         steps: '步骤',
         tags: '标签',
         type: '类型'
      },
      status: {
         creating: '创建中',
         modifying: '修改中',
         selecting: '选择中'
      },
      type: {
         object: '对象',
         room: '房间',
         subObject: '子对象'
      }
   },

   d_godhome: {
      tab: '测试',
      p_teleport: {
         header: '房间',
         action: '传送'
      },
      p_encounter: {
         header: '遭遇战',
         action: '开始'
      },
      p_menu: {
         header: '菜单',
         action: '切换'
      }
   },

   d_inspect: {
      tab: '检查',
      headers: ['图层', '类型'],
      switches: [
         ['基层', '下层', '主层', '上层', '菜单层'],
         ['碰撞箱', '贴图', '文本']
      ],
      p_explorer: {
         header: '浏览',
         layers: ['基层', '下层', '主层', '上层', '菜单层'],
         letters: {
            animation: 'A',
            character: 'C',
            entity: 'E',
            hitbox: 'H',
            object: 'O',
            player: 'P',
            sprite: 'S',
            text: 'T'
         }
      }
   },

   d_savemod: {
      tab: '存档',
      header: '存档编辑器',
      domains: [
         '数据 (逻辑型)',
         '数据 (数值型)',
         '数据 (字符串型)',
         '节点 (逻辑型)',
         '节点 (数值型)',
         '节点 (字符串型)'
      ],
      p_page: {
         header: '浏览',
         prev: '上一页',
         next: '下一页'
      }
   },

   d_storage: {
      tab: '物品',
      header: '物品库存编辑器',
      p_container: { header: '选择容器', prev: '上一个', next: '下一个' },
      display: { inventory: '物品栏', dimboxA: '次元箱 A', dimboxB: '次元箱 B' }
   },

   d_prompt_save: '下载存档文件？',
   d_prompt_open: '上传存档文件？',

   t_main: '重返主时间线',
   t_timelines: '其他时间线槽位',
   t_bisect: '切分', /* 原文bisect */
   t_delete: '删除',
   t_launch: '启动',
   t_rename: '重命名',
   t_create: '新建',
   t_placeholder: '输入时间线名称',
   t_confirm: '确定删除吗？',

   g_disabled: '关闭',
   g_g: 'G',
   g_hp: 'HP',
   g_inf: 'INF',
   g_landing1: '[按下 Z 或 ENTER]',
   g_lv: 'LV',
   g_mystery1: '§mystify:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz§aaaaaa§mystify:§',
   g_mystery2: '{@mystify:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz}aaaaaa{@mystify:}',
   g_no: '否',
   g_percent: '$(x)%',
   g_settings: '游戏设置',
   g_unknown: '?',
   g_yes: '是',

   n_footer: `OUTERTALE V4.42 (C) SPACEY_432 2023  中文汉化 PS 汉化组`,

   m_box1: '物品栏',
   m_box2: '箱子',
   m_box3: '按 [X] 返回。',

   m_confirm1: '确定要选择这个名字吗?',
   m_confirm2: '已经选定了一个名字。',
   m_confirm3: '返回',
   m_confirm4: {
      aaaaaa: '好像缺少点创意......？',
      aaron: '你确定是这个名字吗? ;)',
      alphy: '额...行吧？',
      alphys: "别-别这么做。",
      asgor: '... 应该可以？嗯。',
      asgore: '不可以。',
      asrie: '...行吧。',
      asriel: '...',
      blook: "...............\n它无力阻止你。",
      blooky: "...............\n它无力阻止你。",
      bpants: '你肯定能想到\n更好的名字的。',
      burgie: "这个名字只是个昵称\n你应该知道吧？",
      bratty: '嗯，我想行吧。',
      bob: '这名字挺棒的，不是吗？',
      catty: "Bratty! Bratty! \n那是我的名字！",
      cdrake: '哈哈哈，不错嘛。',
      chara: '真正的名字。',
      cozmo: '阿拉卡扎姆，胡里胡涂。',
      dgrssa: '我看你敢！？',
      dogamy: "别想打\n用我妻子名字的主意。",
      doggo: "啊-啊！它在动！它在抖动！",
      dummy: ".....\n他似乎不怎么健谈。",
      erogot: '那是我的名字。',
      frisk: '警告：\n这个名字什么效果都没有。\n还要继续吗？',
      gerson: '哇哈哈！为什么不呢？',
      glyde: '不错的选择，小伙子。',
      hapsta: "我觉得名字不对哦，亲。",
      heats: '你知道！？',
      jerry: 'Jerry.',
      krios: '这是我的世界。',
      mdummy: '什么，什么！什么！！！',
      mett: '哦!!! 你在推广我的品牌吗？',
      metta: '哦!!! 你在推广我的品牌吗？',
      mtt: '哦!!! 你在推广我的品牌吗？',
      muffet: "啊呼呼~\n我听说...人类非常喜欢\n冒充蜘蛛的身份~",
      mushy: '上马！',
      napsta: "...............\n它无力阻止你。",
      papyru: "我准了！！！",
      pyrope: "现在你火了！！",
      san: '为啥呢？',
      sans: '没门。',
      sdrake: '那是个很“亮”的名字，呵。',
      shyren: '...?',
      skrub: '干净的名字。',
      skrubb: '干净的名字。',
      temmie: '你吼！！',
      torie: '嗯... 我想这个名字可以...',
      toriel: '我觉得，\n你应该想个自己的名字。\n我的孩子。',
      twink: '真的吗...',
      twinkl: '嘻嘻嘻...你以为呢。',
      twinky: '认真的？？',
      twnkly: '试的好，白痴。',
      undyn: '嘎啊，行吧。',
      undyne: '找个你自己的名字去！',
      vulkin: '啊！谢谢你～'
   },

   m_item1: '使用',
   m_item2: '装备',
   m_item3: '状态',
   m_item4: '丢弃',

   m_load1: '继续',
   m_load2: '   重置',
   m_load3: '真正的重置',

   m_name1: '    为受困的人类命名：',
   m_name2: '返回',
   m_name3: '     删除',
   m_name4: '确定',
   m_name5: [
      ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      ['H', 'I', 'J', 'K', 'L', 'M', 'N'],
      ['O', 'P', 'Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z'],
      ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      ['h', 'i', 'j', 'k', 'l', 'm', 'n'],
      ['o', 'p', 'q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
   ],
   m_name6: (index: number) => {
      const x = (index % 26) % 7;
      const y = Math.floor((index % 26) / 7);
      if (index < 26) {
         return { x: 120 + x * 64, y: 158 + y * 28 };
      } else {
         return { x: 120 + x * 64, y: 278 + y * 28 };
      }
   },

   m_save1: '存档',
   m_save2: '返回',
   m_save3: '进度已保存！',
   m_save4: '<32>{#p/human}{@fill:#f00}* (还剩下 $(x) 个。)',
   m_save5: '<32>{#p/human}{@fill:#f00}* (决心。)',
   m_save6: '<32>{#p/human}{@fill:#3f00ff}* (还剩下 $(x) 个。)',
   m_save7: '<32>{#p/human}{@fill:#3f00ff}* (决心。)',

   m_settings1: '游戏设置',
   m_settings2: '返回',
   m_settings3: '音效',
   m_settings4: '音乐',
   m_settings5: '控制按钮\n位置设定', /* 原文ALIGN\nCONTROLS */
   m_settings5_left: '左',
   m_settings5_right: '右',

   m_sidebar1: '物品',
   m_sidebar2: '信息',
   m_sidebar3: '电话',
   m_sidebar4: '设置',

   m_start1: [
      '---- 操作介绍 ----',
      '[Z 或 ENTER] - 确认/交互',
      '[X 或 SHIFT] - 取消',
      '[C 或 CTRL] - 菜单（游戏内）',
      '[F4] - 全屏',
      '[长按 ESC] - 退出游戏',
      '当 HP 降至 0，你就输了。'
   ],
   m_start2: '开始游戏',

   m_stat1: '攻击',
   m_stat2: '防御',
   m_stat3: '武器',
   m_stat4: '防具',
   m_stat5: '金钱',
   m_stat6: 'EXP',
   m_stat7: '下一级',
   m_stat8: '§fill:#ff0§警告:\n存档文件\n不可用。',
   m_stat9: '击杀',
   m_stat10: '不适用',  /* 暂时不清楚这一文本的出现位置，原文 N/A */
   m_stat11: '伤害',    /* BULLY，应该是说暴力饶恕的怪物数 */

   m_story1: ['很久以前，{^6}太阳系由\n两个物种统治着：{^10}\n人类和怪物。 '],
   m_story2: ['随着时间的推移， {^6}\n两个物种之间爆发了战争。 '],
   m_story3: ['最终， \n怪物的母星被摧毁， \n{^6}人类宣布了胜利。{^10} '],
   m_story4: ['他们将剩下的怪物流放到 \n一个被遗弃的前哨站。{^10} '],
   m_story5: ['人类建立起一道强大的力场， \n{^6}将怪物们封印在内。{^10}'],
   m_story6: ['许多年后.{^12}.{^12}.'],
   m_story7: ['µµµµµµµ EBOTT区 µµµµµµµ \nµµµµµµµµ 251X{^30}'],
   m_story8: ['有传言说，宇宙中有一个地方， \n发射到那里的飞船 \n都再也没有返航。{^30}'],
   m_story9: ['{^150}'],
   m_story10: ['{^150}'],
   m_story11: ['{^150}'],

   x_quitText1: '正在退出',
   x_quitText2: '正在退出.',
   x_quitText3: '正在退出..'
};

CosmosUtils.status(`LOAD MODULE: TEXT (${Math.floor(performance.now()) / 1000})`, { color: '#07f' });