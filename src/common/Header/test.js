import React from "react"
import renderer from "react-test-renderer"
import AnchorLink from "react-anchor-link-smooth-scroll"

import Header from "./index"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header noAnchor={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it("renders AnchorLinks when in normal pages", () => {
    const component = renderer.create(<Header noAnchor={false} />).root
    expect(component.findAllByType(AnchorLink).length).toBe(2)
  })
  
  it("does not render AnchorLinks when in NotFound or Blog page", () => {
    const component = renderer.create(<Header noAnchor={true} />).root
    expect(component.findAllByType(AnchorLink).length).toBe(0)
  })
})
