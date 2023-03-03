import useGetAPI from "./useGetAPI";
import config from "../config";

const useDetails = () => {
  const [details] = useGetAPI(
    `${config.OT_URL}MarketData/Symbol/Price/BTC-USDT`,
    {}
  );
  return [details];
};
export default useDetails;
