import styles from "@style/shop/main/products/Products.module.css";

import ProductCard from "@/components/common/ProductCard";

const Products = ({ products, filterLayout }) => {
  return (
    <div className={`${filterLayout === "List" ? styles.list : styles.grid}`}>
      <div className={styles.products}>
        {products.map((item, index) => (
          <ProductCard
            key={index}
            {...item}
            className={`${filterLayout === "List" ? "List" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
