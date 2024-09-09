import styles from "@style/shop/FilterComponent.module.css";

const FilterComponent = ({ title, options }) => {
  return (
    <div className={styles.box}>
      <div className={styles["widget-title-wrapper"]}>
        <h3>{title}</h3>
      </div>
      <div className={styles["product-filter-by-price-wrapper"]}>
        <ul>
          {options.map((item, index) => (
            <li key={index}>
              <label>
                {item.name}
                <span className={styles.count}>({item.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;
