import React from 'react';

import CharacterIcon from './character-icon';
import FeatureIcon from './feature-icon';

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
        <div className="char-infos">
          <CharacterIcon iconClass={lineup.characters[0].toLowerCase()}/>
          <CharacterIcon iconClass={lineup.characters[1].toLowerCase()}/>
          <CharacterIcon iconClass={lineup.characters[2].toLowerCase()}/>
          <CharacterIcon iconClass={lineup.characters[3].toLowerCase()}/>
        </div>
      </div>
      <div className="results-column elements-column">
        <div className="elements-group">
          <FeatureIcon iconClass={"hydro " + featureMap.hydro} />
          <FeatureIcon iconClass={"cryo " + featureMap.cryo} />
          <FeatureIcon iconClass={"pyro " + featureMap.pyro} />
          <FeatureIcon iconClass={"electro " + featureMap.electro} />
          <FeatureIcon iconClass={"geo " + featureMap.geo} />
          <FeatureIcon iconClass={"anemo " + featureMap.anemo} />
        </div>
        <div className="details-group">
          <FeatureIcon iconClass={"healer " + featureMap.healer} />
          <FeatureIcon iconClass={"ranged " + featureMap.ranged} />
        </div>
      </div>
      <div className="results-column weapons-column">
        <div className="weapons-group">
          <FeatureIcon iconClass={"sword " + featureMap.sword} />
          <FeatureIcon iconClass={"bow " + featureMap.bow} />
          <FeatureIcon iconClass={"catalyst " + featureMap.catalyst} />
          <FeatureIcon iconClass={"claymore " + featureMap.claymore} />
          <FeatureIcon iconClass={"polearm " + featureMap.polearm} />
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
