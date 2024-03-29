import isEqual from "lodash.isequal";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Checkbox,
} from "@chakra-ui/react";
import { Question } from "@common-types/question";
import { memo } from "react";
import QuestionTableHeader from "./question-table-header";
import QuestionItem from "../question-item";
import { useDeleteQuestionMutation, useUpdateQuestionMutation } from "../../api/apiSlice";
import "./styles.css";

interface QuestionTableProps {
  questions?: Question[];
}

const QuestionTable = memo(({ questions }: QuestionTableProps) => {
  const [deleteQuestion] = useDeleteQuestionMutation();
  const [updateQuestion] = useUpdateQuestionMutation();

  const renderQuestionList = (list: Question[] = []) => (
    list.map((item, index) => (
      <QuestionItem
        question={item}
        key={item.id}
        index={index + 1}
        deleteQuestion={deleteQuestion}
        editQuestion={updateQuestion}
      />
    ))
  );

  return (
    <TableContainer data-testid="question-table" className="question-table">
      <QuestionTableHeader questionTotal={questions?.length ?? 0} />
      <Table variant="simple" className="question-table__content">
        <Thead>
          <Tr>
            <Th><Checkbox colorScheme="red" /></Th>
            <Th>Id</Th>
            <Th>Image</Th>
            <Th>Answer</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {renderQuestionList(questions)}
        </Tbody>
      </Table>
    </TableContainer>
  );
}, (prevProps, nextProps) => isEqual(prevProps.questions, nextProps.questions));

export default QuestionTable;
