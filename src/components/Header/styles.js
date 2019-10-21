import styled from "styled-components"

export const SideLinks = styled.div`
  a {
    color: #6d6d6d;
    text-decoration: none;
    margin-right: 1rem;
    &:last-child {
      margin-right: unset;
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
