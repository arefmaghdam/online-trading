import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <form>
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
        <label className={`text-white ${styles.lables} ${styles.marginTop}`}>Price</label>
      </div>
      <div>
        <input className={`form-control ${styles.inputWidth} ${styles.inputMarginTop}`}></input>
      </div>
      <div>
        <label className={`text-white ${styles.lables} ${styles.marginTop}`}>Quantity</label>
      </div>
      <div>
        <input className={`form-control ${styles.inputWidth} ${styles.inputMarginTop}`}></input>
      </div>
      <div>
        <label className={`text-white ${styles.lables} ${styles.marginTop}`}>Total Quantity</label>
      </div>
      <div>
        <input className={`form-control ${styles.inputWidth} ${styles.inputMarginTop}`}></input>
      </div>
      <div className={styles.centerButton}>
        <button
          className={`btn btn-primary text-white font-weight-normal ${styles.submitButton} ${styles.marginTop}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Sidebar;
