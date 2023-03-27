import { Button, Flex, Heading } from "@chakra-ui/react";
import { BACKGROUND_COLOR_GRADIENT } from "@constants/background";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectGameResult } from "../game/gameSlice";

export default function Welcome() {
  const navigate = useNavigate();
  const { level } = useSelector(selectGameResult);

  return (
    <Flex
      flexDirection="column"
      align="center"
      gap="50px"
      bgGradient={BACKGROUND_COLOR_GRADIENT}
      height="100vh"
      justify="center"
    >
      <Heading
        fontSize={{ base: "4xl", md: "6xl" }}
        textTransform="uppercase"
        color={{ base: "green", md: "orange" }}
        textAlign="center"
      >
        Đuổi hình bắt chữ
      </Heading>
      <Button
        colorScheme="orange"
        size="lg"
        onClick={() => navigate(`/question/${level}`)}
      >
        Start
      </Button>
    </Flex>
  );
}
