import { useEffect, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [totalQuantity, setToatalQuantity] = useState(0);
  
  const submitHandler = (e) => {
    e.preventDefault();
    const orderData = {
      price : price,
      quantity : quantity,
      totalQuantity : totalQuantity,
    }
  };

  return (
    <form onSubmit={submitHandler} autocomplete="off">
      <Tabs className={styles.tabContainer}>
        <TabList className={styles.tabs}>
          <Tab className={styles.tab}>Bul</Tab>
          <Tab className={styles.tab}>Sell</Tab>
        </TabList>
      </Tabs>
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
          Total Quantity
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
