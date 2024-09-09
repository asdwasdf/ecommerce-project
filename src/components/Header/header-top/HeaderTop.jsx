import SettingsSelector from "./SettingsSelector";
import { FcFlashOn } from "react-icons/fc";
import styles from "@style/header/header-top/HeaderTop.module.css";
import { currency } from "@/utils/constants";
import SelectorLanguage from "./SelectorLanguage";
import { useTranslation } from "react-i18next";

const HeaderTop = () => {
  const { t } = useTranslation(); // Sử dụng hook useTranslation

  const menuItems = [t("track_order"), t("about"), t("contact"), t("blog")];

  return (
    <div className={styles.headerTop}>
      <div className="container">
        <div className={styles.headerLeft}>
          <SelectorLanguage />
          <SettingsSelector array={currency} width={115} />
          <div className={styles.shippingInfo}>{t("free_shipping")}</div>
        </div>
        <div className={styles.headerRight}>
          <nav>
            <ul className={styles.menu}>
              <li>
                <a href="#" className={styles.headerText} aria-label={t("flash_sale")}>
                  <FcFlashOn className={styles.icon} /> {t("flash_sale")}
                </a>
              </li>
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a href="#" className={styles.text}>
                    {menuItem}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
