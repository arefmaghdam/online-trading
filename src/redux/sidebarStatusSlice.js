import { createSlice } from "@reduxjs/toolkit";

const sidebarStatusInitialState = {
  value: false,
};

const sidebarStatusSlice = createSlice({
  name: "sidebarStatus",
  initialState: sidebarStatusInitialState,
  reducers: {
    setSidebarStatus(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSidebarStatus } = sidebarStatusSlice.actions;
export default sidebarStatusSlice.reducer;
