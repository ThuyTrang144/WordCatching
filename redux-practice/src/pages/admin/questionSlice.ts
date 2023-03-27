import { RootState } from "@app/store";
import { Question } from "@common-types/question";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
  questions: Question[];
}

const initialState: QuestionState = {
  questions: [],
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestions: (_, action: PayloadAction<Question[]>) => ({
      questions: action.payload,
    }),
  },
});

export const selectQuestions = (state: RootState) => state.questions;
export const { setQuestions } = questionSlice.actions;

export default questionSlice.reducer;
