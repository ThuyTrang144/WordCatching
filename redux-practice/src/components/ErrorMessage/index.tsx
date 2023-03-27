import { Flex, Image, Text } from "@chakra-ui/react";
import FailImage from "../../assets/images/fail.gif";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Flex>
      <Image src={FailImage} />
      <Text>{message}</Text>
    </Flex>
  );
}

export default ErrorMessage;
