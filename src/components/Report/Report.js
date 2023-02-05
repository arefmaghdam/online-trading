import styles from "./Report.module.css";

const Report = () => {
  return (
    <div>
      <div className={styles.reportMenu}>
        <ul className={styles.report}>
          <li>Orders</li>
          <li>Transactions</li>
        </ul>
      </div>
      <div className={styles.reportContent}>
        <div className={styles.table}>Table</div>
        <div className={styles.barChart}>Chart</div>
      </div>
    </div>
  );
};

export default Report;
