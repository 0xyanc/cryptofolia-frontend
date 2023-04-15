import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex h="5vh" p="2rem" justifyContent="center" alignItems="center" bgGradient="linear(to-r, #1C3946, #467069, #1C3946)">
      <Text color="white">&copy; CryptoFolia {new Date().getFullYear()}</Text>
    </Flex>
  );
};

export default Footer;
