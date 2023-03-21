import {
  Checkbox, Td, Tr, Image, IconButton, Input,
} from "@chakra-ui/react";
import { Question } from "@common-types/question";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface QuestionItemProps {
  index: number;
  question: Question;
  deleteQuestion: (id: string) => void;
  editQuestion: (question: Question) => void;
}

function QuestionItem({
  question,
  index,
  deleteQuestion,
  editQuestion,
}: QuestionItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const handleEditQuestion = (item: Question) => {
    setIsEdit(!isEdit);
    editQuestion(item);
  };

  return (
    <Tr className="question-item" data-testid="question-item">
      <Td>
        <Checkbox colorScheme="red" />
      </Td>
      <Td>{index}</Td>
      <Td>
        <Image
          borderRadius="full"
          boxSize="30px"
          src={question.image.src}
          alt={question.image.alt}
        />
      </Td>

      {isEdit ? (
        <Td>
          <Input defaultValue={question.answer} w="fit-content" />
        </Td>
      ) : (
        <Td>{question.answer}</Td>
      )}
      <Td>
        <IconButton
          variant="ghost"
          aria-label="Edit question"
          size="lg"
          icon={<FontAwesomeIcon icon={faPencil} />}
          onClick={() => handleEditQuestion(question)}
        />
        <IconButton
          aria-label="Delete question"
          size="lg"
          variant="ghost"
          icon={<FontAwesomeIcon icon={faTrash} />}
          onClick={() => deleteQuestion(question.id)}
        />
      </Td>
    </Tr>
  );
}

export default memo(QuestionItem);
