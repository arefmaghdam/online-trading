import { useState, useEffect } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import postAPI from "../PostAPI/postAPI";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalQuantity, setToatalQuantity] = useState(0);
  const [sidebar, setSidebar] = useState(1);

  useEffect(() => {
    if (isNaN(price) || isNaN(quantity)) return;

    setToatalQuantity(price * quantity);
  }, [price, quantity]);

  const submitHandler = (e) => {
    e.preventDefault();
    const orderData = {
      symbolId: "BTC-USDT",
      price: price,
      quantity: quantity,
      orderSide: sidebar,
    };

    let promise = postAPI(
      "https://ot.api.kub.aghdam.nl/OrderManagement/Order",
      orderData
    ).then(
      (resp) => {
        console.log("response: ", resp);
      },
      (err) => {
        console.log("error: ", err);
      }
    );

    console.log(orderData);
  };

  return (
    <form onSubmit={submitHandler} autoComplete="off">
      <ul className={`nav  justify-content-center ${styles.tabContainer}`}>
        <li className={`nav-item ${styles.tabs}`}>
          <a
            className={`nav-link ${styles.tabBuy}`}
            onClick={() => setSidebar(1)}
            href="#"
          >
            Buy
          </a>
        </li>
        <li className={`nav-item ${styles.tabs}`}>
          <a
            className={`nav-link ${styles.tabSell}`}
            onClick={() => setSidebar(2)}
            href="#"
          >
            Sell
          </a>
        </li>
      </ul>
      <div>
        <label className={`text-white ${styles.lables} ${styles.marginTop}`}>
          Price
        </label>
      </div>
      <div>
        <input
          type="number"
          step="0.0000000001"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className={`form-control ${styles.inputWidth} ${styles.inputMarginTop}`}
        ></input>
      </div>
      <div>
        <label className={`text-white ${styles.lables} ${styles.marginTop}`}>
          Quantity
        </label>
      </div>
      <div>
        <input
          type="number"
          step="0.0000000001"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className={`form-control ${styles.inputWidth} ${styles.inputMarginTop}`}
        ></input>
      </div>
      <div>
        <label className={`text-white ${styles.lables} ${styles.marginTop}`}>
          Total Price
        </label>
      </div>
      <div>
        <input
          type="number"
          step="0.0000000001"
          name="totalQuantity"
          id="totalQuantity"
          value={totalQuantity}
          onChange={(e) => setToatalQuantity(e.target.value)}
          required
          className={`form-control ${styles.inputWidth} ${styles.inputMarginTop}`}
        ></input>
      </div>
      <div className={styles.centerButton}>
        <button
          type="submit"
          className={`btn btn-primary text-white font-weight-normal ${styles.submitButton} ${styles.submitMarginTop}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Sidebar;
