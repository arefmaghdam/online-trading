import useGetAPI from "./useGetAPI";
import config from "../config";

const useLightweightSymbols = () => {
  const [symbols] = useGetAPI(
    `${config.OT_URL}MarketData/Symbol/Lightweight`,
    []
  );
  return [symbols];
};
export default useLightweightSymbols;
