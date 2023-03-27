import { Routes, Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import ErrorMessage from "@components/ErrorMessage";
import LoadingIndicator from "@components/LoadingIndicator";
import { Flex } from "@chakra-ui/react";

import QuestionTable from "./features/question/question-table";
import QuestionForm from "./features/question/question-form";

// Slice
import { selectQuestions } from "./questionSlice";

// Types
import SideBar from "./components/sidebar";
import { useQuestions } from "./api/useQuestions";

export default function AdminPage() {
  const { questions } = useSelector(selectQuestions);
  const { error, addQuestion } = useQuestions();

  if (error) {
    return <ErrorMessage message="Cannot get questions" />;
  }

  if (questions.length === 0) {
    return <LoadingIndicator />;
  }

  return (
    <Flex justifyContent="space-between">
      <SideBar />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<QuestionTable questions={questions} />} />
        <Route
          path="/question-adding-form"
          element={(
            <QuestionForm
              title="Create new question"
              addNewQuestion={addQuestion}
            />
          )}
        />
        <Route
          path="/edit-question"
          element={
            <QuestionForm title="Edit question" />
          }
        />
      </Routes>
    </Flex>
  );
}
