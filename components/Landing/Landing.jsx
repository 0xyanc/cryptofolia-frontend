import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Landing = () => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Heading>Crypto Pots</Heading>
      <Text mt="2rem" mb="2rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestiae deserunt nostrum consequatur quia, consequuntur
        impedit, cumque deleniti, assumenda totam in. Earum possimus laborum quibusdam aliquid, nostrum quos deleniti accusantium?
      </Text>
      <Link href="/setup" isExternal>
        <Button colorScheme="green">Get Started</Button>
      </Link>
      <br></br>
      <Link href="/imageslicer" isExternal>
        <Button colorScheme="blue">Image Slicer</Button>
      </Link>
    </Flex>
  );
};

export default Landing;
