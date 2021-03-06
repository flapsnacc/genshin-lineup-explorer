///// DATA

const FILTER_CATEGORIES = 2;
const TEAM_DATA = {
  characters: [
    {
      id: 1,
      name: 'Amber',
      element: 'pyro',
      weapon: 'bow',
      upgrades: [],
      tags: [],
    },

    {
      id: 2,
      name: 'Barbara',
      element: 'hydro',
      weapon: 'catalyst',
      upgrades: ['philanemo mushroom', 'mask', 'freedom'],
      tags: ['role;support', 'role;healer'],
    },

    {
      id: 3,
      name: 'Beidou',
      element: 'electro',
      weapon: 'claymore',
      upgrades: [],
      tags: [],
    },

    {
      id: 4,
      name: 'Bennett',
      element: 'pyro',
      weapon: 'sword',
      upgrades: ['windwheel aster', 'hoarder insignia', 'resistance'],

      tags: [
        'role;dps',
        'role;sub-dps',
        'role;support',
        'role;healer',
        'talent;craft',
      ],
    },

    {
      id: 5,
      name: 'Chongyun',
      element: 'cryo',
      weapon: 'claymore',
      upgrades: [],
      tags: [],
    },

    {
      id: 6,
      name: 'Diluc',
      element: 'pyro',
      weapon: 'claymore',
      upgrades: [],
      tags: [],
    },

    {
      id: 7,
      name: 'Diona',
      element: 'cryo',
      weapon: 'bow',
      upgrades: [],
      tags: ['role;healer'],
    },

    {
      id: 8,
      name: 'Fischl',
      element: 'electro',
      weapon: 'bow',
      upgrades: [],
      tags: [],
    },

    {
      id: 9,
      name: 'Jean',
      element: 'anemo',
      weapon: 'sword',
      upgrades: [],
      tags: ['role;healer'],
    },

    {
      id: 10,
      name: 'Kaeya',
      element: 'cryo',
      weapon: 'sword',
      upgrades: [],
      tags: [],
    },

    {
      id: 11,
      name: 'Keqing',
      element: 'electro',
      weapon: 'sword',
      upgrades: [],
      tags: [],
    },

    {
      id: 12,
      name: 'Klee',
      element: 'pyro',
      weapon: 'catalyst',
      upgrades: [],
      tags: [],
    },

    {
      id: 13,
      name: 'Lisa',
      element: 'electro',
      weapon: 'catalyst',
      upgrades: [],
      tags: [],
    },

    {
      id: 14,
      name: 'Mona',
      element: 'hydro',
      weapon: 'catalyst',
      upgrades: [],
      tags: [],
    },

    {
      id: 15,
      name: 'Ningguang',
      element: 'geo',
      weapon: 'catalyst',
      upgrades: [],
      tags: [],
    },

    {
      id: 16,
      name: 'Noelle',
      element: 'geo',
      weapon: 'claymore',
      upgrades: ['valberry', 'mask', 'resistance'],

      tags: [
        'role;dps',
        'role;sub-dps',
        'role;support',
        'role;healer',
        'talent;stamina',
      ],
    },

    {
      id: 17,
      name: 'Qiqi',
      element: 'cryo',
      weapon: 'sword',
      upgrades: [],
      tags: ['role;healer'],
    },

    {
      id: 18,
      name: 'Razor',
      element: 'electro',
      weapon: 'claymore',
      upgrades: ['wolfhook', 'mask', 'resistance'],

      tags: ['role;dps', 'role;main-dps', 'talent;stamina'],
    },

    {
      id: 19,
      name: 'Sucrose',
      element: 'anemo',
      weapon: 'catalyst',
      upgrades: [],
      tags: [],
    },

    {
      id: 20,
      name: 'Tartaglia',
      element: 'hydro',
      weapon: 'bow',
      upgrades: [],
      tags: [],
    },

    {
      id: 21,
      name: 'Traveler (A)',
      element: 'anemo',
      weapon: 'sword',
      upgrades: [],
      tags: [],
    },

    {
      id: 22,
      name: 'Traveler (G)',
      element: 'geo',
      weapon: 'sword',
      upgrades: [],
      tags: [],
    },

    {
      id: 23,
      name: 'Venti',
      element: 'anemo',
      weapon: 'bow',
      upgrades: [],
      tags: [],
    },

    {
      id: 24,
      name: 'Xiangling',
      element: 'pyro',
      weapon: 'polearm',
      upgrades: [],
      tags: [],
    },

    {
      id: 25,
      name: 'Xiao',
      element: 'anemo',
      weapon: 'polearm',
      upgrades: [],
      tags: [],
    },

    {
      id: 26,
      name: 'Xingqiu',
      element: 'hydro',
      weapon: 'sword',
      upgrades: ['silk flower', 'mask', 'gold'],

      tags: ['role;dps', 'role;sub-dps', 'talent;craft'],
    },

    {
      id: 27,
      name: 'Xinyan',
      element: 'pyro',
      weapon: 'claymore',
      upgrades: [],
      tags: [],
    },

    {
      id: 28,
      name: 'Zhongli',
      element: 'geo',
      weapon: 'polearm',
      upgrades: [],
      tags: [],
    },

    {
      id: 29,
      name: 'Albedo',
      element: 'geo',
      weapon: 'sword',
      upgrades: [],
      tags: [],
    },

    {
      id: 30,
      name: 'Ganyu',
      element: 'cryo',
      weapon: 'bow',
      upgrades: [],
      tags: [],
    },
  ],
};

const findCharacterById = id => {
  const chars = TEAM_DATA.characters.filter (char => {
    return char.id === id;
  });

  return chars.length > 0 ? chars[0] : null;
};

///// MODELS

class Lineup {
  constructor (characters) {
    this.characters = characters;

    this.hasMissile = false;
    this.hasHealer = false;

    this.elementMap = new Map ();
    this.elementBonuses = [];
    this.elements = [];

    this.weaponMap = new Map ();
    this.weaponDupes = [];
    this.weapons = [];

    this.characters.forEach (char => {
      if (char.weapon === 'bow' || char.weapon === 'catalyst') {
        this.hasMissile = true;
      }
      if (char.tags.includes ('role;healer')) {
        this.hasHealer = true;
      }

      if (this.elementMap.has (char.element)) {
        let num = this.elementMap.get (char.element);
        this.elementMap.set (char.element, num + 1);
      } else {
        this.elementMap.set (char.element, 1);
      }

      if (this.weaponMap.has (char.weapon)) {
        let num = this.weaponMap.get (char.weapon);
        this.weaponMap.set (char.weapon, num + 1);
      } else {
        this.weaponMap.set (char.weapon, 1);
      }
    });

    this.elementMap.forEach ((value, key) => {
      this.elements.push (`${key}:${value}`);
      if (value > 1) {
        this.elementBonuses.push (key);
      }
    });

    this.weaponMap.forEach ((value, key) => {
      this.weapons.push (`${key}:${value}`);
      if (value > 1) {
        this.weaponDupes.push (key);
      }
    });
  }

  get features () {
    return {
      hasMissile: this.hasMissile,
      hasHealer: this.hasHealer,
      elements: this.elements,
      weapons: this.weapons,
    };
  }
}

///// OPERATIONS

const getFilterOptions = () => {
  const domCheckboxes = document.querySelectorAll (
    '.experiment-form input[type=checkbox]'
  );
  const checkboxes = Array.from (domCheckboxes);

  const filterElements = [];
  const filterReactions = [];
  const filterWeapons = [];

  checkboxes.forEach (checkbox => {
    if (checkbox.checked) {
      if (checkbox.dataset.ctg === 'element') {
        filterElements.push (checkbox.dataset.val);
      } else if (checkbox.dataset.ctg === 'reaction') {
        filterReactions.push (checkbox.dataset.val);
      } else if (checkbox.dataset.ctg === 'weapon') {
        filterWeapons.push (checkbox.dataset.val);
      }
    }
  });

  return {
    elements: filterElements,
    weapons: filterWeapons,
  };
};

const filterHeroes = filterOptions => {
  const heroFilter = hero => {
    let criteriaPassed = 0;
    if (filterOptions.elements.includes (hero.element)) {
      criteriaPassed++;
    }
    if (filterOptions.weapons.includes (hero.weapon)) {
      criteriaPassed++;
    }
    if (criteriaPassed === FILTER_CATEGORIES) {
      return true;
    }
    return false;
  };
  const filteredHeroes = TEAM_DATA.characters.filter (heroFilter);
  return filteredHeroes;
};

const teamIndexSet = new Set ();
const findCombo = (currentCombo, currentOptions, totalOptions, teamSize) => {
  if (currentCombo.length === teamSize) {
    const sortedCombo = currentCombo.sort (function (a, b) {
      return a - b;
    });
    teamIndexSet.add (JSON.stringify (sortedCombo));
  } else if (currentOptions.length >= 1) {
    currentOptions.forEach (opt => {
      const nextCombo = currentCombo.concat (opt);
      const nextOptions = _.difference (totalOptions, nextCombo);
      findCombo (nextCombo, nextOptions, totalOptions, teamSize);
    });
  }
};

const buildLineups = (roster, teamSize) => {
  const playerIndices = Array (roster.length).fill ().map ((x, i) => i);
  teamIndexSet.clear ();
  findCombo ([], playerIndices, playerIndices, teamSize);
  const lineupIndices = Array.from (teamIndexSet);

  const lineups = lineupIndices.map (lineup => {
    const teamIndices = JSON.parse (lineup);
    const lineupCharacters = teamIndices.map (rosterIdx => {
      const charObj = roster[rosterIdx];
      return {
        name: charObj.name,
        element: charObj.element,
        weapon: charObj.weapon,
        tags: charObj.tags,
      };
    });
    return new Lineup (lineupCharacters);
  });

  return lineups;
};

///// OUTPUT

const mainInput = document.querySelector ('#exp-input-small');
const output1 = document.querySelector ('#exp-output-1');
const output2 = document.querySelector ('#exp-output-2');
const mainButton = document.querySelector ('.experiment-form .button-primary');

mainButton.onclick = () => {
  const filterOptions = getFilterOptions ();
  const heroList = filterHeroes (filterOptions);
  const heroReducer = (acc, hero) => {
    const newHero = `${hero.name}: (${hero.element}, ${hero.weapon})`;
    return acc + newHero + '\n';
  };

  const filterOutput = JSON.stringify (filterOptions, null, 2);
  const heroOutput = heroList.reduce (heroReducer, '');
  const txtOutput1 = `FILTERS:\n${filterOutput}\n\nCHARACTERS:\n${heroOutput}`;

  output1.value = txtOutput1;

  const lineups = buildLineups (heroList, 4);
  const formattedLineups = lineups.map (lineup => {
    const charNames = lineup.characters.map (char => {
      return char.name;
    });
    // const line1 = charNames.join(', ');
    // const line2 = lineup.features.elements.join(', ');
    // const line3 = lineup.features.weapons.join(', ');
    // return `${line1} --${line2}\n${line3}\n`;
    return {
      characters: charNames.join (', '),
      features: lineup.features,
    };
  });
  const txtOutput2 = JSON.stringify (formattedLineups, null, 2);

  output2.value = `LINEUPS: ${txtOutput2}`;
};
