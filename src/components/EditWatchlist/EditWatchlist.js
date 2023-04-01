import axios from "axios";
import { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import config from "../../config";
import useLightweightSymbols from "../../hooks/useLightweightSymbols";
import PutAPI from "../PutAPI/PutAPI";
import styles from "./EditWatchlist.module.css";
import { useSelector } from "react-redux";

const EditWatchlist = () => {
  const [watchlistName, setWatchlistName] = useState("");
  const [watchlistOredr, setWatchlistOrder] = useState([]);
  const [symbols] = useLightweightSymbols();
  const [defaultSymbols, setDefaultSymbols] = useState([]);
  const selectedWatchlist = useSelector((state) => state.selectedWatchlist.value)
  const selectedWatchlistId = useSelector((state) => state.selectedWatchlistId.value)

  useEffect(() => {
    if (selectedWatchlistId < 0) return;
    const token = localStorage.getItem("currentToken");
    axios
      .get(`${config.OT_URL}WatchList/WatchList/${selectedWatchlistId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (response) => {
          if (response.data.status === false) {
            alert(response.data.errorMessage);
          } else {
            let responseData = response.data.data;
            let watchArray = [];
            for (let i = 0; i < responseData.watchListItems.length; i++) {
              watchArray.push({
                id: responseData.watchListItems[i].id,
                name: responseData.watchListItems[i].symbolId,
                symbolId: responseData.watchListItems[i].symbolId,
              });
            }
            setDefaultSymbols(watchArray);
          }
        },
        (reason) => {
          if (reason.response.status == 401)
            window.location.href = `${config.OT_URL}bff/login`;
          else alert("Undefined exception: " + JSON.stringify(reason));
        }
      );
  }, [selectedWatchlistId]);

  const submitHandler = (e) => {
    e.preventDefault();
    const watchlistData = {
      name: watchlistName,
      symbolIds: watchlistOredr,
    };
    let promise = PutAPI(
      `${config.OT_URL}WatchList/FullWatchList/${selectedWatchlistId}`,
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
          placeholder={selectedWatchlist}
          value={watchlistName}
          onChange={(e) => setWatchlistName(e.target.value)}
          required
          className="form-control"
        ></input>
        <label className="text-white">Selection Symbols</label>
        <Typeahead
          multiple
          onChange={(selected) => {
            if (selected.length == 0) {
              setDefaultSymbols([])
              return
            }
              let order = [];
            for (let i = 0; i < selected.length; i++) {
              order.push(selected[i].symbolId);
            setWatchlistOrder(order);
            setDefaultSymbols(selected)
            }
            setDefaultSymbols(selected);
          }}
          id="searchInput"
          className={styles.search}
          labelKey={(option) => option.symbolId}
          options={symbols}
          selected={defaultSymbols}
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
