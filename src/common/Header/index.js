import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Wrapper, Navbar, SideLinks } from "./styles"
import { Container } from "Common/Container"
import icon from "Static/icons/robot.png"

const Header = ({ notFound }) => (
  <Wrapper>
    <Navbar as={Container}>
      <Link to="/">
        <img src={icon} width="70px" alt="Icon" />
      </Link>
      {!notFound ? (
        <SideLinks>
          <AnchorLink href="#about">About</AnchorLink>
          <AnchorLink href="#projects">Projects</AnchorLink>
          <a
            href="/ericywl_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </SideLinks>
      ) : (
        ""
      )}
    </Navbar>
  </Wrapper>
)

Header.propTypes = {
  notFound: PropTypes.bool,
}

export default Header
