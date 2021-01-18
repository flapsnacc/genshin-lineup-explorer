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
} from '../data/enums';
import { filterCharacters, buildLineups } from '../util/character-utils';

const coinflip = () => {
  return Math.random() > 0.5;
}

class BlogIndex extends React.Component {

  constructor(props) {
    super(props)

    const initElements = ELEMENTS.map((el, idx) => {
      return {
        id: `${el}-${idx}`,
        key: el,
        value: coinflip(),
      }
    });

    const initReactions = REACTIONS.map((reaction, idx) => {
      return {
        id: `${reaction}-${idx}`,
        key: reaction,
        value: coinflip(),
      }
    });

    const initWeapons = WEAPONS.map((wep, idx) => {
      return {
        id: `${wep}-${idx}`,
        key: wep,
        value: coinflip(),
      }
    });

    this.state = {
      elements: initElements,
      reactions: initReactions,
      weapons: initWeapons,
      lineups: [],
    }

    this.getFilterOptions = this.getFilterOptions.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    console.log('initial state', this.state);
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

  handleCheckboxClick(checkboxId, newValue) {
    console.log('handleCheckboxClick', checkboxId, newValue);
  }

  handleSearch() {
    const filterOptions = this.getFilterOptions();
    console.log('handleSearch() --- filter opts', filterOptions);

    const chars = filterCharacters(filterOptions)
    console.log('handleSearch() --- characters', chars);

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
    console.log('handleSearch() --- formattedLineups', formattedLineups);

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
                <Checkboxes options={this.state.elements} checkboxHandler={this.handleCheckboxClick}/>
              </div>
              <div className="control-group">
                <h5>Reactions</h5>
                <Checkboxes options={this.state.reactions} checkboxHandler={this.handleCheckboxClick}/>
              </div>
              <div className="control-group">
                <h5>Weapons</h5>
                <Checkboxes options={this.state.weapons} checkboxHandler={this.handleCheckboxClick}/>
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
              <p>{lineup.characters}</p>
              <pre>{JSON.stringify(lineup.features, null, 2)}</pre>
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
