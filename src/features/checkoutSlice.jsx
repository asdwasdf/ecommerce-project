import { createSlice } from "@reduxjs/toolkit";

import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const loadOrdersFromLocalStorage = () => {
  const orders = localStorage.getItem("orders");
  return orders ? JSON.parse(orders) : [];
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { items: loadOrdersFromLocalStorage() },
  reducers: {
    addToOrders: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.items));
    },
    setOrders: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("orders", JSON.stringify(state.items));
    },
    clearOrders: (state) => {
      state.items = [];
      localStorage.removeItem("orders");
    }
  }
});

export const { addToOrders, setOrders, clearOrders } = checkoutSlice.actions;

export default checkoutSlice.reducer;

export const addToOrdersUser = (userId, item) => async (dispatch) => {
  try {
    if (userId) {
      const userRef = doc(db, "users", userId);
      const ordersCollectionRef = collection(userRef, "orders");
      const itemDocRef = doc(ordersCollectionRef, String(item.id));

      await setDoc(itemDocRef, item);
    }
    dispatch(addToOrders(item));
  } catch (error) {
    console.error(error);
  }
};
