import styles from "@style/product-detail/product-overview/RelatedProducts.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import ProductCard from "@/components/common/ProductCard";

const RelatedProducts = ({ products, title }) => {
  return (
    <div className={styles.box}>
      <div className="container">
        <div style={{ width: "100%" }}>
          <h2>{title}</h2>
          <Swiper
            spaceBetween={5}
            breakpoints={{
              1278: {
                slidesPerView: 5
              },
              768: {
                slidesPerView: 4
              },
              640: {
                slidesPerView: 3
              }
            }}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className={`mySwiper product-related`}>
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
