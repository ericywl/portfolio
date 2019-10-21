import React from "react"

import { Container } from "Common/Container"
import { Wrapper, Thumbnail, Details } from "./styles"
import { about } from "Data"
import bash from "Static/images/bash.svg"

const About = () => (
  <Wrapper as={Container} id="about">
    <Thumbnail>
      <img src={bash} alt="About" />
    </Thumbnail>
    <Details>
      <h1>About Myself</h1>
      {about.map(({ id, text }) => (
        <p id={id}>{text}</p>
      ))}
    </Details>
  </Wrapper>
)

export default About
