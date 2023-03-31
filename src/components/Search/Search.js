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
  const [defaultSymbols, setDefaultSymbols] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (symbols.length == 0) return;

    let symbol = symbols[0];
    setDefaultSymbols([symbol]);
    dispatch(setSearchSymbol(symbol.symbolId));
  }, [symbols]);

  useEffect(() => {
    dispatch(setSearchSymbol(selectedLightweight));
  }, [selectedLightweight]);

  return (
    <Typeahead
      onChange={(selected) => {
        if (selected.length == 0) {
          setDefaultSymbols([]);
          return;
        }
        setDefaultSymbols(selected);
        setSelectedLightweight(selected[0].symbolId);
      }}
      id="searchInput"
      className={styles.search}
      labelKey={(option) => option.symbolId}
      options={symbols}
      size="sm"
      selected={defaultSymbols}
    />
  );
};

export default Search;
