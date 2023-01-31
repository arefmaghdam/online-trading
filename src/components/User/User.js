import styles from "./User.module.css";
import { FaUserCircle } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";

const User = () => {
  return (
    <div className={`${styles.user}`}>
      <h4>
        {" "}
        <MdDesktopWindows />{" "}
      </h4>
      <h6 className={`${styles.time}`}>12:47</h6>
      <h3>
        {" "}
        <FaUserCircle />{" "}
      </h3>
    </div>
  );
};

export default User;
