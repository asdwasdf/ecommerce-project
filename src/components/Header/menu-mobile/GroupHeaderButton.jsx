import styles from "@style/header/menu-mobile/GroupHeaderButton.module.css";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import MenuMobileWrapper from "./MenuMobileWrapper";
import { useState } from "react";
import VerticalMenu from "./VerticalMenu";
import { SlArrowLeft } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import SettingsSelector from "../header-top/SettingsSelector";
import { currency } from "@/utils/constants";
import SelectorLanguage from "../header-top/SelectorLanguage";
import { PiHeadsetLight } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const GroupHeaderButton = ({ toggleGroupHeader }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickIndex, setClickIndex] = useState(null);
  const [title, setTitle] = useState("");

  const { t } = useTranslation();

  const handleClickSubMenu = (index) => setClickIndex(index);

  const handleClick = (index) => {
    setActiveIndex(index);
    handleClickSubMenu(null);
    handleTitle("");
  };

  const handleTitle = (title) => {
    setTitle(title);
  };

  return (
    <div className={styles.content}>
      <div className={styles["sidebar-content"]}>
        <ul className={styles["tab-mobile-menu"]}>
          <li
            className={`${styles["main-menu"]} ${activeIndex === 0 ? styles.active : ""}`}
            onClick={() => handleClick(0)}>
            <IoIosMenu />
          </li>
          <li
            className={`${styles["vertical-menu"]} ${activeIndex === 1 ? styles.active : ""}`}
            onClick={() => handleClick(1)}>
            <span>{t("shop_categories")}</span> {/* Sử dụng t */}
          </li>
          <li className={styles["close"]} onClick={() => toggleGroupHeader(false)}>
            <IoIosClose />
          </li>
        </ul>
        {title !== "" && (
          <h6
            className={styles["menu-title"]}
            onClick={() => {
              handleClickSubMenu(null);
              handleTitle("");
            }}>
            <SlArrowLeft />
            <span>{title}</span>
          </h6>
        )}
        <div className={styles["mobile-menu-wrapper"]}>
          <div className={styles["menu-main-mobile"]}>
            <nav>
              {activeIndex === 0 && (
                <MenuMobileWrapper
                  clickIndex={clickIndex}
                  handleClickSubMenu={handleClickSubMenu}
                  handleTitle={handleTitle}
                />
              )}
              {activeIndex === 1 && (
                <VerticalMenu
                  handleTitle={handleTitle}
                  clickIndex={clickIndex}
                  handleClickSubMenu={handleClickSubMenu}
                />
              )}
            </nav>
          </div>
        </div>
        <div className={styles["group-button-header"]}>
          <div className={styles["meta-bottom"]}>
            <div className={`${styles["my-wishlist-wrapper"]} relative`}>
              <a href="#">
                <CiHeart className={styles["icon-heart"]} />
                <span className={styles["count-number"]}>0</span>
              </a>
            </div>
            <div className={styles["today-deal"]}>
              <div>
                <span className={styles.text}>{t("todays_deal")}</span>
                <span className={styles.label}>{t("hot")}</span>
              </div>
            </div>
          </div>
          <div className={styles["meta-bottom"]}>
            <SelectorLanguage />
            <SettingsSelector array={currency} width={115} />
            <div className={styles.hotline}>
              <PiHeadsetLight className={styles.icon} />
              <div className={styles.flex}>
                <span className={styles.number}>+08 9229 8228</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupHeaderButton;
