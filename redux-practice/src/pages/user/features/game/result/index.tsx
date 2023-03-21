import {
  Box, Button, Flex, Text,
} from "@chakra-ui/react";
import { BACKGROUND_COLOR_GRADIENT } from "@constants/background";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { passLevel, selectGameResult } from "../gameSlice";

interface ResultProps {
  answer: string;
}

export default function Result({ answer }: ResultProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { score } = useSelector(selectGameResult);
  console.log("score", score);
  const handlePassLevel = () => {
    dispatch(passLevel());
    navigate("/game/play");
  };

  return (
    <Flex
      bgGradient={BACKGROUND_COLOR_GRADIENT}
      height="100vh"
      flexDirection="column"
      alignItems="center"
      gap={50}
    >
      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Box
          fontSize="6xl"
          color="purple"
          fontWeight={700}
        >
          Excellent
        </Box>
        <Text
          fontSize="4xl"
          fontWeight={700}
          color="orange.500"
        >
          {answer}
        </Text>
        <Text
          fontSize="4xl"
          fontWeight={700}
        >
          {`Your score: ${score}`}
        </Text>
      </Flex>
      <Flex gap={50}>
        <Button
          colorScheme="orange"
          size="lg"
        >
          Save score
        </Button>
        <Button
          colorScheme="orange"
          size="lg"
          onClick={handlePassLevel}
        >
          Continue
        </Button>
      </Flex>
    </Flex>
  );
}
