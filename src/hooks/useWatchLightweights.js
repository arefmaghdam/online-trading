import useGetAPI from "./useGetAPI";
import config from "../config";

const useWatchLightweights = () => {
  const [watchLightweights] = useGetAPI(
    `${config.OT_URL}WatchList/WatchList/Lightweight`,
    []
  );
  return [watchLightweights];
};
export default useWatchLightweights;
