import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const md = (data) => {
  const {frontmatter, html} = data.data.allMarkdownRemark.edges[0].node

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {/* <div><i>Last update: <b>{frontmatter.date}</b></i></div> */}
    </div>
  )
}

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
  <Layout location={location} title={siteTitle}>
    <Seo title="All posts" />
    <Bio />
      {md({ data })}
  </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/home/"}}
    ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD YYYY")
            }
            html
          }
        }
      }
  }
`
