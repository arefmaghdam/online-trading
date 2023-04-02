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
  const [subscribedSymbol, setSubscribedSymbol] = useState("");
  const [unSubscribedSymbol, setUnSubscribedSymbol] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (symbols.length == 0) return;

    let symbol = symbols[0];
    setDefaultSymbols([symbol]);
    setSubscribedSymbol(symbol.symbolId);
    console.log(subscribedSymbol, "should be subscribed");
    dispatch(setSearchSymbol(symbol.symbolId));
  }, [symbols]);

  useEffect(() => {
    if (selectedLightweight == "") return;
    dispatch(setSearchSymbol(selectedLightweight));
    setUnSubscribedSymbol(subscribedSymbol);
    setSubscribedSymbol(selectedLightweight);
  }, [selectedLightweight]);

  useEffect(() => {
    if (unSubscribedSymbol == "") return;
    console.log(unSubscribedSymbol, "should be ubsubscribed");
  }, [unSubscribedSymbol]);

  useEffect(() => {
    if (subscribedSymbol == "") return;
    console.log(subscribedSymbol, "should be subscribed");
  }, [subscribedSymbol]);

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
