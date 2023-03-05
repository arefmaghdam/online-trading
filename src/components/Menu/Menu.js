import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <a href="/">Home</a>
      <a href="/report">Report</a>
      <a href="/topup">Topup</a>
      <a href="/management">Management</a>
    </ul>
  );
};

export default Menu;
