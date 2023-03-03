import useGetAPI from "./useGetAPI";

const useWatchItems = (id) => {
  const [watchItems] = useGetAPI(
    "https://ot.api.kub.aghdam.nl/WatchList/WatchList/" + id,
    {}
  );
  return [watchItems];
};
export default useWatchItems;
