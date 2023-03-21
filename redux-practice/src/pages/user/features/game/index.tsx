import {
  Box, Flex, Image, useToast,
} from "@chakra-ui/react";
import { BoxItem } from "@common-types/box";
import { Question } from "@common-types/question";
import CHARACTERS from "@constants/string";
import { generateRandomString, splitString } from "@helpers/string";
import { useGetQuestionsQuery } from "@pages/admin/features/api/apiSlice";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AnswerBox from "./answer-box";
import { selectGameResult } from "./gameSlice";
import Keyboard from "./keyboard";

interface GameProps {
  question?: Question;
  handlePassLevel: () => void;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
function Game() {
  const { data: questions } = useGetQuestionsQuery();
  const { level } = useSelector(selectGameResult);
  console.log("level in question", level, questions);
  const [question, setQuestion] = useState(questions?.[level]);

  const navigate = useNavigate();
  const toast = useToast();
  console.log("render", question);
  // Init an array for render answer box
  const [answerBoxArr, setAnswerBoxArr] = useState<BoxItem[]>([]);
  const [minIndex, setMinIndex] = useState(0);
  const [keyArr, setKeyArr] = useState<BoxItem[]>([]);

  // get characters of answer. Array include 20 characters

  useEffect(() => {
    const questionAnswer = question ? question.answer : " ";
    const initialAnswerBox = new Array(questionAnswer.length - 1).fill({ char: "" });
    const string = questionAnswer
      .concat(generateRandomString((21 - questionAnswer.length), CHARACTERS));
    const res = splitString(string).sort();
    const keyBoardCharacterArr = res.map((item, index) => ({
      char: item,
      keyboardIndex: index,
      isVisible: true,
    }));
    setAnswerBoxArr(initialAnswerBox);
    setKeyArr(keyBoardCharacterArr);
    setQuestion(questions?.[level]);
  }, [questions, question, level]);
  // Array of each character of answer for rendering virtual keyboard

  const pushAnswerCharacter = (item: BoxItem, index: number) => {
    answerBoxArr.splice(minIndex, 1, item);
    setAnswerBoxArr([...answerBoxArr]);
    setMinIndex(minIndex + 1);

    for (let i = minIndex + 1; i < answerBoxArr.length; i++) {
      if (answerBoxArr[i].char !== "") {
        setMinIndex(i + 1);
      } else {
        setMinIndex(i);
        break;
      }
    }

    if (answerBoxArr.every((elm: BoxItem) => elm.char !== "")) {
      const answer = answerBoxArr.map((element: BoxItem) => element.char).join("");
      if (answer.toLocaleLowerCase() === question?.answer.replace(/\s/g, "").toLocaleLowerCase()) {
        navigate("/game/result");
        return;
      }

      toast({
        title: "Your answer is wrong",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }

    keyArr[index].isVisible = false;
    setKeyArr([...keyArr]);
  };

  const removeAnswerCharacter = (index: number, item: BoxItem) => {
    answerBoxArr.splice(index, 1, { char: "" } as any);
    setAnswerBoxArr([...answerBoxArr]);
    if (index < minIndex && answerBoxArr[index].char === "") {
      setMinIndex(index);
    }
    keyArr[item.keyboardIndex].isVisible = true;
    setKeyArr([...keyArr]);
  };

  if (!question) {
    return <Box>Sorry, cannot get question right now</Box>;
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="flex-start"
      gap={50}
      marginTop={50}
    >
      <Flex
        justifyContent="center"
        flexDirection="column"
        align="center"
        gap={50}
      >
        <Image src={question.image.src} />
        <AnswerBox
          answerBoxArr={answerBoxArr}
          removeAnswerCharacter={removeAnswerCharacter}
        />
      </Flex>
      <Keyboard
        characters={keyArr}
        pushAnswerCharacter={pushAnswerCharacter}
      />
    </Flex>
  );
}

export default Game;
