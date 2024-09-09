import { useTranslation } from "react-i18next";
import styles from "@style/shop/SearchNoResult.module.css";
import { useState } from "react";
import { CiFaceFrown, CiSearch } from "react-icons/ci";

const SearchNoResult = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const newUrl = `/shop?search=${encodeURIComponent(query)}`;
    window.location.href = newUrl;
  };

  return (
    <div className={styles.box}>
      <div className={styles["search-no-results-wrapper"]}>
        <CiFaceFrown />
        <p>{t("noProductsFound")}</p>
        <p>{t("checkSpellingOrTryDifferentWords")}</p>
        <div className={styles["search-table"]}>
          <div className={styles["search-field"]}>
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={styles["search-button"]} onClick={handleSearch}>
            <CiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNoResult;
