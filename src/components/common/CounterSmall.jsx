import styles from "@style/common/CounterSmall.module.css";

const CounterSmall = ({ count, handleDecrement, handleIncrement }) => {
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

export default CounterSmall;
