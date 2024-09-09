import styles from "@style/common/OrderDetails.module.css";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const OrderDetails = ({ item }) => {
  const { t } = useTranslation();

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  };

  const total = calculateTotalPrice(item.productItems);

  return (
    <>
      <div className={styles["order-details"]}>
        <h2>{t("orderDetails.orderDetails")}</h2>
        <table className={styles["shop_table"]}>
          <thead>
            <tr>
              <th className={styles["product-name"]}>{t("orderDetails.product")}</th>
              <th className={styles["product-total"]}>{t("orderDetails.total")}</th>
            </tr>
          </thead>
          <tbody>
            {item.productItems.map((item) => (
              <tr key={item.id}>
                <td className={styles["product-name"]}>
                  <a>{item.name} </a>
                  <strong className={styles["product-quantity"]}>× {item.count}</strong>
                </td>
                <td className={styles["product-total"]}>
                  <span>${item.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">{t("orderDetails.subtotal")}:</th>
              <td className={styles["product-total"]}>
                <span>${total}</span>
              </td>
            </tr>
            <tr>
              <th scope="row">{t("orderDetails.shipping")}:</th>
              {item.shippingCost === 0 && <td>{t("orderDetails.freeShipping")}</td>}
              {item.shippingCost === 5.0 && <td>{t("orderDetails.localPickup")}</td>}
              {item.shippingCost === 10.0 && <td>{t("orderDetails.flatRate")}</td>}
            </tr>
            <tr>
              <th scope="row">{t("orderDetails.paymentMethod")}:</th>
              <td>{item.selectedPayment}</td>
            </tr>
            <tr>
              <th scope="row">{t("orderDetails.subtotal")}:</th>
              <td className={styles["product-total"]}>
                <span>${total}</span>
              </td>
            </tr>
            {item.order_comments && (
              <tr>
                <th>{t("orderDetails.note")}:</th>
                <td>{item.order_comments}</td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
      <div className={styles["customer-details"]}>
        <div className={styles["billing-address"]}>
          <h2>{t("orderDetails.billingAddress")}</h2>
          <address>
            {item.first_name} {item.last_name}
            <br />
            {item.company}
            <br />
            {item.address_1}
            {item.address_2 && (
              <>
                <br />
                {item.address_2}
              </>
            )}
            <br />
            {item.city} {item.postcode}
            <br />
            <p className={styles["customer-details"]}>
              <FiPhone />
              {item.phone}
            </p>
            <p className={styles["customer-details"]}>
              <MdOutlineEmail />
              {item.email}
            </p>
          </address>
        </div>
        <div className={styles["billing-address"]}>
          <h2>{t("orderDetails.billingAddress")}</h2>
          <address>
            {item.first_name} {item.last_name}
            <br />
            {item.company}
            <br />
            {item.address_1}
            {item.address_2 && (
              <>
                <br />
                {item.address_2}
              </>
            )}
            <br />
            {item.city} {item.postcode}
            <br />
          </address>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
