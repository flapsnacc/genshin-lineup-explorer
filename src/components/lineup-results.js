import React from 'react';

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
          <div className="char-info">
            <div className={"char-portrait " + lineup.characters[0]}/>
          </div>
          <div className="char-info">
            <div className={"char-portrait " + lineup.characters[1]}/>
          </div>
          <div className="char-info">
            <div className={"char-portrait " + lineup.characters[2]}/>
          </div>
          <div className="char-info">
            <div className={"char-portrait " + lineup.characters[3]}/>
          </div>
        </div>
      </div>
      <div className="results-column elements-column">
        <div className="elements-group">
          <div className={"feature-icon icon-hydro " + featureMap.hydro}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-cryo " + featureMap.cryo}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-pyro " + featureMap.pyro}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-electro " + featureMap.electro}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-geo " + featureMap.geo}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-anemo " + featureMap.anemo}>
            <span className="inner-icon"></span>
          </div>
        </div>
        <div className="details-group">
          <div className={"feature-icon icon-healer " + featureMap.healer}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-ranged " + featureMap.ranged}>
            <span className="inner-icon"></span>
          </div>
        </div>
      </div>
      <div className="results-column weapons-column">
        <div className="weapons-group">
          <div className={"feature-icon icon-sword " + featureMap.sword}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-bow " + featureMap.bow}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-catalyst " + featureMap.catalyst}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-claymore " + featureMap.claymore}>
            <span className="inner-icon"></span>
          </div>
          <div className={"feature-icon icon-polearm " + featureMap.polearm}>
            <span className="inner-icon"></span>
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
