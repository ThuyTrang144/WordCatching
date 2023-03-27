import { Grid, Button } from "@chakra-ui/react";
import { BoxItem } from "@common-types/box";

interface KeyboardProps {
  characters: BoxItem[];
  pushAnswerCharacter: (item: BoxItem, index: number) => void;
}
function Keyboard({ characters, pushAnswerCharacter }: KeyboardProps) {
  const renderKeyBoard = (list: BoxItem[] = []) => list.map((item, index) => (
    <Button
      key={Math.random()}
      textTransform="uppercase"
      fontSize="large"
      cursor="pointer"
      visibility={item.isVisible ? "visible" : "hidden"}
      onClick={() => pushAnswerCharacter(item, index)}
      backgroundColor="white"
    >
      {item.char}
    </Button>
  ));

  return (
    <Grid
      templateColumns={{
        base: "repeat(5, 1fr)",
        md: "repeat(10, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      gap="5"
    >
      {renderKeyBoard(characters)}
    </Grid>
  );
}

export default Keyboard;
