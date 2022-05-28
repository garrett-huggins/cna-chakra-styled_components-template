/* import fonts */
import "@fontsource/poppins";
import "@fontsource/playfair-display";
import theme from "../theme/theme";
/* chakra setup */
import { ChakraProvider } from "@chakra-ui/react";
/* prevent button outline when being clicked */
import "focus-visible";

function Website({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Website;
