import React from "react"

import Layout from "Common/Layout"
import SEO from "Common/SEO"
import Intro from "Components/Intro"
import About from "Components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="ericywl" />
    <Intro />
    <About />
  </Layout>
)

export default IndexPage
