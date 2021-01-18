
import { difference } from 'lodash';
import CHARACTER_DATA from '../data/characters';




///// PRIVATE

const FILTER_CATEGORIES = 2;

const teamIndexSet = new Set ();

class Lineup {
  constructor (characters) {
    this.id = this.generateId();
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

  generateId() {
    return `${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`
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

const findCombo = (currentCombo, currentOptions, totalOptions, teamSize) => {
  if (currentCombo.length === teamSize) {
    const sortedCombo = currentCombo.sort (function (a, b) {
      return a - b;
    });
    teamIndexSet.add (JSON.stringify (sortedCombo));
  } else if (currentOptions.length >= 1) {
    currentOptions.forEach (opt => {
      const nextCombo = currentCombo.concat (opt);
      const nextOptions = difference (totalOptions, nextCombo);
      findCombo (nextCombo, nextOptions, totalOptions, teamSize);
    });
  }
};




/////// PUBLIC

const filterCharacters = filterOptions => {
  const characterFilter = character => {
    let criteriaPassed = 0;
    if (filterOptions.elements.includes (character.element)) {
      criteriaPassed++;
    }
    if (filterOptions.weapons.includes (character.weapon)) {
      criteriaPassed++;
    }
    if (criteriaPassed === FILTER_CATEGORIES) {
      return true;
    }
    return false;
  };
  const filteredCharacters = CHARACTER_DATA.characters.filter(characterFilter);
  return filteredCharacters;
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

export {
  filterCharacters,
  buildLineups
}
