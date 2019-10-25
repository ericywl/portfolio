import React from "react"
import PropTypes from "prop-types"

import { Global } from "./styles"
import Header from "Common/Header"
import Footer from "Common/Footer"
import "./fonts.css"

const Layout = ({ children, notFound }) => (
  <>
    <Header notFound={notFound} />
    <Global />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  notFound: PropTypes.bool,
}

export default Layout
