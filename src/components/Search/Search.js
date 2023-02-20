import { Typeahead } from "react-bootstrap-typeahead";
import styles from "./Search.module.css";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("currentToken");

    axios
      .get("https://ot-api.eltak.ir/MarketData/Symbol/Lightweight", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSymbols(response.data.data);
      })
      .catch((err) => {
        if (err.response.status === 401)
          window.location.href = "https://ot-api.eltak.ir/bff/login";
      });
  }, []);

  return (
    <Typeahead
      id="searchInput"
      className={styles.search}
      labelKey={(option) => option.symbolId}
      options={symbols}
      size="sm"
    />
  );
};

export default Search;
