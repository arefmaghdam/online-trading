import React, { useEffect, useState } from "react";
import styles from "./Watchlist.module.css";
import { MdEdit } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import useWatchLightweights from "../../hooks/useWatchLightweights";
import useWatchItems from "../../hooks/useWatchItems";

const Watchlist = () => {
  const [watchsymbols] = useWatchLightweights();
  const [watchItems] = useWatchItems();
  const [watchsymbolsData, setwatchsymbolsData] = useState([]);
  const [watchData, setWatchData] = useState([]);
  useEffect(() => {
    if (watchsymbols == undefined) return;
    setwatchsymbolsData(watchsymbols);
  }, [watchsymbols]);
  useEffect(() => {
    if (watchItems.watchListItems == undefined) return;
    setWatchData(watchItems.watchListItems);
  }, [watchItems]);
  return (
    <div className={styles.watchlistSize}>
      <div className="container-fluid">
        <div className={`row ${styles.titleContainer}`}>
          <div className="col-md-12">
            <span className={`${styles.watchlistHeader}`}>Watchlist</span>
          </div>
        </div>
        <div className={`row ${styles.toolbarContainer}`}>
          <div className="col-md-12">
            <div className={styles.toolbar}>
              <div className={styles.select}>
                <select>
                  {watchsymbolsData.map((item) => {
                    return <option key={item.id}>{item.name}</option>;
                  })}
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
          </div>
        </div>
        <div className={`row ${styles.tableContainer}`}>
          <div className="col-md-12">
            <div>
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
                  {watchData.map((item) => {
                    return (
                      <tr key={item.lastPrice}>
                        <td>{item.symbolId}</td>
                        <td>{item.bestAskPrice}</td>
                        <td>{item.bestBidPrice}</td>
                        <td>
                          {item.lastPrice}
                          <p
                            className={
                              item.changePercentage >= 0
                                ? styles.greenColor
                                : styles.redColor
                            }
                          >
                            {item.changePercentage}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
