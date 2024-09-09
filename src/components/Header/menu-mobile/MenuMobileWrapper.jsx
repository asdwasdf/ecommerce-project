import styles from "@style/header/menu-mobile/MenuMobileWrapper.module.css";
import HomeMenuDrop from "../header-sticky/header-bottom/HomeMenuDrop";
import LaptopsMenuDrop from "../header-sticky/header-bottom/LaptopsMenuDrop";
import SmartphoneMenuDrop from "../header-sticky/header-bottom/SmartphoneMenuDrop";
import HeadphonesMenuDrop from "../header-sticky/header-bottom/HeadphonesMenuDrop";
import { SlArrowDown } from "react-icons/sl";
import { useTranslation } from "react-i18next";

const menuItems = [
  { name: "menu_home", Component: HomeMenuDrop },
  { name: "menu_laptops", Component: LaptopsMenuDrop },
  { name: "menu_smartphone", Component: SmartphoneMenuDrop },
  { name: "menu_headphone", Component: HeadphonesMenuDrop }
];

const MenuMobileWrapper = ({ clickIndex, handleClickSubMenu, handleTitle }) => {
  const { t } = useTranslation();

  return (
    <ul className={styles.menu}>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={styles.item}
          onClick={() => {
            handleClickSubMenu(index);
            handleTitle(t(item.name));
          }}>
          <a href="#">{t(`${item.name}`)}</a>
          <SlArrowDown className={styles["menu-drop-icon"]} />
          {clickIndex === index && (
            <div className={styles.submenu}>
              <item.Component />
            </div>
          )}
        </li>
      ))}
      <li>
        <a href="#">{t("menu_camera")}</a>
      </li>
    </ul>
  );
};

export default MenuMobileWrapper;
