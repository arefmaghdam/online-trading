import useGetAPI from "./useGetAPI";

const useWatchItems = () => {
  const [watchItems] = useGetAPI(
    "https://ot-api.eltak.ir/WatchList/WatchList/4",
    {}
  );
  return [watchItems];
};
export default useWatchItems;
