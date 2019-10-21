import React from "react"
import bash from "../../images/bash.svg"

import { Wrapper, Details, Thumbnail } from "./styles"
import { name } from "Data"

const Intro = () => (
  <Wrapper>
    <Details>
      <h1>Hello World!</h1>
      <h4>I'm {name} and I'm an aspiring Software Engineer.</h4>
    </Details>
    <Thumbnail>
      <img src={bash} alt="Intro" />
    </Thumbnail>
  </Wrapper>
)

export default Intro
