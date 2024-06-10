import objectInspect from 'object-inspect';
import { Graphics, isMobile } from 'pixi.js';
import aerialisGroups from './aerialis/groups';
import { aerialisStates } from './aerialis/index';
import aerialisSources from './aerialis/sources';
import citadelGroups from './citadel/groups';
import { citadelStates } from './citadel/index';
import citadelSources from './citadel/sources';
import { oversaver } from './common';
import commonGroups from './common/groups';
import commonSources from './common/sources';
import foundryGroups from './foundry/groups';
import { foundryStates } from './foundry/index';
import foundrySources from './foundry/sources';
import outlandsGroups from './outlands/groups';
import { outlandsStates } from './outlands/index';
import outlandsSources from './outlands/sources';
import startonGroups from './starton/groups';
import { startonStates } from './starton/index';
import startonSources from './starton/sources';
import { filters, musicRegistry } from './systems/assets';
import { atlas, backend, events, game, items, keys, param, params, renderer, rng, speech, typer } from './systems/core';
import {
   battler,
   calcHP,
   frontEnder,
   heal,
   mobile,
   player,
   portraits,
   quickresume,
   saver,
   shopper,
   teleport,
   ultraPosition,
   updateArmor
} from './systems/framework';
import { OutertaleGroup, OutertaleLayerKey } from './systems/outertale';
import { SAVE } from './systems/save';
import {
   CosmosAnchoredObject,
   CosmosAnimation,
   CosmosAsset,
   CosmosBase,
   CosmosBaseEvents,
   CosmosCharacter,
   CosmosEntity,
   CosmosHitbox,
   CosmosImageUtils,
   CosmosKeyboardInput,
   CosmosKeyed,
   CosmosMath,
   CosmosObject,
   CosmosPlayer,
   CosmosPoint,
   CosmosPointSimple,
   CosmosRectangle,
   CosmosRenderer,
   CosmosRendererLayer,
   CosmosSprite,
   CosmosText,
   CosmosTransform,
   CosmosUtils
} from './systems/storyteller';

export class OutertaleDeveloperHitbox extends CosmosHitbox<CosmosBaseEvents & { click: []; wheel: [1 | -1] }> {}

// START-TRANSLATE
export const text_dev = {
   console: {
      header: 'ERROR',
      p_resume: {
         header: 'DISMISS',
         resume: 'Click To Dismiss'
      },
      blurb: 'An error occured! Please send\nscreenshot to developer.'
   },
   control: {
      tab: 'CONTROL',
      headers: [ 'GENERAL', 'BATTLE' ],
      items: [
         [
            'FixMusic',
            'FixPlayer',
            'InfiniteG',
            'Interact',
            'Lock Focus',
            'Movement',
            'Noclip',
            'Save',
            'SkipText',
            'Freecam'
         ],
         [
            'CanAssist',
            'ClearBox',
            'Exit',
            'ResetBox',
            'ResetMenu',
            'CanFlee',
            'InfiniteHP',
            'PacifyAll',
            'Suicide',
            'WeakenAll'
         ]
      ],
      p_speed: {
         fps: '$(x) FPS',
         halt: 'Halt',
         header: 'GAME SPEED',
         multiplier: '$(x)x',
         next: 'More',
         prev: 'Less',
         sec: '$(x)s/frame'
      }
   },
   godhome: {
      tab: 'GODHOME',
      p_teleport: {
         header: 'ROOM',
         action: 'Teleport'
      },
      p_encounter: {
         header: 'ENCOUNTER',
         action: 'Start'
      },
      p_armor: {
         header: 'ARMOR'
      },
      p_weapon: {
         header: 'WEAPON'
      }
   },
   inspect: {
      tab: 'INSPECT',
      headers: [ 'LAYERS', 'TYPES' ],
      switches: [
         [ 'Base', 'Below', 'Main', 'Above', 'Menu' ],
         [ 'Hitbox', 'Sprite', 'Text' ]
      ],
      p_explorer: {
         header: 'EXPLORER',
         layers: [ 'Base (Explorer)', 'Below (Explorer)', 'Main (Explorer)', 'Above (Explorer)', 'Menu (Explorer)' ],
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
      }
   },
   savemod: {
      tab: 'SAVEMOD',
      header1: 'SAVE EDITOR',
      domains: [
         'Data (Booleans)',
         'Data (Numbers)',
         'Data (Strings)',
         'Flags (Booleans)',
         'Flags (Numbers)',
         'Flags (Strings)'
      ],
      p_page: {
         header: 'NAVIGATION',
         prev: 'Prev',
         next: 'Next'
      },
      prompt: 'Enter Value'
   },
   storage: {
      tab: 'STORAGE',
      header: 'STORAGE EDITOR',
      p_container: { header: 'SELECTION', prev: 'Prev', next: 'Next' },
      display: { inventory: 'Inventory', dimboxA: 'Dim. Box A', dimboxB: 'Dim. Box B' }
   }
};
// END-TRANSLATE

export const extraKeys = {
   debugKey: new CosmosKeyboardInput(null, 'Tab'),
   freecamKey: new CosmosKeyboardInput(null, 'KeyE'),
   noclipKey: new CosmosKeyboardInput(null, 'KeyQ')
};

export const zoomFactor = 2 ** (1 / 4);

export const speedValues = [
   0,
   1 / 150,
   1 / 120,
   1 / 90,
   1 / 60,
   1 / 30,
   0.1,
   0.2,
   0.3,
   0.4,
   0.5,
   0.6,
   0.7,
   0.8,
   0.9,
   1,
   1.1,
   1.2,
   1.3,
   1.4,
   1.5,
   1.6,
   1.7,
   1.8,
   1.9,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9,
   10,
   100
];

export const pallete = {
   c0: '#000000cf',
   c1: '#1010103f',
   c2: '#2020207f',
   c3: '#3030303f',
   c4: '#4040407f',
   c7: '#7f7f7f',
   ca: '#afafaf',
   cf: '#ffffff'
};

export function objectInspectCompat (...args: Parameters<typeof objectInspect>) {
   const hasGlobal = typeof global === 'object';
   if (!hasGlobal) {
      //@ts-ignore
      globalThis.global = globalThis;
   }
   const result = objectInspect(...args);
   if (!hasGlobal) {
      //@ts-ignore
      delete globalThis.global;
   }
   return result;
}

export function historianInfo<A extends string, B extends CosmosKeyed> (domain: A, store: B) {
   return Object.keys(store)
      .sort((info1, info2) => (info1 < info2 ? -1 : info1 > info2 ? 1 : 0))
      .map(key => ({ key, domain })) as { domain: A; key: keyof B & string }[];
}

export function decreaseSpeed () {
   const index = speedValues.indexOf(renderer.speed.value);
   if (index > 0) {
      renderer.speed.value = speedValues[index - 1];
   }
}

export function increaseSpeed () {
   const index = speedValues.indexOf(renderer.speed.value);
   if (index < speedValues.length - 1) {
      renderer.speed.value = speedValues[index + 1];
   }
}

export function prevRoom () {
   let rev = keys.altKey.active() ? 5 : 1;
   while (rev-- > 0) {
      const i = godhome.rooms.indexOf(godhome.room);
      if (i === -1) {
         godhome.room = game.room;
      } else if (i === 0) {
         godhome.room = godhome.rooms[godhome.rooms.length - 1];
      } else {
         godhome.room = godhome.rooms[i - 1];
      }
   }
}

export function nextRoom () {
   let rev = keys.altKey.active() ? 5 : 1;
   while (rev-- > 0) {
      godhome.room = godhome.rooms[(godhome.rooms.indexOf(godhome.room) + 1) % godhome.rooms.length];
   }
}

export function prevGroup () {
   let rev = keys.altKey.active() ? 5 : 1;
   while (rev-- > 0) {
      const i = godhome.groups.indexOf(godhome.group);
      if (i === -1) {
         godhome.group = godhome.groups[0];
      } else if (i === 0) {
         godhome.group = godhome.groups[godhome.groups.length - 1];
      } else {
         godhome.group = godhome.groups[i - 1];
      }
   }
}

export function nextGroup () {
   let rev = keys.altKey.active() ? 5 : 1;
   while (rev-- > 0) {
      godhome.group = godhome.groups[(godhome.groups.indexOf(godhome.group) + 1) % godhome.groups.length];
   }
}

export const itemEntries = () => [
   null,
   ...[ ...items.entries() ]
      .sort((a, b) => {
         const an = a[1].text.name;
         const bn = b[1].text.name;
         return an < bn ? -1 : an > bn ? 1 : 0;
      })
      .map(e => e[0])
];

export function prevItem (index: number) {
   const entries = itemEntries();
   const cont = SAVE.storage[storage.container];
   const prev = cont.of(index);
   const next = entries[(entries.indexOf(prev) + entries.length - (keys.altKey.active() ? 10 : 1)) % entries.length];
   if (next === null) {
      cont.remove(index);
   } else {
      cont.set(index, next);
   }
}

export function nextItem (index: number) {
   const entries = itemEntries();
   const cont = SAVE.storage[storage.container];
   const prev = cont.of(index);
   const next = entries[(entries.indexOf(prev) + (keys.altKey.active() ? 10 : 1)) % entries.length];
   if (next === null) {
      cont.remove(index);
   } else {
      cont.set(index, next);
   }
}

export function prevContainer () {
   storage.container =
      storage.container === 'inventory' ? 'dimboxB' : storage.container === 'dimboxB' ? 'dimboxA' : 'inventory';
}

export function nextContainer () {
   storage.container =
      storage.container === 'inventory' ? 'dimboxA' : storage.container === 'dimboxA' ? 'dimboxB' : 'inventory';
}

export const armorEntries = () => {
   return [
      'spacesuit',
      ...[ ...items.entries() ]
         .filter(entry => entry[1].type === 'armor')
         .sort((a, b) => {
            const an = a[1].text.name;
            const bn = b[1].text.name;
            return an < bn ? -1 : an > bn ? 1 : 0;
         })
         .map(entry => entry[0])
   ];
};

export const weaponEntries = () => {
   return [
      'spanner',
      ...[ ...items.entries() ]
         .filter(entry => entry[1].type === 'weapon')
         .sort((a, b) => {
            const an = a[1].text.name;
            const bn = b[1].text.name;
            return an < bn ? -1 : an > bn ? 1 : 0;
         })
         .map(entry => entry[0])
   ];
};

export function prevArmor () {
   const entries = armorEntries();
   updateArmor(entries[(entries.indexOf(SAVE.data.s.armor) + entries.length - 1) % entries.length]);
}

export function nextArmor () {
   const entries = armorEntries();
   updateArmor(entries[(entries.indexOf(SAVE.data.s.armor) + 1) % entries.length]);
}

export function prevWeapon () {
   const entries = weaponEntries();
   SAVE.data.s.weapon = entries[(entries.indexOf(SAVE.data.s.weapon) + entries.length - 1) % entries.length];
}

export function nextWeapon () {
   const entries = weaponEntries();
   SAVE.data.s.weapon = entries[(entries.indexOf(SAVE.data.s.weapon) + 1) % entries.length];
}

export const godhome = {
   room: '',
   rooms: [ commonSources, outlandsSources, startonSources, foundrySources, aerialisSources, citadelSources ]
      .flatMap(sources => Object.keys(sources))
      .filter(key => key !== '_'),
   group: [ 'nobody', commonGroups.nobody ] as [string, OutertaleGroup],
   groups: [ commonGroups, outlandsGroups, startonGroups, foundryGroups, aerialisGroups, citadelGroups ]
      .flatMap(groups => Object.entries(groups))
      .sort((group1, group2) => (group1[0] < group2[0] ? -1 : group1[0] > group2[0] ? 1 : 0)),
   menu: null as string | null,
   menus: [ null, ...atlas.navigators.keys() ]
};

export const historian = {
   page: 0,
   input: false,
   domain: null as string | null,
   index: null as number | null,
   numericValue: null as string | null,
   restoreInput: false,
   info: {
      dataBoolean: historianInfo('dataBoolean', SAVE.data.b),
      dataNumber: historianInfo('dataNumber', SAVE.data.n),
      dataString: historianInfo('dataString', SAVE.data.s),
      flagBoolean: historianInfo('flagBoolean', SAVE.flag.b),
      flagNumber: historianInfo('flagNumber', SAVE.flag.n),
      flagString: historianInfo('flagString', SAVE.flag.s)
   },
   get entries () {
      return historian.domain ? historian.info[historian.domain as keyof typeof historian.info] : [];
   },
   get pages () {
      return Math.max(Math.ceil(historian.entries.length / 8), 1);
   },
   clearIndex () {
      if (historian.index !== null) {
         historian.index = null;
         historian.clearInput();
      }
   },
   clearInput () {
      if (historian.input) {
         historian.input = false;
         historian.numericValue = null;
         game.input = historian.restoreInput;
         historian.restoreInput = false;
      }
   },
   getEntry (index: number) {
      const infoEntry = historian.entries[index];
      switch (infoEntry.domain) {
         case 'dataNumber':
            return {
               value: SAVE.ready ? `${historian.numericValue ?? SAVE.data.n[infoEntry.key]}` : '0',
               numeric: true
            };
         case 'dataString':
            return { value: SAVE.ready ? SAVE.data.s[infoEntry.key] : '', numeric: false };
         case 'flagNumber':
            return {
               value: SAVE.ready ? `${historian.numericValue ?? SAVE.flag.n[infoEntry.key]}` : '0',
               numeric: true
            };
         case 'flagString':
            return { value: SAVE.ready ? SAVE.flag.s[infoEntry.key] : '', numeric: false };
      }
      return { value: '', numeric: false };
   },
   setEntry (index: number, info: { value: string; numeric: boolean }) {
      info.numeric && !isMobile.any && (historian.numericValue = info.value);
      if (SAVE.ready) {
         const infoEntry = historian.entries[index];
         switch (infoEntry.domain) {
            case 'dataNumber':
               (SAVE.data.n as any)[infoEntry.key] = +info.value;
               switch (infoEntry.key) {
                  case 'base_attack':
                     rng.attack.value = +info.value;
                     break;
                  case 'base_battle':
                     rng.battle.value = +info.value;
                     break;
                  case 'base_dialogue':
                     rng.dialogue.value = +info.value;
                     break;
                  case 'base_overworld':
                     rng.overworld.value = +info.value;
                     break;
                  case 'base_pattern':
                     rng.pattern.value = +info.value;
                     break;
               }
               break;
            case 'flagNumber':
               (SAVE.flag.n as any)[infoEntry.key] = +info.value;
               frontEnder.updateDeadzone();
               frontEnder.updateEpilepsy();
               frontEnder.updateFancy();
               frontEnder.updateMusic();
               frontEnder.updateRight();
               frontEnder.updateSFX();
               break;
            case 'dataString':
               (SAVE.data.s as any)[infoEntry.key] = info.value;
               break;
            case 'flagString':
               (SAVE.flag.s as any)[infoEntry.key] = info.value;
               break;
         }
      }
   }
};

export const inspector = {
   index: null as number | null,
   switches: {
      base: false,
      below: false,
      main: false,
      above: false,
      menu: false,
      hitbox: false,
      sprite: false,
      text: false
   },
   hitboxGraphics: new Graphics(),
   hitboxTint: 0,
   target: null as { objects: CosmosObject[] } | null,
   rootNode: [
      renderer.layers.base,
      renderer.layers.below,
      renderer.layers.main,
      renderer.layers.above,
      renderer.layers.menu
   ] as { objects: CosmosObject[] }[],
   path: [] as number[],
   resolvePath () {
      let step = 0;
      let node = inspector.rootNode;
      while (step < inspector.path.length) {
         const pos = inspector.path[step];
         if (node.length > pos) {
            node = node[pos].objects;
            step++;
         } else {
            inspector.path.splice(step, inspector.path.length - step);
            break;
         }
      }
      return node;
   },
   reportText: new CosmosText({
      alpha: 0.62,
      fill: pallete.cf,
      position: { x: 5, y: 5 },
      fontName: 'DeterminationMono',
      fontSize: 8,
      priority: Infinity,
      scale: 2,
      filters: [ filters.outline ]
   }).on('pre-render', function () {
      this.plain = true;
      if (panel.tab.value !== 3) {
         this.content = `Press [TAB] to cycle debug info [${panel.debug}]`;
         switch (panel.debug) {
            case 0: {
               this.plain = false;
               const sub = (battler.active ? battler.SOUL : player).position;
               const pro = renderer.projection(sub);
               this.content += `\nPosition: ${sub.x}x ${sub.y}y §fill:#ff0000§(${pro.x}x ${pro.y}y)§fill:#ffffff§\n${
                  battler.active
                     ? `\nGroup: ${
                          battler.groups.length === 0
                             ? 'NONE'
                             : godhome.groups.find(entry => entry[1] === battler.groups[0])?.[0] ?? 'UNKNOWN'
                       }\nMusic: ${
                          battler.music === null
                             ? 'NONE'
                             : [ ...musicRegistry.entries() ].find(entry => entry[1] === battler.music!.daemon)?.[0] ??
                               'UNKNOWN'
                       } (${battler.music?.position ?? 0})\nEXP: ${battler.exp}\nG: ${
                          battler.g
                       }\nTarget: ${atlas.navigators.of('battlerAdvancedTarget').selection()}${battler.volatile
                          .map((v, i) => {
                             const color = v.alive ? '§fill:#ffffff§' : v.hp <= 0 ? '§fill:ff0000§' : '§fill:00ff00§';
                             return `\n\n${color}< Volatile ${i} - ${CosmosUtils.provide(v.opponent.name).replace(
                                '* ',
                                ''
                             )}§reset§${color} - HP ${v.hp} / ${v.opponent.hp} > [${[
                                ...(v.alive ? 'A' : []),
                                ...(battler.bullied.includes(v) ? [ 'B' ] : []),
                                ...(v.flirted ? [ 'F' ] : []),
                                ...(v.sparable ? [ 'S' ] : [])
                             ].join(', ')}]\nVars: ${objectInspectCompat(v.vars, {
                                depth: 1,
                                quoteStyle: 'single',
                                indent: 3
                             })}`;
                          })
                          .join('')}`
                     : `Room: ${game.room}\nMusic: ${
                          game.music === null
                             ? 'NONE'
                             : [ ...musicRegistry.entries() ].find(entry => entry[1] === game.music!.daemon)?.[0] ??
                               'UNKNOWN'
                       } (${game.music?.position ?? 0})\nShop Selection: [${shopper.index}, ${
                          shopper.listIndex
                       }]\nRoom State: ${objectInspectCompat(
                          (game.room[0] === 'w'
                             ? outlandsStates.rooms
                             : game.room[0] === 's'
                             ? startonStates.rooms
                             : game.room[0] === 'f'
                             ? foundryStates.rooms
                             : game.room[0] === 'a'
                             ? aerialisStates.rooms
                             : game.room[0] === 'c'
                             ? citadelStates.rooms
                             : {})[game.room],
                          { depth: 1, quoteStyle: 'single', indent: 3 }
                       )}`
               }\n\n< Text - p/${
                  [ ...speech.presets.entries() ].find(entry => entry[1] === speech.state.preset)?.[0] ?? 'UNKNOWN'
               } - f/${speech.state.preset.faces.indexOf(speech.state.face)} (g/${
                  [ ...portraits.entries() ].find(entry => entry[1] === speech.state.face)?.[0] ?? 'UNKNOWN'
               }) - i/${typer.interval} - v/${speech.state.preset.voices.indexOf(typer.sounds)} > [${typer.mode}]\n${
                  game.text
               }`;
               break;
            }
            case 1: {
               this.plain = false;
               this.content += `\nTracked Assets:\n${CosmosAsset.collect()
                  .map(value => `§fill:${value.loaded ? '#00ff00' : '#ffffff'}§> ${value.name}`)
                  .join('\n')}`;
               break;
            }
            case 2: {
               this.plain = false;
               this.content += `\nOversaver: ${oversaver.primed ? 'Primed' : 'Inert'}\nLast Saved Time: ${saver.time}`;
               for (const e of [
                  [ 'data:b', Object.entries(SAVE.state.b ?? {}).filter(e => e[1] !== null) ],
                  [ 'data:n', Object.entries(SAVE.state.n ?? {}).filter(e => e[1] !== null) ],
                  [ 'data:s', Object.entries(SAVE.state.s ?? {}).filter(e => e[1] !== null) ]
               ] as [string, [string, any][]][]) {
                  this.content += `\n\n< REGISTRY - ${e[0]} >\n`;
                  let line = 0;
                  for (const char of e[1].map(([ key, value ]) => `\x00${key}\x01: \x02${value}\x01`).join(', ')) {
                     if (char === '\x00') {
                        this.content += '§fill:#ff0000§';
                     } else if (char === '\x01') {
                        this.content += '§fill:#ffffff§';
                     } else if (char === '\x02') {
                        this.content += '§fill:#00ff00§';
                     } else {
                        this.content += char;
                        if (++line === 78) {
                           line = 0;
                           this.content += '\n';
                        }
                     }
                  }
               }
               break;
            }
            case 3: {
               this.plain = false;
               this.content += `\nNamespace: ${SAVE.namespace}`;
               const keys = SAVE.keys();
               for (const e of [
                  [
                     'flag:b',
                     keys
                        .filter(key => key.startsWith(`${SAVE.namespace}:b`))
                        .map(key => [ key.slice(SAVE.namespace.length + 3), SAVE.manager.getItem(key) ])
                        .filter(e => e[1] !== null)
                  ],
                  [
                     'flag:n',
                     keys
                        .filter(key => key.startsWith(`${SAVE.namespace}:n`))
                        .map(key => [ key.slice(SAVE.namespace.length + 3), SAVE.manager.getItem(key) ])
                        .filter(e => e[1] !== null)
                  ],
                  [
                     'flag:s',
                     keys
                        .filter(key => key.startsWith(`${SAVE.namespace}:s`))
                        .map(key => [ key.slice(SAVE.namespace.length + 3), SAVE.manager.getItem(key) ])
                        .filter(e => e[1] !== null)
                  ]
               ] as [string, [string, any][]][]) {
                  this.content += `\n\n< REGISTRY - ${e[0]} >\n`;
                  let line = 0;
                  for (const char of e[1].map(([ key, value ]) => `\x00${key}\x01: \x02${value}\x01`).join(', ')) {
                     if (char === '\x00') {
                        this.content += '§fill:#ff0000§';
                     } else if (char === '\x01') {
                        this.content += '§fill:#ffffff§';
                     } else if (char === '\x02') {
                        this.content += '§fill:#00ff00§';
                     } else {
                        this.content += char;
                        if (++line === 78) {
                           line = 0;
                           this.content += '\n';
                        }
                     }
                  }
               }
               break;
            }
         }
         return;
      }
      const base = inspector.resolvePath();
      if (inspector.index === null && inspector.path.length === 0) {
         this.content = inspector.generateReport(renderer, null);
      } else if (inspector.index !== null) {
         if (inspector.index < base.length) {
            inspector.target = base[inspector.index];
            this.content = inspector.generateReport(
               inspector.target as CosmosRendererLayer | CosmosObject,
               inspector.index!
            );
         } else {
            inspector.index = null;
            this.content = '';
         }
      }
      panel.tab.objects[3].objects[2].objects[0].objects = [
         ...(inspector.path.length !== 0 ? [ null ] : []),
         ...base
      ].map((target, index) =>
         new OutertaleDeveloperHitbox({
            anchor: { x: 0 },
            position: {
               x: inspector.path.length !== 0 ? -101.5 + (index % 8) * 29 : 0,
               y: 32 + (inspector.path.length !== 0 ? Math.floor(index / 8) : index) * 29
            },
            size: { x: inspector.path.length !== 0 ? 25 : 232, y: 25 },
            objects: [
               new CosmosRectangle({
                  fill: pallete.c2,
                  fontName: 'DeterminationMono',
                  fontSize: 18,
                  stroke: '',
                  anchor: { x: 0 },
                  size: { x: inspector.path.length !== 0 ? 25 : 232, y: 25 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        anchor: 0,
                        position: { y: 12.5 },
                        content: target
                           ? 'modifiers' in target
                              ? text_dev.inspect.p_explorer.layers[index]
                              : target instanceof CosmosAnimation
                              ? text_dev.inspect.p_explorer.letters.animation
                              : target instanceof CosmosCharacter
                              ? text_dev.inspect.p_explorer.letters.character
                              : target instanceof CosmosPlayer
                              ? text_dev.inspect.p_explorer.letters.player
                              : target instanceof CosmosEntity
                              ? text_dev.inspect.p_explorer.letters.entity
                              : target instanceof CosmosHitbox
                              ? text_dev.inspect.p_explorer.letters.hitbox
                              : target instanceof CosmosRectangle
                              ? text_dev.inspect.p_explorer.letters.rectangle
                              : target instanceof CosmosSprite
                              ? text_dev.inspect.p_explorer.letters.sprite
                              : target instanceof CosmosText
                              ? text_dev.inspect.p_explorer.letters.text
                              : text_dev.inspect.p_explorer.letters.object
                           : '^'
                     })
                  ]
               })
            ]
         })
            .on('tick', function () {
               const active = inspector.index === index - (inspector.path.length !== 0 ? 1 : 0);
               this.objects[0].fill = active ? pallete.c4 : pallete.c2;
               this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
            })
            .on('click', function () {
               const alterIndex = index - (inspector.path.length !== 0 ? 1 : 0);
               if (alterIndex === -1) {
                  void inspector.path.pop();
                  inspector.index = null;
               } else {
                  if (inspector.index === alterIndex) {
                     inspector.path.push(alterIndex);
                     inspector.index = null;
                  } else {
                     inspector.index = alterIndex;
                  }
               }
            })
      );
   }),
   generateReport (target: CosmosRendererLayer | CosmosObject | CosmosRenderer, index: number | null) {
      const lines = [
         `${
            inspector.path.length === 0 ? (inspector.index === null ? 'Renderer' : 'Layer') : target.constructor.name
         } (${[ ...inspector.path, ...(index === null ? [] : [ index ]) ].join('.')})`
      ];
      if ('objects' in target) {
         target.objects.length > 0 && lines.push(`Objects: [${target.objects.length}]`);
      } else {
         const k = Object.keys(target.layers);
         k.length > 0 && lines.push(`Layers: [${k.length}]`);
      }
      if (target instanceof CosmosObject || target instanceof CosmosRenderer) {
         const metadata =
            target instanceof CosmosObject
               ? objectInspectCompat(target.metadata, { quoteStyle: 'double', indent: 3, depth: 1 })
               : '{}';
         if (target instanceof CosmosObject) {
            target.acceleration.value !== 0 && lines.push(`Acceleration: ${target.acceleration.value}`);
         }
         target instanceof CosmosObject || target.application.ticker.started || lines.push('Active: False');
         if (target instanceof CosmosSprite) {
            lines.push(`Active: ${target.active ? 'True' : 'False'}`);
         }
         target.alpha.value !== 1 && lines.push(`Alpha: ${target.alpha.value}`);
         if (target instanceof CosmosAnchoredObject) {
            if (target.anchor.x !== -1 || target.anchor.y !== -1) {
               lines.push(`Anchor: {${target.anchor.x}, ${target.anchor.y}}`);
            }
         }
         target.blend !== void 0 && lines.push(`Blend: "${target.blend}"`);
         target.border !== void 0 && lines.push(`Border: ${target.border}`);
         if (target instanceof CosmosText) {
            target.charset !== CosmosText.charset && lines.push(`Charset: ${target.charset}`);
         }
         if (target instanceof CosmosSprite || target instanceof CosmosText) {
            const size = target.compute();
            if (size.x !== 0 || size.y !== 0) {
               lines.push(`Compute(): {${size.x}, ${size.y}}`);
            }
         }
         if (target instanceof CosmosText) {
            if (target !== inspector.reportText && target.content !== '') {
               const sublines = target.content.split('\n').map(line => `| ${line.slice(0, 128)}`);
               if (sublines.length > 4) {
                  lines.push(`Content:\n${sublines.slice(0, 3).join('\n')}\n...`);
               } else {
                  lines.push(`Content:\n${sublines.join('\n')}`);
               }
            }
         }
         if (target instanceof CosmosSprite) {
            if (
               target.crop.bottom !== 0 ||
               target.crop.left !== 0 ||
               target.crop.right !== 0 ||
               target.crop.top !== 0
            ) {
               lines.push(
                  `Crop: /${target.crop.top}, ${target.crop.right}, ${target.crop.bottom}, ${target.crop.left}/`
               );
            }
            lines.push(`Duration: ${target.duration}`);
         }
         if (target instanceof CosmosPlayer) {
            if (target.extent.x !== 0 || target.extent.y !== 0) {
               lines.push(`Extent: {${target.extent.x}, ${target.extent.y}}`);
            }
         }
         if (target instanceof CosmosEntity) {
            lines.push(`Face: ${{ down: 'Down', left: 'Left', right: 'Right', up: 'Up' }[target.face]}`);
         }
         target.fill !== void 0 && lines.push(`Fill: "${target.fill}"`);
         target.fontName !== void 0 && lines.push(`Font Name: "${target.fontName}"`);
         target.fontSize !== void 0 && lines.push(`Font Size: "${target.fontSize}"`);
         if (target instanceof CosmosSprite && !(target instanceof CosmosAnimation)) {
            if (target.frames.length > 0) {
               const sublines = target.frames.map(frame => (frame ? `  @${frame.source.slice(0, 128)}` : '  (none)'));
               if (sublines.length > 4) {
                  lines.push(`Frames: [\n${sublines.slice(0, 3).join('\n')}\n  ...\n]`);
               } else {
                  lines.push(`Frames: [\n${sublines.join('\n')}\n]`);
               }
            }
         }
         if (target instanceof CosmosObject) {
            if (target.gravity.x !== 0 || target.gravity.y !== 0) {
               lines.push(`Gravity: {${target.gravity.x}, ${target.gravity.y}}`);
            }
         }
         if (target instanceof CosmosSprite) {
            target.reverse && lines.push(`Reverse: true`);
            lines.push(`Index: ${target.index}`);
         }
         if (target instanceof CosmosCharacter) {
            lines.push(`Key: ${target.key}`);
         }
         metadata === '{}' || lines.push(`Metadata: ${metadata}`);
         if (target instanceof CosmosObject) {
            if (target.parallax.x !== 0 || target.parallax.y !== 0) {
               lines.push(`Parallax: {${target.parallax.x}, ${target.parallax.y}}`);
            }
         }
         lines.push(`Position: {${target.position.x}, ${target.position.y}}`);
         if (target instanceof CosmosObject) {
            target.priority.value !== 0 && lines.push(`Priority: ${target.priority.value}`);
         }
         if (target instanceof CosmosAnimation) {
            if (target.resources !== null) {
               lines.push(`Resources: ${target.resources.name}`);
            }
         }
         target.rotation.value !== 0 && lines.push(`Rotation: ${target.rotation.value}`);
         if (target.scale.x !== 1 || target.scale.y !== 1) {
            lines.push(`Scale: {${target.scale.x}, ${target.scale.y}}`);
         }
         if (target instanceof CosmosHitbox || target instanceof CosmosRectangle) {
            if (target.size.x !== 0 || target.size.y !== 0) {
               lines.push(`Size: {${target.size.x}, ${target.size.y}}`);
            }
         }
         if (target instanceof CosmosText) {
            if (target.spacing.x !== 0 || target.spacing.y !== 0) {
               lines.push(`Spacing: {${target.spacing.x}, ${target.spacing.y}}`);
            }
         }
         if (target instanceof CosmosObject) {
            target.spin.value !== 0 && lines.push(`Spin: ${target.spin.value}`);
         }
         if (target instanceof CosmosEntity) {
            lines.push(
               `Sprites: /${target.sprites.up.constructor.name}, ${target.sprites.right.constructor.name}, ${target.sprites.down.constructor.name}, ${target.sprites.left.constructor.name}/`
            );
            target.step !== 1 && lines.push(`Step: ${target.step}`);
         }
         if (target instanceof CosmosSprite) {
            lines.push(`Step: ${target.step}`);
         }
         target.stroke !== void 0 && lines.push(`Stroke: "${target.stroke}"`);
         if (target instanceof CosmosAnimation) {
            if (
               target.subcrop.bottom !== 0 ||
               target.subcrop.left !== 0 ||
               target.subcrop.right !== 0 ||
               target.subcrop.top !== 0
            ) {
               lines.push(
                  `Subcrop: /${target.subcrop.top}, ${target.subcrop.right}, ${target.subcrop.bottom}, ${target.subcrop.left}/`
               );
            }
         }
         if (target instanceof CosmosCharacter) {
            lines.push(`Talk: ${target.talk ? 'True' : 'False'}`);
         }
         target.tint !== void 0 && lines.push(`Tint: ${target.tint}`);
         if (target instanceof CosmosObject) {
            if (target.velocity.x !== 0 || target.velocity.y !== 0) {
               lines.push(`Velocity: {${target.velocity.x}, ${target.velocity.y}}`);
            }
         }
      } else {
         target.active || lines.push('Active: False');
      }
      return lines.join('\n');
   }
};

export const logician = {
   error: [] as any[],
   errored: false,
   tab: 0,
   inspect (error: any[]) {
      return error
         .map(value =>
            typeof value === 'string'
               ? value
               : objectInspectCompat(value, {
                    depth: value instanceof CosmosBase ? 1 : 4,
                    quoteStyle: 'single',
                    indent: 3
                 })
         )
         .join('\n')
         .replace(/[A-Za-z]*:.*\/app.asar/g, ':/assets');
   },
   suspend (error: any) {
      if (!logician.errored) {
         logician.errored = true;
         if (!panel.active) {
            panel.userError = true;
            panel.start();
         }
         logician.tab = panel.tab.value;
         panel.tab.switch(panel.tab.objects.length - 1);
      }
      logician.error.unshift(error?.stack ?? error);
      logician.error.length > 100 && logician.error.pop();
      const errors = CosmosUtils.parse<any[][]>(SAVE.manager.getItem('ERRORCODE'), []);
      errors.unshift([
         ...logician.inspect([ logician.error[0] ]).split('\n'),
         game.room,
         player.position.x,
         player.position.y,
         ...CosmosAsset.collect().map(asset => asset.name),
         rng.attack.value,
         rng.battle.value,
         rng.dialogue.value,
         rng.overworld.value,
         rng.pattern.value,
         SAVE.namespace,
         SAVE.manager.getItem(SAVE.namespace)
      ]);
      errors.length > 10 && void errors.pop();
      SAVE.manager.setItem('ERRORCODE', CosmosUtils.serialize(errors));
   },
   resume () {
      if (logician.errored) {
         logician.errored = false;
         if (panel.userError) {
            panel.stop();
            panel.userError = false;
         }
         panel.tab.switch(logician.tab);
      }
   }
};

export const storage = {
   container: Object.keys(SAVE.storage)[0] as keyof typeof SAVE.storage
};

export const panel = {
   activate () {
      panel.userError || (panel.active ? panel.stop() : panel.start());
   },
   active: false,
   debug: -1,
   dragger: { state: false, origin: { x: 0, y: 0 }, offset: { x: 0, y: 0 } },
   interaction (position: CosmosPointSimple, type: 'click' | 'wheel' = 'click', direction: 1 | -1 = 1) {
      const target = panel.object.objects[0];
      target.position.set(position.x - 640, position.y);
      for (const hitbox of panel.renderer.detect(
         target as CosmosHitbox,
         ...panel.renderer.calculate('main', hbox => hbox instanceof OutertaleDeveloperHitbox)
      )) {
         (hitbox as OutertaleDeveloperHitbox).fire(type, ...(type === 'click' ? [] : [ direction ]));
      }
   },
   object: new CosmosRectangle({
      size: { x: 320, y: 480 },
      fill: '',
      offsets: [ { x: 640 } ],
      objects: [
         new CosmosHitbox(),
         new CosmosObject({ position: { y: 40 } }),
         new CosmosObject({
            objects: CosmosUtils.populate(5, index =>
               new OutertaleDeveloperHitbox({
                  size: { x: 80, y: 20 },
                  position: { x: (index % 4) * 80, y: Math.floor(index / 4) * 20 },
                  objects: [
                     new CosmosRectangle({
                        size: { x: 80, y: 20 },
                        position: { x: 1 },
                        objects: [
                           new CosmosText({
                              anchor: 0,
                              position: { x: 40, y: 10 + 0.5 },
                              content: [
                                 text_dev.control.tab,
                                 text_dev.godhome.tab,
                                 text_dev.savemod.tab,
                                 text_dev.inspect.tab,
                                 text_dev.storage.tab
                              ][index],
                              fontName: 'DeterminationMono',
                              fontSize: 18
                           })
                        ]
                     })
                  ]
               })
                  .on('tick', function () {
                     this.alpha.value = logician.errored ? 0 : 1;
                     this.objects[0].fill = this.metadata.active ? pallete.c3 : '';
                     this.objects[0].objects[0].fill = this.metadata.active ? pallete.cf : pallete.c7;
                  })
                  .on('click', function () {
                     logician.errored || panel.tab.switch(index);
                  })
            )
         }),
         new CosmosRectangle({
            anchor: { x: 0 },
            fill: pallete.c3,
            position: { x: 160 },
            size: { x: 320, y: 40 },
            objects: [
               new CosmosText({
                  anchor: { x: 0 },
                  content: text_dev.console.blurb,
                  fill: pallete.cf,
                  fontName: 'DeterminationMono',
                  fontSize: 20,
                  position: { y: 3 }
               })
            ]
         }).on('tick', function () {
            this.alpha.value = logician.errored ? 1 : 0;
         })
      ]
   }),
   renderer: new CosmosRenderer({
      auto: false,
      wrapper: '#wrapper',
      layers: { main: [ 'fixed' ] },
      width: 960,
      height: 480
   }),
   setup: false,
   start () {
      panel.setup || panelSetup();
      params.has('developer') || param('developer', '');
      panel.active = true;
      game.sprint = true;
      game.width = 960;
      SAVE.saveswap = true;
      backend?.exec('pad', 320);
      panel.renderer.start();
      game.resize();
   },
   stop () {
      param('developer');
      historian.clearIndex();
      historian.clearInput();
      backend?.exec('pad', 0);
      panel.renderer.stop();
      panel.active = false;
      game.sprint = false;
      game.width = 640;
      SAVE.saveswap = false;
      game.resize();
   },
   tab: {
      objects: [
         new CosmosObject({
            objects: [
               ...CosmosUtils.populate(
                  2,
                  index1 =>
                     new CosmosRectangle({
                        fill: '',
                        stroke: pallete.cf,
                        anchor: { x: 0 },
                        size: { x: 130, y: 46 + 10 * 29 },
                        position: { x: 85 + index1 * 150, y: 7 },
                        objects: [
                           new CosmosText({
                              fill: pallete.cf,
                              fontName: 'MarsNeedsCunnilingus',
                              fontSize: 24,
                              content: text_dev.control.headers[index1],
                              anchor: { x: 0 },
                              position: { y: 9 },
                              objects: CosmosUtils.populate([ 10, 10 ][index1], index2 =>
                                 new OutertaleDeveloperHitbox({
                                    anchor: { x: 0 },
                                    position: { y: 27 + index2 * 29 },
                                    size: { x: 105, y: 25 },
                                    metadata: { lastClick: -Infinity },
                                    objects: [
                                       new CosmosRectangle({
                                          fill: pallete.c2,
                                          fontName: 'DeterminationMono',
                                          fontSize: 18,
                                          stroke: '',
                                          anchor: { x: 0 },
                                          size: { x: 105, y: 25 },
                                          objects: [
                                             new CosmosText({
                                                fill: pallete.cf,
                                                anchor: 0,
                                                position: { y: 12.5 },
                                                content: text_dev.control.items[index1][index2]
                                             })
                                          ]
                                       })
                                    ]
                                 })
                                    .on('tick', function () {
                                       let active = false;
                                       const recentlyClicked = panel.renderer.time - this.metadata.lastClick < 80;
                                       if (index1 === 0) {
                                          switch (index2) {
                                             case 0:
                                             case 1:
                                             case 7:
                                             case 8:
                                                active = recentlyClicked;
                                                break;
                                             case 2:
                                                active = SAVE.ready && SAVE.data.n.g === Infinity;
                                                break;
                                             case 3:
                                                active = game.interact;
                                                break;
                                             case 4:
                                                active = game.focus;
                                                break;
                                             case 5:
                                                active = game.movement;
                                                break;
                                             case 6:
                                                active = game.noclip;
                                                break;
                                             case 9:
                                                active = renderer.freecam;
                                                break;
                                          }
                                       } else {
                                          switch (index2) {
                                             case 0:
                                                active = battler.assist;
                                                break;
                                             case 1:
                                             case 2:
                                             case 3:
                                             case 4:
                                             case 7:
                                             case 8:
                                             case 9:
                                                active = recentlyClicked;
                                                break;
                                             case 5:
                                                active = battler.flee;
                                                break;
                                             case 6:
                                                active = SAVE.ready && SAVE.data.n.hp === Infinity;
                                                break;
                                          }
                                       }
                                       this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                       this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                    })
                                    .on('click', function () {
                                       this.metadata.lastClick = panel.renderer.time;
                                       if (index1 === 0) {
                                          switch (index2) {
                                             case 0:
                                                if (SAVE.ready) {
                                                   battler.music?.stop();
                                                   quickresume(true);
                                                }
                                                break;
                                             case 1: {
                                                if (SAVE.ready) {
                                                   const { face, position } = ultraPosition(game.room);
                                                   player.face = face;
                                                   player.position.set(position);
                                                   game.camera = player;
                                                }
                                                break;
                                             }
                                             case 2:
                                                if (SAVE.ready) {
                                                   if (SAVE.data.n.g === Infinity) {
                                                      SAVE.data.n.g = this.metadata.g ?? 432;
                                                   } else {
                                                      this.metadata.g = SAVE.data.n.g;
                                                      SAVE.data.n.g = Infinity;
                                                   }
                                                }
                                                break;
                                             case 3:
                                                game.interact = !game.interact;
                                                break;
                                             case 4:
                                                game.focus = !game.focus;
                                                break;
                                             case 5:
                                                game.movement = !game.movement;
                                                break;
                                             case 6:
                                                game.noclip = !game.noclip;
                                                break;
                                             case 7:
                                                if (SAVE.ready) {
                                                   game.movement = false;
                                                   heal();
                                                   atlas.switch('save');
                                                }
                                                break;
                                             case 8:
                                                typer.reset(true);
                                                break;
                                             case 9:
                                                (renderer.freecam = !renderer.freecam) || (renderer.zoom.value = 1);
                                                break;
                                          }
                                       } else {
                                          switch (index2) {
                                             case 0:
                                                battler.assist = !battler.assist;
                                                break;
                                             case 1:
                                                battler.bullets.objects = [];
                                                break;
                                             case 2:
                                                battler.music?.stop();
                                                events.fire('exit');
                                                break;
                                             case 3:
                                                battler.reposition();
                                                break;
                                             case 4:
                                                game.movement = false;
                                                battler.resume();
                                                break;
                                             case 5:
                                                battler.flee = !battler.flee;
                                                break;
                                             case 6:
                                                if (SAVE.ready) {
                                                   if (SAVE.data.n.hp === Infinity) {
                                                      SAVE.data.n.hp = this.metadata.hp ?? calcHP();
                                                   } else {
                                                      this.metadata.hp = SAVE.data.n.hp;
                                                      SAVE.data.n.hp = Infinity;
                                                   }
                                                }
                                                break;
                                             case 7:
                                                for (const volatile of battler.volatile) {
                                                   volatile.sparable = true;
                                                }
                                                break;
                                             case 8:
                                                SAVE.ready && (SAVE.data.n.hp = 0);
                                                if (!battler.active) {
                                                   battler.SOUL.position.set(
                                                      renderer.projection(
                                                         player.position.subtract(0, 15),
                                                         game.camera.position
                                                      )
                                                   );
                                                }
                                                battler.defeat();
                                                break;
                                             case 9:
                                                for (const volatile of battler.volatile) {
                                                   volatile.hp = 0;
                                                }
                                                break;
                                          }
                                       }
                                    })
                              )
                           })
                        ]
                     })
               ),
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 80 },
                  position: { x: 160, y: 350 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.control.p_speed.header,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: CosmosUtils.populate(3, index =>
                           new OutertaleDeveloperHitbox({
                              anchor: { x: 0 },
                              position: { x: -97.5 + index * 97.5, y: 30 },
                              size: { x: index === 1 ? 120 : 60, y: 25 },
                              objects: [
                                 new CosmosRectangle({
                                    fill: pallete.c1,
                                    fontName: 'DeterminationMono',
                                    fontSize: 18,
                                    stroke: '',
                                    anchor: { x: 0 },
                                    size: { x: index === 1 ? 120 : 60, y: 25 },
                                    objects: [
                                       new CosmosText({
                                          fill: pallete.ca,
                                          anchor: 0,
                                          position: { y: 12.5 },
                                          content: [ text_dev.control.p_speed.prev, '', text_dev.control.p_speed.next ][
                                             index
                                          ]
                                       })
                                    ]
                                 })
                              ]
                           })
                              .on('tick', function () {
                                 if (index === 1) {
                                    const obj = this.objects[0].objects[0] as CosmosText;
                                    const value = renderer.speed.value;
                                    switch (value) {
                                       case 0:
                                          obj.content = text_dev.control.p_speed.halt;
                                          break;
                                       case Math.floor(value):
                                          obj.content = text_dev.control.p_speed.fps.replace(
                                             '$(x)',
                                             (value * 30).toString()
                                          );
                                          break;
                                       default: {
                                          const spf = 1 / value;
                                          if (spf % 30 === 0) {
                                             obj.content = text_dev.control.p_speed.sec.replace(
                                                '$(x)',
                                                (spf / 30).toString()
                                             );
                                          } else {
                                             obj.content = text_dev.control.p_speed.multiplier.replace(
                                                '$(x)',
                                                value.toString().slice(0, 13).toString()
                                             );
                                          }
                                          break;
                                       }
                                    }
                                 } else {
                                    const active = panel.renderer.time - this.metadata.lastClick < 80;
                                    this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                    this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                 }
                              })
                              .on('click', function () {
                                 this.metadata.lastClick = panel.renderer.time;
                                 switch (index) {
                                    case 0:
                                       decreaseSpeed();
                                       break;
                                    case 1:
                                       renderer.speed.value = 1;
                                       break;
                                    case 2:
                                       increaseSpeed();
                                       break;
                                 }
                              })
                              .on('wheel', function (dir) {
                                 if (dir === 1) {
                                    decreaseSpeed();
                                 } else {
                                    increaseSpeed();
                                 }
                              })
                        )
                     })
                  ]
               })
            ]
         }),
         new CosmosObject({
            objects: [
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 109 },
                  position: { x: 160, y: 7 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.godhome.p_teleport.header,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: [
                           ...CosmosUtils.populate(3, index =>
                              new OutertaleDeveloperHitbox({
                                 anchor: { x: 0 },
                                 position: { x: -112.5 + index * 112.5, y: 27 },
                                 size: { x: 120, y: 25 },
                                 metadata: { lastClick: -Infinity },
                                 objects: [
                                    new CosmosRectangle({
                                       fill: '',
                                       fontName: 'DeterminationMono',
                                       fontSize: 18,
                                       stroke: '',
                                       anchor: { x: 0 },
                                       size: { x: 30, y: 25 },
                                       objects: [
                                          new CosmosText({
                                             fill: pallete.ca,
                                             anchor: 0,
                                             position: { y: 12.5 },
                                             content: [ '<', '', '>' ][index]
                                          })
                                       ]
                                    })
                                 ]
                              })
                                 .on('tick', function () {
                                    if (index === 1) {
                                       (this.objects[0].objects[0] as CosmosText).content = godhome.room;
                                    } else {
                                       const active = panel.renderer.time - this.metadata.lastClick < 80;
                                       this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                       this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                    }
                                 })
                                 .on('click', function () {
                                    this.metadata.lastClick = panel.renderer.time;
                                    switch (index) {
                                       case 0:
                                          prevRoom();
                                          break;
                                       case 1:
                                          godhome.room = game.active ? game.room : SAVE.ready ? SAVE.data.s.room : '';
                                          break;
                                       case 2:
                                          nextRoom();
                                          break;
                                    }
                                    game.active || (SAVE.ready && (SAVE.data.s.room = godhome.room));
                                 })
                                 .on('wheel', function (dir) {
                                    if (dir === 1) {
                                       nextRoom();
                                    } else {
                                       prevRoom();
                                    }
                                    game.active || (SAVE.ready && (SAVE.data.s.room = godhome.room));
                                 })
                           ),
                           new OutertaleDeveloperHitbox({
                              anchor: { x: 0 },
                              position: { y: 56 },
                              size: { x: 255, y: 25 },
                              metadata: { lastClick: -Infinity },
                              objects: [
                                 new CosmosRectangle({
                                    fill: pallete.c2,
                                    fontName: 'DeterminationMono',
                                    fontSize: 18,
                                    stroke: '',
                                    anchor: { x: 0 },
                                    size: { x: 255, y: 25 },
                                    objects: [
                                       new CosmosText({
                                          fill: pallete.cf,
                                          anchor: 0,
                                          position: { y: 12.5 },
                                          content: text_dev.godhome.p_teleport.action
                                       })
                                    ]
                                 })
                              ]
                           })
                              .on('tick', function () {
                                 const active = panel.renderer.time - this.metadata.lastClick < 80;
                                 this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                 this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                              })
                              .on('click', function () {
                                 this.metadata.lastClick = panel.renderer.time;
                                 if (game.active) {
                                    const { face, position } = ultraPosition(godhome.room);
                                    renderer.alpha.value = 0;
                                    teleport(godhome.room, face, position.x, position.y, { fast: true }).then(() => {
                                       renderer.alpha.value = 1;
                                       quickresume(true);
                                    });
                                 }
                              })
                        ]
                     })
                  ]
               }),
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 109 },
                  position: { x: 160, y: 123 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.godhome.p_encounter.header,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: [
                           ...CosmosUtils.populate(3, index =>
                              new OutertaleDeveloperHitbox({
                                 anchor: { x: 0 },
                                 position: { x: -112.5 + index * 112.5, y: 27 },
                                 size: { x: 120, y: 25 },
                                 metadata: { lastClick: -Infinity },
                                 objects: [
                                    new CosmosRectangle({
                                       fill: '',
                                       fontName: 'DeterminationMono',
                                       fontSize: 18,
                                       stroke: '',
                                       anchor: { x: 0 },
                                       size: { x: 30, y: 25 },
                                       objects: [
                                          new CosmosText({
                                             fill: pallete.ca,
                                             anchor: 0,
                                             position: { y: 12.5 },
                                             content: [ '<', '', '>' ][index]
                                          })
                                       ]
                                    })
                                 ]
                              })
                                 .on('tick', function () {
                                    if (index === 1) {
                                       (this.objects[0].objects[0] as CosmosText).content = godhome.group[0];
                                    } else {
                                       const active = panel.renderer.time - this.metadata.lastClick < 80;
                                       this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                       this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                    }
                                 })
                                 .on('click', function () {
                                    this.metadata.lastClick = panel.renderer.time;
                                    switch (index) {
                                       case 0:
                                          prevGroup();
                                          break;
                                       case 2:
                                          nextGroup();
                                          break;
                                    }
                                 })
                                 .on('wheel', function (dir) {
                                    if (dir === 1) {
                                       nextGroup();
                                    } else {
                                       prevGroup();
                                    }
                                 })
                           ),
                           new OutertaleDeveloperHitbox({
                              anchor: { x: 0 },
                              position: { y: 56 },
                              size: { x: 255, y: 25 },
                              metadata: { lastClick: -Infinity },
                              objects: [
                                 new CosmosRectangle({
                                    fill: pallete.c2,
                                    fontName: 'DeterminationMono',
                                    fontSize: 18,
                                    stroke: '',
                                    anchor: { x: 0 },
                                    size: { x: 255, y: 25 },
                                    objects: [
                                       new CosmosText({
                                          fill: pallete.cf,
                                          anchor: 0,
                                          position: { y: 12.5 },
                                          content: text_dev.godhome.p_encounter.action
                                       })
                                    ]
                                 })
                              ]
                           })
                              .on('tick', function () {
                                 const active = panel.renderer.time - this.metadata.lastClick < 80;
                                 this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                 this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                              })
                              .on('click', function () {
                                 this.metadata.lastClick = panel.renderer.time;
                                 game.active && battler.encounter(player, godhome.group[1], false);
                              })
                        ]
                     })
                  ]
               }),
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 80 },
                  position: { x: 160, y: 239 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.godhome.p_armor.header,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: CosmosUtils.populate(3, index =>
                           new OutertaleDeveloperHitbox({
                              anchor: { x: 0 },
                              position: { x: -112.5 + index * 112.5, y: 27 },
                              size: { x: 120, y: 25 },
                              metadata: { lastClick: -Infinity },
                              objects: [
                                 new CosmosRectangle({
                                    fill: '',
                                    fontName: 'DeterminationMono',
                                    fontSize: 18,
                                    stroke: '',
                                    anchor: { x: 0 },
                                    size: { x: 30, y: 25 },
                                    objects: [
                                       new CosmosText({
                                          fill: pallete.ca,
                                          anchor: 0,
                                          position: { y: 12.5 },
                                          content: [ '<', '', '>' ][index]
                                       })
                                    ]
                                 })
                              ]
                           })
                              .on('tick', function () {
                                 if (index === 1) {
                                    (this.objects[0].objects[0] as CosmosText).content = SAVE.ready
                                       ? CosmosUtils.provide(items.of(SAVE.data.s.armor).text.name)
                                       : '';
                                 } else {
                                    const active = panel.renderer.time - this.metadata.lastClick < 80;
                                    this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                    this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                 }
                              })
                              .on('click', function () {
                                 this.metadata.lastClick = panel.renderer.time;
                                 switch (index) {
                                    case 0:
                                       SAVE.ready && prevArmor();
                                       break;
                                    case 2:
                                       SAVE.ready && nextArmor();
                                       break;
                                 }
                              })
                              .on('wheel', function (dir) {
                                 if (dir === 1) {
                                    SAVE.ready && nextArmor();
                                 } else {
                                    SAVE.ready && prevArmor();
                                 }
                              })
                        )
                     })
                  ]
               }),
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 80 },
                  position: { x: 160, y: 326 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.godhome.p_weapon.header,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: CosmosUtils.populate(3, index =>
                           new OutertaleDeveloperHitbox({
                              anchor: { x: 0 },
                              position: { x: -112.5 + index * 112.5, y: 27 },
                              size: { x: 120, y: 25 },
                              metadata: { lastClick: -Infinity },
                              objects: [
                                 new CosmosRectangle({
                                    fill: '',
                                    fontName: 'DeterminationMono',
                                    fontSize: 18,
                                    stroke: '',
                                    anchor: { x: 0 },
                                    size: { x: 30, y: 25 },
                                    objects: [
                                       new CosmosText({
                                          fill: pallete.ca,
                                          anchor: 0,
                                          position: { y: 12.5 },
                                          content: [ '<', '', '>' ][index]
                                       })
                                    ]
                                 })
                              ]
                           })
                              .on('tick', function () {
                                 if (index === 1) {
                                    (this.objects[0].objects[0] as CosmosText).content = SAVE.ready
                                       ? CosmosUtils.provide(items.of(SAVE.data.s.weapon).text.name)
                                       : '';
                                 } else {
                                    const active = panel.renderer.time - this.metadata.lastClick < 80;
                                    this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                    this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                 }
                              })
                              .on('click', function () {
                                 this.metadata.lastClick = panel.renderer.time;
                                 switch (index) {
                                    case 0:
                                       SAVE.ready && prevWeapon();
                                       break;
                                    case 2:
                                       SAVE.ready && nextWeapon();
                                       break;
                                 }
                              })
                              .on('wheel', function (dir) {
                                 if (dir === 1) {
                                    SAVE.ready && nextWeapon();
                                 } else {
                                    SAVE.ready && prevWeapon();
                                 }
                              })
                        )
                     })
                  ]
               })
            ]
         }),
         new CosmosObject({
            objects: [
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 46 + 10 * 29 },
                  position: { x: 160, y: 7 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.savemod.header1,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: [
                           ...CosmosUtils.populate(10, index =>
                              new OutertaleDeveloperHitbox({
                                 anchor: { x: 0 },
                                 position: { y: 27 + index * 29 },
                                 size: { x: 255, y: 25 },
                                 metadata: {
                                    saveEntry: true,
                                    index,
                                    lastClick: -Infinity,
                                    focus: false,
                                    title: '',
                                    edituh: false
                                 },
                                 objects: [
                                    new CosmosRectangle({
                                       fill: index < 9 ? pallete.c2 : pallete.c0,
                                       fontName: 'DeterminationMono',
                                       fontSize: 18,
                                       stroke: index < 9 ? '' : pallete.cf,
                                       anchor: { x: 0 },
                                       size: { x: 255, y: 25 },
                                       objects: [
                                          new CosmosText({
                                             fill: pallete.cf,
                                             stroke: '',
                                             anchor: 0,
                                             position: { y: 12.5 }
                                          })
                                       ]
                                    })
                                 ]
                              })
                                 .on('tick', function () {
                                    let contents = '';
                                    let active = panel.renderer.time - this.metadata.lastClick < 80;
                                    if (index < 9) {
                                       if (historian.domain !== null) {
                                          if (index === 0) {
                                             contents = 'Back';
                                          } else {
                                             const infoIndex = historian.page * 8 + (index - 1);
                                             if (infoIndex < historian.entries.length) {
                                                contents = historian.entries[infoIndex].key;
                                                if (infoIndex === historian.index) {
                                                   active = true;
                                                }
                                             }
                                          }
                                       } else if (index < 6) {
                                          contents = text_dev.savemod.domains[index];
                                       }
                                       this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                       this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                    } else {
                                       if (historian.index !== null) {
                                          const entry = historian.entries[historian.index];
                                          switch (entry.domain) {
                                             case 'dataBoolean':
                                                contents = SAVE.ready ? `${SAVE.data.b[entry.key]}` : 'false';
                                                break;
                                             case 'dataNumber':
                                                contents = SAVE.ready
                                                   ? `${historian.numericValue ?? SAVE.data.n[entry.key]}`
                                                   : '0';
                                                break;
                                             case 'dataString':
                                                contents = SAVE.ready ? `"${SAVE.data.s[entry.key]}"` : '""';
                                                break;
                                             case 'flagBoolean':
                                                contents = SAVE.ready ? `${SAVE.flag.b[entry.key]}` : 'false';
                                                break;
                                             case 'flagNumber':
                                                contents = SAVE.ready
                                                   ? `${historian.numericValue ?? SAVE.flag.n[entry.key]}`
                                                   : '0';
                                                break;
                                             case 'flagString':
                                                contents = SAVE.ready ? `"${SAVE.flag.s[entry.key]}"` : '""';
                                                break;
                                          }
                                       }
                                       index === 9 && historian.input && (active = true);
                                       this.objects[0].fill = active ? pallete.c2 : pallete.c0;
                                       this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                    }
                                    (this.objects[0].objects[0] as CosmosText).content = contents;
                                    if (contents.length > 0) {
                                       this.alpha.value = 1;
                                    } else {
                                       this.alpha.value = 0;
                                    }
                                 })
                                 .on('click', function () {
                                    this.metadata.lastClick = panel.renderer.time;
                                    if (index < 9) {
                                       if (historian.domain !== null) {
                                          if (index === 0) {
                                             historian.clearIndex();
                                             historian.page = 0;
                                             historian.domain = null;
                                          } else {
                                             const infoIndex = historian.page * 8 + (index - 1);
                                             if (infoIndex < historian.entries.length) {
                                                if (historian.index === infoIndex) {
                                                   historian.clearIndex();
                                                } else {
                                                   historian.index = infoIndex;
                                                   historian.clearInput();
                                                }
                                             }
                                          }
                                       } else if (index < 6) {
                                          historian.domain = [
                                             'dataBoolean',
                                             'dataNumber',
                                             'dataString',
                                             'flagBoolean',
                                             'flagNumber',
                                             'flagString'
                                          ][index];
                                       }
                                    } else if (historian.index !== null) {
                                       const infoEntry = historian.entries[historian.index];
                                       if (infoEntry.domain === 'dataBoolean') {
                                          SAVE.ready && (SAVE.data.b[infoEntry.key] = !SAVE.data.b[infoEntry.key]);
                                       } else if (infoEntry.domain === 'flagBoolean') {
                                          SAVE.ready && (SAVE.flag.b[infoEntry.key] = !SAVE.flag.b[infoEntry.key]);
                                          frontEnder.updateDeadzone();
                                          frontEnder.updateEpilepsy();
                                          frontEnder.updateFancy();
                                          frontEnder.updateMusic();
                                          frontEnder.updateRight();
                                          frontEnder.updateSFX();
                                       } else if (historian.input) {
                                          historian.clearInput();
                                       } else if (isMobile.any) {
                                          const info = historian.getEntry(historian.index);
                                          info.value = prompt(text_dev.savemod.prompt, info.value) ?? info.value;
                                          if (info.numeric && Number.isNaN(+info.value)) {
                                             return;
                                          }
                                          historian.setEntry(historian.index, info);
                                       } else {
                                          historian.input = true;
                                          historian.restoreInput = game.input;
                                          game.input = false;
                                       }
                                    }
                                 })
                           )
                        ]
                     })
                  ]
               }),
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 80 },
                  position: { x: 160, y: 350 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.savemod.p_page.header,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: CosmosUtils.populate(3, index =>
                           new OutertaleDeveloperHitbox({
                              anchor: { x: 0 },
                              position: { x: -97.5 + index * 97.5, y: 30 },
                              size: { x: index === 1 ? 120 : 60, y: 25 },
                              objects: [
                                 new CosmosRectangle({
                                    fill: pallete.c1,
                                    fontName: 'DeterminationMono',
                                    fontSize: 18,
                                    stroke: '',
                                    anchor: { x: 0 },
                                    size: { x: index === 1 ? 120 : 60, y: 25 },
                                    objects: [
                                       new CosmosText({
                                          fill: pallete.ca,
                                          anchor: 0,
                                          position: { y: 12.5 },
                                          content: [ text_dev.savemod.p_page.prev, '', text_dev.savemod.p_page.next ][
                                             index
                                          ]
                                       })
                                    ]
                                 })
                              ]
                           })
                              .on('tick', function () {
                                 if (index === 1) {
                                    (this.objects[0].objects[0] as CosmosText).content = historian.page.toString();
                                 } else {
                                    const active = panel.renderer.time - this.metadata.lastClick < 80;
                                    this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                    this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                 }
                              })
                              .on('click', function () {
                                 this.metadata.lastClick = panel.renderer.time;
                                 switch (index) {
                                    case 0:
                                       --historian.page === -1 && (historian.page = historian.pages - 1);
                                       historian.clearIndex();
                                       break;
                                    case 1:
                                       historian.page = 0;
                                       break;
                                    case 2:
                                       ++historian.page === historian.pages && (historian.page = 0);
                                       historian.clearIndex();
                                       break;
                                 }
                              })
                              .on('wheel', function (dir) {
                                 if (dir === 1) {
                                    ++historian.page === historian.pages && (historian.page = 0);
                                    historian.clearIndex();
                                 } else {
                                    --historian.page === -1 && (historian.page = historian.pages - 1);
                                    historian.clearIndex();
                                 }
                              })
                        )
                     })
                  ]
               })
            ]
         }),
         new CosmosObject({
            objects: [
               ...CosmosUtils.populate(
                  2,
                  index1 =>
                     new CosmosRectangle({
                        fill: '',
                        stroke: pallete.cf,
                        anchor: { x: 0 },
                        size: { x: 130, y: 46 + 5 * 29 },
                        position: { x: 85 + index1 * 150, y: 7 },
                        objects: [
                           new CosmosText({
                              fill: pallete.cf,
                              fontName: 'MarsNeedsCunnilingus',
                              fontSize: 24,
                              content: text_dev.inspect.headers[index1],
                              anchor: { x: 0 },
                              position: { y: 9 },
                              objects: CosmosUtils.populate([ 5, 3 ][index1], index2 => {
                                 const switchKey = [
                                    [ 'base', 'below', 'main', 'above', 'menu' ],
                                    [ 'hitbox', 'sprite', 'text' ]
                                 ][index1][index2] as keyof typeof inspector.switches;
                                 return new OutertaleDeveloperHitbox({
                                    anchor: { x: 0 },
                                    position: { y: 27 + index2 * 29 },
                                    size: { x: 105, y: 25 },
                                    objects: [
                                       new CosmosRectangle({
                                          fill: pallete.c2,
                                          fontName: 'DeterminationMono',
                                          fontSize: 18,
                                          stroke: '',
                                          anchor: { x: 0 },
                                          size: { x: 105, y: 25 },
                                          objects: [
                                             new CosmosText({
                                                fill: pallete.cf,
                                                anchor: 0,
                                                position: { y: 12.5 },
                                                content: text_dev.inspect.switches[index1][index2]
                                             })
                                          ]
                                       })
                                    ]
                                 })
                                    .on('tick', function () {
                                       const active = inspector.switches[switchKey];
                                       this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                       this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                    })
                                    .on('click', function () {
                                       inspector.switches[switchKey] = !inspector.switches[switchKey];
                                    });
                              })
                           })
                        ]
                     })
               ),
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 225 },
                  position: { x: 160, y: 205 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.inspect.p_explorer.header,
                        anchor: { x: 0 },
                        position: { y: 9 }
                     })
                  ]
               })
            ]
         }),
         new CosmosObject({
            objects: [
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 46 + 10 * 29 },
                  position: { x: 160, y: 7 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.storage.header,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: [
                           ...CosmosUtils.populate(10, superindex =>
                              new CosmosObject({
                                 position: { y: 27 + superindex * 29 },
                                 objects: CosmosUtils.populate(3, index =>
                                    new OutertaleDeveloperHitbox({
                                       anchor: { x: 0 },
                                       position: { x: -112.5 + index * 112.5 },
                                       size: { x: 120, y: 25 },
                                       metadata: { lastClick: -Infinity },
                                       objects: [
                                          new CosmosRectangle({
                                             fill: '',
                                             fontName: 'DeterminationMono',
                                             fontSize: 18,
                                             stroke: '',
                                             anchor: { x: 0 },
                                             size: { x: 30, y: 25 },
                                             objects: [
                                                new CosmosText({
                                                   fill: pallete.ca,
                                                   anchor: 0,
                                                   position: { y: 12.5 },
                                                   content: [ '<', '', '>' ][index]
                                                })
                                             ]
                                          })
                                       ]
                                    })
                                       .on('tick', function () {
                                          if (index === 1) {
                                             (this.objects[0].objects[0] as CosmosText).content = SAVE.ready
                                                ? CosmosUtils.provide(
                                                     items.of(SAVE.storage[storage.container].of(superindex) ?? '').text
                                                        .name
                                                  )
                                                : '';
                                          } else {
                                             const active = panel.renderer.time - this.metadata.lastClick < 80;
                                             this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                             this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                          }
                                       })
                                       .on('click', function () {
                                          if (SAVE.ready) {
                                             const container = SAVE.storage[storage.container];
                                             if (superindex <= Math.min(container.size, container.capacity - 1)) {
                                                this.metadata.lastClick = panel.renderer.time;
                                                switch (index) {
                                                   case 0:
                                                      prevItem(superindex);
                                                      break;
                                                   case 2:
                                                      nextItem(superindex);
                                                      break;
                                                }
                                             }
                                          }
                                       })
                                       .on('wheel', function (dir) {
                                          if (SAVE.ready) {
                                             const container = SAVE.storage[storage.container];
                                             if (superindex <= Math.min(container.size, container.capacity - 1)) {
                                                if (dir === 1) {
                                                   nextItem(superindex);
                                                } else {
                                                   prevItem(superindex);
                                                }
                                             }
                                          }
                                       })
                                 )
                              }).on('tick', function () {
                                 if (SAVE.ready) {
                                    const container = SAVE.storage[storage.container];
                                    this.alpha.value =
                                       superindex <= Math.min(container.size, container.capacity - 1) ? 1 : 0;
                                 }
                              })
                           )
                        ]
                     })
                  ]
               }),
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 80 },
                  position: { x: 160, y: 350 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        content: text_dev.storage.p_container.header,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        objects: CosmosUtils.populate(3, index =>
                           new OutertaleDeveloperHitbox({
                              anchor: { x: 0 },
                              position: { x: -97.5 + index * 97.5, y: 30 },
                              size: { x: index === 1 ? 120 : 60, y: 25 },
                              objects: [
                                 new CosmosRectangle({
                                    fill: pallete.c1,
                                    fontName: 'DeterminationMono',
                                    fontSize: 18,
                                    stroke: '',
                                    anchor: { x: 0 },
                                    size: { x: index === 1 ? 120 : 60, y: 25 },
                                    objects: [
                                       new CosmosText({
                                          fill: pallete.ca,
                                          anchor: 0,
                                          position: { y: 12.5 },
                                          content: [
                                             text_dev.storage.p_container.prev,
                                             '',
                                             text_dev.storage.p_container.next
                                          ][index]
                                       })
                                    ]
                                 })
                              ]
                           })
                              .on('tick', function () {
                                 if (index === 1) {
                                    (this.objects[0].objects[0] as CosmosText).content =
                                       text_dev.storage.display[storage.container];
                                 } else {
                                    const active = panel.renderer.time - this.metadata.lastClick < 80;
                                    this.objects[0].fill = active ? pallete.c4 : pallete.c2;
                                    this.objects[0].objects[0].fill = active ? pallete.cf : pallete.c7;
                                 }
                              })
                              .on('click', function () {
                                 this.metadata.lastClick = panel.renderer.time;
                                 switch (index) {
                                    case 0:
                                       prevContainer();
                                       break;
                                    case 1:
                                       storage.container = 'inventory';
                                       break;
                                    case 2:
                                       nextContainer();
                                       break;
                                 }
                              })
                              .on('wheel', function (dir) {
                                 if (dir === 1) {
                                    nextContainer();
                                 } else {
                                    prevContainer();
                                 }
                              })
                        )
                     })
                  ]
               })
            ]
         }),
         new CosmosObject({
            objects: [
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 46 + 10 * 29 },
                  position: { x: 160, y: 7 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        content: text_dev.console.header,
                        objects: [
                           new CosmosText({
                              alpha: 0.7,
                              fontName: 'DeterminationMono',
                              fontSize: 16,
                              stroke: '',
                              plain: true,
                              position: { x: -130, y: 25 }
                           }).on('tick', function () {
                              this.fill = logician.errored ? '#ff7f7f' : pallete.cf;
                              const error = logician.inspect(logician.error.slice(0, 21));
                              let line = 2;
                              let content = '> ';
                              for (const char of error) {
                                 if (char === '\n') {
                                    line = 2;
                                    content += '\n> ';
                                 } else if (line++ === 33) {
                                    line = 1;
                                    content += `\n${char}`;
                                 } else {
                                    content += char;
                                 }
                              }
                              this.content = content.split('\n').slice(0, 21).join('\n');
                           })
                        ]
                     })
                  ]
               }),
               new CosmosRectangle({
                  fill: '',
                  stroke: pallete.cf,
                  anchor: { x: 0 },
                  size: { x: 280, y: 80 },
                  position: { x: 160, y: 350 },
                  objects: [
                     new CosmosText({
                        fill: pallete.cf,
                        fontName: 'MarsNeedsCunnilingus',
                        fontSize: 24,
                        anchor: { x: 0 },
                        position: { y: 9 },
                        content: text_dev.console.p_resume.header,
                        objects: [
                           new CosmosRectangle({
                              fontName: 'DeterminationMono',
                              fontSize: 18,
                              stroke: '',
                              anchor: { x: 0 },
                              size: { x: 255, y: 25 },
                              position: { y: 30 },
                              fill: pallete.c2,
                              objects: [
                                 new CosmosText({
                                    fill: pallete.c7,
                                    stroke: '',
                                    anchor: 0,
                                    position: { y: 12.5 }
                                 }).on('tick', function () {
                                    this.content = text_dev.console.p_resume.resume;
                                 }),
                                 new OutertaleDeveloperHitbox({ anchor: { x: 0 }, size: { x: 255, y: 25 } }).on(
                                    'click',
                                    function () {
                                       logician.resume();
                                    }
                                 )
                              ]
                           })
                        ]
                     })
                  ]
               })
            ]
         })
      ],
      switch (tab: number) {
         historian.clearIndex();
         historian.clearInput();
         for (const [ index, object ] of panel.object.objects[2].objects.entries()) {
            object.metadata.active = index === tab;
         }
         panel.object.objects[1].objects = [ panel.tab.objects[tab] ];
      },
      get value () {
         return panel.tab.objects.indexOf(panel.object.objects[1].objects[0]);
      }
   },
   userError: false
};

export function panelSetup () {
   panel.setup = true;

   inspector.hitboxGraphics.scale.set(2, 2);
   panel.renderer.attach('main', panel.object, inspector.reportText);
   panel.renderer.canvas.style.zIndex = '999';
   panel.tab.switch(0);

   panel.renderer.on('tick', function () {
      panel.renderer.layers.main.container.removeChild(inspector.hitboxGraphics);
   });

   panel.renderer.on('render', function () {
      panel.renderer.layers.main.container.addChild(inspector.hitboxGraphics);
      inspector.hitboxGraphics.clear();
      const camera = renderer.freecam ? renderer.position : renderer.position.clamp(...renderer.region);
      for (const [ key, layer ] of Object.entries(renderer.layers)) {
         const fixed = layer.modifiers[0];
         const zoom = fixed ? 1 : renderer.zoom.value;
         CosmosUtils.chain(
            [
               false,
               [ new CosmosPoint(fixed ? 0 : camera.multiply(-zoom).add(160, 120)), 0, new CosmosPoint(zoom) ],
               layer.objects
            ] as [boolean, CosmosTransform, CosmosObject[]],
            ([ wasActive, transform, objects ], next) => {
               for (const object of objects) {
                  const active = wasActive || object === inspector.target;
                  const [ position, rotation, scale ] = CosmosMath.transform(transform, object, camera);
                  if (
                     object instanceof CosmosAnchoredObject &&
                     (active || inspector.switches[key as OutertaleLayerKey])
                  ) {
                     draw: {
                        let style: { alpha: number; color: number; width: number };
                        if (active) {
                           style = {
                              alpha: 1,
                              color: CosmosImageUtils.color2hex(
                                 CosmosImageUtils.color.of(`hsl(${inspector.hitboxTint},100%,50%)`)
                              ),
                              width: 1
                           };
                        } else if (object instanceof CosmosHitbox && inspector.switches.hitbox) {
                           style = { alpha: 0.75, color: 0xffffff, width: 1 };
                        } else if (object instanceof CosmosSprite && inspector.switches.sprite) {
                           style = { alpha: 0.5, color: 0xffffff, width: 1 };
                        } else if (object instanceof CosmosText && inspector.switches.text) {
                           style = { alpha: 0.25, color: 0xffffff, width: 1 };
                        } else {
                           break draw;
                        }
                        const size = object.compute().multiply(scale);
                        const half = size.divide(2);
                        const base = position.subtract(half.add(half.multiply(object.anchor)));
                        if (object.offsets.length > 0) {
                           base.set(base.subtract(object.offsets.reduce((prev, curr) => prev.add(curr))));
                        }
                        const shift = rotation + 180;
                        const corner2 = base.endpoint(0, size.x);
                        const corner3 = corner2.endpoint(90, size.y);
                        const corner4 = corner3.endpoint(180, size.x);
                        const points = [
                           position.endpoint(position.angleFrom(base) + shift, position.extentOf(base)),
                           position.endpoint(position.angleFrom(corner2) + shift, position.extentOf(corner2)),
                           position.endpoint(position.angleFrom(corner3) + shift, position.extentOf(corner3)),
                           position.endpoint(position.angleFrom(corner4) + shift, position.extentOf(corner4))
                        ];
                        inspector.hitboxGraphics.moveTo(points[3].x, points[3].y);
                        inspector.hitboxGraphics.lineStyle({ alpha: 0.125, color: 0xffffff, width: 1 });
                        for (const { x, y } of object.offsets) {
                           for (const point of points) {
                              inspector.hitboxGraphics.lineTo(point.x, point.y);
                           }
                           for (const point of points) {
                              inspector.hitboxGraphics.moveTo(point.x, point.y);
                              point.set(point.add(x, y));
                              inspector.hitboxGraphics.lineTo(point.x, point.y);
                           }
                        }
                        inspector.hitboxGraphics.lineStyle(style);
                        for (const point of points) {
                           inspector.hitboxGraphics.lineTo(point.x, point.y);
                        }
                        if (object instanceof CosmosHitbox) {
                           object.calculate();
                           inspector.hitboxGraphics.lineStyle({ alpha: 0.5, color: 0xffffff, width: 1 });
                           for (const point of object.polygon.calcPoints) {
                              inspector.hitboxGraphics.drawCircle(
                                 object.polygon.pos.x + point.x - (camera.x - 160),
                                 object.polygon.pos.y + point.y - (camera.y - 120),
                                 1
                              );
                           }
                        }
                     }
                  }
                  next([ active, [ position, rotation, scale ], object.objects ]);
               }
            }
         );
      }
      if (renderer.freecam) {
         const base = camera.multiply(-renderer.zoom.value).add(160, 120);
         inspector.hitboxGraphics
            .beginFill(0xff00ff, 1 / 16)
            .drawRect(
               base.x + (renderer.region[0].x - 160) * renderer.zoom.value,
               base.y + (renderer.region[0].y - 120) * renderer.zoom.value,
               (renderer.region[1].x - renderer.region[0].x + 320) * renderer.zoom.value,
               (renderer.region[1].y - renderer.region[0].y + 240) * renderer.zoom.value
            )
            .endFill();
         inspector.hitboxGraphics.lineStyle({
            alpha: 0.5,
            color: 0xff00ff,
            width: 1
         });
         const p1 = base.add(
            game.camera.position
               .clamp(...renderer.region)
               .subtract(160, 120)
               .multiply(renderer.zoom.value)
         );
         const p2 = p1.add(new CosmosPoint(320, 240).multiply(renderer.zoom.value));
         inspector.hitboxGraphics.moveTo(p1.x, p1.y);
         inspector.hitboxGraphics.lineTo(p2.x, p1.y);
         inspector.hitboxGraphics.lineTo(p2.x, p2.y);
         inspector.hitboxGraphics.lineTo(p1.x, p2.y);
         inspector.hitboxGraphics.lineTo(p1.x, p1.y);
      }
      if (++inspector.hitboxTint === 360) {
         inspector.hitboxTint = 0;
      }
   });

   panel.renderer.wrapper!.addEventListener('click', event => {
      panel.interaction({ x: event.offsetX, y: event.offsetY });
   });

   panel.renderer.wrapper!.addEventListener(
      'wheel',
      event => {
         panel.interaction({ x: event.offsetX, y: event.offsetY }, 'wheel', event.deltaY < 0 ? -1 : 1);
      },
      { passive: true }
   );

   renderer.wrapper!.addEventListener('mousedown', event => {
      if (!panel.dragger.state && event.offsetX <= 640) {
         if (renderer.freecam) {
            panel.dragger.origin.x = renderer.position.x;
            panel.dragger.origin.y = renderer.position.y;
         } else if (inspector.path.length !== 0 && inspector.target instanceof CosmosObject) {
            panel.dragger.origin.x = inspector.target.position.x;
            panel.dragger.origin.y = inspector.target.position.y;
         } else {
            return;
         }
         panel.dragger.state = true;
         panel.dragger.offset.x = event.offsetX;
         panel.dragger.offset.y = event.offsetY;
      }
   });

   renderer.wrapper!.addEventListener('mousemove', event => {
      if (panel.dragger.state) {
         if (renderer.freecam) {
            const zoom = renderer.scale.multiply(renderer.zoom.value);
            renderer.position.set(
               panel.dragger.origin.x + (panel.dragger.offset.x - event.offsetX) / zoom.x,
               panel.dragger.origin.y + (panel.dragger.offset.y - event.offsetY) / zoom.y
            );
         } else if (inspector.path.length !== 0 && inspector.target instanceof CosmosObject) {
            inspector.target.position.set(
               panel.dragger.origin.x + (event.offsetX - panel.dragger.offset.x) / 2,
               panel.dragger.origin.y + (event.offsetY - panel.dragger.offset.y) / 2
            );
         }
      }
   });

   panel.renderer.wrapper!.addEventListener('mouseup', () => {
      panel.dragger.state = false;
   });

   panel.renderer.wrapper!.addEventListener(
      'wheel',
      event => {
         if (renderer.freecam) {
            if (event.deltaY < 0) {
               renderer.zoom.value *= zoomFactor;
            } else {
               renderer.zoom.value /= zoomFactor;
            }
         }
      },
      { passive: true }
   );

   addEventListener('keydown', event => {
      if (historian.input && historian.index !== null) {
         const info = historian.getEntry(historian.index);
         if (event.key === 'Backspace') {
            if (info.numeric) {
               if ([ 'NaN', 'Infinity', '-Infinity', '0', '-0' ].includes(info.value)) {
                  info.value = '0';
               } else {
                  info.value = info.value.slice(0, -1);
                  if (info.value === '-') {
                     info.value = '-0';
                  } else if (info.value === '') {
                     info.value = '0';
                  }
               }
            } else {
               info.value = info.value.slice(0, -1);
            }
         } else if (event.key.length === 1) {
            if (info.numeric) {
               if ('0123456789'.includes(event.key)) {
                  if (!info.value.includes('Infinity') && !info.value.includes('NaN')) {
                     if (info.value === '0') {
                        info.value = event.key;
                     } else if (info.value === '-0') {
                        info.value = `-${event.key}`;
                     } else {
                        info.value += event.key;
                        if (+info.value === Infinity) {
                           info.value = 'Infinity';
                        } else if (+info.value === -Infinity) {
                           info.value = '-Infinity';
                        } else if (+info.value <= 1 && -1 <= +info.value && info.value.length > 20) {
                           const negative = info.value[0] === '-';
                           info.value = `${+info.value}`;
                           if (negative && info.value[0] !== '-') {
                              info.value = `-${info.value}`;
                           }
                        }
                     }
                  }
               } else if (event.key === '-') {
                  if (info.value[0] === '-') {
                     info.value = info.value.slice(1);
                  } else {
                     info.value = `-${info.value}`;
                  }
               } else if (event.key === '.') {
                  if (!info.value.includes('.') && !info.value.includes('Infinity')) {
                     info.value += '.';
                  }
               } else if (event.key === 'i') {
                  if (+info.value === 0) {
                     if (info.value[0] === '-') {
                        info.value = '-Infinity';
                     } else {
                        info.value = 'Infinity';
                     }
                  } else {
                     info.value = `${+info.value * Infinity}`;
                  }
               }
            } else {
               info.value += event.key;
            }
         } else if (event.key === 'Enter') {
            historian.clearInput();
            return;
         }
         historian.setEntry(historian.index, info);
      }
   });

   if (isMobile.any) {
      addEventListener('touchstart', event => {
         event.preventDefault();
         const bounds = panel.renderer.canvas.getBoundingClientRect();
         for (const touch of mobile.touches(event)) {
            panel.interaction(
               new CosmosPoint(touch.clientX, touch.clientY)
                  .subtract(bounds)
                  .divide(game.ratio)
                  .divide(panel.renderer.scale)
            );
         }
      });
   }

   extraKeys.debugKey.on('down', () => panel.active && game.input && ++panel.debug === 4 && (panel.debug = -1));

   extraKeys.noclipKey
      .on('down', () => panel.active && game.input && (game.noclip = true))
      .on('up', () => panel.active && game.input && (game.noclip = false));

   extraKeys.freecamKey
      .on('down', () => panel.active && game.input && (renderer.freecam = true))
      .on('up', () => {
         if (panel.active && game.input) {
            renderer.freecam = false;
            renderer.zoom.value = 1;
         }
      });
}

CosmosUtils.status(`LOAD MODULE: DEVELOPER (${Math.floor(performance.now()) / 1000})`, { color: '#07f' });
