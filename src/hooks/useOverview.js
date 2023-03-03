import useGetAPI from "./useGetAPI";

const useOverview = () => {
  const [overview] = useGetAPI(
    "https://ot.api.kub.aghdam.nl/WalletManagement/Wallet",
    {}
  );
  return [overview];
};
export default useOverview;
