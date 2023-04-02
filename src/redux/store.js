import { configureStore } from "@reduxjs/toolkit";
import selectedSymbolReducer from "./selectedSymbolSlice";
import searchSelectedSymbolReducer from "./searchSelectedSymbolSlice";
import sidebarStatusReducer from "./sidebarStatusSlice";
import lightweightIdReducer from "./lightweightIdSlice";
import ordersUpdaterReducer from "./ordersUpdaterSlice";
import selectedWatchlistReducer from "./selectedWatchlistSlice";
import selectedWatchlistIdReducer from "./selectedWatchlistIdSlice";
import editWatchlistStatusReducer from "./editWatchlistStutusSlice";
import signalRReducer from "./signalRSlice";
import subscribedSymbolReducer from "./subscribedSymbolSlice"
import unsubscribedSymbolReducer from "./unsubscribedSymbolSlice"

const store = configureStore({
  reducer: {
    editWatchlistStatus: editWatchlistStatusReducer,
    selectedSymbol: selectedSymbolReducer,
    searchSelectedSymbol: searchSelectedSymbolReducer,
    sidebarStatus: sidebarStatusReducer,
    lightweightId: lightweightIdReducer,
    ordersUpdater: ordersUpdaterReducer,
    selectedWatchlist: selectedWatchlistReducer,
    selectedWatchlistId: selectedWatchlistIdReducer,
    signalR: signalRReducer,
    subscribedSymbol: subscribedSymbolReducer,
    unsubscribedSymbol: unsubscribedSymbolReducer,
  },
});

export default store;
