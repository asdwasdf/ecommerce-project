import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import styles from "@style/home/BrandLogoCarousel.module.css";

import { brand } from "@/utils/constants";

const BrandLogoCarousel = () => {
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.wrapper}>
          <Swiper
            breakpoints={{
              920: {
                slidesPerView: 6
              },
              720: {
                slidesPerView: 5
              },
              604: {
                slidesPerView: 4
              },
              420: {
                slidesPerView: 3
              }
            }}
            slidesPerView={2}
            spaceBetween={10}
            modules={[Pagination]}
            className="mySwiper">
            {brand.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles["box-img"]}>
                  <img src={item} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandLogoCarousel;
