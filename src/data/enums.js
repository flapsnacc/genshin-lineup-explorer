
import CHARACTER_DATA from './characters';

const coinflip = () => {
  return Math.random() > 0.5;
}

const ELEMENTS = [
  'Geo',
  'Pyro',
  'Hydro',
  'Anemo',
  'Electro',
  'Cryo',
  'Dendro',
];

const REACTIONS = [
  'Crystallize',
  'Electro-charged',
  'Frozen',
  'Melt',
  'Overloaded',
  'Superconduct',
  'Swirl',
  'Vaporize',
];

const WEAPONS = [
  'Sword',
  'Bow',
  'Catalyst',
  'Claymore',
  'Polearm',
];

const LINEUP_OPTIONS = [
  'Healer',
  'Ranged',
]

const initializeCheckboxList = (initList, initialValue = false) => {
  return initList.map((el, idx) => {
    return {
      id: `${el}-${idx}`,
      key: el.toLowerCase(),
      label: el,
      value: initialValue,
    }
  });
}

const initializeCharacterList = () => {
  return CHARACTER_DATA.characters.map((char, idx) => {
    return {
      id: char.id,
      key: char.name.toLowerCase(),
      label: char.name,
      value: false,
    }
  });
}

export {
  ELEMENTS,
  REACTIONS,
  WEAPONS,
  LINEUP_OPTIONS,
  initializeCheckboxList,
  initializeCharacterList,
}
