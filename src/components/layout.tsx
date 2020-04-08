import React from "react"
import { Box, ThemeProvider, CSSReset } from "@chakra-ui/core"

import "../typography/fonts/inter.css"
import "./layout.css"

import theme from "../theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CSSReset />
        <div>
          <main>{children}</main>
        </div>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
