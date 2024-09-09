import { createSlice } from "@reduxjs/toolkit";

const loadCompareProductFromLocalStorage = () => {
  const wishlist = localStorage.getItem("compareProduct");
  return wishlist ? JSON.parse(wishlist) : [];
};

const initialState = { items: loadCompareProductFromLocalStorage() };

const compareProductSlice = createSlice({
  name: "compareProduct",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem("compareProduct", JSON.stringify(state.items));
    },
    removeFromCompare: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("compareProduct", JSON.stringify(state.items));
    }
  }
});

export const { addToCompare, removeFromCompare } = compareProductSlice.actions;

export default compareProductSlice.reducer;
