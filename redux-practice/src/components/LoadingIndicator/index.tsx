import { Flex, Image } from "@chakra-ui/react";
import WelcomeImage from "../../assets/images/welcome.gif";

function LoadingIndicator() {
  return (
    <Flex alignItems="center" justifyContent="center" h="100%" flexDir="column">
      <Image
        src={WelcomeImage}
        alt="Cat Eric The Cat Sticker - Cat Eric The Cat Welcome Stickers"
      />
    </Flex>
  );
}

export default LoadingIndicator;
