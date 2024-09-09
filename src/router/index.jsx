import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    element: <MainApp />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "my-account",
        element: <MyAccount />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "shop/:id",
        element: <ProductDetail />
      },
      {
        path: "wishlist",
        element: <Wishlist />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "order-received/:id",
        element: <OrderReceived />
      },
      {
        element: <MyOrders />,
        children: [
          {
            path: "orders",
            element: <Orders />
          },
          {
            path: "orders/:id",
            element: <OrdersDetail />
          }
        ]
      },

      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
