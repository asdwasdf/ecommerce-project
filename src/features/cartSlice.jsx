import { createSlice } from "@reduxjs/toolkit";

import { collection, doc, setDoc, deleteDoc, updateDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const initialState = {
  items: loadCartFromLocalStorage()
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    setCart: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateCount: {
      prepare(id, count) {
        return {
          payload: {
            id: id,
            count: count
          }
        };
      },
      reducer: (state, action) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: item.count + (action.payload.count || 1) }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    incrementCount: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, count: item.count - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    }
  }
});

export const { incrementCount, addToCart, removeFromCart, setCart, clearCart, updateCount } =
  cartSlice.actions;

export default cartSlice.reducer;

export const addToCartUser = (userId, item) => async (dispatch) => {
  try {
    if (userId) {
      const userRef = doc(db, "users", userId);
      const cartCollectionRef = collection(userRef, "cart");
      const itemDocRef = doc(cartCollectionRef, item.id);

      await setDoc(itemDocRef, item);
    }
    dispatch(addToCart(item));
  } catch (error) {
    console.error(error);
  }
};

export const deleteToCartUser =
  (userId = false, id) =>
  async (dispatch) => {
    try {
      if (userId) {
        const userRef = doc(db, "users", userId);
        const cartCollectionRef = collection(userRef, "cart");
        const itemDocRef = doc(cartCollectionRef, id);
        await deleteDoc(itemDocRef);
      }
      dispatch(removeFromCart(id));
    } catch (error) {
      console.error(error);
    }
  };

export const updateCountUser =
  (userId, id, newCount = 1) =>
  async (dispatch) => {
    try {
      if (userId) {
        const userRef = doc(db, "users", userId);
        const cartCollectionRef = collection(userRef, "cart");
        const itemDocRef = doc(cartCollectionRef, id);

        // Lấy document hiện tại của sản phẩm
        const itemDoc = await getDoc(itemDocRef);

        const currentCount = itemDoc.data().count;

        const updatedCount = currentCount + newCount;

        // Cập nhật giá trị count mới trong Firestore
        await updateDoc(itemDocRef, {
          count: updatedCount
        });
      }

      // Cập nhật trong Redux
      dispatch(updateCount(id, newCount));
    } catch (error) {
      console.error("Error updating count:", error);
    }
  };

export const decrementCountUser =
  (userId, id, newCount = 1) =>
  async (dispatch) => {
    try {
      if (userId) {
        const userRef = doc(db, "users", userId);
        const cartCollectionRef = collection(userRef, "cart");
        const itemDocRef = doc(cartCollectionRef, id);

        // Lấy document hiện tại của sản phẩm
        const itemDoc = await getDoc(itemDocRef);

        const currentCount = itemDoc.data().count;

        const updatedCount = currentCount - newCount;

        // Cập nhật giá trị count mới trong Firestore
        await updateDoc(itemDocRef, {
          count: updatedCount
        });
      }

      // Cập nhật trong Redux
      dispatch(incrementCount(id));
    } catch (error) {
      console.error("Error updating count:", error);
    }
  };

export const setCartUser = (userId, items) => async (dispatch) => {
  try {
    if (userId) {
      const userRef = doc(db, "users", userId);
      const cartCollectionRef = collection(userRef, "cart");

      for (const item of items) {
        const itemDocRef = doc(cartCollectionRef, item.id);

        await updateDoc(itemDocRef, {
          count: item.count
        });
      }
    }
    dispatch(setCart(items));
  } catch (error) {
    console.error("Error setting cart:", error);
  }
};

export const clearCartUser = (userId) => async (dispatch) => {
  try {
    if (userId) {
      const userRef = doc(db, "users", userId);
      const cartCollectionRef = collection(userRef, "cart");

      // Get all documents in the cart collection
      const cartSnapshot = await getDocs(cartCollectionRef);

      // Delete each document
      const deletePromises = cartSnapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);
    }

    // Clear cart in Redux
    dispatch(clearCart());
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};
