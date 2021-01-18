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
      filterOptions: {
        elements: [],
        reactions: [],
        weapons: [],
      },
    }

    console.log('initial state', this.state);
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
                <Checkboxes options={this.state.elements} />
              </div>
              <div className="control-group">
                <h5>Reactions</h5>
                <Checkboxes options={this.state.reactions} />
              </div>
              <div className="control-group">
                <h5>Weapons</h5>
                <Checkboxes options={this.state.weapons} />
              </div>
            </div>
            <div className="button-group">
              <input className="button button-primary button-filter" type="button" value="Filter Characters"></input>
            </div>
          </form>
        </div>
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
