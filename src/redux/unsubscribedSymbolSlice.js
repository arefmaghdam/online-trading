import { createSlice } from "@reduxjs/toolkit";

const unsubscribedSymbolInitialState = {
  unsubscribedSymbol: "",
};

const unsubscribedSymbolSlice = createSlice({
  name: "unsubscribedSymbol",
  initialState: unsubscribedSymbolInitialState,
  reducers: {
    setUnubscribedSymbol(state, action) {
      state.value = action.payload;
      console.log(action.payload, "should be unsubscribed");
    },
  },
});

export const { setUnubscribedSymbol } = unsubscribedSymbolSlice.actions;
export default unsubscribedSymbolSlice.reducer;
