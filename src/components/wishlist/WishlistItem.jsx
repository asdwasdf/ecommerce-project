import styles from "@style/wishlist/TableWishlist.module.css";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteToWishlistUser } from "@/features/wishlistSlice";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { findIndex } from "@/utils/function";
import { addToCart, updateCount } from "@/features/cartSlice";
import AddToCartModal from "@/components/common/AddToCartModal";
import { useTranslation } from "react-i18next"; // Import useTranslation

const WishlistItem = ({ id, name, original_price, discounted_price, img, discount }) => {
  const { t } = useTranslation(); // Sử dụng useTranslation hook

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let userId;
  userId = useSelector((state) => state.auth.userId);

  const handleRemove = async () => {
    dispatch(deleteToWishlistUser(userId, id));
    toast.success(t("wishlist.successRemove")); // Sử dụng bản dịch
  };

  const [openAddCart, setOpenAddCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const handleOpenAddCart = () => {
    if (findIndex(cartItems, id) < 0) {
      const item = { id, name, img, original_price, discounted_price, count: 1 };
      dispatch(addToCart(item));
    } else {
      dispatch(updateCount(id));
    }
    setOpenAddCart(true);
  };

  const handleCloseAddCart = () => setOpenAddCart(false);

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
            <a onClick={() => handleOpenAddCart()}>{t("wishlist.addToCart")}</a>
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
