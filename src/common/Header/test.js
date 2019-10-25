import React from "react"
import renderer from "react-test-renderer"

import Header from "./index"
import { SideLinks } from "./styles"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Header notFound={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  
  it("renders SideLink when in normal pages", () => {
    const component = renderer.create(<Header notFound={false} />).root
    expect(component.findAllByType(SideLinks).length).toBe(1)
  })
  
  it("does not render SideLink when in NotFound page", () => {
    const component = renderer.create(<Header notFound={true} />).root
    expect(component.findAllByType(SideLinks).length).toBe(0)
  })
})
