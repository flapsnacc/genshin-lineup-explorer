
import CHARACTER_DATA from '../data/characters';

const FILTER_CATEGORIES = 2;

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
  const filteredCharacters = CHARACTER_DATA.characters.filter (heroFilter);
  return filteredCharacters;
};

export {
  filterCharacters,
}
