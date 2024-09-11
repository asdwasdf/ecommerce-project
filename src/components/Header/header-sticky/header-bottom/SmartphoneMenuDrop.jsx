import { useTranslation } from "react-i18next";
import styles from "@style/header/header-sticky/header-bottom/SmartphoneMenuDrop.module.css";
import ListCategories from "./ListCategories";
import useWindowWidth from "@/hooks/useWindowWidth";

const SmartphoneMenuDrop = () => {
  const { t } = useTranslation();
  const width = useWindowWidth();

  // Manually create translated menu items
  const menu = [
    {
      title: t("smartphoneMenuDrop.computersAndTablets"),
      links: [
        t("smartphoneMenuDrop.laptopsAndDesktops"),
        t("smartphoneMenuDrop.tablets"),
        t("smartphoneMenuDrop.monitors"),
        t("laptops"),
        t("smartphoneMenuDrop.accessories"),
        t("smartphoneMenuDrop.computerComponent"),
        t("smartphoneMenuDrop.pcGaming")
      ]
    },
    {
      title: t("smartphoneMenuDrop.cellPhone"),
      links: [
        t("smartphoneMenuDrop.smartphone"),
        t("smartphoneMenuDrop.att"),
        t("smartphoneMenuDrop.iphone"),
        t("smartphoneMenuDrop.prepaidPhones"),
        t("smartphoneMenuDrop.samsungGalaxy"),
        t("smartphoneMenuDrop.unlockedPhones"),
        t("smartphoneMenuDrop.verizon")
      ]
    }
  ];

  return (
    <div className={styles.box} style={{ width: `${width - 100}px` }}>
      <ul className={styles.submenu}>
        <li>
          <div>
            {menu.map((item) => (
              <ListCategories key={item.title} title={item.title} menu={item.links} />
            ))}
            <div className={styles["ts-banner"]}>
              <div className={styles["banner-wrapper"]}>
                <div className={styles["box-content"]}>
                  <h2>{t("smartphoneMenuDrop.appleWatchDeals")}</h2>
                  <div>{t("smartphoneMenuDrop.upToOff")}</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SmartphoneMenuDrop;
