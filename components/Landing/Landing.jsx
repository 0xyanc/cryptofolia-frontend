import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Landing = () => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" w="100%">
      <Heading color="white">CryptoFolia</Heading>
      <Text color="white" as="cite" mt="2rem" mb="2rem">
        The greatest threat to our planet is the belief that someone else will save it.
      </Text>
      <Link href="/setup" isExternal>
        <Button colorScheme="green">Get Started</Button>
      </Link>
<<<<<<< HEAD
      <br></br>
      <Link href="/imageslicermosaik" isExternal>
        <Button colorScheme="blue">Image Slicer Mosaik</Button>
      </Link>
      <br></br>
      <Link href="/imageslicernewimage" isExternal>
        <Button colorScheme="blue">Image Slicer New Image</Button>
      </Link>
=======
>>>>>>> 8322cf7f4e3f15cf2d86eb113f91e920ec97ea3a
    </Flex>
  );
};

export default Landing;
