import { theme } from "@chakra-ui/core"

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, serif",
    mono: "Menlo, monospace"
  },
}

export default customTheme