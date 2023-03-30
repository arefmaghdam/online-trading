import { createSlice } from "@reduxjs/toolkit";

const lightweightIdInitialState = {
  value: "",
};

const lightweightIdSlice = createSlice({
  name: "lightweightId",
  initialState: lightweightIdInitialState,
  reducers: {
    setLightweightId(state, action) {
      state.value = action.payload;
    },
  },
});

export const {setLightweightId} = lightweightIdSlice.actions;
export default lightweightIdSlice.reducer;
