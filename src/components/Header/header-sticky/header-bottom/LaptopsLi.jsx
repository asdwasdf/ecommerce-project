import { useTranslation } from "react-i18next";
import styles from "@style/header/header-sticky/header-bottom/LaptopsLi.module.css";

const LaptopsLi = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.submenu}>
      <li>
        <div>
          <div className={styles["list-categories"]}>
            <ul className={styles.menu}>
              <li>
                <a href="#">{t("laptopsLi.laptopsAndDesktops")} </a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.accessories")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.chromebook")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.computerComponent")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.desktops")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.imac")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.laptops")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.macbook")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.monitors")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.pcGaming")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.printersAndInk")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.restoredComputers")}</a>
              </li>
              <li>
                <a href="#">{t("laptopsLi.windowsLaptops")}</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default LaptopsLi;
