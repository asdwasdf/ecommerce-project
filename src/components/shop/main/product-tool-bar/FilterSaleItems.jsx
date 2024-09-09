import styles from "@style/shop/main/product-tool-bar/FilterSaleItems.module.css";
import useURLParams from "@/hooks/useURLParams";
import { useTranslation } from "react-i18next";

const FilterSaleItems = ({ className = "" }) => {
  const { toggleParam, onsale } = useURLParams();
  const { t } = useTranslation();

  return (
    <div className={`${styles.box} ${onsale ? styles.active : ""} ${styles[className]}`}>
      <label>
        <input
          type="checkbox"
          checked={onsale === "yes"}
          onChange={() => {
            toggleParam("onsale", onsale === "yes" ? "" : "yes");
          }}
        />
        {t("shop.filterSaleItems")}
      </label>
    </div>
  );
};

export default FilterSaleItems;
