import styles from "@style/home/best-seller/ProductList.module.css";

import ProductCard from "@/components/common/ProductCard";

const ProductList = ({ products, banner }) => {
  return (
    <div className={styles["content"]}>
      {products.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
      <div className={styles["ts-banner"]}>
        <div
          className={styles["banner-wrapper"]}
          style={{
            backgroundImage: `url(${banner[0]})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}></div>
      </div>
      <div className={`${styles["ts-banner"]} ${styles.mobile}`}>
        <div
          className={styles["banner-wrapper"]}
          style={{
            backgroundImage: `url(${banner[1]})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}></div>
      </div>
    </div>
  );
};

export default ProductList;
