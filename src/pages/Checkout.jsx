import AppLayout from "@/components/checkout/AppLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) return <AppLayout />;
};

export default Checkout;
