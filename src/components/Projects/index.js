import React from "react"

import { Container } from "Common/Container"
import { projects, github as githubLink } from "Data"
import githubBlack from "Static/icons/github-black.svg"
import slash from "Static/icons/slash.png"
import { Wrapper, Grid, Item, Content, Card, Stats } from "./styles"

const createItem = node => {
  const stats = (
    <Stats>
      <div>
        {node.link !== "" ? (
          <img width="16px" src={githubBlack} alt={node.name} />
        ) : (
          <img width="16px" height="14px" src={slash} alt="Not available" />
        )}
        <span>{node.time}</span>
      </div>
    </Stats>
  )

  if (node.link !== "") {
    return (
      <Item
        key={node.id}
        as="a"
        href={node.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Content>
            <h4>{node.name}</h4>
            <p>{node.description}</p>
          </Content>
          {stats}
        </Card>
      </Item>
    )
  }

  return (
    <Item key={node.id}>
      <Card>
        <Content>
          <h4>{node.name}</h4>
          <p>{node.description}</p>
        </Content>
        {stats}
      </Card>
    </Item>
  )
}

const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h2>Projects</h2>
    <Grid>
      {projects.map(node => {
        return createItem(node)
      })}
      <Item
        key="more"
        as="a"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card>
          <Content>
            <h4>Many More...</h4>
            <div style={{ width: "60px", margin: "auto" }}>
              <img src={githubBlack} alt="Many more at GitHub" />
            </div>
          </Content>
        </Card>
      </Item>
    </Grid>
  </Wrapper>
)

export default Projects
