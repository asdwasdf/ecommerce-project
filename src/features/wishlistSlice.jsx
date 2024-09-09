import { createSlice } from "@reduxjs/toolkit";

import { collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";

const loadWishlistFromLocalStorage = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

const initialState = {
  items: loadWishlistFromLocalStorage()
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem("wishlist", JSON.stringify(state.items)); // Save to localStorage
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("wishlist", JSON.stringify(state.items)); // Save to localStorage
    },
    setWishlist: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("wishlist", JSON.stringify(state.items)); // Save to localStorage
    },
    clearWishlist: (state) => {
      state.items = [];
      localStorage.removeItem("wishlist"); // Remove from localStorage
    }
  }
});

export const { addToWishlist, removeFromWishlist, setWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;

export const addToWishlistUser = (userId, item) => async (dispatch) => {
  try {
    if (userId) {
      const userRef = doc(db, "users", userId);
      const wishlistCollectionRef = collection(userRef, "wishlist");
      const itemDocRef = doc(wishlistCollectionRef, item.id);

      await setDoc(itemDocRef, item);
    }
    dispatch(addToWishlist(item));
  } catch (error) {
    console.error(error);
  }
};

export const deleteToWishlistUser =
  (userId = false, id) =>
  async (dispatch) => {
    try {
      if (userId) {
        const userRef = doc(db, "users", userId);
        const wishlistCollectionRef = collection(userRef, "wishlist");
        const itemDocRef = doc(wishlistCollectionRef, id);
        await deleteDoc(itemDocRef);
      }
      dispatch(removeFromWishlist(id));
    } catch (error) {
      console.error(error);
    }
  };
