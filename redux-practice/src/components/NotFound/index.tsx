import { Flex, Image, Text } from "@chakra-ui/react";

function NotFound() {
  return (
    <Flex>
      <Image src="../../assets/images/fail.gift" />
      <Text color="red" fontWeight="bold" fontSize="4xl">
        Page not found
      </Text>
    </Flex>
  );
}

export default NotFound;
