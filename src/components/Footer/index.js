import React from "react"

import { Wrapper, Details, Flex, Socials } from "./styles"
import { Container } from "Common/Container"
import { socials, title } from "Data"

const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>{title}</h2>
        <span>
          © All rights reserved, {new Date().getFullYear()} | Made with GatsbyJS
        </span>
      </Details>
      <Socials>
        {socials.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer">
            <img src={icon} width="24" alt={name} />
          </a>
        ))}
      </Socials>
    </Flex>
  </Wrapper>
)

export default Footer
