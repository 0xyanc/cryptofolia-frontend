import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const Setup = () => {
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  return (
    <Flex direction="column" alignItems="center">
      <Heading>Crypto Pots Setup</Heading>
      <Text mt="1rem">URL</Text>
      <Input
        placeholder={"URL"}
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <Text mt="1rem">Username</Text>
      <Input
        placeholder={"Username"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Text mt="1rem">Secret</Text>
      <Input
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
