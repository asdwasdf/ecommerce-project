import { PiShoppingCartLight } from "react-icons/pi";
import styles from "@style/header/header-sticky/ShoppingCart.module.css";
import CartIcon from "@/components/common/CartIcon";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { calculateTotalPrice } from "@/utils/function";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";

const ShoppingCart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const { loading } = useSelector((state) => state.cart);

  return (
    <div className={styles.group}>
      <a href="#" className={styles.cart} onClick={() => navigate("/cart", { replace: -1 })}>
        <PiShoppingCartLight className={styles.icon} />
        <span className={styles["cart-number"]}>{cartItems.length}</span>
        <div>
          <span className={styles.label}>{t("shoppingCart.myCart")}</span>
          <span className={styles.number}>${calculateTotalPrice(cartItems).toFixed(2)}</span>
        </div>
      </a>
      <div className={styles["cart-form"]}>
        <div className={styles["form-content"]}>
          {cartItems.length === 0 ? (
            <label>
              <CartIcon />
              <span>{t("shoppingCart.emptyCart")}</span>
            </label>
          ) : (
            <>
              <div className={styles["cart-wrapper"]}>
                <div className={styles["cart-content"]}>
                  <ul>
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
                    {cartItems.map((item) => (
                      <CartItem item={item} key={item.id} />
                    ))}
                  </ul>
                  <div className={styles["dropdown-footer"]}>
                    <div className={styles["total"]}>
                      <span className={styles["total-title"]}>{t("shoppingCart.subtotal")} :</span>{" "}
                      <span className={styles.subtotal}>
                        ${calculateTotalPrice(cartItems).toFixed(2)}
                      </span>
                    </div>
                    <button
                      className={`${styles.button} ${styles["empty-cart-button"]}`}
                      onClick={() => navigate("/cart", { replace: -1 })}>
                      {t("shoppingCart.viewCart")}
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => navigate("/checkout", { replace: -1 })}>
                      {t("shoppingCart.checkout")}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
