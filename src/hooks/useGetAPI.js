import { useEffect, useState } from "react";
import axios from "axios";

const useGetAPI = (apiUrl, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  useEffect(() => {
    const token = localStorage.getItem("currentToken");
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === false) {
          alert(response.data.errorMessage);
        } else {
          setData(response.data.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401)
          window.location.href = "https://ot.api.kub.aghdam.nl/bff/login";
        else 
          alert('Undefined exception: ' + JSON.stringify(err))
      });
  }, []);

  return [data];
};
export default useGetAPI;
