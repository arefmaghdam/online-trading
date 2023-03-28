import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import selectedSymbolReducer from "./selectedSymbolSlice";
import searchSelectedSymbolReducer from "./searchSelectedSymbolSlice";
import sidebarStatusReducer from "./sidebarStatusSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    selectedSymbol: selectedSymbolReducer,
    searchSelectedSymbol: searchSelectedSymbolReducer,
    sidebarStatus: sidebarStatusReducer,
  },
});

export default store;
