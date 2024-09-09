import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiHeadsetLight } from "react-icons/pi";
import { useTranslation } from "react-i18next"; // Import i18n

import LogoPng from "@img/logo.png";
import styles from "@style/header/header-sticky/HeaderSticky.module.css";

import LoginHeader from "./LoginHeader";
import ShoppingCart from "./ShoppingCart";
import HeaderBottom from "./header-bottom/HeaderBottom";
import FormSelect from "./FormSelect";
import SearchInput from "./SearchInput";
import SearchResultContainer from "@/components/common/SearchResultContainer";
import SearchSidebar from "../SearchSidebar";
import GroupHeaderButton from "../menu-mobile/GroupHeaderButton";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/features/authSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

const HeaderSticky = () => {
  const [navBar, setNavBar] = useState(false);
  const [openHeaderBottom, setOpenHeaderBottom] = useState(false);
  const [openSearchSidebar, setOpenSearchSidebar] = useState(false);
  const [openGroupHeader, setOpenGroupHeader] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const { t } = useTranslation(); // Sử dụng i18n

  const handleInputChange = (value) => {
    setSearchItem(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const fetchUser = async () => {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          dispatch(loginSuccess({ id: userId, userInfo: userDoc.data() }));
        }
      };
      fetchUser();
    }
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 270) {
        setNavBar(true);
        setOpenHeaderBottom(false);
      } else {
        setNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles["sticky-wrapper"]} ${navBar ? styles["is-sticky"] : ""}`}>
        <div className={styles["header-sticky"]}>
          <div className={styles.headerMiddle}>
            <div className="container">
              {/* Trái Header */}
              <div className={styles.headerLeft}>
                <Link to="/">
                  <div className={styles.logoWrapper}>
                    <img src={LogoPng} alt="logo" />
                  </div>
                </Link>
              </div>

              {/* Trung Tâm Header */}
              <div className={styles.headerCenter}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}>
                  <FormSelect />
                  <SearchInput searchItem={searchItem} handleInputChange={handleInputChange} />
                </form>
              </div>

              {/* Phải Header */}
              <div className={styles.headerRight}>
                {/* Đường dây nóng */}
                <div className={styles.hotline}>
                  <PiHeadsetLight className={styles.icon} />
                  <div className="flex flex-col">
                    <span className={styles.label}>{t("need_help")}</span> {/* Sử dụng t() */}
                    <span className={styles.number}>+08 9229 8228</span>
                  </div>
                </div>

                {/* Nút Tìm kiếm (Mobile) */}
                <button
                  className={`${styles["icon-menu-sticky-header"]} ${styles.mobile}`}
                  onClick={() => setOpenSearchSidebar(true)}>
                  <CiSearch className={styles["icon-menu"]} />
                </button>

                {/* Tài khoản & Giỏ hàng */}
                <LoginHeader />
                <ShoppingCart />

                {/* Nút Menu */}
                {navBar && (
                  <button
                    className={styles["icon-menu-sticky-header"]}
                    onClick={() => setOpenHeaderBottom((open) => !open)}>
                    <IoIosMenu className={styles["icon-menu"]} />
                  </button>
                )}
                <button
                  className={`${styles["icon-menu-sticky-header"]} ${styles.mobile}`}
                  onClick={() => setOpenGroupHeader(true)}>
                  <IoIosMenu className={styles["icon-menu"]} />
                </button>
              </div>
            </div>
          </div>

          {/* Dưới Header */}
          {(!navBar || openHeaderBottom) && (
            <div className={styles.headerBottom}>
              <div className="container">
                <HeaderBottom />
              </div>
            </div>
          )}
        </div>

        {/* Kết quả tìm kiếm */}
        {searchItem.length >= 3 && (
          <SearchResultContainer
            className="desktop"
            query={searchItem}
            handleInputChange={handleInputChange}
          />
        )}
      </div>

      {/* Ngăn kéo thanh bên tìm kiếm */}
      <Drawer open={openSearchSidebar} anchor="right" onClose={() => setOpenSearchSidebar(false)}>
        <SearchSidebar
          toggleSearchSidebar={setOpenSearchSidebar}
          query={searchItem}
          handleInputChange={handleInputChange}>
          <FormSelect />
          <SearchInput searchItem={searchItem} handleInputChange={handleInputChange} />
        </SearchSidebar>
      </Drawer>

      {/* Ngăn kéo Group Header */}
      <Drawer open={openGroupHeader} anchor="right" onClose={() => setOpenGroupHeader(false)}>
        <GroupHeaderButton toggleGroupHeader={setOpenGroupHeader} />
      </Drawer>
    </>
  );
};

export default HeaderSticky;
