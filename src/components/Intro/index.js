import React from "react"

import { Container } from "Common/Container"
import {
  Wrapper,
  Details,
  Thumbnail,
  Socials,
} from "./styles"
import { welcome, name, intro, socials } from "Data"
import hero from "Static/images/hero.svg"

const Intro = () => (
    <Wrapper as={Container}>
      <Details>
        <h1>{welcome}!</h1>
        <h4>
          I'm {name} and I'm {intro}. <span>|</span>
        </h4>
        <Socials>
          {socials.map(({ id, name, link, icon }) => (
            <a key={id} href={link} target="_blank" rel="noopener noreferrer">
              <img src={icon} width="40" alt={name} />
            </a>
          ))}
        </Socials>
      </Details>
      <Thumbnail>
        <img src={hero} alt={welcome} />
      </Thumbnail>
    </Wrapper>
)

export default Intro
