import styles from "@style/common/Button.module.css";

const Button = ({ children, onClick = () => {}, disabled = false }) => {
  // console.log(disabled);
  return (
    <button className={styles.button} onClick={() => onClick()} disabled={disabled}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
