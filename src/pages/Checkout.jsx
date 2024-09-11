import AppLayout from "@/components/checkout/AppLayout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51PkKfbRwVyIWtO1HYzDX6OwUarspXx7si9tLlPUddPxPps1O9TnfpemTNZ8kYSc4G28YbKL6CxfuWIPkjrrhCGoV000To7CYS7"
);

const Checkout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn)
    return (
      <Elements stripe={stripePromise}>
        <AppLayout />;
      </Elements>
    );
};

export default Checkout;
