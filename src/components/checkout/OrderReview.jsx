import { useTranslation } from "react-i18next";
import styles from "@style/checkout/Checkout.module.css";
import Shipping from "../common/Shipping";

const OrderReview = ({ cartItems, totalPrice, shippingCost, setShippingCost, children }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["order_review"]}>
      <h3 className={styles["order_review_heading"]}>{t("orderReview.heading")}</h3>
      <table className={styles["shop_table"]}>
        <thead>
          <tr>
            <th className={styles["product-name"]}>{t("orderReview.productName")}</th>
            <th className={styles["product-total"]}>{t("orderReview.subtotal")}</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr className={styles["cart_item"]} key={item.id}>
              <td className={styles["product-name"]}>
                {item.name} x {item.count}
              </td>
              <td className={styles["product-total"]}>
                <span>${item.price * item.count}</span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className={styles["cart-subtotal"]}>
            <th>{t("orderReview.subtotal")}</th>
            <td className={styles["product-total"]}>
              <span>${totalPrice.toFixed(2)}</span>
            </td>
          </tr>
          <tr className={styles["shipping"]}>
            <th>{t("orderReview.shipping")}</th>
            <td>
              <Shipping shippingCost={shippingCost} setShippingCost={setShippingCost} />
            </td>
          </tr>
          <tr className={styles["cart-subtotal"]}>
            <th>{t("orderReview.total")}</th>
            <td className={styles["product-total"]}>
              <span>${(totalPrice + shippingCost).toFixed(2)}</span>
            </td>
          </tr>
        </tfoot>
      </table>
      {children}
    </div>
  );
};

export default OrderReview;
