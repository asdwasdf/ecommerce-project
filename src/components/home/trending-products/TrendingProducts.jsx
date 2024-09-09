import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import styles from "@style/home/trending-products/TrendingProduct.module.css";
import TrendingProductsCard from "./TrendingProductsCard";
import { trendingProducts } from "@/utils/constants";

const TrendingProducts = () => {
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles["wrapper"]}>
          <div className={styles["shortcode-heading-wrapper"]}>
            <h3>Trending Products</h3>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={{
                clickable: true
              }}
              breakpoints={{
                1279: {
                  slidesPerView: 3
                },
                600: {
                  slidesPerView: 2
                }
              }}
              modules={[Pagination]}
              className="mySwiper product grid">
              {trendingProducts.map((products, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.box}>
                    {products.map((item, index) => (
                      <TrendingProductsCard key={index} {...item} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
