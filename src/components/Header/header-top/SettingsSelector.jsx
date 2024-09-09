import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "@style/header/header-top/SettingsSelector.module.css";
import { useState } from "react";

const SettingsSelector = ({ array, width }) => {
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
  const widthCustom = { width: `${width}px` };

  return (
    <div
      className={styles.header}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}>
      <div className="">
        <a href="#" className={styles.headerText}>
          {array[0]}
          <MdOutlineKeyboardArrowDown className="" />
        </a>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <ul style={widthCustom}>
            {array.map((item, index) => (
              <li key={index}>
                <a href="#" className="">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SettingsSelector;
