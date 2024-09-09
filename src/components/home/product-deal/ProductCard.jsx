import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import StarRatings from "react-star-ratings";

import styles from "@style/home/product-deal/ProductCard.module.css";
import Thumbnail from "./Thumbnail";
import AddToCartModal from "@/components/common/AddToCartModal";

import { useState } from "react";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCountUser, addToCartUser } from "@/features/cartSlice";

import { findIndex } from "@/utils/function";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";

const products = [
  {
    id: "xbox_series_s_1tb_digital_4k",
    name: "Xbox Series S - 1TB Gaming All-Digital Console, 4K",
    original_price: 289.99,
    discounted_price: 279.99,
    discount: "3%",
    category: "Xbox Series",
    starrate: 4.7,
    hot: true,
    color: "White",
    images_url: [
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/54",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/29",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/53",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/40"
    ],
    description: "Xbox Series S 1TB console, 1 Xbox Wireless Controller, High Speed HDMI cable."
  },
  {
    id: "samsung_galaxy_s23_ultra_512gb",
    name: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
    original_price: 949.99,
    discounted_price: 699.99,
    discount: "26%",
    category: "Samsung Galaxy",
    starrate: 4.8,
    hot: false,
    color: "Phantom Black",
    images_url: [
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/119",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/121",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/120",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/116"
    ],
    description: "Fast charging 18W, 50% in 30 min USB Power Delivery 2.0nQi wireless charging"
  },
  {
    id: "bluetooth_speaker_10w_voice_assistant",
    name: "Portable Bluetooth Speaker with Voice Assistant, 10W",
    original_price: 69.0,
    discounted_price: 65.55,
    discount: "5%",
    category: "Bluetooth Speakers",
    starrate: 4.2,
    hot: false,
    color: "Blue",
    images_url: [
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/37",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/30",
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/38"
    ],
    description: "Bluetooth with voice confirmation, 10 hours lighting time, built-in microphone"
  }
];

const ProductCard = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.userId);

  const [openAddCart, setOpenAddCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenAddCart = (item) => {
    setSelectedItem(item);
    setLoading(true);

    if (findIndex(cartItems, item.id) < 0) {
      dispatch(addToCartUser(userId, item));
    } else {
      dispatch(updateCountUser(userId, item.id));
    }

    setTimeout(() => {
      setOpenAddCart(true);
      setLoading(false);
    }, 1000);
  };

  const handleCloseAddCart = () => setOpenAddCart(false);

  const handleClick = (id) => {
    navigate(`/shop/${id}`);
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
          {products.map((item, index) => (
            <SwiperSlide key={index}>
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
                    {item.discount && (
                      <div className={styles["onsale"]}>
                        <span>-{item.discount}</span>
                      </div>
                    )}
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
                    {item.original_price > item.discounted_price && (
                      <span>${item.original_price}</span>
                    )}
                  </div>
                  <p className={styles["short-description"]}>{item.description}</p>
                  <div className={styles["button"]}>
                    <Button onClick={() => handleOpenAddCart(item)}>
                      {loading && selectedItem === item ? (
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
      {selectedItem && (
        <AddToCartModal
          id={selectedItem.id}
          name={selectedItem.name}
          img={selectedItem.images_url[0]}
          original_price={selectedItem.original_price}
          discounted_price={selectedItem.discounted_price}
          open={openAddCart}
          handleClose={handleCloseAddCart}
        />
      )}
    </>
  );
};

export default ProductCard;
