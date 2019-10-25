import React from "react"
import renderer from "react-test-renderer"

import Layout from "./index"
import Header from "Common/Header"

const Dummy = () => <div>Dummy child</div>

describe("Layout", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <Layout children={<Dummy />} notFound={false} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("passes notFound to Header", () => {
    const falseComponent = renderer.create(
      <Layout children={<Dummy />} notFound={false} />
    )
    expect(falseComponent.root.findByType(Header).props.notFound).toBe(false)

    const trueComponent = renderer.create(
      <Layout children={<Dummy />} notFound={true} />
    )
    expect(trueComponent.root.findByType(Header).props.notFound).toBe(true)
  })
})
