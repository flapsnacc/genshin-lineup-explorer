
import CHARACTER_DATA from './characters';

const coinflip = () => {
  return Math.random() > 0.5;
}

const ELEMENTS = [
  'geo',
  'pyro',
  'hydro',
  'anemo',
  'electro',
  'cryo',
  'dendro',
];

const REACTIONS = [
  'crystallize',
  'electro-charged',
  'frozen',
  'melt',
  'overloaded',
  'superconduct',
  'swirl',
  'vaporize',
];

const WEAPONS = [
  'sword',
  'bow',
  'catalyst',
  'claymore',
  'polearm',
];

const LINEUP_OPTIONS = [
  'healer',
  'ranged',
]

const initializeCheckboxList = (initList) => {
  return initList.map((el, idx) => {
    return {
      id: `${el}-${idx}`,
      key: el,
      value: coinflip(),
    }
  });
}

export {
  ELEMENTS,
  REACTIONS,
  WEAPONS,
  LINEUP_OPTIONS,
  initializeCheckboxList,
}
