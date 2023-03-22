import { useState } from "react";
import postAPI from "../PostAPI/postAPI";

const AddWatchlist = () => {
  const [watchlistName, setWatchlistName] = useState("");

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
      <select className="select" multiple>
        <option value="1">BTC-USDT</option>
        <option value="2">ETC-USDT</option>
      </select>
      <button
        type="submit"
        className="btn btn-primary text-white font-weight-normal"
      >
        Add Watchlist
      </button>
    </form>
  );
};

export default AddWatchlist;
