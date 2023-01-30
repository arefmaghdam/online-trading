import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={`container-fluid ${styles.containerFluid}`}>
      <div className="row">
        <div className={`col-md-4 ${styles.menu}`}>
          <ul>
            <li>Home</li>
            <li>Report</li>
            <li>Topup</li>
            <li>Management</li>
          </ul>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Header;
