import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import selectedSymbolReducer from "./selectedSymbolSlice";
import searchSelectedSymbolReducer from "./searchSelectedSymbolSlice";
import sidebarStatusReducer from "./sidebarStatusSlice"
import lightweightIdReducer from "./lightweightIdSlice"
import ordersUpdaterReducer from "./ordersUpdaterSlice"
import selectedWatchlistReducer from "./selectedWatchlistSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    selectedSymbol: selectedSymbolReducer,
    searchSelectedSymbol: searchSelectedSymbolReducer,
    sidebarStatus: sidebarStatusReducer,
    lightweightId : lightweightIdReducer,
    ordersUpdater : ordersUpdaterReducer,
    selectedWatchlist : selectedWatchlistReducer,
  },
});

export default store;
