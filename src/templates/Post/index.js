import React from "react"
import { graphql } from "gatsby"

import Layout from "Common/Layout"
import SEO from "Common/SEO"
import { Container } from "Common/Container"
import { Wrapper, Content, Heading } from "./styles"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout noAnchor={true}>
      <SEO title={post.frontmatter.title} />
      <Wrapper as={Container} id={post.id}>
        <Heading>
          <h3>{post.frontmatter.title}</h3>
          <h4>{post.frontmatter.date}</h4>
        </Heading>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
