import { Button, Flex, Heading } from "@chakra-ui/react";
import { BACKGROUND_COLOR_GRADIENT } from "@constants/background";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Flex
      paddingTop="50px"
      flexDirection="column"
      align="center"
      gap="100px"
      bgGradient={BACKGROUND_COLOR_GRADIENT}
      height="100vh"
    >
      <Heading
        fontSize="6xl"
        textTransform="uppercase"
        color="orange"
      >
        Đuổi hình bắt chữ
      </Heading>
      <Button
        colorScheme="orange"
        size="lg"
        onClick={() => navigate("/game/play")}
      >
        Bắt đầu
      </Button>
    </Flex>
  );
}
