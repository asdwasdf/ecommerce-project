import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import styles from "@style/header/header-sticky/header-bottom/HeaderBottom.module.css";
import VerticalMenu from "./VerticalMenu";
import HomeMenuDrop from "./HomeMenuDrop";
import LaptopsMenuDrop from "./LaptopsMenuDrop";
import SmartphoneMenuDrop from "./SmartphoneMenuDrop";
import HeadphonesMenuDrop from "./HeadphonesMenuDrop";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const menuItems = [
  { name: "home", Component: HomeMenuDrop },
  { name: "laptops", Component: LaptopsMenuDrop },
  { name: "smartphone", Component: SmartphoneMenuDrop },
  { name: "headphone", Component: HeadphonesMenuDrop }
];

const HeaderBottom = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const getTotalItems = (items) => items.length;

  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <>
      <div className={styles["header-left"]}>
        <div className={styles["menu-wrapper"]}>
          <VerticalMenu />
          <div className={styles["ts-menu"]}>
            <nav>
              <ul className={styles.menu}>
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={styles.item}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigate("shop", { replace: -1 })}>
                    <a>
                      {t(`headerBottom.${item.name}`)}
                      {"  "}
                      <SlArrowDown className={styles["menu-drop-icon"]} />
                    </a>
                    {hoveredIndex === index && (
                      <div className={styles.submenu}>
                        <item.Component />
                      </div>
                    )}
                  </li>
                ))}
                <li>
                  <a>{t("headerBottom.camera")}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles["header-right"]}>
        <div className={`${styles["my-wishlist-wrapper"]} relative`}>
          <a>
            <CiHeart
              className={styles["icon-heart"]}
              onClick={() => navigate("wishlist", { replace: -1 })}
            />
            <span className={styles["count-number"]}>{getTotalItems(wishlistItems)}</span>
          </a>
        </div>
        <div className={styles["today-deal"]}>
          <div>
            <span className={styles.text}>{t("headerBottom.todaysDeal")}</span>
            <span className={styles.label}>{t("headerBottom.hotLabel")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBottom;
