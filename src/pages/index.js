import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="card">
        <h2 className="card-title">Filters</h2>
        <form className="filter-form">
          <div className="controls-wrapper">
            <div className="control-group">
              <h5>Elements</h5>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-element-1" data-ctg="element" data-val="geo" checked></input>
                <span className="label-body">Geo</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-element-2" data-ctg="element" data-val="pyro" checked></input>
                <span className="label-body">Pyro</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-element-3" data-ctg="element" data-val="hydro" checked></input>
                <span className="label-body">Hydro</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-element-4" data-ctg="element" data-val="anemo"></input>
                <span className="label-body">Anemo</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-element-5" data-ctg="element" data-val="electro"></input>
                <span className="label-body">Electro</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-element-6" data-ctg="element" data-val="cryo"></input>
                <span className="label-body">Cryo</span>
              </label>
            </div>
            <div className="control-group">
              <h5>Reactions</h5>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-reaction-1" data-ctg="reaction" data-val="crystallize"></input>
                <span className="label-body">Crystallize</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-reaction-2" data-ctg="reaction" data-val="electro-charged"></input>
                <span className="label-body">Electro-Charged</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-reaction-3" data-ctg="reaction" data-val="frozen"></input>
                <span className="label-body">Frozen</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-reaction-4" data-ctg="reaction" data-val="melt"></input>
                <span className="label-body">Melt</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-reaction-5" data-ctg="reaction" data-val="overloaded"></input>
                <span className="label-body">Overloaded</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-reaction-6" data-ctg="reaction" data-val="superconduct"></input>
                <span className="label-body">Superconduct</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-reaction-7" data-ctg="reaction" data-val="swirl"></input>
                <span className="label-body">Swirl</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-reaction-8" data-ctg="reaction" data-val="vaporize"></input>
                <span className="label-body">Vaporize</span>
              </label>
            </div>
            <div className="control-group">
              <h5>Weapons</h5>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-weapon-1" data-ctg="weapon" data-val="sword" checked></input>
                <span className="label-body">Sword</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-weapon-2" data-ctg="weapon" data-val="bow" checked></input>
                <span className="label-body">Bow</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-weapon-3" data-ctg="weapon" data-val="catalyst"></input>
                <span className="label-body">Catalyst</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-weapon-4" data-ctg="weapon" data-val="claymore" checked></input>
                <span className="label-body">Claymore</span>
              </label>
              <label className="filter-checkbox">
                <input type="checkbox" id="exp-weapon-5" data-ctg="weapon" data-val="polearm"></input>
                <span className="label-body">Polearm</span>
              </label>
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
