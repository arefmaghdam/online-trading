import useGetAPI from "./useGetAPI";

const useOrders = () => {
  const [orders] = useGetAPI(
    "https://ot.api.kub.aghdam.nl/OrderManagement/Order",
    []
  );
  return [orders];
};

export default useOrders;
