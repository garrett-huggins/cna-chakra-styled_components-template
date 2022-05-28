import NextLink from "next/link";
import {
  Link,
  useColorModeValue,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const LinkItem = ({ href, path, children, noPadding }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref>
      <Link
        p={noPadding ? 0 : 2}
        borderRadius="base"
        bg={active ? "blackAlpha.600" : undefined}
        color={active ? "white" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const HomePaths = ({ path }) => {
  // check for page sections
  if (path == "/" || path == "/#section1" || path == "/#section2") {
    return (
      <>
        <Menu>
          <MenuButton
            as={Button}
            bg="blackAlpha.600"
            color="white"
            rightIcon={<ChevronDownIcon />}
            _hover={{ textDecoration: "underline" }}
          >
            Home
          </MenuButton>
          <MenuList margin={0}>
            <LinkItem href="#section1" noPadding>
              <MenuItem>Section 1</MenuItem>
            </LinkItem>
            <LinkItem href="#section2" noPadding>
              <MenuItem>Section 2</MenuItem>
            </LinkItem>
          </MenuList>
        </Menu>
      </>
    );
  } else {
    return (
      <>
        <LinkItem href="/" path={path}>
          Home
        </LinkItem>
      </>
    );
  }
};

// check home sections
export const MenuHomePaths = ({ path }) => {
  if (path == "/" || path == "/#section1" || path == "/#section2") {
    return (
      <>
        <NextLink href="#section1" passHref>
          <MenuItem as={Link}>Section 1</MenuItem>
        </NextLink>
        <NextLink href="#section2" passHref>
          <MenuItem as={Link}>Section 2</MenuItem>
        </NextLink>
      </>
    );
  } else {
    return (
      <>
        <NextLink href="/" passHref>
          <MenuItem as={Link}>Home</MenuItem>
        </NextLink>
      </>
    );
  }
};
