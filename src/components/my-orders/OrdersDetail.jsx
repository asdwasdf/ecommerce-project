import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import OrderDetails from "@/components/common/OrderDetails";
import PageNotFound from "@/pages/PageNotFound";
import styles from "@style/Orders.module.css";
import { findIndex } from "@/utils/function";
import { useTranslation } from "react-i18next";

const OrdersDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const ordersItems = useSelector((state) => state.checkout.items);

  const itemIndex = findIndex(ordersItems, Number(id));
  const item = itemIndex !== -1 ? ordersItems.at(itemIndex) : null;

  if (!item) {
    return <PageNotFound />;
  }

  return (
    <>
      <p className={styles.text}>
        {t("orderDetail.orderNumber")}{" "}
        <mark className={styles["order-number"]}> {item.id} &nbsp;</mark>{" "}
        {t("orderDetail.wasPlacedOn")}
        <mark className={styles["order-date"]}>
          {" "}
          &nbsp;{dayjs(item.day).format("MMM D, YYYY")}
        </mark>{" "}
        {t("orderDetail.andIsCurrently")}
        <mark className={styles["order-status"]}> &nbsp;{t("orderDetail.onHold")}</mark>.
      </p>
      <OrderDetails item={item} />
    </>
  );
};

export default OrdersDetail;
