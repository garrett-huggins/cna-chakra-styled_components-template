import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { Box, Container } from "@chakra-ui/react";

const Layout = ({ children, title }) => {
  const path = useRouter();
  return (
    <Box as="main" minHeight="100vh" position="relative" pb={6}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>

        {/* Favicons  */}
        {/* <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" /> */}
      </Head>
      {/* webpage */}
      <Navbar path={path.asPath} />
      <Container
        maxW="container.xl"
        pt={{ base: "100px", xxs: 14 }}
        pb="100px"
        justifyContent="center"
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
