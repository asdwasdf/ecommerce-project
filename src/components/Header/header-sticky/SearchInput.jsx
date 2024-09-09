import styles from "@style/header/header-sticky/SearchInput.module.css";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next"; // Import i18n

const SearchInput = ({ searchItem, handleInputChange }) => {
  const { t } = useTranslation(); // Sử dụng i18n

  const handleSearch = () => {
    const newUrl = `/shop?search=${encodeURIComponent(searchItem)}`;
    window.location.href = newUrl;
  };

  return (
    <div className={styles.searchField}>
      <input
        type="text"
        placeholder={t("searchInput.placeholder")} // Sử dụng i18n cho placeholder
        value={searchItem}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button className={styles.laptops} onClick={handleSearch}>
        {t("searchInput.search_button")}
      </button>
      <button className={styles.mobile} onClick={handleSearch}>
        <CiSearch className={styles.icon} />
      </button>
    </div>
  );
};

export default SearchInput;
