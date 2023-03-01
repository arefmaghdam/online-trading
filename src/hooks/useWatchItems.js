import useGetAPI from "./useGetAPI";

const useWatchItems = () => {
  const [watchItems] = useGetAPI(
    "https://ot-api.eltak.ir/WatchList/WatchList/1",
    []
  );
  return [watchItems];
};
export default useWatchItems;
