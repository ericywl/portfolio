import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Wrapper, Navbar, SideLinks } from "./styles"
import { title } from "Data"

const Header = () => (
  <Wrapper>
    <Navbar>
      <h2>
        <Link to="/">{title}</Link>
      </h2>
      <SideLinks>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
      </SideLinks>
    </Navbar>
  </Wrapper>
)

export default Header