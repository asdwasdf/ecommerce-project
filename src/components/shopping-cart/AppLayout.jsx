import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import styles from "@style/shopping-cart/ShoppingCart.module.css";
import CartForm from "./CartForm";
import { PRODUCTS } from "@/data/product";
import CartCollaterals from "./CartCollaterals";
import RelatedProducts from "@/components/product-detail/product-overview/RelatedProducts";
import CartIcon from "../common/CartIcon";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppLayout = () => {
  const { t } = useTranslation();

  const breadcrumb = [
    { name: t("shopping.home"), link: "/" },
    { name: t("shopping.shoppingCart"), link: "/cart" }
  ];

  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <>
      <BreadcrumbsComponent paths={breadcrumb} />
      <div className={styles.box}>
        <div className="container">
          <div style={{ width: "100%" }}>
            <div className={styles["cart-title-container"]}>
              <h2>{t("shopping.title")}</h2>
            </div>
            {cartItems.length === 0 ? (
              <div className={styles["cart-empty"]}>
                <CartIcon />
                {t("shopping.emptyMessage")}
                <div
                  className={`${styles.button} ${styles["button-empty"]}`}
                  onClick={() => navigate("/shop")}>
                  {t("shopping.returnToShop")}
                </div>
              </div>
            ) : (
              <>
                <div className={styles["main-content"]}>
                  <CartForm />
                  <CartCollaterals />
                  <div className={styles["cross-sells"]}>
                    <RelatedProducts
                      products={PRODUCTS.slice(0, 6)}
                      title={t("shopping.relatedProductsTitle")}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
