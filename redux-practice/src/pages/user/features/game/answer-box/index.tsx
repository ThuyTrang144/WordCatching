import { Button, Flex } from "@chakra-ui/react";
import { BoxItem } from "@common-types/box";
import isEqual from "lodash.isequal";
import { memo, useState } from "react";

interface AnswerBoxProps {
  answerBoxArr: BoxItem[];
  removeAnswerCharacter: (index: number, item: BoxItem) => void;

}
function AnswerBox({
  answerBoxArr,
  removeAnswerCharacter,
}: AnswerBoxProps) {
  const renderAnswerBox = () => (
    answerBoxArr.map((item, index) => (
      <Button
        cursor="pointer"
        key={item.keyboardIndex}
        borderRadius="md"
        bg="teal"
        color="white"
        textTransform="uppercase"
        h={10}
        w={8}
        onClick={() => removeAnswerCharacter(index, item)}
      >
        {item.char}
      </Button>
    ))
  );

  return (
    <Flex gap={5}>{renderAnswerBox()}</Flex>
  );
}

export default AnswerBox;
