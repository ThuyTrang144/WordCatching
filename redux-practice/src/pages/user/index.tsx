// import { QUESTION } from "@constants/question";
// import { useGetQuestionsQuery } from "@pages/admin/features/api/apiSlice";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Game from "./features/game";
import Result from "./features/game/result";
import Welcome from "./features/welcome";

export default function UserPage() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/question/:questionId" element={<Game />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
