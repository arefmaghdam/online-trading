import { Typeahead } from "react-bootstrap-typeahead";
import styles from "./Search.module.css";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import useLightweightSymbols from "../../hooks/useLightweightSymbols";
import { useDispatch } from "react-redux";
import { setSearchSymbol } from "../../redux/searchSelectedSymbolSlice";
import { useEffect, useState } from "react";

const Search = () => {
  const [symbols] = useLightweightSymbols();
  const [selectedLightweight, setSelectedLightweight] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchSymbol(selectedLightweight));
  }, [selectedLightweight]);

  return (
    <Typeahead
      onChange={(selected) => {
        if (selected.length == 0) return;

        setSelectedLightweight(selected[0].symbolId);
      }}
      id="searchInput"
      className={styles.search}
      labelKey={(option) => option.symbolId}
      options={symbols}
      size="sm"
    />
  );
};

export default Search;
