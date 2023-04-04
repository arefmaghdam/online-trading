import { createSlice } from "@reduxjs/toolkit";

const signalRInitialState = {
  price: {},
  orderbook: {},
};

const signalRSlice = createSlice({
  name: "signalR",
  initialState: signalRInitialState,
  reducers: {
    setPrice(state, action) {
      state.price = action.payload;
    },
    setOrderbook(state, action) {
      state.orderbook = action.payload;
    },
  },
});

export const { setPrice, setOrderbook } = signalRSlice.actions;
export default signalRSlice.reducer;
