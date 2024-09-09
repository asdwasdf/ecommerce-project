import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@style/App.css";
import "@/assets/css/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { Provider } from "react-redux";
import store from "./Store";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
