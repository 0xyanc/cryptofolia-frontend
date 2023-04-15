import { Flex } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Flex direction="column" minHeight="100vh" bgGradient="linear(to-r, #1C3946, #467069,#1C3946)">
        <Header />
        <Flex flexGrow="1" p="2rem" w="100%">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
