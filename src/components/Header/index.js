import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Wrapper, Navbar, SideLinks } from "./styles"
import { title } from "Data"
import { Container } from "../../common/Container"
import icon from "../../images/icon.png"

const Header = () => (
  <Wrapper>
    <Navbar as={Container}>
      <Link to="/"><img src={icon} width="70px" /></Link>
      <SideLinks>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
      </SideLinks>
    </Navbar>
  </Wrapper>
)

export default Header
