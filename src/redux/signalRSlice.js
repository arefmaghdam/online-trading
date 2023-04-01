import { createSlice } from "@reduxjs/toolkit";

const signalRInitialState = {
  price: {}
};

const signalRSlice = createSlice({
  name: "signalR",
  initialState: signalRInitialState,
  reducers: {
    setPrice(state, action) {
      state.price = action.payload;
    }
  },
});

export const { setPrice } = signalRSlice.actions;
export default signalRSlice.reducer;
