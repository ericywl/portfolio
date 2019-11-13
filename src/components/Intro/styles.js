import styled, { keyframes } from "styled-components"

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 2rem 0;
  }
`

const blinkCaret = keyframes`
  from, to { color: transparent }
  50% { color: #707070; }
`

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;
    
    @media (max-width: 960px) {
      font-size: 33pt;
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #707070;
    
    @media (max-width: 960px) {
      font-size: 29pt;
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }

    span {
      animation: ${blinkCaret} 0.75s step-end infinite;
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 1.5rem;

    img {
      margin: 0;
    }
  }
`
