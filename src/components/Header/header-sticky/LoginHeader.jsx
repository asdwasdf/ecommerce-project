import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styles from "@style/header/header-sticky/LoginHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/authSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { checkedPassword, hasExisted } from "@/utils/function";
import { loginUser } from "@/features/authSlice";
import { toast } from "react-toastify";
import InputField from "@/components/common/InputField";
import { clearWishlist } from "@/features/wishlistSlice";
import { clearCart } from "@/features/cartSlice";
import { clearOrders } from "@/features/checkoutSlice";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";

const LoginHeader = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    mode: "onSubmit"
  });
  const { register, handleSubmit, reset } = form;
  const [errors, setErrors] = useState({});
  const { userInfo, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    dispatch(clearWishlist());
    dispatch(clearCart());
    dispatch(clearOrders());
    dispatch(logout());
  };

  const onSubmit = async (data) => {
    setLoading(true);

    setErrors({});
    const { username, password } = data;

    const hasUser = await hasExisted("email", username);
    const checkPassword = await checkedPassword("email", username, password);

    if (!hasUser) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: t("loginHeader.username_error")
      }));
      setLoading(false);

      return;
    }

    if (!checkPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: t("loginHeader.password_error")
      }));
      setLoading(false);

      return;
    }

    dispatch(loginUser(username, password));
    toast.success("Login successfully");
    reset();
    setLoading(false);
    navigate("/");
  };

  const onError = (error) => {
    setErrors(error);
  };

  return (
    <div className={styles.group}>
      <div className={styles.login} onClick={() => !isLoggedIn && navigate("my-account")}>
        <CiUser className={styles.icon} />
        <div>
          <span className={styles.label}>{t("loginHeader.my_account")}</span>
          <span
            className={
              styles.number
            }>{`${isLoggedIn ? userInfo.username : t("loginHeader.login")}`}</span>
        </div>
      </div>

      <div className={`${styles.accountForm} ${isLoggedIn ? "" : styles.loginHidden}`}>
        {isLoggedIn ? (
          <div>
            <ul>
              <li>
                <a className="my-account">{t("loginHeader.my_account")}</a>
              </li>
              <li>
                <a className="orders" onClick={() => navigate("/orders", { replace: -1 })}>
                  {t("loginHeader.my_orders")}
                </a>
              </li>
              <li>
                <a className="change-password">{t("loginHeader.change_password")}</a>
              </li>
              <li onClick={handleLogout}>
                <a className="log-out">{t("loginHeader.logout")}</a>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className={styles["form-content"]}>
              <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <a style={{ width: "100%", display: "block" }}>
                  <InputField
                    register={register}
                    label={t("loginHeader.username_or_email")}
                    id="username"
                  />
                  <span style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
                    {errors?.username?.message || errors?.username}
                  </span>
                </a>
                <a style={{ width: "100%", display: "block" }}>
                  <InputField
                    register={register}
                    label={t("loginHeader.password")}
                    type="password"
                    id="password"
                  />
                  <span style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
                    {errors["password"]?.message || errors?.password}
                  </span>
                </a>
                <div>
                  <p className={styles.remember}>
                    <label>
                      <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                      {t("loginHeader.remember_me")}
                    </label>
                  </p>
                  <p className={styles.submitBtn}>
                    <button type="submit">
                      {loading ? (
                        <TailSpin
                          visible={true}
                          height="20"
                          width="20"
                          color="#fff"
                          ariaLabel="tail-spin-loading"
                          radius="1"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      ) : (
                        t("loginForm.signIn")
                      )}
                    </button>
                  </p>
                </div>
              </form>
            </div>

            <div className={styles["create-account-wrapper"]}>
              <span>{t("loginHeader.new_client")} </span>
              <a href="#">{t("loginHeader.create_account")}</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginHeader;
