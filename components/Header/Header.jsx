import { Flex, Text } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <Flex h="5vh" p="2rem" justifyContent="flex-end" alignItems="center">
      {/* <Text as="b">Solar Token</Text> */}
      <ConnectButton showBalance={false} />
    </Flex>
  );
};

export default Header;
