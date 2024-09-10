import styles from "@style/product-detail/product-summary/ProductInfor.module.css";
import StarRatings from "react-star-ratings";
import Counter from "../../common/Counter";
import { CiFacebook, CiHeart, CiLinkedin, CiTwitter } from "react-icons/ci";
import { PiStackSimpleThin } from "react-icons/pi";
import { AiOutlinePinterest } from "react-icons/ai";
import { findIndex } from "@/utils/function";
import { addToWishlistUser, deleteToWishlistUser } from "@/features/wishlistSlice";
import { addToCompare } from "@/features/compareProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdCheck } from "react-icons/md";
import CompareProduct from "@/components/compare-product/CompareProduct";
import { useState } from "react";
import useAddCart from "@/hooks/useAddCart";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";

const ProductInfor = ({
  id,
  img,
  category,
  name,
  star,
  discount,
  original_price,
  discounted_price
}) => {
  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const compareProductsItems = useSelector((state) => state.compareProduct.items);

  const item = { id, img, name, original_price, discounted_price, discount, count: count };

  const { loading, handleOpenAddCart, userId } = useAddCart(item, count);

  const handleToggleWishlist = () => {
    if (findIndex(wishlistItems, item.id) >= 0) {
      dispatch(deleteToWishlistUser(userId, item.id));
    } else {
      dispatch(addToWishlistUser(userId, item));
    }
  };

  const handleOpenCompareProduct = () => {
    dispatch(addToCompare(item));
    toast.success(t("productDetail.addToCompareSuccess"));
    setOpen(true);
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles["cats-link"]}>
          <span>
            <a>{category}</a>
          </span>
        </div>
        <h1 className={styles["product_title"]}>{name}</h1>
        <div className={styles["product-ratings-stock"]}>
          <div className={styles["product-rating"]}>
            <StarRatings rating={star} starRatedColor="#ffd700" numberOfStars={5} />
            <span className={styles["average-rating"]}>({star})</span>
            {star > 4 && <span className={styles["review-count"]}>1 Review </span>}
          </div>
          <div
            className={`${styles["availability"]} ${discount === "SOLD OUT" ? styles["sold-out"] : ""}`}>
            <span>
              {discount === "SOLD OUT" ? t("productDetail.outOfStock") : t("productDetail.inStock")}
            </span>
          </div>
        </div>
        <div className={styles["product-price"]}>
          <span>${discounted_price}</span>
          {original_price > 0 && <span>${original_price}</span>}
        </div>
        {discount === "SOLD OUT" || (
          <span className={styles["discount-percent"]}>{`(-${discount})`}</span>
        )}
        <div className={styles["short-description"]}>
          <ul>
            <li>{t("productDetail.specifications.ram")}</li>
            <li>{t("productDetail.specifications.hardDrive")}</li>
            <li>{t("productDetail.specifications.screenSize")}</li>
          </ul>
        </div>
        <div className={styles["summary-custom-content"]}>
          <ul>
            <li>{t("productDetail.additionalInfo.deliveryTime")}</li>
            <li>{t("productDetail.additionalInfo.warranty")}</li>
            <li>{t("productDetail.additionalInfo.contents")}</li>
          </ul>
        </div>
        <Counter
          count={count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />

        {discount !== "SOLD OUT" && (
          <button className={styles.button} onClick={handleOpenAddCart}>
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
              <span>{t("productDetail.addToCart")}</span>
            )}
          </button>
        )}

        <div className={styles["single-product-buttons"]}>
          {findIndex(wishlistItems, id) >= 0 ? (
            <div
              className={styles["button-in"]}
              onClick={() => navigate("/wishlist", { replace: -1 })}>
              <FaHeart />
              <span>{t("productDetail.browseWishlist")}</span>
            </div>
          ) : (
            <div className={styles["button-in"]} onClick={handleToggleWishlist}>
              <CiHeart />
              <span>{t("productDetail.addToWishlist")}</span>
            </div>
          )}
          <>
            {findIndex(compareProductsItems, id) >= 0 ? (
              <div className={styles["button-in"]} onClick={() => setOpen(true)}>
                <MdCheck className={styles.icon} />
                <span>{t("productDetail.added")}</span>
              </div>
            ) : (
              <div className={styles["button-in"]} onClick={handleOpenCompareProduct}>
                <PiStackSimpleThin className={styles.icon} />
                <span>{t("productDetail.compare")}</span>
              </div>
            )}
          </>
        </div>

        <div className={styles["meta-content"]}>
          <div className={styles["sku-wrapper"]}>
            <span>{t("productDetail.skuLabel")}</span>
            <span className={styles["sku"]}>MPXQ2LL/A</span>
          </div>
          <div className={styles["tags-link"]}>
            <span>{t("productDetail.tagsLabel")}</span>
            <span className={styles["tag-links"]}>
              <a>{category}</a>
            </span>
          </div>
          <div>
            <span>{t("productDetail.shareLabel")}</span>
            <ul className={styles["ts-social-sharing"]}>
              <li>
                <a>
                  <CiFacebook />
                </a>
              </li>
              <li>
                <a>
                  <CiTwitter />
                </a>
              </li>
              <li>
                <a>
                  <AiOutlinePinterest />
                </a>
              </li>
              <li>
                <a>
                  <CiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CompareProduct open={open} handleClose={handleClose} />
    </>
  );
};

export default ProductInfor;
