import useGetAPI from "./useGetAPI";

const useLightweightSymbols = () => {
  const [symbols] = useGetAPI(
    "https://ot.api.kub.aghdam.nl/MarketData/Symbol/Lightweight",
    []
  );
  return [symbols];
};
export default useLightweightSymbols;
