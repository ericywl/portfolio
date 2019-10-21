import React from "react"
import { Wrapper, Details, Flex, Socials } from "./styles"
import { Container } from "Common/Container"

const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Eric Yap</h2>
        <span>© All rights reserved, {new Date().getFullYear()} | Made with GatsbyJS</span>
      </Details>
      <Socials></Socials>
    </Flex>
  </Wrapper>
)

export default Footer
