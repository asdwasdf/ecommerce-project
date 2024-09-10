import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteToCartUser } from "@/features/cartSlice";
import { toast } from "react-toastify";
import styles from "@style/shopping-cart/ShoppingCart.module.css";
import { MdClose } from "react-icons/md";
import CounterSmall from "@/components/common/CounterSmall";

const CartItem = ({ item, updateItemCount }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateItemCount(item.id, newCount);
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateItemCount(item.id, newCount);
    }
  };

  const handleRemove = (id) => {
    dispatch(deleteToCartUser(userId, id));
    toast.success("Item removed from cart successfully");
  };

  return (
    <tr className={styles["cart-item"]}>
      <td className={styles["product-remove"]}>
        <div>
          <MdClose onClick={() => handleRemove(item.id)} />
        </div>
      </td>
      <td className={styles["product-thumbnail"]}>
        <div>
          <img src={`${item.img}-400x400.jpg`} />
        </div>
      </td>
      <td className={styles["product-name"]}>
        <a>{item.name}</a>
      </td>
      <td className={styles["product-price"]}>
        <span>${item.discounted_price}</span>
      </td>
      <td className={styles["product-quantity"]}>
        <CounterSmall
          count={count}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      </td>
      <td className={styles["product-subtotal"]}>
        <span>${item.discounted_price * count}</span>
      </td>
    </tr>
  );
};

export default CartItem;
