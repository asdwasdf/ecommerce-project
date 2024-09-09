import { useState } from "react";
import StarRatings from "react-star-ratings";

import styles from "@style/home/trending-products/TrendingProductsCard.module.css";

import ProductGroupButton from "@/components/common/ProductGroupButton";
import Button from "@/components/common/Button";
import AddToCartModal from "@/components/common/AddToCartModal";

import LinesEllipsis from "react-lines-ellipsis";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCountUser, addToCartUser } from "@/features/cartSlice";

import { findIndex } from "@/utils/function";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";

const TrendingProductsCard = ({
  id,
  images_url,
  discount,
  category,
  starrate,
  name,
  original_price,
  discounted_price,
  hot
}) => {
  const { t } = useTranslation();

  const [openAddCart, setOpenAddCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.userId);

  const item = { id, name, img: images_url, original_price, discounted_price, count: 1 };

  const handleOpenAddCart = () => {
    setLoading(true);
    if (findIndex(cartItems, id) < 0) {
      dispatch(addToCartUser(userId, item));
    } else {
      dispatch(updateCountUser(userId, id));
    }
    setTimeout(() => {
      setOpenAddCart(true);
      setLoading(false);
    }, 1000);
  };

  const handleCloseAddCart = () => setOpenAddCart(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${id}`);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div
        className={styles.content}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className={styles["thumbnail-wrapper"]}>
          <div className={styles["box-img"]}>
            <img src={`${images_url}-400x400.jpg`} alt={name} />
          </div>
          <ProductGroupButton
            isHovered={isHovered}
            id={id}
            name={name}
            original_price={original_price}
            discounted_price={discounted_price}
            discount={discount}
            img={images_url}
          />
          <div className={styles["product-label"]}>
            {discount && discount !== "0%" && discount !== "SOLD OUT" && (
              <div className={styles["onsale"]}>
                <span>-{discount}</span>
              </div>
            )}
            {discount === "SOLD OUT" && (
              <div className={styles["onsale"]}>
                <span>{discount}</span>
              </div>
            )}
            {hot && (
              <div className={styles["featured"]}>
                <span>HOT</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles["meta-wrapper"]}>
          <div className={styles["product-categories"]}>
            <p>{category}</p>
          </div>
          <div className={styles["product-name"]} onClick={handleClick}>
            <LinesEllipsis text={name} maxLine="2" ellipsis="..." trimRight basedOn="letters" />
          </div>
          <div className={styles["product-stars"]}>
            <StarRatings rating={starrate} starRatedColor="#ffd700" numberOfStars={5} />
          </div>
          <div className={styles["product-price"]}>
            <span>${discounted_price}</span>
            {original_price > discounted_price && <span>${original_price}</span>}
          </div>
          <div className={styles.button}>
            <Button onClick={handleOpenAddCart}>
              {loading ? (
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
      <AddToCartModal
        id={id}
        name={name}
        img={images_url}
        original_price={original_price}
        discounted_price={discounted_price}
        open={openAddCart}
        handleClose={handleCloseAddCart}
      />
    </>
  );
};

export default TrendingProductsCard;
