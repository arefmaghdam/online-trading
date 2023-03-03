import useGetAPI from "./useGetAPI";

const useDetails = () => {
  const [details] = useGetAPI(
    "https://ot.api.kub.aghdam.nl/MarketData/Symbol/Price/BTC-USDT",
    {}
  );
  return [details];
};
export default useDetails;
