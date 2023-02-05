import styles from "./ProgressBar.module.css";

const ProgressBar = () => {
    return (
      <div  className={styles.containerStyles}>
        <div className={styles.fillerStyles}>
          <div  className={styles.labelStyles}>100%</div>
        </div>
      </div>
    );
};

export default ProgressBar;
