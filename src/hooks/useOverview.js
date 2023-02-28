import { useEffect } from "react";
import useGetAPI from "./useGetAPI";

const useOverview = () => {
  useEffect(() => {
    if (overview == undefined) return;
    console.log(overview);
  }, {});
  const [overview] = useGetAPI(
    "https://ot-api.eltak.ir/WalletManagement/Wallet",
    {}
  );
  return [overview];
};
export default useOverview;
