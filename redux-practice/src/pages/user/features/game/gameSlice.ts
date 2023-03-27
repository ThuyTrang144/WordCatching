import { RootState } from "@app/store";
import { createSlice } from "@reduxjs/toolkit";

interface GameResultState {
  score: number;
  level: number;
}

const initialState: GameResultState = {
  score: 0,
  level: 1,
};

const gameResultSlice = createSlice({
  name: "gameResult",
  initialState,
  reducers: {
    passLevel: (state: GameResultState) => ({
      level: state.level + 1,
      score: state.score + 100,
    }),
  },
});

export const selectGameResult = (state: RootState) => state.gameResult;
export const { passLevel } = gameResultSlice.actions;

export default gameResultSlice.reducer;
