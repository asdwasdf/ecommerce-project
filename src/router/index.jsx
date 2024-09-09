import { Routes, Route } from "react-router-dom";
import MainApp from "@/MainApp";
import Home from "@/pages/Home";
import MyAccount from "@/pages/MyAccount";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import PageNotFound from "@/pages/PageNotFound";
import Wishlist from "@/pages/Wishlist";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import OrderReceived from "@/components/checkout/OrderReceived";
import MyOrders from "@/pages/MyOrders";
import Orders from "@/components/my-orders/Orders";
import OrdersDetail from "@/components/my-orders/OrdersDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainApp />}>
        <Route index element={<Home />} />
        <Route path="my-account" element={<MyAccount />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ProductDetail />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-received/:id" element={<OrderReceived />} />
        <Route path="my-orders" element={<MyOrders />}>
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrdersDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
