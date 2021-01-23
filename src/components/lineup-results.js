import React from 'react';

const DUMMY_DATA = [
  {
    id: 'ere3ebwjligbp1xf5082aj',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [
      'cryo'
    ],
    elements: [
      'cryo:2',
      'electro:1',
      'hydro:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:2',
      'catalyst:1',
      'bow:1'
    ]
  },
  {
    id: 'b6xenu44sal5otv1o2kocl',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [
      'cryo'
    ],
    elements: [
      'cryo:2',
      'electro:1',
      'anemo:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:3',
      'catalyst:1'
    ]
  },
  {
    id: 'i58xuo9mcsvhfqvbwz6ni',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [
      'cryo'
    ],
    elements: [
      'cryo:2',
      'electro:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:2',
      'catalyst:1',
      'claymore:1'
    ]
  },
  {
    id: 'de43ir2seeafsif747bdz8',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: false,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'cryo:1',
      'electro:1',
      'hydro:1',
      'anemo:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:2',
      'catalyst:1',
      'bow:1'
    ]
  },
  {
    id: '8diq5ngrqfurzycnya0m8',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: false,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'cryo:1',
      'electro:1',
      'hydro:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [],
    weapons: [
      'sword:1',
      'catalyst:1',
      'bow:1',
      'claymore:1'
    ]
  },
  {
    id: 'j1gyvb86dtahhel4k54vb',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: false,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'cryo:1',
      'electro:1',
      'anemo:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:2',
      'catalyst:1',
      'claymore:1'
    ]
  },
  {
    id: 'bzldsj1uh0ayqp7rl2y44',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [
      'cryo'
    ],
    elements: [
      'cryo:2',
      'hydro:1',
      'anemo:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:3',
      'bow:1'
    ]
  },
  {
    id: 'ikfkhvn3cagc330szacfem',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [
      'cryo'
    ],
    elements: [
      'cryo:2',
      'hydro:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:2',
      'bow:1',
      'claymore:1'
    ]
  },
  {
    id: 'r63wjig0qtauzn3anekq6',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: false,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [
      'cryo'
    ],
    elements: [
      'cryo:2',
      'anemo:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:3',
      'claymore:1'
    ]
  },
  {
    id: 'i9883m21qnm19wd1o84sq7',
    characters: [
      {
        name: 'Kaeya',
        element: 'cryo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: false,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'cryo:1',
      'hydro:1',
      'anemo:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:2',
      'bow:1',
      'claymore:1'
    ]
  },
  {
    id: 'ri4mcvgam4ayrkvbfxfxq',
    characters: [
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'electro:1',
      'cryo:1',
      'hydro:1',
      'anemo:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'catalyst:1',
      'sword:2',
      'bow:1'
    ]
  },
  {
    id: '8kyl0v9stqgucjl855zy8c',
    characters: [
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'electro:1',
      'cryo:1',
      'hydro:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [],
    weapons: [
      'catalyst:1',
      'sword:1',
      'bow:1',
      'claymore:1'
    ]
  },
  {
    id: '8h2a357ogrlg4iav5ci474',
    characters: [
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'electro:1',
      'cryo:1',
      'anemo:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'catalyst:1',
      'sword:2',
      'claymore:1'
    ]
  },
  {
    id: 'xw7pyzuomtomm1jqjox8ks',
    characters: [
      {
        name: 'Lisa',
        element: 'electro',
        weapon: 'catalyst',
        tags: []
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: false,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'electro:1',
      'hydro:1',
      'anemo:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [],
    weapons: [
      'catalyst:1',
      'bow:1',
      'sword:1',
      'claymore:1'
    ]
  },
  {
    id: 'mq3c7tga8vr9gmmyi6umn',
    characters: [
      {
        name: 'Qiqi',
        element: 'cryo',
        weapon: 'sword',
        tags: [
          'role;healer'
        ]
      },
      {
        name: 'Tartaglia',
        element: 'hydro',
        weapon: 'bow',
        tags: []
      },
      {
        name: 'Traveler (A)',
        element: 'anemo',
        weapon: 'sword',
        tags: []
      },
      {
        name: 'Xinyan',
        element: 'pyro',
        weapon: 'claymore',
        tags: []
      }
    ],
    hasMissile: true,
    hasHealer: true,
    elementMap: {},
    elementBonuses: [],
    elements: [
      'cryo:1',
      'hydro:1',
      'anemo:1',
      'pyro:1'
    ],
    weaponMap: {},
    weaponDupes: [
      'sword'
    ],
    weapons: [
      'sword:2',
      'bow:1',
      'claymore:1'
    ]
  }
];

const coinflip = () => {
  return Math.random() > 0.5;
}
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const LineupResult = ({lineup}) => {

  // console.debug(lineup);

  const featureMap = {
    geo: 'disabled',
    pyro: 'disabled',
    hydro: 'disabled',
    anemo: 'disabled',
    electro: 'disabled',
    cryo: 'disabled',
    dendro: 'disabled',
    sword: 'disabled',
    bow: 'disabled',
    catalyst: 'disabled',
    claymore: 'disabled',
    polearm: 'disabled',
    healer: 'disabled',
    ranged: 'disabled',
  };

  const addToFeature = ele => {
    const classes = [];
    const element = ele.split(':')[0];
    const numElement = ele.split(':')[1];

    if (numElement > 1) {
      featureMap[element] = 'highlight';
    } else {
      featureMap[element] = '';
    }
  }

  lineup.features.elements.forEach(addToFeature);
  lineup.features.weapons.forEach(addToFeature);

  featureMap.healer = lineup.features.hasHealer ? '' : 'disabled';
  featureMap.ranged = lineup.features.hasMissile ? '' : 'disabled';

  return (
    <div className="card card--result">
      <div className="results-column character-column">
        <small className="temp-label">{lineup.characters}</small>
        <div className="char-infos">
          <div className="char-info">
            <div className="char-portrait" />
          </div>
          <div className="char-info">
            <div className="char-portrait" />
          </div>
          <div className="char-info">
            <div className="char-portrait" />
          </div>
          <div className="char-info">
            <div className="char-portrait" />
          </div>
        </div>
      </div>
      <div className="results-column elements-column">
        <div className="elements-group">
          <div className={"feature-icon icon-hydro " + featureMap.hydro}>
            <span className="inner-icon">H</span>
          </div>
          <div className={"feature-icon icon-cryo " + featureMap.cryo}>
            <span className="inner-icon">C</span>
          </div>
          <div className={"feature-icon icon-pyro " + featureMap.pyro}>
            <span className="inner-icon">P</span>
          </div>
          <div className={"feature-icon icon-electro " + featureMap.electro}>
            <span className="inner-icon">E</span>
          </div>
          <div className={"feature-icon icon-geo " + featureMap.geo}>
            <span className="inner-icon">G</span>
          </div>
          <div className={"feature-icon icon-anemo " + featureMap.anemo}>
            <span className="inner-icon">A</span>
          </div>
        </div>
        <div className="details-group">
          <div className={"feature-icon icon-healer " + featureMap.healer}>
            <span className="inner-icon">H</span>
          </div>
          <div className={"feature-icon icon-ranged " + featureMap.ranged}>
            <span className="inner-icon">R</span>
          </div>
        </div>
      </div>
      <div className="results-column weapons-column">
        <div className="weapons-group">
          <div className={"feature-icon icon-sword " + featureMap.sword}>
            <span className="inner-icon">S</span>
          </div>
          <div className={"feature-icon icon-bow " + featureMap.bow}>
            <span className="inner-icon">B</span>
          </div>
          <div className={"feature-icon icon-catalyst " + featureMap.catalyst}>
            <span className="inner-icon">C</span>
          </div>
          <div className={"feature-icon icon-claymore " + featureMap.claymore}>
            <span className="inner-icon">C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const LineupResults = ({lineups}) => {
  return (
    <div className="lineup-results">
      {lineups.map(line => {
        return (
          <LineupResult lineup={line} key={line.id} />
        )
      })}
    </div>
  );
};

export default LineupResults;
