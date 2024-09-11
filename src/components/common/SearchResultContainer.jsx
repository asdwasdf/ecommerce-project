import styles from "@style/common/SearchResultContainer.module.css";
import StarRatings from "react-star-ratings";
import { filterSearchResults } from "@/utils/function";
import HighlightedText from "./HighlightedText";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

const SearchResultContainer = ({ query, className, handleInputChange }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const products = filterSearchResults(query);
  const [loading, setLoading] = useState(true);

  const handleSearch = () => {
    handleInputChange("");
    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [query, loading]);

  return (
    <>
      <div className={`${styles.box} ${styles[className]}`}>
        {loading ? (
          <div className="spinner-container">
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#000"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className={styles["search-content"]}>
            {products.length !== 0 ? (
              <>
                <ul className={styles["product_list_widget"]}>
                  {products.slice(0, 6).map((item, index) => (
                    <li key={index}>
                      <div className={styles["thumbnail"]}>
                        <img src={`${item.images_url[0]}-400x400.jpg`} alt={item.name} />
                      </div>
                      <div className={styles.meta}>
                        <a
                          href="#"
                          className={styles.title}
                          onClick={() => {
                            handleInputChange("");
                            navigate(`/shop/${item.id}`, { replace: -1 });
                          }}>
                          <HighlightedText text={item.name} highlight={query} />
                        </a>
                        <div className={styles["product-price"]}>
                          <span>${item.discounted_price}</span>
                          {item.original_price > 0 && <span>${item.original_price}</span>}
                        </div>
                        {item.starrate > 0 && (
                          <StarRatings
                            rating={item.starrate}
                            starRatedColor="#ffd700"
                            numberOfStars={5}
                          />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className={styles["view-all-wrapper"]} onClick={handleSearch}>
                  <a href="#">{t("searchResult.viewAll", { count: products.length })}</a>
                </div>
              </>
            ) : (
              <p>{t("searchResult.noProductsFound")}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResultContainer;
