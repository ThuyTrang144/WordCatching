import { BoxItem } from "@common-types/box";
import { Question } from "@common-types/question";
import CHARACTERS from "@constants/string";
import { generateRandomString, splitString } from "./string";

export const shuffleArray = <T>(arr: T[]): T[] => {
  const cloneArr = [...arr];

  for (let i = cloneArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloneArr[i], cloneArr[j]] = [cloneArr[j], cloneArr[i]];
  }

  return cloneArr;
};

export const generateAnswerBox = (answer: string) => new Array(answer.length).fill({
  char: "",
});

export const generateRandomCharacter = (answer: string): BoxItem[] => {
  const randomString = answer.concat(
    generateRandomString(21 - answer.length, CHARACTERS),
  );

  return splitString(randomString)
    .sort()
    .map((item, index) => ({
      char: item,
      keyboardIndex: index,
      isVisible: true,
    }));
};
