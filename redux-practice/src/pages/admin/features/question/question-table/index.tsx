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
import isEqual from "lodash.isequal";
import QuestionItem from "../question-item";

interface QuestionTableProps {
  questions: Question[]
}

const QuestionTable = memo(({ questions }: QuestionTableProps) => {
  const renderQuestionList = (list: Question[]) => (
    list.map((item) => <QuestionItem question={item} key={item.id} />)
  );

  return (
    <TableContainer data-testid="question-table">
      <Table variant="simple">
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
