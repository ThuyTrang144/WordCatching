import {
  Checkbox, Td, Tr, Image, IconButton,
} from "@chakra-ui/react";
import { Question } from "@common-types/question";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEqual from "lodash.isequal";
import { memo } from "react";

interface QuestionItemProps {
  question: Question;
}

const QuestionItem = memo(({ question }: QuestionItemProps) => (
  <Tr className="question-item" data-testid="question-item">
    <Td>
      <Checkbox colorScheme="red" />
    </Td>
    <Td>{question.id}</Td>
    <Td>
      <Image
        borderRadius="full"
        boxSize="30px"
        src={question.image.src}
        alt={question.image.alt}
      />
    </Td>
    <Td>{question.answer}</Td>
    <Td>
      <IconButton
        variant="ghost"
        aria-label="Edit question"
        size="lg"
        icon={<FontAwesomeIcon icon={faPencil} />}
      />
      <IconButton
        aria-label="Delete question"
        size="lg"
        variant="ghost"
        icon={<FontAwesomeIcon icon={faTrash} />}
      />
    </Td>
  </Tr>
), (prevProps, nextProps) => isEqual(prevProps.question, nextProps.question));

export default QuestionItem;
