import { useDispatch, useSelector } from "react-redux";
import { setCartUser, clearCartUser } from "@/features/cartSlice";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import hook useTranslation
import CartItem from "./CartItem";
import styles from "@style/shopping-cart/ShoppingCart.module.css";
import { TailSpin } from "react-loader-spinner";

const CartForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(); // Sử dụng useTranslation hook
  const cartItems = useSelector((state) => state.cart.items);

  const { loading } = useSelector((state) => state.cart);

  const [items, setItems] = useState([]);

  let userId;
  userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  const handleUpdateItemCount = (id, newCount) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, count: newCount } : item))
    );
  };

  const handleClearCart = () => {
    dispatch(clearCartUser(userId));
  };

  const handleUpdateCart = () => {
    dispatch(setCartUser(userId, items));
  };

  return (
    <div className={styles["cart-form"]}>
      <table className={styles["shop-table"]}>
        <thead>
          <tr>
            <th className={styles["product-remove"]}>
              <span className={styles["screen-reader-text"]}>{t("cartForm.removeItem")}</span>
            </th>
            <th className={styles["product-name"]}>{t("cartForm.product")}</th>
            <th className={styles["product-price"]}>{t("cartForm.price")}</th>
            <th className={styles["product-quantity"]}>{t("cartForm.quantity")}</th>
            <th className={styles["product-subtotal"]}>{t("cartForm.subtotal")}</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <div className="spinner-overlay">
              <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
              />
            </div>
          )}
          {items.map((item) => (
            <CartItem key={item.id} item={item} updateItemCount={handleUpdateItemCount} />
          ))}
          <tr>
            <td colSpan={6} className={styles.action}>
              <div className={styles.coupon}>
                <label htmlFor="coupon_code" className={styles["screen-reader-text"]}>
                  {t("cartForm.couponLabel")}
                </label>
                <input
                  type="text"
                  name="coupon_code"
                  className={styles["input-text"]}
                  id="coupon_code"
                  placeholder={t("cartForm.couponPlaceholder")}></input>
                <button className={styles.button}>{t("cartForm.applyCoupon")}</button>
              </div>
              <button className={styles.button} onClick={handleUpdateCart}>
                {t("cartForm.updateCart")}
              </button>
              <button
                className={`${styles.button} ${styles["empty-cart-button"]}`}
                onClick={handleClearCart}>
                {t("cartForm.emptyCart")}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartForm;
