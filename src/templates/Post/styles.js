import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 4rem 0;
  align-items: center;

  @media (max-width: 960px) {
    padding: 2rem 0;
  }
`

export const Heading = styled.div`
  h3 {
    margin-bottom: 0.5rem;
    font-size: 22pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 20pt;
    }
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 16pt;
    color: #b0b0b0;

    @media (max-width: 680px) {
      font-size: 14pt;
    }
  }
`

export const Content = styled.div`
  font-size: 14pt;
  line-height: 1.6;
  color: #24292e;

  @media (max-width: 680) {
    font-size: 12pt;
    line-height: 1.5;
  }

  h1,
  h2 {
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 16px;
    margin-top: 24px;
  }

  blockquote {
    border-left: 0.25rem solid #dfe2e5;
    color: #6a737d;
    padding: 0 1rem;
  }

  ol,
  ul {
    padding: 0 1rem;
  }

  code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2rem 0.4rem;

    ::before,
    ::after {
      display: none;
    }
  }

  pre > code {
    background: transparent;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    white-space: pre;
    word-break: normal;
  }
`
