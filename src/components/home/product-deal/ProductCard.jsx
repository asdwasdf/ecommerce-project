import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import StarRatings from "react-star-ratings";

import styles from "@style/home/product-deal/ProductCard.module.css";
import Thumbnail from "./Thumbnail";
import AddToCartModal from "@/components/common/AddToCartModal";

import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";

import useAddToCart from "@/hooks/useAddToCart";
import { products } from "@/utils/constants";
import { useState } from "react";

const ProductCard = () => {
  const { t } = useTranslation();
  const [openAddCart, setOpenAddCart] = useState(false);

  const { handleOpenAddCart, currentProductId, loading } = useAddToCart(
    setOpenAddCart,
    undefined,
    products
  );

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (id) => {
    navigate(`shop/${id}`, { replace: -1 });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div className={styles.content}>
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper product">
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={styles["product-wrapper"]}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <Thumbnail
                  imgs={item.images_url}
                  id={item.id}
                  name={item.name}
                  original_price={item.original_price}
                  discounted_price={item.discounted_price}
                  discount={item.discount}
                  isHovered={isHovered}
                />
                <div className={styles["meta-wrapper"]}>
                  <div className={styles["product-label"]}>
                    <div className={styles["onsale"]}>
                      <span>-{item.discount}</span>
                    </div>
                    {item.hot && (
                      <div className={styles["featured"]}>
                        <span>HOT</span>
                      </div>
                    )}
                  </div>
                  <div className={styles["product-categories"]}>
                    <p>{item.category}</p>
                  </div>
                  <h3 className={styles["product-name"]} onClick={() => handleClick(item.id)}>
                    {item.name}
                  </h3>
                  <div className={styles["product-stars"]}>
                    <StarRatings
                      rating={item.starrate}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                    />
                  </div>
                  <div className={styles["product-price"]}>
                    <span>${item.discounted_price}</span>
                    <span>${item.original_price}</span>
                  </div>
                  <p className={styles["short-description"]}>{item.description}</p>
                  <div className={styles["button"]}>
                    <Button onClick={() => handleOpenAddCart(item.id)}>
                      {loading[item.id] ? (
                        <div className="spinner-container">
                          <TailSpin
                            visible={true}
                            height="20"
                            width="20"
                            color="#000"
                            ariaLabel="tail-spin-loading"
                            radius="1"
                            wrapperStyle={{}}
                            wrapperClass=""
                          />
                        </div>
                      ) : (
                        t("productCard.addToCart")
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {currentProductId && (
        <AddToCartModal
          id={currentProductId}
          name={products.find((product) => product.id === currentProductId)?.name}
          img={products.find((product) => product.id === currentProductId)?.images_url[0]}
          original_price={
            products.find((product) => product.id === currentProductId)?.original_price
          }
          discounted_price={
            products.find((product) => product.id === currentProductId)?.discounted_price
          }
          open={openAddCart}
          handleClose={() => setOpenAddCart(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
