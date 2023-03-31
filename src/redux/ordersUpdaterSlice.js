import { createSlice } from "@reduxjs/toolkit";

const ordersUpdaterInitialState = {
  value: 0,
};

const ordersUpdaterSlice = createSlice({
  name: "ordersUpdater",
  initialState: ordersUpdaterInitialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const { increment } = ordersUpdaterSlice.actions;
export default ordersUpdaterSlice.reducer;
