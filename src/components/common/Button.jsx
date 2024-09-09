import styles from "@style/common/Button.module.css";

const Button = ({ children, onClick = () => {} }) => {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
