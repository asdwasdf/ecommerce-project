import styles from "@style/product-detail/product-summary/ProductSummary.module.css";

const ProductSummary = ({ children }) => {
  return (
    <div className={styles.box}>
      <div className="container">{children}</div>
    </div>
  );
};

export default ProductSummary;
