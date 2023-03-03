import useGetAPI from "./useGetAPI";
import config from "../config";

const useOverview = () => {
  const [overview] = useGetAPI(`${config.OT_URL}WalletManagement/Wallet`, {});
  return [overview];
};
export default useOverview;
