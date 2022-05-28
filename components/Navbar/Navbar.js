import NextLink from "next/link";
import Logo from "./Logo";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { LinkItem, HomePaths, MenuHomePaths } from "./NavbarStyles";

const Navbar = (props) => {
  const { path } = props;
  /* toggle color mode */
  const { toggleColorMode } = useColorMode();
  return (
    /* Navbar */
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#b8c5d1", "#2a3947")}
      zIndex={1}
      {...props}
      sx={{
        "@media print": {
          display: "none",
        },
      }}
    >
      {/* Nav Container */}
      <Container
        display="flex"
        p={2}
        maxW="container.lg.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* Page Links */}
          <HomePaths path={path} />
          <LinkItem href="/page2" path={path}>
            Page 2
          </LinkItem>
          <LinkItem href="/page3" path={path}>
            Page 3
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          {/* Toggle Color Button */}

          <IconButton
            onClick={toggleColorMode}
            varient="outline"
            arial-aria-label="Dark Mode"
            icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
          />

          {/* Hamburger menu */}
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                varient="outline"
                aria-label="Options"
              />
              {/* Hamburger Page Links */}
              <MenuList>
                <MenuHomePaths path={path} />
                <NextLink href="/page2" passHref>
                  <MenuItem as={Link}>Page 1</MenuItem>
                </NextLink>
                <NextLink href="/page3" passHref>
                  <MenuItem as={Link}>Page 2</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
