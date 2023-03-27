import { createSlice } from "@reduxjs/toolkit";

const searchSelectedSymbolInitialState = {
  value: "",
};

const searchSelectedSymbolSlice = createSlice({
  name: "searchSelectedSymbol",
  initialState: searchSelectedSymbolInitialState,
  reducers: {
    setSearchSymbol(state, action) {
      state.value = action.payload;
    },
  },
});

export const {setSearchSymbol} = searchSelectedSymbolSlice.actions;
export default searchSelectedSymbolSlice.reducer;
