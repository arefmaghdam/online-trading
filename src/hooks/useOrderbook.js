import { useEffect } from "react";
import useGetAPI from "./useGetAPI";

const useOrderbook = () => {
  const [orderbook] = useGetAPI(
    "https://ot-api.eltak.ir/MarketData/Bestlimit/BTC-USDT",
    {}
  );

  return [orderbook];
};
export default useOrderbook;
