import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import ProductSummary from "@/components/product-detail/product-summary/ProductSummary";
import ProductOverview from "@/components/product-detail/product-overview/ProductOverview";
import RelatedProducts from "@/components/product-detail/product-overview/RelatedProducts";
import { PRODUCTS } from "@/data/product";
import { useParams } from "react-router-dom";
import ProductImageGallery from "./product-summary/ProductImageGallery";
import ProductInfor from "./product-summary/ProductInfor";
import Reviews from "./product-overview/Reviews";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import LoadingComponent from "@/components/common/LoadingComponent";
import PageNotFound from "@/pages/PageNotFound";

const AppLayout = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const breadcrumb = [
    { name: t("productDetail.breadcrumbs.home"), link: "/" },
    { name: t("productDetail.breadcrumbs.shop"), link: "/shop" },
    { name: product?.name, link: "" }
  ];

  useEffect(() => {
    const product = PRODUCTS.find((product) => product.id === id);
    setProduct(product);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <LoadingComponent />;
  }

  if (!product && !loading) {
    return <PageNotFound />;
  }

  return (
    <>
      <BreadcrumbsComponent paths={breadcrumb} />
      <ProductSummary>
        <ProductImageGallery
          imgs={product.images_url}
          discount={product.discount}
          hot={product.hot}
        />
        <ProductInfor
          id={id}
          img={product.images_url[0]}
          category={product.category}
          name={product.name}
          star={product.starrate}
          discount={product.discount}
          original_price={product.original_price}
          discounted_price={product.discounted_price}
        />
      </ProductSummary>
      <ProductOverview star={product.starrate}>
        <Reviews star={product.starrate} name={product.name} />
      </ProductOverview>
      <RelatedProducts
        products={PRODUCTS.slice(0, 6)}
        title={t("productDetail.relatedProducts.mayAlsoLike")}
      />
      <RelatedProducts
        products={PRODUCTS.slice(0, 6)}
        title={t("productDetail.relatedProducts.relatedProducts")}
      />
    </>
  );
};

export default AppLayout;
