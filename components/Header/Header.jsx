import { Flex, Image } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <Flex h="5vh" p="2rem" justifyContent="space-between" alignItems="center" bgGradient="linear(to-r, #008080, #008080)">
      <Image objectFit="cover" alt="logo" src="/logo.svg" borderRadius="full" boxSize="200px" />
      <ConnectButton showBalance={false} />
    </Flex>
  );
};

export default Header;
