import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Container, Global } from "./styles"
import Header from "../Header"
import "./fonts.css"

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Global />
      {children}
      <footer>© All rights reserved, {new Date().getFullYear()}</footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
