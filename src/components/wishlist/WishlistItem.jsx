import styles from "@style/wishlist/TableWishlist.module.css";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AddToCartModal from "@/components/common/AddToCartModal";
import { useTranslation } from "react-i18next";
import { deleteToWishlistUser } from "@/features/wishlistSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import useAddCart from "@/hooks/useAddCart";
import { TailSpin } from "react-loader-spinner";

const WishlistItem = ({ id, name, original_price, discounted_price, img, discount }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const item = { id, name, img, original_price, discounted_price, count: 1 };

  const { openAddCart, handleOpenAddCart, loading, setOpenAddCart, userId } = useAddCart(item);

  const handleCloseAddCart = () => setOpenAddCart(false);

  const handleRemove = () => {
    dispatch(deleteToWishlistUser(userId, id));
    toast.success(t("wishlist.successRemove"));
  };

  return (
    <>
      <tr>
        {/* Remove Product Button */}
        <td className={styles["product-remove"]}>
          <div>
            <a className={styles.remove} title={t("wishlist.removeProduct")} onClick={handleRemove}>
              ×
            </a>
          </div>
        </td>

        {/* Product Thumbnail */}
        <td className={styles["product-thumbnail"]}>
          <div>
            <img src={`${img}-400x400.jpg`} alt={`${name} image`} />
          </div>
        </td>

        {/* Product Name */}
        <td className={styles["product-name"]}>
          <a onClick={() => navigate(`/shop/${id}`, { replace: -1 })}>{name}</a>
        </td>

        {/* Product Price */}
        <td className={styles["product-price"]}>
          <span>${discounted_price}</span>
          {original_price > 0 && (
            <span className={styles["original-price"]}>${original_price}</span>
          )}
        </td>

        {/* Stock Status */}
        <td className={styles["product-stock-status"]}>
          {discount !== "SOLD OUT" ? (
            <span className={styles["wishlist-in-stock"]}>
              <IoCheckmarkOutline />
              {t("wishlist.inStock")}
            </span>
          ) : (
            <span className={`${styles["wishlist-in-stock"]} ${styles["sold-out"]}`}>
              <IoMdClose />
              {t("wishlist.outStock")}
            </span>
          )}
        </td>

        {/* Add to Cart Button */}
        <td className={styles["product-add-to-cart"]}>
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
        </td>
      </tr>
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

export default WishlistItem;
