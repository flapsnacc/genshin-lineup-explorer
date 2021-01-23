import React from 'react';
import {Link, graphql} from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Checkboxes from '../components/checkboxes';
import LineupResults from '../components/lineup-results';

import {
  ELEMENTS,
  REACTIONS,
  WEAPONS,
  LINEUP_OPTIONS,
  initializeCheckboxList,
  initializeCharacterList,
} from '../data/enums';
import {filterCharacters, buildLineups} from '../util/character-utils';

class BlogIndex extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      characters: initializeCharacterList (),
      elements: initializeCheckboxList (ELEMENTS, false),
      reactions: initializeCheckboxList (REACTIONS, false),
      weapons: initializeCheckboxList (WEAPONS, true),
      lineupOptions: initializeCheckboxList (LINEUP_OPTIONS),
      lineups: [],
      outputMessage: 'GLHF',
    };

    this.getFilterOptions = this.getFilterOptions.bind (this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind (this);
    this.handleFindRoster = this.handleFindRoster.bind (this);
    this.handleBuildLineups = this.handleBuildLineups.bind (this);

    console.debug ('Initial state', this.state);
  }

  getCheckedOptions (checkboxList) {
    return checkboxList
      .filter (el => {
        return !!el.value;
      })
      .map (el => {
        return el.key;
      });
  }

  getCheckedOptionIds (checkboxList) {
    return checkboxList
      .filter (el => {
        return !!el.value;
      })
      .map (el => {
        return el.id;
      });
  }

  getFilterOptions () {
    return {
      elements: this.getCheckedOptions (this.state.elements),
      reactions: this.getCheckedOptions (this.state.reactions),
      weapons: this.getCheckedOptions (this.state.weapons),
    };
  }

  handleCheckboxClick (property, checkboxId, newValue) {
    const oldList = this.state[property];
    const newList = oldList.map (item => {
      if (item.id === checkboxId) {
        return {
          id: item.id,
          key: item.key,
          label: item.label,
          value: newValue,
        };
      }
      return item;
    });

    const stateObj = {};
    stateObj[property] = newList;
    this.setState (stateObj);
  }

  handleFindRoster () {
    const filterOptions = this.getFilterOptions ();
    const chars = filterCharacters (filterOptions);
    const charIds = chars.map (char => {
      return char.id;
    });

    const oldChars = this.state.characters;
    const newChars = oldChars.map (char => {
      const checkboxValue = charIds.includes (char.id);
      return {
        id: char.id,
        key: char.key,
        label: char.label,
        value: checkboxValue,
      };
    });

    this.setState ({
      characters: newChars,
      outputMessage: `Found ${chars.length} characters`,
    });
  }

  handleBuildLineups () {
    const characterIdsOnscreen = this.getCheckedOptionIds (
      this.state.characters
    );
    const lineups = buildLineups (
      characterIdsOnscreen,
      4,
      this.getCheckedOptions (this.state.lineupOptions)
    );
    const formattedLineups = lineups.map (lineup => {
      const charNames = lineup.characters.map (char => {
        return char.name;
      });
      return {
        id: lineup.id,
        characters: charNames.join (', '),
        features: lineup.features,
      };
    });

    this.setState ({
      lineups: formattedLineups,
      outputMessage: `Found ${lineups.length} lineups, built with ${characterIdsOnscreen.length} characters`,
    });
  }

  render () {
    return (
      <Layout>
        <div className="card">
          <h2 className="card-title">Filters</h2>
          <form className="filter-form">
            <div className="controls-wrapper">
              <div className="control-group">
                <h5>Elements</h5>
                <Checkboxes
                  options={this.state.elements}
                  category="elements"
                  checkboxHandler={this.handleCheckboxClick}
                />
              </div>
              <div className="control-group wip">
                <h5>Reactions</h5>
                <Checkboxes
                  options={this.state.reactions}
                  category="reactions"
                  checkboxHandler={this.handleCheckboxClick}
                />
              </div>
              <div className="control-group">
                <h5>Weapons</h5>
                <Checkboxes
                  options={this.state.weapons}
                  category="weapons"
                  checkboxHandler={this.handleCheckboxClick}
                />
              </div>
              <div className="control-group">
                <h5>Options</h5>
                <Checkboxes
                  options={this.state.lineupOptions}
                  category="lineupOptions"
                  checkboxHandler={this.handleCheckboxClick}
                />
              </div>
              <div className="button-group">
                <input
                  className="button button-primary button-search"
                  type="button"
                  value="Find Roster"
                  onClick={this.handleFindRoster}
                />
              </div>
              <div className="control-group full">
                <h5>Characters</h5>
                <Checkboxes
                  options={this.state.characters}
                  category="characters"
                  checkboxHandler={this.handleCheckboxClick}
                />
              </div>
              <div className="button-group">
                <input
                  className="button button-primary button-filter"
                  type="button"
                  value="Build Lineups"
                  onClick={this.handleBuildLineups}
                />
              </div>
            </div>

            <div className="output-group">
              <pre className="text-output" readOnly>
                {this.state.outputMessage}
              </pre>
            </div>
          </form>
        </div>
        <LineupResults lineups={this.state.lineups}></LineupResults>
      </Layout>
    );
  }
}

export default BlogIndex;
