import { Typeahead } from "react-bootstrap-typeahead";
import styles from "./Search.module.css";
import "react-bootstrap-typeahead/css/Typeahead.min.css";

const Search = () => {
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
