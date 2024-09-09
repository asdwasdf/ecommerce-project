import styles from "@style/wishlist/TableWishlist.module.css";
import WishlistItem from "./WishlistItem";
import WishlistItemMobile from "./WishlistItemMobile";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next"; // Import useTranslation

const TableWishlist = () => {
  const { t } = useTranslation(); // Sử dụng useTranslation hook

  // Retrieve wishlist items from Redux store
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <>
      {/* Desktop Table View */}
      <table className={`${styles["wishlist-table"]} ${styles.desktop}`}>
        <thead>
          <tr>
            {/* Column Headers */}
            <th className={styles["product-remove"]}>
              <span className={styles["nobr"]}></span>
            </th>
            <th className={styles["product-thumbnail"]}></th>
            <th className={styles["product-name"]}>
              <span className={styles["nobr"]}>{t("wishlist.productName")}</span>
            </th>
            <th className={styles["product-price"]}>
              <span className={styles["nobr"]}>{t("wishlist.unitPrice")}</span>
            </th>
            <th className={styles["product-stock-status"]}>
              <span className={styles["nobr"]}>{t("wishlist.stockStatus")}</span>
            </th>
            <th className={styles["product-add-to-cart"]}>
              <span className={styles["nobr"]}></span>
            </th>
          </tr>
        </thead>
        <tbody className={styles["wishlist-items-wrapper"]}>
          {/* Display message or wishlist items */}
          {wishlistItems.length === 0 ? (
            <tr className={styles.empty}>
              <td colSpan={6} className={styles["wishlist-empty"]}>
                {t("wishlist.noProducts")}
              </td>
            </tr>
          ) : (
            wishlistItems.map((item) => <WishlistItem key={item.id} {...item} />)
          )}
        </tbody>
      </table>

      {/* Mobile List View */}
      <ul className={`${styles["wishlist-table"]} ${styles.mobile}`}>
        {wishlistItems.length === 0 ? (
          <p className={styles["wishlist-empty"]}>{t("wishlist.noProducts")}</p>
        ) : (
          wishlistItems.map((item) => <WishlistItemMobile key={item.id} {...item} />)
        )}
      </ul>
    </>
  );
};

export default TableWishlist;
