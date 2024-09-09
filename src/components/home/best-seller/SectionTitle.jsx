import styles from "@style/home/best-seller/SectionTitle.module.css";

const categories = ["Smartphone", "Laptops", "iWatch", "Accessories"];

const SectionTitle = ({ category, setCategory }) => {
  const handleClick = (item) => {
    setCategory(item);
  };

  return (
    <div className={styles["list-categories"]}>
      <header>
        <h3 className={styles["heading-title"]}>Best Sellers </h3>
      </header>

      <ul className={styles["tabs"]}>
        {categories.map((item, index) => (
          <li
            className={`${styles["tab-item"]} ${category === item ? styles.current : ""}`}
            key={index}
            onClick={() => handleClick(item)}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionTitle;
