import styles from "@style/product-detail/product-overview/ProductTabs.module.css";
import { useTranslation } from "react-i18next";

const ProductTabs = ({ setActiveTab, activeTab, star }) => {
  const { t } = useTranslation();

  return (
    <ul className={styles.tabs}>
      <li className={activeTab === 0 ? styles.active : ""} onClick={() => setActiveTab(0)}>
        <a>{t("productDetail.tabs.productDetails")}</a>
      </li>
      <li className={activeTab === 1 ? styles.active : ""} onClick={() => setActiveTab(1)}>
        <a>{t("productDetail.tabs.reviews", { count: star > 4 ? "1" : "0" })}</a>
      </li>
    </ul>
  );
};

export default ProductTabs;
