import styled from "styled-components"

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

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
    
    @media (max-width: 960px) {
      font-size: 24pt;
    }
    
    @media (max-width: 680px) {
      font-size: 22pt;
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
    
    @media (max-width: 960px) {
      font-size: 18pt;
    }
    
    @media (max-width: 680px) {
      font-size: 16pt;
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  max-width: 45%;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`
