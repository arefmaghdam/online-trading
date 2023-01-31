import styles from "./User.module.css";
import { FaUserCircle } from "react-icons/fa";

const User = () => {
  return (
    <div className={`${styles.user}`}>
      <h3>
        {" "}
        <FaUserCircle />{" "}
      </h3>
    </div>
  );
};

export default User;
