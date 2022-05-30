// import { QUESTION } from "@constants/question";
// import { useGetQuestionsQuery } from "@pages/admin/features/api/apiSlice";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Game from "./features/game";
import Result from "./features/game/result";
import Welcome from "./features/welcome";

export default function UserPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/play" element={<Game />} />
        <Route path="/result" element={<Result answer="Bao cao" />} />
      </Routes>
    </div>
  );
}
