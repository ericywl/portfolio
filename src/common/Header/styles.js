import styled from "styled-components"

export const SideLinks = styled.div`
  a {
    color: #6d6d6d;
    font-size: 14pt;
    text-decoration: none;
    margin-right: 1rem;
    padding-bottom: 5px;

    &:last-child {
      margin-right: unset;
    }

    &:hover {
      border-bottom: 3px solid black;
      transition: 0.2s;
    }
  }

  @media (max-width: 960px) {
    display: none;
  }
`

export const Wrapper = styled.div`
  background: transparent;
  width: 100%;
`

export const Navbar = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
`
