import React from "react"
import renderer from "react-test-renderer"

import Layout from "./index"
import Header from "Common/Header"

const Dummy = () => <div>Dummy child</div>

describe("Layout", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <Layout children={<Dummy />} noAnchor={false} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("passes noAnchor to Header", () => {
    const falseComponent = renderer.create(
      <Layout children={<Dummy />} noAnchor={false} />
    )
    expect(falseComponent.root.findByType(Header).props.noAnchor).toBe(false)

    const trueComponent = renderer.create(
      <Layout children={<Dummy />} noAnchor={true} />
    )
    expect(trueComponent.root.findByType(Header).props.noAnchor).toBe(true)
  })
})
