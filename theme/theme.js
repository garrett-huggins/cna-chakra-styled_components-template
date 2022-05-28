import { extendTheme } from "@chakra-ui/react";

const config = {
  /* Start in Dark, prioritize system color */
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const fonts = {
  /* use imported fonts */
  body: "Poppins, sans-serif",
  heading: "Playfair Display, serif",
  mono: "Menlo, monospace",
};

const breakpoints = {
  xxs: "371",
  xs: "500px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const theme = extendTheme({
  config,
  fonts,
  breakpoints,
});

export default theme;
