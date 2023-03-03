import useGetAPI from "./useGetAPI";

const useWatchLightweights = () => {
  const [watchLightweights] = useGetAPI(
    "https://ot.api.kub.aghdam.nl/WatchList/WatchList/Lightweight",
    []
  );
  return [watchLightweights];
};
export default useWatchLightweights;

