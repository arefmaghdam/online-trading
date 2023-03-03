import useGetAPI from "./useGetAPI";
import config from "../config";

const useWatchItems = (id) => {
  const [watchItems] = useGetAPI(
    `${config.OT_URL}WatchList/WatchList/${id}`,
    {}
  );
  return [watchItems];
};
export default useWatchItems;
