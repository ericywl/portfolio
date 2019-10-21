import React from "react"

import Layout from "Common/Layout"
import SEO from "Common/SEO"
import Intro from "Components/Intro"
import About from "Components/About"
import Projects from "Components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="ericywl" />
    <Intro />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
