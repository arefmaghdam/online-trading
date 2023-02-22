import { Typeahead } from "react-bootstrap-typeahead";
import styles from "./Search.module.css";
import "react-bootstrap-typeahead/css/Typeahead.min.css";
import useGetAPI from "../../hooks/useGetAPI";
import useLightweightSymbols from "../../hooks/useLightweightSymbols";

const Search = () => {
  const [symbols] = useLightweightSymbols();
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
