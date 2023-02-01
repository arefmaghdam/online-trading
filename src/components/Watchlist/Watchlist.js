import React from "react";
import styles from "./Watchlist.module.css";
import { FaChevronDown } from "react-icons/fa";

const Watchlist = () => {
  return (
    <div className={`${styles.watchlist}`}>
      <span className={`${styles.watchlistHeader}`}>Watchlist</span>
      <div className="dropdown">
        <button
          className={`btn dropdown ${styles.dropdown}`}
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <h6>
            {" "}
            <FaChevronDown /> Most Profitable{" "}
          </h6>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" type="button">
            Action
          </button>
          <button className="dropdown-item" type="button">
            Another action
          </button>
          <button className="dropdown-item" type="button">
            Something else here
          </button>
        </div>
      </div>

      <table className={`table ${styles.table}`}>
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Buy</th>
            <th scope="col">Sell</th>
            <th scope="col">Last Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">
              BTC<div>(USDT)</div>
            </td>
            <td>16.2564</td>
            <td>16.2357</td>
            <td>15.2368<p>+15.2%</p></td>
          </tr>
          <tr>
            <td scope="row">
              SHIBA<div>(USDT)</div>
            </td>
            <td>182.36542</td>
            <td>182.58791</td>
            <td>182.59473<p>+1.75%</p></td>
          </tr>
          <tr>
            <td scope="row">
              ETC<div>(USDT)</div>
            </td>
            <td>25.32657</td>
            <td>25.25987</td>
            <td>25.32657<p>+7%</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
