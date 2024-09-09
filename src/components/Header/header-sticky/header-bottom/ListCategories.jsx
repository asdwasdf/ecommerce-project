import styles from "@style/header/header-sticky/header-bottom/ListCategories.module.css";

const ListCategories = ({ menu, title }) => {
  return (
    <div>
      <div className={styles["list-categories"]}>
        <h3 className={styles["heading-title"]}>{title}</h3>

        <ul>
          {menu.map((item) => (
            <li key={item}>
              <a href="#"> {item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListCategories;
