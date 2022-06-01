import SideBar from "./components/sidebar";
import QuestionTable from "./features/question/question-table";
import QuestionForm from "./features/question/question-form";
import { QUESTION_LIST } from "@constants/question";
import { Outlet, Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

function AdminPage() {
  return (
    <Flex justifyContent="space-between" height="100vh">
      <SideBar />
      <Routes>
        <Route
          path="/"
          element={<Outlet />}
        />
        <Route index element={<QuestionTable questions={QUESTION_LIST} />} />
        <Route
          path="/question-adding-form"
          element={(
            <QuestionForm
              title="Create new question"
              addNewQuestion={() => {}}
            />
            )}
        />
      </Routes>
    </Flex>
  );
}

export default AdminPage;
