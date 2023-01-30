import styles from "./Layout.module.css"
import Menu from "../Menu/Menu";
import Search from "../Search/Search";

const Layout = () => {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <div className={`col-sm-12 ${styles.header}`}>
          <div className={`${styles.headerContent} ${styles.color1}`}>
            <div className={`container-fluid`}>
              <div className="row">
                <div className="col-md-4">
                  <Menu />
                </div>
                <div className="col-md-4">
                  <Search />
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className={`col-sm-4  ${styles.watchlist}`}>
          <div className={`${styles.box} ${styles.color1}`}>watchlist</div>
        </div>
        <div className={`col-sm-3  ${styles.details}`}>
          <div className={`${styles.box} ${styles.color1}`}>details</div>
        </div>
        <div className={`col-sm-5  ${styles.orderbook}`}>
          <div className={`${styles.box} ${styles.color1}`}>orderbook</div>
        </div>
      </div>
      <div className="row">
        <div className={`col-sm-4 ${styles.overview}`}>
          <div className={`${styles.box} ${styles.color2}`}>overview</div>
        </div>
        <div className={`col-sm-8  ${styles.report}`}>
          <div className={`${styles.box} ${styles.color2}`}>report</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
