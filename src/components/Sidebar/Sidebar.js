import { useRef } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const priceRef = useRef();
  const quantityRef = useRef();
  const totalQuantityRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredPrice = priceRef.current.value;
    const enteredQuantity = quantityRef.current.value;
    const enteredTotalQuantity = totalQuantityRef.current.value;
    const orderData = {
      price : enteredPrice,
      quantity : enteredQuantity,
      totalQuantity : enteredTotalQuantity,
    }
    console.log("submited");
    console.log(orderData);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.buttons}>
        <button
          className={`btn btn-success text-white font-weight-normal ${styles.buyButton}`}
        >
          Buy
        </button>
        <button
          className={`btn btn-danger text-white font-weight-normal ${styles.sellButton}`}
        >
          Sell
        </button>
      </div>
      <div>
        <label className={`text-white ${styles.lables} ${styles.marginTop}`}>
          Price
        </label>
      </div>
      <div>
        <input
          type="float"
          name="price"
          id="price"
          required
          ref={priceRef}
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
          type="float"
          name="quantity"
          id="quantity"
          required
          ref={quantityRef}
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
          type="float"
          name="totalQuantity"
          id="totalQuantity"
          required
          ref={totalQuantityRef}
          className={`form-control ${styles.inputWidth} ${styles.inputMarginTop}`}
        ></input>
      </div>
      <div className={styles.centerButton}>
        <button
          type = "submit" className={`btn btn-primary text-white font-weight-normal ${styles.submitButton} ${styles.marginTop}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Sidebar;
