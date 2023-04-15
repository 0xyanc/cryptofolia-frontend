import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const Setup = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" ml="35rem" mr="35rem" w="100%">
      <Heading color="white">Setup Data Feed</Heading>
      <Text color="white" mt="1rem">
        URL
      </Text>
      <Input
        color="white"
        placeholder={"URL"}
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <Text color="white" mt="1rem">
        Username
      </Text>
      <Input
        color="white"
        placeholder={"Username"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Text color="white" mt="1rem">
        Password
      </Text>
      <Input
        color="white"
        placeholder={"Secret"}
        value={secret}
        type="password"
        onChange={(e) => {
          setSecret(e.target.value);
        }}
      />
      <Link href="/showplant" isExternal>
        <Button mt="1rem" colorScheme="green">
          Connect
        </Button>
      </Link>
    </Flex>
  );
};

export default Setup;
