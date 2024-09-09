import { useEffect, useState } from "react";
import styles from "@style/common/ProductGroupButton.module.css";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiStackSimpleThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlistUser, deleteToWishlistUser } from "@/features/wishlistSlice";
import { addToCompare } from "@/features/compareProductSlice";
import { findIndex } from "@/utils/function";
import { FaHeart } from "react-icons/fa";
import CompareProduct from "@/components/compare-product/CompareProduct";
import { toast } from "react-toastify";
import { MdCheck } from "react-icons/md";

const ProductGroupButton = ({
  isHovered,
  id,
  name,
  original_price,
  discounted_price,
  img,
  discount
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const compareProductsItems = useSelector((state) => state.compareProduct.items);

  let userId;
  userId = useSelector((state) => state.auth.userId);

  const item = { id, img, name, original_price, discounted_price, discount };
  const handleToggleWishlist = () => {
    if (findIndex(wishlistItems, item.id) >= 0) {
      dispatch(deleteToWishlistUser(userId, item.id));
    } else {
      dispatch(addToWishlistUser(userId, item));
    }
  };

  const handleOpenCompareProduct = () => {
    dispatch(addToCompare(item));
    toast.success("Add success");
    setOpen(true);
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    localStorage.setItem("compareProduct", JSON.stringify(compareProductsItems));
  }, [compareProductsItems]);

  return (
    <>
      {isHovered && (
        <div className={styles["product-group-button"]}>
          <div className={styles["button-in"]} onClick={handleToggleWishlist}>
            {findIndex(wishlistItems, id) >= 0 ? (
              <FaHeart className={styles.icon} />
            ) : (
              <CiHeart className={styles.icon} />
            )}
          </div>
          <div className={styles["button-in"]}>
            <CiSearch className={styles.icon} />
          </div>
          <div className={styles["button-in"]}>
            {findIndex(compareProductsItems, id) >= 0 ? (
              <MdCheck className={styles.icon} onClick={() => setOpen(true)} />
            ) : (
              <PiStackSimpleThin className={styles.icon} onClick={handleOpenCompareProduct} />
            )}
          </div>
        </div>
      )}
      <div className={`${styles["product-group-button"]} ${styles.mobile}`}>
        <div className={styles["button-in"]}>
          {findIndex(wishlistItems, id) >= 0 ? (
            <FaHeart className={styles.icon} />
          ) : (
            <CiHeart className={styles.icon} />
          )}
        </div>
      </div>
      <CompareProduct open={open} handleClose={handleClose} />
    </>
  );
};

export default ProductGroupButton;
