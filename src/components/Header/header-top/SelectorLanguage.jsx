import { languages } from "@/utils/constants";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "@style/header/header-top/SettingsSelector.module.css";

const SelectorLanguage = () => {
  const [language, setLanguage] = useState(languages[0].title);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const widthCustom = { width: `${140}px` };

  const { i18n } = useTranslation();

  const changeLanguage = (lng, title) => {
    setLanguage(title);
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div
      className={styles.header}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}>
      <div className="">
        <a href="#" className={styles.headerText}>
          {language}
          <MdOutlineKeyboardArrowDown className="" />
        </a>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <ul style={widthCustom}>
            {languages.map((item, index) => (
              <li key={index} onClick={() => changeLanguage(item.lng, item.title)}>
                <a href="#" className="">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectorLanguage;
