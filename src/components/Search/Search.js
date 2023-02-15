import { Typeahead } from "react-bootstrap-typeahead";
import styles from "./Search.module.css";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [symbol, setSymbol] = useState();
  useEffect(() => {
    const token = localStorage.getItem("currentToken");
    axios
      .get("https://ot-api.eltak.ir/MarketData/Symbol", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSymbol(response.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401)
          window.location.href = "https://ot-api.eltak.ir/bff/login";
      });
  }, []);
  return (
    <Typeahead
      className={styles.search}
      labelKey={(option) => option.symbolName}
      options={[
        { id: "1", symbolName: "BTC-USDT" },
        { id: "2", symbolName: "ETC-USDT" },
        { id: "3", symbolName: "XMR-USDT" },
      ]}
      size="sm"
    />
  );
};

export default Search;
