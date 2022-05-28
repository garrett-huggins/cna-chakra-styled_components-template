import {
  Container,
  Box,
  useColorModeValue,
  Grid,
  Text,
  GridItem,
} from "@chakra-ui/react";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Container position="absolute" maxW="100%" bottom="0" p={2}>
      <Box
        padding={{ base: "0 10px", sm: "0 20px" }}
        borderRadius="lg"
        bg={useColorModeValue("#aec2d1", "#2a3947")}
        fontSize={{ base: "10px", xs: "15px", sm: "1rem", md: "1.5rem" }}
      >
        <Grid templateColumns="repeat(3, 1fr)" padding={0} margin={0}>
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="left"
          >
            <Text display="flex" alignItems="center" lineHeight={1}>
              <FaRegCopyright />
              Copyright
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.5rem"
          >
            {/* Empty Space */}
          </GridItem>
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="right"
          >
            <Text>Logo</Text>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
