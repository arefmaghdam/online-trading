import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import config from "../../config";
import useLightweightSymbols from "../../hooks/useLightweightSymbols";
import { increment } from "../../redux/editWatchlistStutusSlice";
import postAPI from "../PostAPI/postAPI";
import styles from "./AddWatchlist.module.css";

const AddWatchlist = () => {
  const [watchlistName, setWatchlistName] = useState("");
  const [watchlistOredr, setWatchlistOrder] = useState([]);
  const [symbols] = useLightweightSymbols();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const watchlistData = {
      name: watchlistName,
      symbolIds: watchlistOredr,
    };
    let promise = postAPI(
      `${config.OT_URL}WatchList/FullWatchList`,
      watchlistData
    ).then(
      (resp) => {
        dispatch(increment())
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

export default AddWatchlist;
