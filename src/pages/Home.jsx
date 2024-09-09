import BestSeller from "@/components/home/best-seller/BestSeller";
import BrandLogoCarousel from "@/components/home/BrandLogoCarousel";
import CategorySlider from "@/components/home/CategorySlider";
import HeroBanner from "@/components/home/HeroBanner";
import NewsletterSignupForm from "@/components/home/NewsletterSignupForm";
import ProductDeal from "@/components/home/product-deal/ProductDeal";
import PromoBanner from "@/components/home/PromoBanner";
import SecondPromoBanner from "@/components/home/SecondPromoBanner";
import ServiceFeatures from "@/components/home/ServiceFeatures";
import TrendingProducts from "@/components/home/trending-products/TrendingProducts";

const Home = () => {
  return (
    <div>
      <div style={{ background: "#f1f1f1", display: "flex", flexDirection: "column" }}>
        <CategorySlider />
        <HeroBanner />
      </div>
      <ProductDeal />
      <PromoBanner />
      <BestSeller />
      <SecondPromoBanner />
      <TrendingProducts />
      <BrandLogoCarousel />
      <NewsletterSignupForm />
      <ServiceFeatures />
    </div>
  );
};

export default Home;
