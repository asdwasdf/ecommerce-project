import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import styles from "@style/checkout/OrderReceived.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const breadcrumb = [
  { name: "Home", link: "/" },
  { name: "My Orders", link: "" }
];

const MyOrders = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn)
    return (
      <>
        <BreadcrumbsComponent paths={breadcrumb} />
        <div className={styles.box}>
          <div className="container">
            <div style={{ width: "100%" }}>
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
};

export default MyOrders;
