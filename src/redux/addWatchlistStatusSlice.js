import { createSlice } from "@reduxjs/toolkit";

const addWatchlistStatusInitialState = {
  value: 0,
};

const addWatchlistStatusSlice = createSlice({
  name: "addWatchlistStatus",
  initialState: addWatchlistStatusInitialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const { increment } = addWatchlistStatusSlice.actions;
export default addWatchlistStatusSlice.reducer;
