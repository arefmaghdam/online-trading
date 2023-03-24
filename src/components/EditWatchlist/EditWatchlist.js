import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import useLightweightSymbols from "../../hooks/useLightweightSymbols";
import PutAPI from "../PutAPI/PutAPI";
import styles from "./EditWatchlist.module.css";

const EditWatchlist = () => {
  const [watchlistName, setWatchlistName] = useState("");
  const [watchlistSymbols, setWatchlistSymbols] = useState([]);
  const [watchlistOredr, setWatchlistOrder] = useState([]);
  const [symbols] = useLightweightSymbols();
  const submitHandler = (e) => {
    e.preventDefault();
    const watchlistData = {
      name: watchlistName,
      symbolIds: watchlistOredr,
    };
    console.log(watchlistData);
    let promise = PutAPI(
      "https://ot.api.kub.aghdam.nl/WatchList/FullWatchList",
      watchlistData
    ).then(
      (resp) => {
        console.log("response: ", resp);
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} autoComplete="off">
        <label className="text-white">Watchlist Name</label>
        <input
          type="text"
          name="watchlist"
          id="watchlist"
          value={watchlistName}
          onChange={(e) => setWatchlistName(e.target.value)}
          required
          className="form-control"
        ></input>
        <label className="text-white">Selection Symbols</label>
        <Typeahead
          multiple
          onChange={(selected) => {
            let order = [];
            for (let i = 0; i < selected.length; i++) {
              order.push(selected[i].symbolId);
            }
            setWatchlistOrder(order);
            setWatchlistSymbols(selected);
          }}
          id="searchInput"
          className={styles.search}
          labelKey={(option) => option.symbolId}
          options={symbols}
          defaultSelected={[]}
          size="sm"
        />
        <button
          type="submit"
          className="btn btn-primary text-white font-weight-normal"
        >
          Add Watchlist
        </button>
      </form>
    </div>
  );
};

export default EditWatchlist;
