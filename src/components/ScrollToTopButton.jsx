import styles from "@style/ScrollToTopButton.module.css";
import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`${styles["scroll-button"]} ${isVisible ? styles.on : ""}`}
      onClick={scrollToTop}>
      <IoIosArrowRoundUp className={styles.icon} />
    </div>
  );
};

export default ScrollToTopButton;
