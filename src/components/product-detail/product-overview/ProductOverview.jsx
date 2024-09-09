import styles from "@style/product-detail/product-overview/ProductOverview.module.css";
import ProductTabs from "./ProductTabs";
import Specifications from "./Specifications";

import { useState } from "react";

const ProductOverview = ({ children, star }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.box}>
      <div className="container">
        <div>
          <ProductTabs setActiveTab={setActiveTab} star={star} activeTab={activeTab} />
          {activeTab === 0 ? <Specifications /> : children}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
