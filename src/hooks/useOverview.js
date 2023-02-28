import useGetAPI from "./useGetAPI";

const useOverview = () => {
  const [overview] = useGetAPI(
    "https://ot-api.eltak.ir/WalletManagement/Wallet",
    {}
  );
  return [overview];
};
export default useOverview;
