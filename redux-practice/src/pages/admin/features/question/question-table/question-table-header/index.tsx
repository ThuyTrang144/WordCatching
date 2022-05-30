import {
  Button, Flex, Heading, Text,
} from "@chakra-ui/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEqual from "lodash.isequal";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

interface QuestionTableHeaderProps {
  questionTotal: number;
}

const QuestionTableHeader = memo(({ questionTotal }: QuestionTableHeaderProps) => {
  const navigate = useNavigate();

  return (
    <Flex justifyContent="space-between" align="center">
      <Flex flexDirection="column">
        <Heading fontSize="4xl">Question</Heading>
        <Text fontSize="md">
          {`${questionTotal} items`}
        </Text>
      </Flex>
      <Button
        colorScheme="blue"
        leftIcon={<FontAwesomeIcon icon={faPlus} />}
        onClick={() => navigate("/admin/question-adding-form")}
      >
        Create new Question
      </Button>
    </Flex>
  );
}, (prevProps, nextProps) => isEqual(prevProps.questionTotal, nextProps.questionTotal));

export default QuestionTableHeader;
