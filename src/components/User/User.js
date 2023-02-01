import styles from "./User.module.css";
import { FaUserCircle } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";

const User = () => {
  return (
    <div className={`container-fluid ${styles.user}`}>
      <div className={`row ${styles.user}`}>
        <div className={`col-md-6 ${styles.user}`}>
          <h4>
            {" "}
            <MdDesktopWindows />
            {"  "}
          </h4>
        </div>
        <div className={`col-md-4 ${styles.user}`}>
          <h6>12:47</h6>
        </div>
        <div className={`col-md-2 ${styles.user}`}>
          <h3>
            {" "}
            <FaUserCircle />{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default User;
