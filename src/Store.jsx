import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/features/productsSlice";
import authReducer from "@/features/authSlice";
import wishlistReducer from "@/features/wishlistSlice";
import compareProductReducer from "@/features/compareProductSlice";
import cartReducer from "@/features/cartSlice";
import checkoutReducer from "@/features/checkoutSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    compareProduct: compareProductReducer,
    cart: cartReducer,
    checkout: checkoutReducer
  }
});

export default store;
