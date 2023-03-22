import React, { useEffect, useState } from "react";
import axios from "axios";
import useWatchLightweights from "../../hooks/useWatchLightweights";
import useWatchItems from "../../hooks/useWatchItems";
import config from "../../config";
import styles from "./Watchlist.module.css";
import { MdEdit } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import EditWatchlist from "../EditWatchlist/EditWatchlist";
import AddWatchlist from "../AddWatchlist/AddWatchlist";
import postAPI from "../PostAPI/postAPI";
import DeleteAPI from "../DeleteAPI/DeleteAPI";

const Watchlist = () => {
  const [lightweightId, setLightweightId] = useState(1);
  const [displayEditStatus, setDisplayEditStatus] = useState(false);
  const [watchSymbolsData, setWatchSymbolsData] = useState([]); // Dropdown
  const [watchData, setWatchData] = useState([]); // Table
  let [selectId, setSelectId] = useState(0);

  const [watchSymbols] = useWatchLightweights();
  let [watchItems] = useWatchItems(lightweightId);

  useEffect(() => {
    const token = localStorage.getItem("currentToken");
    axios
      .get(
        `https://ot.api.kub.aghdam.nl/WatchList/WatchList/${lightweightId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.status === false) {
          alert(response.data.errorMessage);
        } else {
          setWatchData(response.data.data.watchListItems);
        }
      })
      .catch((err) => {
        if (err.response.status === 401)
          window.location.href = `${config.OT_URL}bff/login`;
        else alert("Undefined exception: " + JSON.stringify(err));
      });
  }, [lightweightId]);

  useEffect(() => {
    if (watchSymbols == undefined) return;
    setWatchSymbolsData(watchSymbols);
  }, [watchSymbols]);

  useEffect(() => {
    if (watchItems.watchListItems == undefined) return;
    setWatchData(watchItems.watchListItems);
  }, [watchItems]);

  const getLightweightId = (e) => {
    let selectId = e.target.value;
    setLightweightId(selectId);
  };

  const showAddBox = () => {
    let editStatus = false;
    if (displayEditStatus === false) {
      editStatus = true;
    }
    if (displayEditStatus === true) {
      editStatus = false;
    }
    setDisplayEditStatus(editStatus);
    setSelectId(1);
  };

  const showEditBox = () => {
    let editStatus = false;
    if (displayEditStatus === false) {
      editStatus = true;
    }
    if (displayEditStatus === true) {
      editStatus = false;
    }
    setDisplayEditStatus(editStatus);
    setSelectId(2);
  };

  const deleteWatchlist = () => {
    let promise = DeleteAPI(
      `https://ot.api.kub.aghdam.nl/WatchList/WatchList/${lightweightId}`
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
    <>
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
                  <select id="mySelect" onChange={getLightweightId}>
                    {watchSymbolsData.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <button
                    onClick={showEditBox}
                    className={`btn ${styles.editWatchlist}`}
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={showAddBox}
                    className={`btn ${styles.addWatchlist}`}
                  >
                    <MdAdd />
                  </button>
                  <button
                    onClick={deleteWatchlist}
                    className={`btn ${styles.removeWatchlist}`}
                  >
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
      <div
        className={`${styles.editMenu} ${
          displayEditStatus === false
            ? styles.displayEditFalse
            : styles.displayEditTrue
        }`}
      >
        <div className={selectId === 1 ? styles.showBox : styles.hideBox}>
          <AddWatchlist />
        </div>
        <div className={selectId === 2 ? styles.showBox : styles.hideBox}>
          <EditWatchlist />
        </div>
      </div>
    </>
  );
};

export default Watchlist;
