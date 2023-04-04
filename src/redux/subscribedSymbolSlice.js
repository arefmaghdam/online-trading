import { createSlice } from "@reduxjs/toolkit";

const subscribedSymbolInitialState = {
  subscribedSymbol: "",
};

const subscribedSymbolSlice = createSlice({
  name: "subscribedSymbol",
  initialState: subscribedSymbolInitialState,
  reducers: {
    setSubscribedSymbol(state, action) {
      state.value = action.payload;
      console.log(action.payload, "should be subscribed");
    },
  },
});

export const { setSubscribedSymbol } = subscribedSymbolSlice.actions;
export default subscribedSymbolSlice.reducer;
