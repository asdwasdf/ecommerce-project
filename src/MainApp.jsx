import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";

import ScrollToTopButton from "./components/ScrollToTopButton";

const MainApp = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
};

export default MainApp;
