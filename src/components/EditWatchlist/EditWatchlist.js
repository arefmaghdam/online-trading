import axios from "axios";
import { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import config from "../../config";
import useLightweightSymbols from "../../hooks/useLightweightSymbols";
import PutAPI from "../PutAPI/PutAPI";
import styles from "./EditWatchlist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/editWatchlistStutusSlice";

const EditWatchlist = () => {
  const [watchlistName, setWatchlistName] = useState("");
  const [symbols] = useLightweightSymbols();
  const [typeaheadSymbols, setTypeaheadSymbols] = useState([]);
  const [defaultSymbols, setDefaultSymbols] = useState([]);
  const selectedWatchlistId = useSelector(
    (state) => state.selectedWatchlistId.value
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let newSymbolIds = symbols.map((item) => {
      return {
        symbolId: item.symbolId,
      };
    });
    setTypeaheadSymbols(newSymbolIds);
  }, [symbols]);

  useEffect(() => {
    if (selectedWatchlistId == 0) return;
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
            setWatchlistName(responseData.name);
            let watchArray = [];
            for (let i = 0; i < responseData.watchListItems.length; i++) {
              watchArray.push({
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
      symbolIds: defaultSymbols.map((item) => item.symbolId),
    };
    let promise = PutAPI(
      `${config.OT_URL}WatchList/FullWatchList/${selectedWatchlistId}`,
      watchlistData
    ).then(
      (resp) => {
        dispatch(increment());
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
          clearButton
          multiple
          onChange={(selected) => {
            setDefaultSymbols(selected);
          }}
          id="searchInput"
          className={styles.search}
          labelKey={(option) => option.symbolId}
          options={typeaheadSymbols}
          selected={defaultSymbols}
          size="sm"
        />
        <button
          type="submit"
          className="btn btn-primary text-white font-weight-normal"
        >
          Edit Watchlist
        </button>
      </form>
    </div>
  );
};

export default EditWatchlist;
