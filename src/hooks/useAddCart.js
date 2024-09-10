import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartUser, updateCountUser } from "@/features/cartSlice";
import { findIndex } from "@/utils/function";

const useAddCart = (item, count = 1) => {
  const [openAddCart, setOpenAddCart] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const userId = useSelector((state) => state.auth.userId);

  const handleOpenAddCart = () => {
    if (loading) return;

    setLoading(true);

    if (findIndex(cartItems, item.id) < 0) {
      dispatch(addToCartUser(userId, item));
    } else {
      dispatch(updateCountUser(userId, item.id, count));
    }

    setTimeout(() => {
      setOpenAddCart(true);
      setLoading(false);
    }, 500);
  };

  return { openAddCart, handleOpenAddCart, loading, setOpenAddCart, userId };
};

export default useAddCart;
