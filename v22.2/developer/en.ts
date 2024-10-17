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
            'Input',
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
      prompt: 'Enter Value',
      back: 'Back'
   },
   storage: {
      tab: 'STORAGE',
      header: 'STORAGE EDITOR',
      p_container: { header: 'SELECTION', prev: 'Prev', next: 'Next' },
      display: { inventory: 'Inventory', dimboxA: 'Dim. Box A', dimboxB: 'Dim. Box B' }
   }
};
// END-TRANSLATE

export default text_dev;
