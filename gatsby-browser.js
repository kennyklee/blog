import * as React from "react"
import { GlobalStyles } from "./src/styles/GlobalStyles" //styled-components

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/styles/normalize.css"
// custom CSS styles
// import "./src/styles/style.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

export const wrapPageElement = ({ element }) => {
  <>
    <GlobalStyles />
    {element}
  </>
};
