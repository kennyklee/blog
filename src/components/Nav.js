import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components" 

const NavStyles = styled.nav`
  font-family: var(--font-heading);
  font-weight: var(--fontWeight-bold);
  color: var(--color-heading);
  margin-bottom: 1rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    align-items: center;
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
  a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    left: 50%;
    position: absolute;
    background: var(--color-primary);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after { 
    width: 100%; 
    left: 0; 
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
          <a href="https://notes.kennylee.com" target="_blank" rel="noreferrer">Notes</a>
        </li>
      </ul>
  </NavStyles>
  )
}


export default Nav