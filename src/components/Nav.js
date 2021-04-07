import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components" 

const NavStyles = styled.nav`
  margin-bottom: 2.4rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <a href="https://notes.kennylee.com" target="_blank">Notes</a>
        </li>
      </ul>
  </NavStyles>
  )
}


export default Nav