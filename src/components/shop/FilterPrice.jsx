import styles from "@style/shop/FilterComponent.module.css";
import useURLParams from "@/hooks/useURLParams";

const priceFilter = {
  title: "Price",
  options: [
    { label: "$500 & Under", min: 0, max: 499 },
    { label: "$500 - $999", min: 500, max: 999 },
    { label: "$1,000 - $1,999", min: 1000, max: 1999 },
    { label: "$2,000 - $5,000", min: 2000, max: 5000 },
    { label: "$5,000 & Over", min: 5000, max: Infinity }
  ]
};

const FilterPrice = () => {
  const { minPrice, maxPrice, setParam, removeParam } = useURLParams();

  const handleClick = (min, max) => {
    switch (true) {
      case min === 0:
        setParam("max_price", max);
        removeParam("min_price");
        break;
      case max === Infinity:
        setParam("min_price", min);
        removeParam("max_price");
        break;
      default:
        setParam("max_price", max);
        setParam("min_price", min);
        break;
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles["widget-title-wrapper"]}>
        <h3>{priceFilter.title}</h3>
      </div>
      <div className={styles["product-filter-by-price-wrapper"]}>
        <ul>
          {priceFilter.options.map((item, index) => (
            <li
              key={index}
              className={`${minPrice === String(item.min) || maxPrice === String(item.max) ? styles.chosen : ""}`}
              onClick={() => handleClick(item.min, item.max)}>
              <label>{item.label}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterPrice;
