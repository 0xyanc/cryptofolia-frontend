import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const ShowPlant = () => {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Text as="b">100 Total KWH</Text>
      {/* <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box> */}
      <Image boxSize="400px" objectFit="cover" src="https://www.galaxus.ch/im/Files/6/6/1/8/9/3/1/6/blooming-buddies.jpg" alt="Cactus" />
      <Flex mt="1rem">
        <Link
          href="https://app.uniswap.org/#/swap?inputCurrency=0xee01c0cd76354c383b8c7b4e65ea88d00b06f36f&outputCurrency=0xb4efd85c19999d84251304bda99e90b92300bd93&chain=421613"
          passHref
        >
          <Button colorScheme="green">Trade</Button>
        </Link>

        <Button ml="1rem" colorScheme="green">
          Mint NFT
        </Button>
      </Flex>
    </Flex>
  );
};

export default ShowPlant;
