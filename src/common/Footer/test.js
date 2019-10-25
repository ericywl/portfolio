import React from "react"
import renderer from "react-test-renderer"

import Footer from "./index"
import { Socials } from "./styles"
import { socials as sLinks } from "Data"

describe("Footer", () => {
  let component
  beforeAll(() => {
    component = renderer.create(<Footer />)
  })

  it("renders correctly", () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders Socials", () => {
    const instance = component.root
    expect(instance.findAllByType(Socials).length).toBe(1)
  })

  it("renders the correct amount of links in Socials", () => {
    const instance = component.root
    const childLinks = instance.findByType(Socials).props.children
    expect(childLinks.length).toBe(sLinks.length)
  })
})
