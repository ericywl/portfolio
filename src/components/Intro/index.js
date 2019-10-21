import React from "react"

import Header from "../Header"
import { Container } from "Common/Container"
import { OuterWrapper, InnerWrapper, Details, Thumbnail } from "./styles"
import { welcome, name, description } from "Data"
import hero from "Static/images/hero.svg"

const Intro = () => (
  <OuterWrapper>
    <Header />
    <InnerWrapper as={Container}>
      <Details>
        <h1>{welcome}!</h1>
        <h4>
          I'm {name} and I'm {description}.
        </h4>
      </Details>
      <Thumbnail>
        <img src={hero} alt={welcome} />
      </Thumbnail>
    </InnerWrapper>
  </OuterWrapper>
)

export default Intro
