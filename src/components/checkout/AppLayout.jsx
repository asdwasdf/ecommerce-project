import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import styles from "@style/checkout/Checkout.module.css";
import BillingsDetail from "./BillingsDetail";
import OrderReview from "./OrderReview";
import Payment from "./Payment";
import { calculateTotalPrice } from "@/utils/function";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { addToOrdersUser } from "@/features/checkoutSlice";
import { useNavigate } from "react-router-dom";
import { clearCartUser } from "@/features/cartSlice";

// Breadcrumb paths for navigation
const AppLayout = () => {
  const { t } = useTranslation();

  const breadcrumb = [
    { name: t("orderReceived.breadcrumb.home"), link: "/" },
    { name: t("orderReceived.breadcrumb.checkout"), link: "" }
  ];

  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState(t("check_payments"));
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [shippingCost, setShippingCost] = useState(0);
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);
  const [loading, setLoading] = useState(false);

  const userId = useSelector((state) => state.auth.userId);

  // Redux selectors and dispatch
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  // Map cart items to the format needed for submission
  const productItems = cartItems.map((item) => ({
    id: item.id,
    name: item.name,
    count: item.count,
    price: item.discounted_price
  }));

  // Calculate total price from cart items
  const totalPrice = calculateTotalPrice(cartItems);

  // Handle checkbox change to set agreement status
  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  // Handle order placement with validation
  const handlePlaceOrder = () => {
    if (agreed) {
      handleSubmit(onSubmit, onError)();
    } else {
      toast.error(t("please_accept_terms"));
      return null;
    }
  };

  // Handle form submission
  const onSubmit = (data) => {
    if (loading || !agreed) return;
    setLoading(true);

    const item = {
      id: new Date().getTime(),
      ...data,
      day: dayjs().format("DD/MM/YYYY"),
      productItems,
      subtotal: totalPrice,
      shippingCost,
      selectedPayment
    };

    dispatch(addToOrdersUser(userId, item));

    setTimeout(() => {
      setLoading(false);
      reset();
      navigate(`/order-received/${item.id}`, { replace: -1 });
      dispatch(clearCartUser(userId));

      if (!isToastDisplayed) {
        toast.success(t("order_created_successfully"));
        setIsToastDisplayed(true);
      }
    }, 1000);
  };

  // Handle form errors
  const onError = (error) => {
    setErrors(error);
  };

  if (cartItems.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <>
      <BreadcrumbsComponent paths={breadcrumb} />
      <div className={styles.box}>
        <div className="container">
          <div style={{ width: "100%" }}>
            <div className={styles["checkout-title-container"]}>
              <h2>{t("checkout")}</h2>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className={styles["main-content"]}
              noValidate>
              <BillingsDetail register={register} errors={errors} />
              <OrderReview
                cartItems={productItems}
                totalPrice={totalPrice}
                shippingCost={shippingCost}
                setShippingCost={setShippingCost}>
                <Payment
                  loading={loading}
                  selectedPayment={selectedPayment}
                  setSelectedPayment={setSelectedPayment}
                  agreed={agreed}
                  handleCheckboxChange={handleCheckboxChange}
                  handlePlaceOrder={handlePlaceOrder}
                />
              </OrderReview>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
