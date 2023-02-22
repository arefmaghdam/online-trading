import useGetAPI from "./useGetAPI";

const useLightweightSymbols = () => {
  const [symbols] = useGetAPI(
    "https://ot-api.eltak.ir/MarketData/Symbol/Lightweight",
    []
  );
  return [symbols];
};
export default useLightweightSymbols;
