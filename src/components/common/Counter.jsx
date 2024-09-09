import styles from "@style/common/Counter.module.css";

const Counter = ({ count, handleDecrement, handleIncrement }) => {
  return (
    <div className={styles["counter-container"]}>
      <button className={styles["counter-btn"]} onClick={handleDecrement}>
        -
      </button>
      <span className={styles["counter-value"]}>{count}</span>
      <button className={styles["counter-btn"]} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
