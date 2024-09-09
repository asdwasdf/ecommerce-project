import styles from "@style/shop/main/product-tool-bar/ProductToolbar.module.css";
import FilterSaleItems from "./FilterSaleItems";
import SortOptions from "./SortOptions";
import ShowOptions from "./ShowOptions";
import { IoFilterOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ProductToolbar = ({ children, openModal }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      {children}
      <FilterSaleItems className="hidden" />
      <div className={styles.filter} onClick={() => openModal(true)}>
        <a>
          <IoFilterOutline />
          {t("productToolbar.filter")}
        </a>
      </div>
      <SortOptions />
      <ShowOptions />
    </div>
  );
};

export default ProductToolbar;
