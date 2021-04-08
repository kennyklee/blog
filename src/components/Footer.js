import * as React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}. Built with
      {` `}
      <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>
      {` `}
      using
      {` `}
      <a href="https://gitpod.io" target="_blank" rel="noreferrer">Gitpod.io</a> &
      {` `}
      <a href="https://github.com/kennyklee/blog/projects/1" target="_blank" rel="noreferrer">Github</a>.
    </footer>
  )
}

export default Footer