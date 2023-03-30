import { createSlice } from "@reduxjs/toolkit";

const sidebarStatusInitialState = {
  value: 0,
};

const sidebarStatusSlice = createSlice({
  name: "sidebarStatus",
  initialState: sidebarStatusInitialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
  },
});

export const { increment } = sidebarStatusSlice.actions;
export default sidebarStatusSlice.reducer;
