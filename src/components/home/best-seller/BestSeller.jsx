import { useEffect, useState } from "react";

import styles from "@style/home/best-seller/BestSeller.module.css";
import SectionTitle from "./SectionTitle";
import ProductList from "./ProductList";

import { PRODUCTS } from "@/data/product";

const BestSeller = () => {
  const [category, setCategory] = useState("Smartphone");
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const filterProducts = (category) => {
      switch (category) {
        case "Smartphone":
          return PRODUCTS.filter(
            (product) =>
              product.category === "iPhone" ||
              product.category === "Samsung Galaxy" ||
              product.category === "Prepaid Phones"
          ).slice(0, 8);

        case "Laptops":
          return PRODUCTS.filter((product) => product.category === "Laptops").slice(0, 8);

        case "iWatch":
          return PRODUCTS.filter((product) => product.category === "iWatch").slice(0, 8);

        case "Accessories":
          return PRODUCTS.filter((product) => product.category === "Accessories").slice(0, 8);

        default:
          return [];
      }
    };

    setProducts(filterProducts(category));
  }, [category]);

  useEffect(() => {
    const getURL = (category) => {
      switch (category) {
        case "Smartphone":
          return [
            "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/11/banner-5.jpg",
            "https://demo.theme-sky.com/ecomall/wp-content/uploads/2024/02/banner-3-tablet-1.jpg"
          ];

        case "Laptops":
          return [
            "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/11/banner-4.jpg",
            "https://demo.theme-sky.com/ecomall/wp-content/uploads/2024/02/banner-4-tablet.jpg"
          ];

        case "iWatch":
          return [
            "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/11/banner-3.jpg",
            "https://demo.theme-sky.com/ecomall/wp-content/uploads/2024/02/banner-3-tablet.jpg"
          ];

        case "Accessories":
          return [
            "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/11/banner-6.jpg",
            "https://demo.theme-sky.com/ecomall/wp-content/uploads/2024/02/banner-6-tablet.jpg"
          ];

        default:
          return [];
      }
    };

    setBanner(getURL(category));
  }, [category]);

  return (
    <div className={styles.content}>
      <div className="container">
        <div>
          <SectionTitle category={category} setCategory={setCategory} />
          <ProductList products={products} banner={banner} />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
