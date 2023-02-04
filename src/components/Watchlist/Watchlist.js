import React from "react";
import styles from "./Watchlist.module.css";
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

            <div class={styles.toolbar}>
              <div class={styles.select}>
                <select>
                  <option>BTC-USDT</option>
                  <option>SHIBA-USDT</option>
                  <option>ETC-USDT</option>
                </select>
              </div>
              <div>
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
                  <th>Symbol</th>
                  <th>Buy</th>
                  <th>Sell</th>
                  <th>Last Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    BTC<div>(USDT)</div>
                  </td>
                  <td>16.2564</td>
                  <td>16.2357</td>
                  <td>
                    15.2368<p>+15.2%</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    SHIBA<div>(USDT)</div>
                  </td>
                  <td>182.36542</td>
                  <td>182.58791</td>
                  <td>
                    182.59473<p>+1.75%</p>
                  </td>
                </tr>
                <tr>
                  <td>
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
