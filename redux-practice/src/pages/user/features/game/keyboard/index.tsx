import { Grid, Button } from "@chakra-ui/react";
import { BoxItem } from "@common-types/box";
import isEqual from "lodash.isequal";
import { memo, useState } from "react";

interface KeyboardProps {
  characters: BoxItem[];
  pushAnswerCharacter: (item: BoxItem, index: number) => void;
}
function Keyboard({ characters, pushAnswerCharacter }: KeyboardProps) {
  console.log("characters", characters);
  const renderKeyBoard = (list: BoxItem[] = []) => list.map(
    // eslint-disable-next-line react/no-array-index-key
    (item, index) => (
      <Button
        key={Math.random()}
        textTransform="uppercase"
        fontSize="large"
        cursor="pointer"
        visibility={item.isVisible ? "visible" : "hidden"}
        onClick={() => pushAnswerCharacter(item, index)}
      >
        {item.char}
      </Button>
    ),
  );

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="5">
      {renderKeyBoard(characters)}
    </Grid>
  );
}

export default Keyboard;
