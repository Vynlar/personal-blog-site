import { theme as defaultTheme } from "@chakra-ui/core"

console.log(defaultTheme)

const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    heading: `"Inter var", "Inter", sans-serif`,
    body: `"Manuale", serif`,
  },
  fontSizes: {
    ...defaultTheme.fontSizes,
  },
  breakpoints: ["35em", "50em", "62em", "80em"],
}

export default theme
