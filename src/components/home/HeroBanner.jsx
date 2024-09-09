import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import styles from "@style/home/hero-banner/HeroBanner.module.css";
import "@style/home/hero-banner/HeroBanner.css";

import banner1 from "@img/banner1.png";
import banner2 from "@img/banner-2.png";
import banner3 from "@img/banner-3.png";

const banners = [
  {
    title: ["IPhone On Sale At", "Up To 25% Off"],
    subtitle: "BUY TOP PRODUCTS ON ECOMALL",
    price: "$399.99",
    cta: "SHOP NOW",
    deal_type: "BIG SALE",
    background: "linear-gradient(90deg, #192a1b 0%, #1b331e 50%, #1c3b20 100%)",
    banner: banner3
  },
  {
    title: ["Best iPad Deals", "At A Glance"],
    subtitle: "FREE SHIPPING BY ECOMALL",
    price: "$499.99",
    cta: "SHOP NOW",
    deal_type: "TODAY DEAL",
    background: "linear-gradient(90deg, #142850 0%, #23395b 50%, #1e3c72 100%)",
    banner: banner2
  },
  {
    title: ["All New", " For A Better You"],
    subtitle: "AMAZING DISCOUNTS AND DEALS",
    price: "$399.99",
    cta: "SHOP NOW",
    deal_type: "WEEKEND DEAL",
    background: "linear-gradient(90deg, #1e1d43 0%, #1e1d43 50%, #212748 100%)",
    banner: banner1
  }
];

const HeroBanner = () => {
  return (
    <div className={styles["hero-banner"]}>
      <div className="container">
        <Swiper
          effect={"fade"}
          speed={1000}
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper hero-banner">
          <div>
            {banners.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${styles["banner-warp"]}`}
                  style={{
                    background: item.background
                  }}>
                  <div className="deal-banner">
                    <div>
                      <span className="deal-tag">{item.deal_type}</span>
                    </div>
                    <h1>
                      {item.title[0]} <br /> {item.title[1]}
                    </h1>
                    <p>{item.subtitle}</p>
                    <div className="price">
                      From <div className={"price-value"}>{item.price}</div>
                    </div>
                    <div className="shop-now-btn">
                      <button href="#">SHOP NOW</button>
                    </div>
                  </div>
                  <div className="box-banner">
                    <img src={item.banner} className={`${index === 1 ? "img2" : ""}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroBanner;
