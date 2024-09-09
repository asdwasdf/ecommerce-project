import styles from "@style/shop/main/product-tool-bar/Options.module.css";
import { useState } from "react";
import useURLParams from "@/hooks/useURLParams";
import { PiSortAscending } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const orderbyList = [
  { title: "latest", order: "date" },
  { title: "bestSelling", order: "popularity" },
  { title: "rating", order: "rating" },
  { title: "priceLow", order: "price" },
  { title: "priceHigh", order: "price-desc" }
];

const SortOptions = () => {
  const { t } = useTranslation();
  const { orderby, setParam } = useURLParams();
  const [selected, setSelected] = useState(
    orderbyList.find((item) => item.order === orderby)?.order || orderbyList[0].order
  );

  const handleSelect = (value) => {
    if (selected !== value) {
      setParam("orderby", value);
      setSelected(value);
    }
  };

  return (
    <div className={styles.box}>
      <PiSortAscending />
      <select name="orderby" value={selected} onChange={(e) => handleSelect(e.target.value)}>
        {orderbyList.map((item, index) => (
          <option value={item.order} key={index}>
            {t(`sortOptions.${item.title}`)}
          </option>
        ))}
      </select>
      <span className={styles.label}>{t("sortOptions.sortBy")}</span>
      <ul>
        <li>
          <span className={styles["current-value"]}>
            {t(`sortOptions.${orderbyList.find((item) => item.order === selected)?.title}`)}
          </span>
          <ul className={styles.dropdown}>
            {orderbyList.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item.order)}>
                <a
                  data-orderby={item.order}
                  className={item.order === selected ? styles.current : ""}>
                  {t(`sortOptions.${item.title}`)}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SortOptions;
