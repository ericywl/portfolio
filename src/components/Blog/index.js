import React from "react"

import { Container } from "Common/Container"
import { Wrapper, Heading, Post } from "./styles"
import { Link } from "gatsby"

const Blog = ({ data }) => (
  <Wrapper as={Container} id="blog">
    <Heading>
      <h2>Welcome to ericywl's Blog!</h2>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    </Heading>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Post key={node.id}>
        <Link to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <h5>{node.frontmatter.date}</h5>
          <p>{node.excerpt}</p>
        </Link>
      </Post>
    ))}
  </Wrapper>
)

export default Blog
