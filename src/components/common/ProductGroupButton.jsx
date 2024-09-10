import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { PiStackSimpleThin } from "react-icons/pi";
import { MdCheck } from "react-icons/md";
import styles from "@style/common/ProductGroupButton.module.css";
import { addToWishlistUser, deleteToWishlistUser } from "@/features/wishlistSlice";
import { addToCompare } from "@/features/compareProductSlice";
import CompareProduct from "@/components/compare-product/CompareProduct";
import { findIndex } from "@/utils/function";
import { TailSpin } from "react-loader-spinner";

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
  const dispatch = useDispatch();

  const { items: wishlistItems, loading } = useSelector((state) => state.wishlist);
  const compareProductsItems = useSelector((state) => state.compareProduct.items);
  const userId = useSelector((state) => state.auth.userId);

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
            {loading ? (
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
            ) : findIndex(wishlistItems, id) >= 0 ? (
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
        <div className={styles["button-in"]} onClick={handleToggleWishlist}>
          {findIndex(wishlistItems, id) >= 0 ? (
            <FaHeart className={styles.icon} />
          ) : (
            <CiHeart className={styles.icon} />
          )}
        </div>
      </div>
      <CompareProduct open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default ProductGroupButton;
