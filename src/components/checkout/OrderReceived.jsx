import { useState, useEffect } from "react";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import styles from "@style/checkout/OrderReceived.module.css";
import OrderDetails from "@/components/common/OrderDetails";
import dayjs from "dayjs";
import PageNotFound from "@/pages/PageNotFound";
import { findIndex } from "@/utils/function";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import LoadingComponent from "@/components/common/LoadingComponent";

const OrderReceived = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const ordersItems = useSelector((state) => state.checkout.items);

  useEffect(() => {
    const itemIndex = findIndex(ordersItems, Number(id));
    const foundItem = itemIndex !== -1 ? ordersItems.at(itemIndex) : null;
    setItem(foundItem);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [id, ordersItems]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (!item && !loading) {
    return <PageNotFound />;
  }

  const breadcrumb = [
    { name: t("orderReceived.breadcrumb.home"), link: "/" },
    { name: t("orderReceived.breadcrumb.checkout"), link: "" }
  ];

  return (
    <>
      <BreadcrumbsComponent paths={breadcrumb} />
      <div className={styles.box}>
        <div className="container">
          <div style={{ width: "100%" }}>
            <div className={styles["checkout-title-container"]}>
              <h2>{t("orderReceived.breadcrumb.checkout")}</h2>
            </div>
            <p className={styles["thankyou-order-received"]}>
              {t("orderReceived.thankYouMessage")}
            </p>
            <ul className={styles["order-overview"]}>
              <li>
                {t("orderReceived.orderNumber")}: <strong>{item.id}</strong>
              </li>

              <li>
                {t("orderReceived.date")}: <strong>{dayjs(item.day).format("MMM D, YYYY")}</strong>
              </li>

              <li>
                {t("orderReceived.email")}: <strong>{item.email}</strong>
              </li>

              <li>
                {t("orderReceived.total")}:
                <strong>
                  <span>${item.subtotal}</span>
                </strong>
              </li>

              <li>
                {t("orderReceived.paymentMethod")}: <strong>{item.selectedPayment}</strong>
              </li>
            </ul>
            <OrderDetails item={item} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReceived;
