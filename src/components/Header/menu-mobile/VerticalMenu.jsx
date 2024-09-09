import styles from "@style/header/menu-mobile/VerticalMenu.module.css";
import { CiCamera, CiGift, CiHeadphones, CiLaptop, CiSpeaker } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  PiDeviceTabletSpeakerLight,
  PiGameControllerThin,
  PiSoccerBallThin,
  PiWatchThin
} from "react-icons/pi";
import { SlScreenSmartphone } from "react-icons/sl";
import LaptopsLi from "../header-sticky/header-bottom/LaptopsLi";
import SmartPhoneLi from "../header-sticky/header-bottom/SmartPhoneLi";
import { useTranslation } from "react-i18next";

const category = [
  {
    icon: <CiCamera className={styles["icon-left"]} />,
    title: "menu_camera"
  },
  {
    icon: <CiHeadphones className={styles["icon-left"]} />,
    title: "menu_headphones"
  },
  {
    icon: <PiGameControllerThin className={styles["icon-left"]} />,
    title: "menu_pc_gaming"
  },
  {
    icon: <PiDeviceTabletSpeakerLight className={styles["icon-left"]} />,
    title: "menu_tablets"
  },
  {
    icon: <PiWatchThin className={styles["icon-left"]} />,
    title: "menu_smartwatches"
  },
  {
    icon: <CiSpeaker className={styles["icon-left"]} />,
    title: "menu_speakers"
  },
  {
    icon: <PiSoccerBallThin className={styles["icon-left"]} />,
    title: "menu_kid_electronic"
  },
  {
    icon: <CiGift className={styles["icon-left"]} />,
    title: "menu_tech_gift"
  }
];

const VerticalMenu = ({ clickIndex, handleClickSubMenu, handleTitle }) => {
  const { t } = useTranslation();

  return (
    <ul className={styles.menu}>
      <li
        onClick={() => {
          handleClickSubMenu(0);
          handleTitle(t("menu_smartphone"));
        }}>
        <SlScreenSmartphone className={styles["icon-left"]} />
        <a href="#">
          <span>{t("menu_smartphone")}</span>
        </a>
        <MdOutlineKeyboardArrowRight className={styles["icon-right"]} />
        {clickIndex === 0 && <SmartPhoneLi />}
      </li>
      <li
        onClick={() => {
          handleClickSubMenu(1);
          handleTitle(t("menu_laptops"));
        }}>
        <CiLaptop className={styles["icon-left"]} />
        <a href="#">
          <span>{t("menu_laptops")}</span>
        </a>
        <MdOutlineKeyboardArrowRight className={styles["icon-right"]} />
        {clickIndex === 1 && <LaptopsLi />}
      </li>
      {category.map((data, index) => (
        <li key={index}>
          {data.icon}
          <a href="#">
            <span>{t(data.title)}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default VerticalMenu;
