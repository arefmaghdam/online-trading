import { createSlice } from "@reduxjs/toolkit";

const signalRInitialState = {
  price: {},
  orderbook: {},
  order: [],
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
    setOrder(state, action) {
      state.order = action.payload;
    },
  },
});

export const { setPrice, setOrderbook, setOrder } = signalRSlice.actions;
export default signalRSlice.reducer;
