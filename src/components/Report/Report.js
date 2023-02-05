import styles from "./Report.module.css";

const Report = () => {
  return (
    <div className={styles.reportMenu}>
      <ul className={styles.report}>
      <li>Orders</li>
      <li>Transactions</li>
    </ul>
    </div>
  );
};

export default Report;
