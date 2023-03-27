import {
  Flex,
  Image,
  useToast,
  Text,
  Button,
} from "@chakra-ui/react";
import { BoxItem } from "@common-types/box";
import { Question } from "@common-types/question";
import { selectQuestions, setQuestions } from "@pages/admin/questionSlice";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "@components/LoadingIndicator";
import {
  generateAnswerBox,
  generateRandomCharacter,
  shuffleArray,
} from "@helpers/array";
import AnswerBox from "./answer-box";
import { passLevel, selectGameResult } from "./gameSlice";
import Keyboard from "./keyboard";
import { db } from "../../../../firebase/firebaseConfig";

function Game() {
  const { level, score } = useSelector(selectGameResult);
  const { questions } = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState<Question>();

  const fetchPost = async () => {
    await getDocs(collection(db, "questions")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data().question);
      dispatch(setQuestions(shuffleArray(newData)));
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const navigate = useNavigate();
  const toast = useToast();
  // Init an array for render answer box
  const [answerBoxArr, setAnswerBoxArr] = useState<BoxItem[]>([]);
  const [minIndex, setMinIndex] = useState(0);
  const [keyArr, setKeyArr] = useState<BoxItem[]>([]);

  // get characters of answer. Array include 20 characters
  useEffect(() => {
    const questionAnswer = question ? question.answer.replace(/\s/g, "") : "";
    const initialAnswerBox = generateAnswerBox(questionAnswer);

    setAnswerBoxArr(initialAnswerBox);
    setKeyArr(generateRandomCharacter(questionAnswer));
    setQuestion(questions[level]);
    setMinIndex(0);
  }, [questions, level, question]);
  // Array of each character of answer for rendering virtual keyboard

  const pushAnswerCharacter = (item: BoxItem, index: number) => {
    answerBoxArr.splice(minIndex, 1, item);
    setAnswerBoxArr([...answerBoxArr]);
    const isFullBoxArr = answerBoxArr.every((elm: BoxItem) => elm.char !== "");
    if (isFullBoxArr) {
      const answer = answerBoxArr
        .map((element: BoxItem) => element.char)
        .join("");
      if (
        answer.toLocaleLowerCase()
        === question?.answer.replace(/\s/g, "").toLocaleLowerCase()
      ) {
        dispatch(passLevel());
        return navigate(`/question/${level + 1}`);
      }

      return toast({
        title: "Your answer is wrong",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }

    setMinIndex(minIndex + 1);

    for (let i = minIndex + 1; i < answerBoxArr.length; i++) {
      if (answerBoxArr[i].char !== "") {
        setMinIndex(i + 1);
      } else {
        setMinIndex(i);
        break;
      }
    }

    keyArr[index].isVisible = false;
    return setKeyArr([...keyArr]);
  };

  const removeAnswerCharacter = (index: number, item: BoxItem) => {
    if (!answerBoxArr[index].char) {
      return;
    }

    answerBoxArr.splice(index, 1, { char: "" } as any);
    setAnswerBoxArr([...answerBoxArr]);
    setMinIndex(index);
    keyArr[item.keyboardIndex].isVisible = true;
    setKeyArr([...keyArr]);
  };

  const clearAll = () => {
    setAnswerBoxArr(generateAnswerBox(question?.answer.replace(/\s/g, "") ?? ""));
    setKeyArr(generateRandomCharacter(question?.answer ?? ""));
    setMinIndex(0);
  };

  if (!question) {
    return <LoadingIndicator />;
  }

  return (
    <Flex
      flexDir="column"
      p="30px"
      bgColor="blue.100"
      minH="100vh"
      alignItems="center"
      gap="50px"
    >
      <Text
        fontSize={{ base: "2xl", md: "5xl" }}
        fontWeight={700}
        color="orange.500"
        textAlign="center"
      >
        {`Your score: ${score}`}
      </Text>
      <Flex
        justifyContent="center"
        alignItems={{ base: "center" }}
        gap={50}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex
          justifyContent="center"
          flexDirection="column"
          align="center"
          gap={50}
        >
          <Image src={question?.image.src} />
          <AnswerBox
            answerBoxArr={answerBoxArr}
            removeAnswerCharacter={removeAnswerCharacter}
          />
          <Button colorScheme="blue" size="md" onClick={clearAll}>
            Clear All
          </Button>
        </Flex>
        <Keyboard
          characters={keyArr}
          pushAnswerCharacter={pushAnswerCharacter}
        />
      </Flex>
    </Flex>
  );
}

export default Game;
