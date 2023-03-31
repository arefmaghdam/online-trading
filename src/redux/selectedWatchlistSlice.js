import { createSlice } from "@reduxjs/toolkit";

const selectedWatchlistInitialState = {
  value: "",
};

const selectedWatchlistSlice = createSlice({
  name: "selectedWatchlist",
  initialState: selectedWatchlistInitialState,
  reducers: {
    setSelectedWatchlist(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSelectedWatchlist } = selectedWatchlistSlice.actions;
export default selectedWatchlistSlice.reducer;
