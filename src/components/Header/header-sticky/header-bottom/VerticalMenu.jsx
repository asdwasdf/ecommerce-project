import { useTranslation } from "react-i18next";
import styles from "@style/header/header-sticky/header-bottom/VerticalMenu.module.css";
import { CiCamera, CiGift, CiHeadphones, CiLaptop, CiSpeaker } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { SlArrowDown, SlScreenSmartphone } from "react-icons/sl";
import {
  PiDeviceTabletSpeakerLight,
  PiGameControllerThin,
  PiSoccerBallThin,
  PiWatchThin
} from "react-icons/pi";
import SmartPhoneLi from "./SmartPhoneLi";
import LaptopsLi from "./LaptopsLi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const category = [
  {
    icon: <CiCamera className={styles["icon-left"]} />,
    title: "camera"
  },
  {
    icon: <CiHeadphones className={styles["icon-left"]} />,
    title: "headphones"
  },
  {
    icon: <PiGameControllerThin className={styles["icon-left"]} />,
    title: "pcGaming"
  },
  {
    icon: <PiDeviceTabletSpeakerLight className={styles["icon-left"]} />,
    title: "tablets"
  },
  {
    icon: <PiWatchThin className={styles["icon-left"]} />,
    title: "smartwatches"
  },
  {
    icon: <CiSpeaker className={styles["icon-left"]} />,
    title: "speakers"
  },
  {
    icon: <PiSoccerBallThin className={styles["icon-left"]} />,
    title: "kidElectronic"
  },
  {
    icon: <CiGift className={styles["icon-left"]} />,
    title: "techGift"
  }
];

const VerticalMenu = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className={styles["vertical-menu-wrapper"]}>
      <div className={styles["vertical-menu-heading"]}>
        <IoIosMenu className={styles["icon-menu"]} />
        <span>{t("shopCategories")}</span>
        <SlArrowDown className={styles["icon-arrow"]} />
      </div>
      <nav className={styles["vertical-menu"]}>
        <ul>
          <li onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
            <SlScreenSmartphone className={styles["icon-left"]} />
            <a href="#">
              <span>{t("smartphone")}</span>
            </a>
            <MdOutlineKeyboardArrowRight className={styles["icon-right"]} />
            {hoveredIndex === 0 && <SmartPhoneLi />}
          </li>
          <li onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
            <CiLaptop className={styles["icon-left"]} />
            <a href="#">
              <span>{t("laptops")}</span>
            </a>
            <MdOutlineKeyboardArrowRight className={styles["icon-right"]} />
            {hoveredIndex === 1 && <LaptopsLi />}
          </li>
          {category.map((data, index) => (
            <li key={index}>
              {data.icon}
              <a href="#">
                <span>{t(`${data.title}`)}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default VerticalMenu;
