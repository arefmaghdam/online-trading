import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>Home</li>
      <li>Report</li>
      <li>Topup</li>
      <li>Management</li>
    </ul>
  );
};

export default Menu;
