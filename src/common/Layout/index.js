import React from "react"
import PropTypes from "prop-types"

import { Global } from "./styles"
import Header from "Common/Header"
import Footer from "Common/Footer"
import "./fonts.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Global />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
