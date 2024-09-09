import styles from "@style/shop/main/ActiveFiltersDisplay.module.css";
import useURLParams from "@/hooks/useURLParams";
import { useTranslation } from "react-i18next";

const ActiveFiltersDisplay = () => {
  const { minPrice, maxPrice, removeParam } = useURLParams();
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      <div>
        <h2>{t("shop.activeFilters")}</h2>
        <ul>
          {minPrice && (
            <li onClick={() => removeParam("min_price")}>
              <a>
                {t("shop.minPrice")} <span className={styles.price}>${minPrice}</span>
              </a>
            </li>
          )}
          {maxPrice && (
            <li onClick={() => removeParam("max_price")}>
              <a>
                {t("shop.maxPrice")} <span className={styles.price}>${maxPrice}</span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ActiveFiltersDisplay;
