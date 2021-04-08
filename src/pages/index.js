import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
  <Layout location={location} title={siteTitle}>
    <SEO title="All posts" />
    <Bio />
    <b>April 2021</b>
    <p>I am currently learning how to create this site using <a href="https://gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> and <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>.</p>
    <p>I'm using <a href="https://gitpod.io" target="_blank" rel="noreferrer">Gitpod.io</a> as a cloud IDE, and <a href="https://github.com/kennyklee/blog/projects/1" target="_blank" rel="noreferrer">Github</a> to serve static pages. Not having a local development environment on a computer and using <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> to code in the cloud is amazing.</p>
  </Layout>
  )
}

export default HomePage

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
