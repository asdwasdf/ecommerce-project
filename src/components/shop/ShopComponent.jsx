import styles from "@style/shop/ShopComponent.module.css";
import CategorySlider from "@/components/shop/CategorySlider";
import PageContainer from "./PageContainer";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import useURLParams from "@/hooks/useURLParams";
import { useTranslation } from "react-i18next";

const ShopComponent = () => {
  const { querySearch } = useURLParams();
  const { t } = useTranslation();

  const breadcrumb =
    querySearch !== null
      ? [
          { name: t("shop.home"), link: "/" },
          { name: t("shop.shop"), link: "shop" },
          { name: t("shop.searchResults", { query: querySearch }), link: "" }
        ]
      : [
          { name: t("shop.home"), link: "/" },
          { name: t("shop.shop"), link: "" }
        ];

  return (
    <>
      <BreadcrumbsComponent paths={breadcrumb} />
      <div className={styles.content}>
        <div className="container">
          <div>
            <h1 className={styles["heading-title"]}>
              {querySearch !== null
                ? t("shop.searchResults", { query: querySearch })
                : t("shop.shopTitle")}
            </h1>
            {querySearch === null && <CategorySlider />}
            <PageContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopComponent;
