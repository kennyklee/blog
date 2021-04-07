import * as React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}. Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {` `}
      using
      {` `}
      <a href="https://gitpod.io" target="_blank">Gitpod.io</a> and
      {` `}
      <a href="https://github.com/kennyklee/blog/projects/1" target="_blank">Github.</a>
    </footer>
  )
}

export default Footer