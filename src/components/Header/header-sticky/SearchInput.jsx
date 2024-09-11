import styles from "@style/header/header-sticky/SearchInput.module.css";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ searchItem, handleInputChange, setOpenSearchSidebar }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/shop?search=${encodeURIComponent(searchItem)}`);
    handleInputChange("");
  };

  return (
    <div className={styles.searchField}>
      <input
        type="text"
        placeholder={t("searchInput.placeholder")}
        value={searchItem}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button className={styles.laptops} onClick={handleSearch}>
        {t("searchInput.search_button")}
      </button>
      <button
        className={styles.mobile}
        onClick={() => {
          handleSearch();
          setOpenSearchSidebar(false);
        }}>
        <CiSearch className={styles.icon} />
      </button>
    </div>
  );
};

export default SearchInput;
