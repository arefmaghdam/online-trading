import { useEffect } from "react";
import useGetAPI from "./useGetAPI";

const useOrderbook = () => {
  const [orderbook] = useGetAPI(
    "https://ot.api.kub.aghdam.nl/MarketData/Bestlimit/BTC-USDT",
    {}
  );

  return [orderbook];
};
export default useOrderbook;
