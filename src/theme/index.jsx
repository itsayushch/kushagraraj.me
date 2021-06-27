import { extendTheme } from "@chakra-ui/react"


const styles = {
  global: (theme) => ({
    "html, body": {
      fontSize: "20px",
    },
    a: {
      color: theme.colorMode === "light" ? "#5B34DA" : "#9D86E9",
      _hover: {
        textDecoration: "none",
        
      },
    },
  })
};

const fonts = {
  heading: "Rubik, -apple-system",
  body: "Rubik, -apple-system",
}

const theme = extendTheme({
  styles,
  fonts,
  colors: {
    gray: {
      800: '#000000'
    },
    primary: "#5B34DA",
    secondary: "#9D86E9"
  },
})

export default theme