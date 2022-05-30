import {
  Button, Flex, Heading, Text,
} from "@chakra-ui/react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

interface QuestionTableHeaderProps {
  questionTotal: number;
}

export default function QuestionTableHeader({ questionTotal }: QuestionTableHeaderProps) {
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
}
