import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartUser, updateCountUser } from "@/features/cartSlice";
import { findIndex } from "@/utils/function";
import { products } from "@/utils/constants";

const useAddToCart = (setOpenAddCart, hasImgArray = false) => {
  const [loading, setLoading] = useState({});
  const [currentProductId, setCurrentProductId] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.userId);

  const handleOpenAddCart = (idProduct) => {
    if (loading[idProduct]) return;

    setLoading((prevLoading) => ({ ...prevLoading, [idProduct]: true }));
    setCurrentProductId(idProduct);

    const item = products.find((product) => product.id === idProduct);
    if (!item) return;

    const { id, name, original_price, discounted_price } = item;

    if (findIndex(cartItems, id) < 0) {
      dispatch(
        addToCartUser(userId, {
          id,
          name,
          original_price,
          discounted_price,
          count: 1,
          img: hasImgArray ? item.img[0] : item.img
        })
      );
    } else {
      dispatch(updateCountUser(userId, id));
    }

    setTimeout(() => {
      setLoading((prevLoading) => ({ ...prevLoading, [idProduct]: false }));
      setOpenAddCart(true);
    }, 1000);
  };

  return { handleOpenAddCart, currentProductId, loading };
};

export default useAddToCart;
