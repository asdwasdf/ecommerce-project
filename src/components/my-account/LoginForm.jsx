import { useTranslation } from "react-i18next";
import styles from "@style/my-account/LoginForm.module.css";
import InputField from "@/components/common/InputField";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/features/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { hasExisted, checkedPassword } from "@/utils/function";
import { TailSpin } from "react-loader-spinner";

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    mode: "onSubmit"
  });

  // const { loading } = useSelector((state) => state.auth);

  const { register, handleSubmit, reset } = form;

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    setLoading(true);
    setErrors({});
    const { username, password } = e;
    const hasUser = await hasExisted("email", username);
    const checkPassword = await checkedPassword("email", username, password);

    if (!hasUser) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: t("loginForm.errors.username")
      }));
      setLoading(false);

      return;
    }

    if (!checkPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: t("loginForm.errors.password")
      }));
      setLoading(false);
      return;
    }

    dispatch(loginUser(e.username, e.password));
    toast.success(t("loginForm.signIn") + " " + t("loginForm.successMessage"));
    reset();
    setLoading(false);
    navigate("/");
  };

  const onError = (error) => {
    setErrors(error);
  };

  return (
    <>
      <div className={styles.accountForm}>
        <h2>{t("loginForm.title")}</h2>
        <div className={styles["form-content"]}>
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div style={{ width: "100%" }}>
              <InputField register={register} label={t("loginForm.usernameLabel")} id="username" />
              <span style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
                {errors?.username?.message || errors?.username}
              </span>
            </div>
            <div style={{ width: "100%" }}>
              <InputField
                register={register}
                label={t("loginForm.passwordLabel")}
                type="password"
                id="password"
              />
              <span style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
                {errors["password"]?.message || errors?.password}
              </span>
            </div>
            <div className={styles.button}>
              <p className={styles.remember}>
                <label>
                  <input name="rememberme" type="checkbox" value="forever" />{" "}
                  {t("loginForm.rememberMe")}
                </label>
              </p>
              <div className={styles.submitBtn}>
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
              </div>
            </div>
          </form>
        </div>
        <div className={styles["create-account-wrapper"]}>{t("loginForm.lostPassword")}</div>
      </div>
    </>
  );
};

export default LoginForm;
