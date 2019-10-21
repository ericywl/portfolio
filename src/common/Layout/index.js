import React from "react"
import PropTypes from "prop-types"

import { Global } from "./styles"
import Footer from "Components/Footer"
import "./fonts.css"

const Layout = ({ children }) => {
  return (
    <>
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
