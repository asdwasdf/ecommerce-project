import { useState } from "react";
import StarRatings from "react-star-ratings";
import styles from "@style/common/ProductCard.module.css";
import ProductGroupButton from "./ProductGroupButton";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import AddToCartModal from "./AddToCartModal";

import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";
import useAddCart from "@/hooks/useAddCart";

const ProductCard = ({
  id,
  images_url,
  discount,
  category,
  starrate,
  name,
  original_price,
  discounted_price,
  hot,
  className
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const item = { id, name, img: images_url[0], original_price, discounted_price, count: 1 };

  const { openAddCart, handleOpenAddCart, loading, setOpenAddCart } = useAddCart(item);

  const handleCloseAddCart = () => setOpenAddCart(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`${styles.content} ${className === "List" && styles.list}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className={styles["thumbnail-wrapper"]}>
          <div
            className={`${styles["box-img"]} ${discount === "SOLD OUT" ? styles["sold-out"] : ""}`}>
            <img src={`${images_url[0]}-400x400.jpg`} alt={name} />
          </div>
          <ProductGroupButton
            isHovered={isHovered}
            id={id}
            name={name}
            original_price={original_price}
            discounted_price={discounted_price}
            img={images_url[0]}
            discount={discount}
          />
          <div className={styles["product-label"]}>
            {discount !== "0%" && discount !== "SOLD OUT" && (
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
                <span>Hot</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles["meta-wrapper"]}>
          <div className={styles["product-categories"]}>
            <p>{category}</p>
          </div>
          {className === "List" ? (
            <a className={styles["product-name"]} onClick={() => navigate(`/shop/${id}`)}>
              {name}
            </a>
          ) : (
            <a
              href="#"
              className={`${styles["product-name"]} ${styles.truncate}`}
              onClick={() => navigate(`/shop/${id}`)}>
              {name}
            </a>
          )}
          <div className={styles["product-stars"]}>
            <StarRatings rating={starrate} starRatedColor="#ffd700" numberOfStars={5} />
          </div>
          <div className={styles["product-price"]}>
            <span>${discounted_price}</span>
            {original_price > 0 && <span>${original_price}</span>}
          </div>
          <div className={styles.button}>
            {discount !== "SOLD OUT" ? (
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
            ) : (
              <Button onClick={() => navigate(`/shop/${id}`)}>
                <a href="#">{t("productCard.readMore")}</a>
              </Button>
            )}
            <div className={styles["short-description"]}>
              <ul>
                <li>{t("productCard.ram")}: 16GB</li>
                <li>{t("productCard.hardDrive")}: 256GB SSD</li>
                <li>{t("productCard.screenSize")}: 13.3 inches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AddToCartModal
        id={id}
        name={name}
        img={images_url[0]}
        original_price={original_price}
        discounted_price={discounted_price}
        open={openAddCart}
        handleClose={handleCloseAddCart}
      />
    </>
  );
};

export default ProductCard;
