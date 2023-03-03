import useGetAPI from "./useGetAPI";
import config from "../config";

const useOrderbook = () => {
  const [orderbook] = useGetAPI(
    `${config.OT_URL}MarketData/Bestlimit/BTC-USDT`,
    {}
  );

  return [orderbook];
};
export default useOrderbook;
