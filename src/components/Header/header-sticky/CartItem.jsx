import styles from "@style/header/header-sticky/ShoppingCart.module.css";
import CounterSmall from "@/components/common/CounterSmall";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCartUser, updateCountUser, decrementCountUser } from "@/features/cartSlice";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]); // Update based on item.count

  const userId = useSelector((state) => state.auth.userId);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    dispatch(updateCountUser(userId, item.id));
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      dispatch(decrementCountUser(userId, item.id));
    }
  };

  const handleRemove = (id) => {
    dispatch(deleteToCartUser(userId, item.id));
    toast.success("Item removed from cart successfully");
  };

  return (
    <li className={styles["cart-item"]} key={item.id}>
      <div className={styles["img-box"]}>
        <img src={`${item.img}-400x400.jpg`} alt="" />
      </div>
      <div className={styles["cart-item-wrapper"]}>
        <h3 className={styles["product-name"]}>{item.name}</h3>
        <div className={styles.quantity}>
          <CounterSmall
            count={count}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
        <div className={styles.subtotal}>
          <span>${item.discounted_price}</span>
        </div>
        <div className={styles["remove"]}>
          <MdClose onClick={() => handleRemove(item.id)} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
