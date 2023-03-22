import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import useLightweightSymbols from "../../hooks/useLightweightSymbols";
import postAPI from "../PostAPI/postAPI";
import styles from "./AddWatchlist.module.css";

const AddWatchlist = () => {
  const [watchlistName, setWatchlistName] = useState("");
  const [symbols] = useLightweightSymbols();
  const submitHandler = (e) => {
    e.preventDefault();
    const watchlistData = {
      name: watchlistName,
      symbolIds: ["BTC-USDT", "ETC-USDT"],
    };
    console.log(watchlistData);
    let promise = postAPI(
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
      <form onSubmit={submitHandler} autocomplete="off">
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
          id="searchInput"
          className={styles.search}
          labelKey={(option) => option.symbolId}
          options={symbols}
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

export default AddWatchlist;
