import { createSlice } from "@reduxjs/toolkit";

const editWatchlistStatusInitialState = {
  value: 0,
};

const editWatchlistStatusSlice = createSlice({
  name: "editWatchlistStatus",
  initialState: editWatchlistStatusInitialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const { increment } = editWatchlistStatusSlice.actions;
export default editWatchlistStatusSlice.reducer;
