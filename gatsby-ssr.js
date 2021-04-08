import * as React from "react"
import { GlobalStyles } from "./src/styles/GlobalStyles" //styled-components

export const wrapPageElement = ({ element }) => {
  <>
    <GlobalStyles />
    {element}
  </>
};