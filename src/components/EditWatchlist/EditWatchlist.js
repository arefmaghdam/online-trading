import axios from "axios";
import { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import config from "../../config";
import useLightweightSymbols from "../../hooks/useLightweightSymbols";
import PutAPI from "../PutAPI/PutAPI";
import styles from "./EditWatchlist.module.css";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import { setSymbol } from "../../redux/selectedSymbolSlice";

const EditWatchlist = () => {
  const [watchlistName, setWatchlistName] = useState("");
  const [watchlistSymbols, setWatchlistSymbols] = useState([]);
  const [watchlistOredr, setWatchlistOrder] = useState([]);
  const [symbols] = useLightweightSymbols();
  const [lightweightId, setLightweightId] = useState(10011);
  const [watchData, setWatchData] = useState([]); // Table
  const [defaultSelectedItems, setDefaultSelectedItems] = useState([]);

  const counter = useSelector((state) => state.counter.value);
  const selectedSymbol = useSelector((state) => state.selectedSymbol.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    dispatch(setSymbol("BTC-USDT"));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  useEffect(() => {
    if (lightweightId == 0) return;

    const token = localStorage.getItem("currentToken");
    axios
      .get(`${config.OT_URL}WatchList/WatchList/${lightweightId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.status === false) {
          alert(response.data.errorMessage);
        } else {
          setWatchData(response.data.data);
          console.log(watchData);
          let watchArray = [];
          for (let i = 0; i < watchData.watchListItems.length; i++) {
            watchArray.push({
              id: watchData.watchListItems[i].id,
              name: watchData.watchListItems[i].symbolId,
              symbolId: watchData.watchListItems[i].symbolId,
            });
          }
          setDefaultSelectedItems(watchArray);
          console.log(defaultSelectedItems);
        }
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status == undefined)
          window.location.href = `${config.OT_URL}bff/login`;
        else alert("Undefined exception: " + JSON.stringify(err));
      });
  }, [lightweightId]);

  const submitHandler = (e) => {
    e.preventDefault();
    const watchlistData = {
      name: watchlistName,
      symbolIds: watchlistOredr,
    };
    console.log(watchlistData);
    let promise = PutAPI(
      "https://ot.api.kub.aghdam.nl/WatchList/FullWatchList/10011",
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
          placeholder={watchData.name}
          value={watchlistName}
          onChange={(e) => setWatchlistName(e.target.value)}
          required
          className="form-control"
        ></input>
        <label className="text-white">Selection Symbols</label>
        <Typeahead
          multiple
          onChange={(selected) => {
            setDefaultSelectedItems(selected);
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
          selected={defaultSelectedItems}
          size="sm"
        />
        <button
          type="submit"
          className="btn btn-primary text-white font-weight-normal"
        >
          Add Watchlist
        </button>
        <button onClick={handleIncrement}>Increment</button>
        <span>{counter}</span>
        <span>{selectedSymbol}</span>
      </form>
    </div>
  );
};

export default EditWatchlist;
