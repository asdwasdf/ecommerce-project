import { PRODUCTS } from "@/data/product";

import { collection, getDocs, query, where, doc, setDoc } from "firebase/firestore";

import { setWishlist } from "@/features/wishlistSlice"; // Import the Redux action

import { db } from "@/firebase";
import { setCart } from "@/features/cartSlice";
import { setOrders } from "@/features/checkoutSlice";

export const filterSearchResults = (query) => {
  const filteredItems = PRODUCTS.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return filteredItems;
};

export const hasExisted = async (field, value) => {
  const q = query(collection(db, "users"), where(`${field}`, "==", value));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const checkedPassword = async (field, value, password) => {
  const q = query(
    collection(db, "users"),
    where(`${field}`, "==", value),
    where("password", "==", password)
  );

  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};

export const findIndex = (items = [], id) => {
  return items.findIndex((item) => item.id === id);
};

export const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => {
    return total + item.discounted_price * item.count;
  }, 0);
};

export const syncWishlist = async (db, user, dispatch) => {
  try {
    // Tham chiếu đến document người dùng
    const userRef = doc(db, "users", user.id);

    // Tham chiếu đến collection "wishlist"
    const wishlistCollectionRef = collection(userRef, "wishlist");

    // Kiểm tra xem document wishlist có tồn tại hay không
    const wishlistSnap = await getDocs(wishlistCollectionRef);

    if (!wishlistSnap.empty) {
      // Nếu collection "wishlist" đã có document, lấy dữ liệu và cập nhật Redux store
      const items = [];

      wishlistSnap.forEach((doc) => {
        items.push({ ...doc.data() });
      });

      // Dispatch Redux action để cập nhật wishlist
      dispatch(setWishlist(items));
    } else {
      // Nếu không có document nào trong Firestore, kiểm tra localStorage
      const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      if (localWishlist.length > 0) {
        // Duyệt qua từng item trong mảng localWishlist
        for (const item of localWishlist) {
          // Tạo một document mới trong collection "wishlist"
          const newDocRef = doc(wishlistCollectionRef, item.id);
          await setDoc(newDocRef, { ...item });
        }

        // Cập nhật Redux store với dữ liệu từ localStorage
        dispatch(setWishlist(localWishlist));
      }
    }
  } catch (error) {
    console.error("Error syncing wishlist:", error);
  }
};

export const syncCart = async (db, user, dispatch) => {
  try {
    // Tham chiếu đến document người dùng
    const userRef = doc(db, "users", user.id);

    // Tham chiếu đến collection "cart"
    const cartCollectionRef = collection(userRef, "cart");

    // Kiểm tra xem document cart có tồn tại hay không
    const cartSnap = await getDocs(cartCollectionRef);

    if (!cartSnap.empty) {
      // Nếu collection "cart" đã có document, lấy dữ liệu và cập nhật Redux store
      const items = [];

      cartSnap.forEach((doc) => {
        items.push({ ...doc.data() });
      });

      // Dispatch Redux action để cập nhật cart
      dispatch(setCart(items));
    } else {
      // Nếu không có document nào trong Firestore, kiểm tra localStorage
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];

      if (localCart.length > 0) {
        // Duyệt qua từng item trong mảng localCart
        for (const item of localCart) {
          // Tạo một document mới trong collection "cart"
          const newDocRef = doc(cartCollectionRef, item.id);
          await setDoc(newDocRef, { ...item });
        }

        // Cập nhật Redux store với dữ liệu từ localStorage
        dispatch(setCart(localCart));
      }
    }
  } catch (error) {
    console.error("Error syncing cart:", error);
  }
};

export const syncOrders = async (db, user, dispatch) => {
  try {
    // Tham chiếu đến document người dùng
    const userRef = doc(db, "users", user.id);

    // Tham chiếu đến collection "orders"
    const ordersCollectionRef = collection(userRef, "orders");

    // Kiểm tra xem document orders có tồn tại hay không
    const ordersSnap = await getDocs(ordersCollectionRef);

    if (!ordersSnap.empty) {
      // Nếu collection "orders" đã có document, lấy dữ liệu và cập nhật Redux store
      const items = [];

      ordersSnap.forEach((doc) => {
        items.push({ ...doc.data() });
      });

      // Dispatch Redux action để cập nhật orders
      dispatch(setOrders(items));
    }
  } catch (error) {
    console.error("Error syncing orders:", error);
  }
};
