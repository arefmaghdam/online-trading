import useGetAPI from "./useGetAPI";

const useWatchLightweights = () => {
  const [watchLightweights] = useGetAPI(
    "https://ot-api.eltak.ir/WatchList/WatchList/Lightweight",
    []
  );
  return [watchLightweights];
};
export default useWatchLightweights;
