import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import styles from "@style/checkout/Checkout.module.css";
import BillingsDetail from "./BillingsDetail";
import OrderReview from "./OrderReview";
import Payment from "./Payment";
import { calculateTotalPrice, handleStripe } from "@/utils/function";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { addToOrdersUser } from "@/features/checkoutSlice";
import { useNavigate } from "react-router-dom";
import { clearCartUser } from "@/features/cartSlice";
import PaymentStripe from "./PaymentStripe";
import { useStripe } from "@stripe/react-stripe-js";

const AppLayout = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedPayment, setSelectedPayment] = useState("Cash on delivery");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [shippingCost, setShippingCost] = useState(0);
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);
  const [cardElement, setCardElement] = useState(null);
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);

  const userId = useSelector((state) => state.auth.userId);
  const cartItems = useSelector((state) => state.cart.items);

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

  const handleCardElementReady = (card) => {
    setCardElement(card);
  };

  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    let error;

    if (selectedPayment === "Check payments")
      error = await handleStripe(cardElement, stripe, totalPrice);

    if (error) {
      setLoading(false);
      setErrors((prevError) => ({ ...prevError, errorStripe: error }));
      return;
    }

    if (!agreed) {
      toast.error(t("please_accept_terms"));
      setLoading(false);
      return;
    }

    handleSubmit(onSubmit, onError)();
  };

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
      navigate(`/order-received/${item.id}`, { replace: true });
      dispatch(clearCartUser(userId));

      if (!isToastDisplayed) {
        toast.success(t("order_created_successfully"));
        setIsToastDisplayed(true);
      }
    }, 1000);
  };

  const onError = (error) => {
    setErrors(error);
  };

  useEffect(() => {
    if (cartItems.length === 0) navigate("/cart");
  }, [navigate, cartItems]);

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
              <h2>{t("checkout")}</h2>
            </div>
            <form onSubmit={handlePlaceOrder} className={styles["main-content"]} noValidate>
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
                  handleCheckboxChange={handleCheckboxChange}>
                  <PaymentStripe onCardElementReady={handleCardElementReady} errors={errors} />
                </Payment>
              </OrderReview>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
