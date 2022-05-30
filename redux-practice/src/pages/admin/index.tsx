import { Flex } from "@chakra-ui/react";
import { Routes, Route, Outlet } from "react-router-dom";
import SideBar from "./components/sidebar";
import QuestionTable from "./features/question/question-table";
import QuestionForm from "./features/question/question-form";
import { useAddNewQuestionMutation, useGetQuestionsQuery } from "./features/api/apiSlice";

export default function AdminPage() {
  const {
    data: questions, isLoading, isError, error,
  } = useGetQuestionsQuery();
  const [addNewQuestion] = useAddNewQuestionMutation();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{(error as any).error}</div>;

  return (
    <Flex justifyContent="space-between" height="100vh">
      <SideBar />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<QuestionTable questions={questions} />} />
        <Route
          path="/question-adding-form"
          element={(
            <QuestionForm
              title="Create new question"
              addNewQuestion={addNewQuestion}
            />
            )}
        />
      </Routes>
    </Flex>
  );
}
