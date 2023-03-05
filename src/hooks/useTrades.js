import config from "../config";
import useGetAPI from "./useGetAPI";

const useTrades = () => {
  const [trades] = useGetAPI(`${config.OT_URL}OrderManagement/Trade`, []);
  return [trades];
};

export default useTrades;
