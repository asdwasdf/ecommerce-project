import styles from "@style/shop/main/product-tool-bar/Options.module.css";
import useURLParams from "@/hooks/useURLParams";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const per_page = [
  { title: 20, perPage: 20 },
  { title: 40, perPage: 40 },
  { title: 60, perPage: 60 },
  { title: 80, perPage: 80 }
];

const ShowOptions = () => {
  const { perPage, setParam } = useURLParams();
  const { t } = useTranslation();

  const [selected, setSelected] = useState(
    per_page.find((item) => item.perPage === +perPage)?.title || per_page[0].title
  );

  const handleSelect = (item) => {
    if (selected !== item.title) {
      setParam("per_page", item.perPage);
      setSelected(item.title);
    }
  };

  return (
    <div className={`${styles.box} ${styles.show}`}>
      <span className={styles.label}>{t("showOptions.show")}</span>
      <ul>
        <li>
          <span className={styles["current-value"]}>{selected}</span>
          <ul className={styles["dropdown"]}>
            {per_page.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                <a className={item.title === selected ? styles.current : ""}>{item.title}</a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ShowOptions;
