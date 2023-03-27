import { Button, Flex } from "@chakra-ui/react";
import { BoxItem } from "@common-types/box";

interface AnswerBoxProps {
  answerBoxArr: BoxItem[];
  removeAnswerCharacter: (index: number, item: BoxItem) => void;
}
function AnswerBox({ answerBoxArr, removeAnswerCharacter }: AnswerBoxProps) {
  const renderAnswerBox = () => answerBoxArr.map((item, index) => (
    <Button
      key={Math.random()}
      cursor="pointer"
      borderRadius="md"
      bg="teal"
      color="white"
      textTransform="uppercase"
      w={12}
      h={10}
      onClick={() => removeAnswerCharacter(index, item)}
    >
      {item.char}
    </Button>
  ));

  return <Flex gap="5" flexWrap="wrap">{renderAnswerBox()}</Flex>;
}

export default AnswerBox;
