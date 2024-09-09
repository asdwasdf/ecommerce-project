import { useTranslation } from "react-i18next";
import styles from "@style/header/header-sticky/header-bottom/SmartPhoneLi.module.css";
import ListCategories from "./ListCategories";

const SmartPhoneLi = () => {
  const { t } = useTranslation();

  const menu1 = [
    t("smartPhoneLi.laptopsAndDesktops"),
    t("smartPhoneLi.tablets"),
    t("smartPhoneLi.monitors"),
    t("smartPhoneLi.laptops"),
    t("smartPhoneLi.accessories"),
    t("smartPhoneLi.drones")
  ];

  const menu2 = [
    t("smartPhoneLi.smartphone"),
    t("smartPhoneLi.att"),
    t("smartPhoneLi.iphone"),
    t("smartPhoneLi.prepaidPhones"),
    t("smartPhoneLi.samsungGalaxy"),
    t("smartPhoneLi.unlockedPhones")
  ];

  const menu3 = [
    t("smartPhoneLi.camera"),
    t("smartPhoneLi.accessories"),
    t("smartPhoneLi.cameraAndLenses"),
    t("smartPhoneLi.drones")
  ];

  const menu4 = [
    t("smartPhoneLi.television"),
    t("smartPhoneLi.55InchTvs"),
    t("smartPhoneLi.65InchTvs"),
    t("smartPhoneLi.oledTvs")
  ];

  return (
    <ul className={styles["submenu"]}>
      <li>
        <div>
          <div className={styles["flex-col"]}>
            <ListCategories menu={menu1} title={t("smartPhoneLi.computersAndTablets")} />
            <ListCategories menu={menu3} title={t("smartPhoneLi.cellPhone")} />
          </div>

          <div className={styles["flex-col"]}>
            <ListCategories menu={menu2} title={t("smartPhoneLi.camera")} />
            <ListCategories menu={menu4} title={t("smartPhoneLi.tvAndHomeTheater")} />
          </div>
          <div className={styles["ts-banner"]}>
            <div className={styles["banner-wrapper"]}>
              <div className={styles["box-content"]}>
                <div>{t("smartPhoneLi.topBrands")}</div>
                <h2>{t("smartPhoneLi.saleOff")}</h2>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SmartPhoneLi;
