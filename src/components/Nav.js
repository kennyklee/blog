import * as React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="https://notes.kennylee.com" target="_blank">Notes</Link>
        </li>
      </ul>
  </nav>
  )
}


export default Nav