import styles from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getAPI from "../GetAPI/getAPI";
import config from "../../config";
import { increment } from "../../redux/sidebarStatusSlice";
import postAPI from "../PostAPI/postAPI";
import DeleteAPI from "../DeleteAPI/DeleteAPI";
import Moment from "react-moment";

const Details = () => {
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();

  const searchSelectedSymbol = useSelector(
    (state) => state.searchSelectedSymbol.value
  );

  const priceUpdate = useSelector((state) => state.signalR.price);
  const subSymbol = useSelector((state) => state.subscribedSymbol.value);
  const unsubSymbol = useSelector((state) => state.unsubscribedSymbol.value);

  useEffect(() => {
    if (subSymbol == undefined) return;
    postAPI(`${config.OT_URL}Subscribe/PriceUpdates?symbolId=${subSymbol}`);
  }, [subSymbol]);

  useEffect(() => {
    if (unsubSymbol == undefined) return;
    DeleteAPI(`${config.OT_URL}Subscribe/PriceUpdates?symbolId=${unsubSymbol}`);
  }, [unsubSymbol]);

  useEffect(() => {
    setDetails(priceUpdate);
  }, [priceUpdate]);

  useEffect(() => {
    if (
      searchSelectedSymbol == "" ||
      searchSelectedSymbol == undefined ||
      searchSelectedSymbol == null
    )
      return;

    getData(searchSelectedSymbol);
  }, [searchSelectedSymbol]);

  function getData(symbolId) {
    getAPI(`${config.OT_URL}MarketData/Symbol/Price/${symbolId}`).then(
      (resp) => {
        setDetails(resp);
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  }

  const statusHandler = () => {
    dispatch(increment());
  };

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>
        <div className={styles.coin}>
          <div>{details.symbolId}</div>
          <span>
            {details.lastPrice}
            <p>{details.changePercentage}</p>
          </span>
        </div>
        <div className={styles.buySellButton}>
          <button
            onClick={statusHandler}
            className="btn btn-warning text-white font-weight-normal"
          >
            Buy/Sell
          </button>
        </div>
      </div>
      <div className={styles.detailsTable}>
        <div className={styles.detailsTableItems}>
          <div>
            <table className={`table ${styles.table}`}>
              <tbody>
                <tr>
                  <td>Value</td>
                  <td>{details.volumeValue}</td>
                </tr>
                <tr>
                  <td>Volume</td>
                  <td>{details.volume}</td>
                </tr>
                <tr>
                  <td>High Price</td>
                  <td>{details.highPrice}</td>
                </tr>
                <tr>
                  <td>Low Price</td>
                  <td>{details.lowPrice}</td>
                </tr>
                <tr>
                  <td>Close Price</td>
                  <td>{details.closePrice}</td>
                </tr>
                <tr>
                  <td>Open Price</td>
                  <td>{details.openPrice}</td>
                </tr>
                <tr>
                  <td>Last Trade Time</td>
                  <div className={styles.timeStyle}>
                    <Moment format="h:mm:ss Z">{details.timestamp}</Moment>
                  </div>
                  <div className={styles.dateStyle}>
                    <Moment format="MMM Do YY">{details.timestamp}</Moment>
                  </div>
                </tr>
                <tr>
                  <td>Markets</td>
                  <td>{details.markets}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
