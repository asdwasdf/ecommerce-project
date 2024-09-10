import styles from "@style/wishlist/WishlistItemMobile.module.css";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkOutline, IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteToWishlistUser } from "@/features/wishlistSlice";
import useAddCart from "@/hooks/useAddCart";
import AddToCartModal from "@/components/common/AddToCartModal";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";

const WishlistItemMobile = ({ id, name, original_price, discounted_price, img, discount }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const item = { id, name, img, original_price, discounted_price, count: 1 };

  const { openAddCart, loading, handleOpenAddCart, setOpenAddCart, userId } = useAddCart(item);

  const handleRemove = () => {
    dispatch(deleteToWishlistUser(userId, id));
    toast.success(t("wishlist.successRemove"));
  };

  const handleCloseAddCart = () => setOpenAddCart(false);

  return (
    <>
      <li className={styles.box}>
        <div className={styles["item-wrapper"]}>
          <div className={styles["product-thumbnail"]}>
            <img width="400" height="400" src={`${img}-400x400.jpg`} alt={name} />
          </div>
          <div className={styles["item-details"]}>
            <div className={styles["product-name"]}>
              <h3>{name} </h3>
            </div>
            <div className={styles["product-price"]}>
              <span>${discounted_price}</span>
              {original_price > 0 && <span>${original_price}</span>}
            </div>
          </div>
        </div>
        <div className={styles["additional-info-wrapper"]}>
          <div className={styles["product-stock-status"]}>
            {discount !== "SOLD OUT" ? (
              <span className={styles["wishlist-in-stock"]}>
                <IoCheckmarkOutline />
                {t("wishlist.inStock")}
              </span>
            ) : (
              <span
                className={`${styles["wishlist-in-stock"]} ${styles["sold-out"]}`}
                style={{ color: "red" }}>
                <IoMdClose />
                {t("wishlist.outStock")}
              </span>
            )}
          </div>
          <div className={styles.button}>
            {discount !== "SOLD OUT" && (
              <a onClick={() => handleOpenAddCart()}>
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
              </a>
            )}
          </div>
          <div className={styles.remove} onClick={handleRemove}>
            <IoCloseSharp />
          </div>
        </div>
      </li>
      <AddToCartModal
        id={id}
        name={name}
        img={img}
        original_price={original_price}
        discounted_price={discounted_price}
        open={openAddCart}
        handleClose={handleCloseAddCart}
      />
    </>
  );
};

export default WishlistItemMobile;
