import styles from "@style/Orders.module.css";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Orders = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const ordersItems = useSelector((state) => state.checkout.items);

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.count, 0);
  };

  const calculateCount = (items) => {
    return items.reduce((count, item) => count + item.count, 0);
  };

  return (
    <>
      <div className={styles["checkout-title-container"]}>
        <h2>{t("orders.myOrders")}</h2>
      </div>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th className={styles["header"]}>
              <span className="nobr">{t("orders.order")}</span>
            </th>
            <th className={styles["header"]}>
              <span className="nobr">{t("orders.date")}</span>
            </th>
            <th className={styles["header"]}>
              <span className="nobr">{t("orders.status")}</span>
            </th>
            <th className={styles["header"]}>
              <span className="nobr">{t("orders.total")}</span>
            </th>
            <th className={styles["header"]}>
              <span className="nobr">{t("orders.actions")}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {ordersItems.map((item) => (
            <tr key={item.id}>
              <td>
                <a>#{item.id}</a>
              </td>
              <td>{dayjs(item.day).format("MMM D, YYYY")}</td>
              <td>{t("orders.onHold")}</td>
              <td>
                <span className={styles.amount}>
                  ${calculateTotalPrice(item.productItems)} &nbsp;
                </span>
                {t("orders.for")}&nbsp;{calculateCount(item.productItems)}&nbsp;
                {t("orders.item")}
              </td>
              <td>
                <a
                  className={styles.button}
                  onClick={() => navigate(`${item.id}`, { replace: -1 })}>
                  {t("orders.view")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Orders;
