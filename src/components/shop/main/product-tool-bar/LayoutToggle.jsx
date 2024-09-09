import styles from "@style/shop/main/product-tool-bar/LayoutToggle.module.css";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

const LayoutToggle = ({ filterLayout, setFilterLayout }) => {
  return (
    <div className={styles.box}>
      <span
        className={`${filterLayout === "List" && styles.active}`}
        onClick={() => setFilterLayout("List")}>
        <CiGrid2H />
      </span>
      <span
        className={`${filterLayout === "" && styles.active}`}
        onClick={() => setFilterLayout("")}>
        <CiGrid41 />
      </span>
    </div>
  );
};

export default LayoutToggle;
