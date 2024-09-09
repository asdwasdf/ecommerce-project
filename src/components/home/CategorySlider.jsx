import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import styles from "@style/home/CategorySlider.module.css";
import { CiCamera, CiHeadphones, CiSpeaker } from "react-icons/ci";
import { PiDeviceTabletSpeakerLight, PiGameControllerThin } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const category = [
  {
    icon: <CiCamera className={styles["icon-left"]} />,
    titleKey: "categories.camera"
  },
  {
    icon: <CiHeadphones className={styles["icon-left"]} />,
    titleKey: "categories.headphones"
  },
  {
    icon: <PiGameControllerThin className={styles["icon-left"]} />,
    titleKey: "categories.gamers"
  },
  {
    icon: <PiDeviceTabletSpeakerLight className={styles["icon-left"]} />,
    titleKey: "categories.tablets"
  },
  {
    icon: <CiSpeaker className={styles["icon-left"]} />,
    titleKey: "categories.speakers"
  },
  {
    icon: <CiCamera className={styles["icon-left"]} />,
    titleKey: "categories.camera"
  },
  {
    icon: <CiHeadphones className={styles["icon-left"]} />,
    titleKey: "categories.headphones"
  }
];

const CategorySlider = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["slider"]}>
      <div className="container">
        <Swiper
          breakpoints={{
            1278: {
              slidesPerView: 6
            },
            930: {
              slidesPerView: 4
            },
            610: {
              slidesPerView: 3
            }
          }}
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          className={`mySwiper`}>
          {category.map((item, index) => (
            <SwiperSlide key={index} className={styles["swiper-wrapper"]}>
              <div className={styles["product-wrapper"]}>
                {item.icon}
                <div className="meta-wrapper">
                  <h4 className="heading-title category-name">
                    <a href="#">{t(item.titleKey)}</a>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
