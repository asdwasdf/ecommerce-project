import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "@style/shop/CategorySlider.module.css";
import { CiCamera, CiHeadphones, CiLaptop, CiSpeaker } from "react-icons/ci";
import { PiDeviceTabletSpeakerLight, PiGameControllerThin, PiWatchThin } from "react-icons/pi";
import { SlScreenSmartphone } from "react-icons/sl";

const category = [
  {
    icon: <CiCamera className={styles["icon-left"]} />,
    titleKey: "category.camera",
    backgroundColor: "#f5dede"
  },
  {
    icon: <CiHeadphones className={styles["icon-left"]} />,
    titleKey: "category.headphones",
    backgroundColor: "#eeeae0"
  },
  {
    icon: <PiGameControllerThin className={styles["icon-left"]} />,
    titleKey: "category.games",
    backgroundColor: "#e6ebef"
  },
  {
    icon: <PiDeviceTabletSpeakerLight className={styles["icon-left"]} />,
    titleKey: "category.tablets",
    backgroundColor: "#fff5e8"
  },
  {
    icon: <CiSpeaker className={styles["icon-left"]} />,
    titleKey: "category.speakers",
    backgroundColor: "#f2f5de"
  },
  {
    icon: <SlScreenSmartphone className={styles["icon-left"]} />,
    backgroundColor: "#f2e1d7",
    titleKey: "category.smartphone"
  },
  {
    icon: <CiLaptop className={styles["icon-left"]} />,
    titleKey: "category.laptops",
    backgroundColor: "#f2e1d7"
  },
  {
    icon: <PiWatchThin className={styles["icon-left"]} />,
    backgroundColor: "#e9e5ef",
    titleKey: "category.iwatch"
  }
];

const CategorySlider = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["slider"]}>
      <div>
        <Swiper
          breakpoints={{
            1278: {
              slidesPerView: 5
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
          navigation
          modules={[Autoplay, Navigation]}
          className={`mySwiper`}>
          {category.map((item, index) => (
            <SwiperSlide key={index} className={styles["swiper-wrapper"]}>
              <div
                className={styles["product-wrapper"]}
                style={{ backgroundColor: item.backgroundColor }}>
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
