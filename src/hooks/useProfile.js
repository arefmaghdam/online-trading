import config from "../config";
import useGetAPI from "./useGetAPI";

const useProfile = () => {
  const [profile] = useGetAPI(
    `${config.OT_URL}CustomerManagement/Customer`,
    []
  );
  return [profile];
};

export default useProfile;
