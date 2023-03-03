import useGetAPI from "./useGetAPI";
import config from "../config";

const useOrders = () => {
  const [orders] = useGetAPI(`${config.OT_URL}OrderManagement/Order`, []);
  return [orders];
};

export default useOrders;
