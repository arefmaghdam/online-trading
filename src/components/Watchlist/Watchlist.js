import React from "react";
import styles from "./Watchlist.module.css";
import { FaChevronDown } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";

const Watchlist = () => {
  return (
    <div className={`container-fluid ${styles.watchlistSize}`}>
      <div className="row">
        <div className="col-md-12">
          <div className={`${styles.watchlist}`}>
            <span className={`${styles.watchlistHeader}`}>Watchlist</span>
            <div className="row">
              <div className="col-md-8">
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
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu2"
                  >
                    <button className="dropdown-item" type="button">
                      BTC-USDT
                    </button>
                    <button className="dropdown-item" type="button">
                      SHIBA-USDT
                    </button>
                    <button className="dropdown-item" type="button">
                      ETC-USDT
                    </button>
                  </div>
                </div>
              </div>
              <div className={`col-md-4 ${styles.editButtons}`}>
                <button className={`btn ${styles.editWatchlist}`}>
                  <MdEdit />
                </button>
                <button className={`btn ${styles.addWatchlist}`}>
                  <MdAdd />
                </button>
                <button className={`btn ${styles.removeWatchlist}`}>
                  <MdRemove />
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
                  <td>
                    15.2368<p>+15.2%</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    SHIBA<div>(USDT)</div>
                  </td>
                  <td>182.36542</td>
                  <td>182.58791</td>
                  <td>
                    182.59473<p>+1.75%</p>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    ETC<div>(USDT)</div>
                  </td>
                  <td>25.32657</td>
                  <td>25.25987</td>
                  <td>
                    25.32657<p>+7%</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
