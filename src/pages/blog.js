import React from "react"
import { graphql } from "gatsby"

import Layout from "Common/Layout"
import SEO from "Common/SEO"
import Blog from "Components/Blog"

const BlogPage = ({ data }) => (
  <Layout noAnchor={true}>
    <SEO title="ericywl" />
    <Blog data={data} />
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
