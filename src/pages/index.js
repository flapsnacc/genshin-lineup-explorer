import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkboxes from "../components/checkboxes"

import {
  ELEMENTS,
  REACTIONS,
  WEAPONS,
  initializeCheckboxList,
} from '../data/enums';
import { filterCharacters, buildLineups } from '../util/character-utils';

class BlogIndex extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      elements: initializeCheckboxList(ELEMENTS),
      reactions: initializeCheckboxList(REACTIONS),
      weapons: initializeCheckboxList(WEAPONS),
      lineups: [],
    }

    this.getFilterOptions = this.getFilterOptions.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    console.debug('Initial state', this.state);
  }

  getCheckedOptions(checkboxList) {
    return checkboxList.filter(el => {
      return !!el.value;
    }).map(el => {
      return el.key;
    });
  }

  getFilterOptions() {
    return {
      elements: this.getCheckedOptions(this.state.elements),
      reactions: [],
      weapons: this.getCheckedOptions(this.state.weapons),
    };
  }

  handleCheckboxClick(property, checkboxId, newValue) {
    const oldList = this.state[property];
    const newList = oldList.map(item => {
      if(item.id === checkboxId) {
        return {
          id: item.id,
          key: item.key,
          value: newValue,
        }
      }
      return item;
    });

    const stateObj = {};
    stateObj[property] = newList;
    this.setState(stateObj);
  }

  handleSearch() {
    const filterOptions = this.getFilterOptions();
    const chars = filterCharacters(filterOptions)
    const lineups = buildLineups (chars, 4);

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

    console.info(`[Genshin Lineup Explorer] Found ${lineups.length} lineups built with ${chars.length} characters`);

    this.setState({
      lineups: formattedLineups
    })
  }

  render() {
    return (
      <Layout>
        <div className="card">
          <h2 className="card-title">Filters</h2>
          <form className="filter-form">
            <div className="controls-wrapper">
              <div className="control-group">
                <h5>Elements</h5>
                <Checkboxes options={this.state.elements} category="elements" checkboxHandler={this.handleCheckboxClick}/>
              </div>
              <div className="control-group">
                <h5>Reactions</h5>
                <Checkboxes options={this.state.reactions} category="reactions" checkboxHandler={this.handleCheckboxClick}/>
              </div>
              <div className="control-group">
                <h5>Weapons</h5>
                <Checkboxes options={this.state.weapons} category="weapons" checkboxHandler={this.handleCheckboxClick}/>
              </div>
            </div>
            <div className="button-group">
              <input className="button button-primary button-filter" type="button" value="Find Lineups" onClick={this.handleSearch}></input>
            </div>
          </form>
        </div>
        {this.state.lineups.map(lineup => {
          return (
            <div className="card" key={lineup.id}>
              <div className="lineup-feature characters">
                {/* <span className="feature-label">CHARACTERS:</span> */}
                <span className="feature-detail">{lineup.characters}</span>
              </div>
              <div className="lineup-feature elements">
                <span className="feature-label">ELEMENTS:</span>
                <span className="feature-detail">{lineup.features.elements.join(', ')}</span>
              </div>
              <div className="lineup-feature weapons">
                <span className="feature-label">WEAPONS:</span>
                <span className="feature-detail">{lineup.features.weapons.join(', ')}</span>
              </div>
              <div className="lineup-feature healer">
                <span className="feature-label">HAS HEALER:</span>
                <span className="feature-detail">{`${lineup.features.hasHealer}`}</span>
              </div>
              <div className="lineup-feature ranged">
                <span className="feature-label">HAS RANGED WEAPONS:</span>
                <span className="feature-detail">{`${lineup.features.hasMissile}`}</span>
              </div>
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
