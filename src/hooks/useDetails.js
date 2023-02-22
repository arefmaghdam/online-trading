import useGetAPI from "./useGetAPI";

const useDetails = () => {
  const [details] = useGetAPI(
    "https://ot-api.eltak.ir/MarketData/Symbol/Price",
    []
  );
  return [details];
};
export default useDetails;
