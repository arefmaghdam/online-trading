import useGetAPI from "./useGetAPI";

const useOrders = () => {
  const [orders] = useGetAPI(
    "https://ot-api.eltak.ir/OrderManagement/Order",
    []
  );
  return [orders];
};

export default useOrders;
