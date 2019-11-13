import React from "react"

import { Container } from "Common/Container"
import { Wrapper, Heading, Post } from "./styles"
import { Link } from "gatsby"

const Blog = ({ data }) => (
  <Wrapper as={Container} id="blog">
    <Heading>
      <h2>Welcome to ericywl's Blog!</h2>
      <p>{data.allMarkdownRemark.totalCount} Posts</p>
    </Heading>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Post key={node.id}>
        <Link to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <h4>{node.frontmatter.date}</h4>
          <p>{node.excerpt}</p>
        </Link>
      </Post>
    ))}
  </Wrapper>
)

export default Blog
