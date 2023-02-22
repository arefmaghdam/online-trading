import { useEffect, useState } from "react";
import axios from "axios";

const useGetAPI = (apiUrl, defaultValue) => {
  const [symbols, setSymbols] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("currentToken");
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSymbols(response.data.data);
        console.log(symbols);
      })
      .catch((err) => {
        if (err.response.status === 401)
          window.location.href = "https://ot-api.eltak.ir/bff/login";
      });
  }, []);

  return [symbols];
};
export default useGetAPI;
