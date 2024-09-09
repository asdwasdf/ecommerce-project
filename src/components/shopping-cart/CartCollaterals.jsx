import styles from "@style/shopping-cart/CartCollaterals.module.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { calculateTotalPrice } from "@/utils/function";
import { useSelector } from "react-redux";
import { useState } from "react";
import Shipping from "../common/Shipping";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CartCollaterals = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const [shippingCost, setShippingCost] = useState(0);

  const totalPrice = calculateTotalPrice(cartItems) + shippingCost;

  return (
    <div className={styles.box}>
      <div className={styles["cart_totals"]}>
        <h2>{t("CartCollaterals.cartTotals")}</h2>
        <table className={styles["shop_table"]}>
          <tbody>
            <tr className={styles["cart-subtotal"]}>
              <th>{t("CartCollaterals.subtotal")}</th>
              <td className={styles["Subtotal"]}>
                <span>${calculateTotalPrice(cartItems).toFixed(2)}</span>
              </td>
            </tr>
            <tr className={styles["shipping"]}>
              <th>{t("CartCollaterals.shipping")}</th>
              <td>
                <Shipping shippingCost={shippingCost} setShippingCost={setShippingCost} />
                <p>{t("CartCollaterals.shippingInfo")}</p>
                <div className={styles["shipping-calculator-button"]}>
                  <CiDeliveryTruck />
                  <span>{t("CartCollaterals.calculateShipping")}</span>
                </div>
              </td>
            </tr>
            <tr className={styles["cart-subtotal"]}>
              <th>{t("CartCollaterals.total")}</th>
              <td className={styles["Subtotal"]}>
                <span>${totalPrice.toFixed(2)}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.checkout}>
          <button className={styles.button} onClick={() => navigate("/checkout")}>
            {t("CartCollaterals.proceedToCheckout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCollaterals;
