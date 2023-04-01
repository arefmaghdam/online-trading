import { createSlice } from "@reduxjs/toolkit";

const selectedWatchlistIdInitialState = {
  value: 0,
};

const selectedWatchlistIdSlice = createSlice({
  name: "selectedWatchlistId",
  initialState: selectedWatchlistIdInitialState,
  reducers: {
    setSelectedWatchlistId(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSelectedWatchlistId } = selectedWatchlistIdSlice.actions;
export default selectedWatchlistIdSlice.reducer;
