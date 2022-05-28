import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Text
            fontSize="25px"
            color={useColorModeValue("gray.800", "white")}
            fontFamily="Playfair Display"
            fontWeight="bold"
            ml={3}
          >
            Logo
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
