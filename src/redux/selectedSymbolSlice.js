import { createSlice } from "@reduxjs/toolkit";

const selectedSymbolInitialState = {
  value: "",
};

const selectedSymbolSlice = createSlice({
  name: "selectedSymbol",
  initialState: selectedSymbolInitialState,
  reducers: {
    setSymbol(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSymbol } = selectedSymbolSlice.actions;
export default selectedSymbolSlice.reducer;
