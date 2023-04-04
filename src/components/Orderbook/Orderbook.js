import { useEffect, useState } from "react";
import styles from "./Orderbook.module.css";

import { useSelector } from "react-redux";
import getAPI from "../GetAPI/getAPI";
import config from "../../config";
import postAPI from "../PostAPI/postAPI";
import DeleteAPI from "../DeleteAPI/DeleteAPI";

const Orderbook = () => {
  const [orderbookData, setOrderbookData] = useState([]);
  const [orderbook, setOrderbook] = useState({});
  const subSymbol = useSelector((state) => state.subscribedSymbol.value);
  const unsubSymbol = useSelector((state) => state.unsubscribedSymbol.value);
  const searchSelectedSymbol = useSelector(
    (state) => state.searchSelectedSymbol.value
  );

  const orderbookUpdate = useSelector((state) => state.signalR.orderbook);

  useEffect(() => {
    if (subSymbol == undefined) return;
    postAPI(`${config.OT_URL}Subscribe/OrderbookUpdates?symbolId=${subSymbol}`);
  }, [subSymbol]);

  useEffect(() => {
    if (unsubSymbol == undefined) return;
    DeleteAPI(`${config.OT_URL}Subscribe/OrderbookUpdates?symbolId=${unsubSymbol}`);
  }, [unsubSymbol]);

  useEffect(() => {
    if (
      searchSelectedSymbol == "" ||
      searchSelectedSymbol == undefined ||
      searchSelectedSymbol == null
    )
      return;
    getData(searchSelectedSymbol);
  }, [searchSelectedSymbol]);

  useEffect(() => {
    setOrderbook(orderbookUpdate);
  }, [orderbookUpdate]);

  useEffect(() => {
    if (orderbook.bids == undefined) return;
    let askBid = [];
    let bids = orderbook.bids;
    let asks = orderbook.asks;
    for (let item = 0; item < bids.length; item++) {
      const data = {
        bid: bids[item],
        ask: asks[item],
      };
      askBid.push(data);
    }
    setOrderbookData(askBid);
  }, [orderbook]);

  const getData = (symbolId) => {
    getAPI(`${config.OT_URL}MarketData/Bestlimit/${symbolId}`).then(
      (resp) => {
        setOrderbook(resp);
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  return (
    <div className={styles.Orderbook}>
      <table className={`table ${styles.table}`}>
        <thead>
          <tr>
            <th>Total Quantity</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orderbookData.map((item) => {
            return (
              <tr key={item.ask.price}>
                <td>{item.ask.totalQuantity}</td>
                <td>{item.ask.quantity}</td>
                <td>{item.ask.price}</td>
                <td>{item.bid.price}</td>
                <td>{item.bid.quantity}</td>
                <td>{item.bid.totalQuantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orderbook;
