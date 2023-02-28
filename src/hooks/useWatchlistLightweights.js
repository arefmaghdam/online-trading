import useGetAPI from "./useGetAPI";

const useWatchlistLightweights = () => {
  const [watchlistLightweights] = useGetAPI(
    "https://ot-api.eltak.ir/WatchList/WatchList/Lightweight",
    []
  );
  return [watchlistLightweights];
};
export default useWatchlistLightweights;
