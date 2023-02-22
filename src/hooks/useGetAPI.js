import { useEffect, useState } from "react";
import axios from "axios";

const useGetAPI = (apiUrl, defaultValue) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("currentToken");
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401)
          window.location.href = "https://ot-api.eltak.ir/bff/login";
      });
  }, []);

  return [data];
};
export default useGetAPI;
