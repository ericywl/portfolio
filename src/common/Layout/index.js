import React from "react"
import PropTypes from "prop-types"

import { Wrapper, Global } from "./styles"
import Header from "Common/Header"
import Footer from "Common/Footer"
import "./fonts.css"

const Layout = ({ children, noAnchor }) => (
  <Wrapper>
    <Header noAnchor={noAnchor} />
    <Global />
    {children}
    <Footer />
  </Wrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noAnchor: PropTypes.bool,
}

export default Layout
