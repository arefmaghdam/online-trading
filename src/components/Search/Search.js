import { Typeahead } from "react-bootstrap-typeahead";
import styles from "./Search.module.css";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import useGetAPI from "../../hooks/useGetAPI";

const Search = () => {
  const [lightweightSymbols] = useGetAPI('https://ot-api.eltak.ir/MarketData/Symbol/Lightweight', [])
  return (
    <Typeahead
      id="searchInput"
      className={styles.search}
      labelKey={(option) => option.symbolId}
      options={lightweightSymbols}
      size="sm"
    />
  );
};

export default Search;
