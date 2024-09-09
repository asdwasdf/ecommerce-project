import styles from "@style/home/product-deal/ProductDeal.module.css";
import CountdownTimerPromotion from "./CountdownTimerPromotion";
import ProductCard from "./ProductCard";

const ProductDeal = () => {
  return (
    <div className={styles["product-deal"]}>
      <div className="container">
        <div className={styles["product-deals-wrapper"]}>
          <CountdownTimerPromotion />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDeal;
