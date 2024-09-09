import styles from "@style/my-account/LoginForm.module.css";
import InputField from "@/components/common/InputField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser } from "@/features/authSlice";
import { hasExisted } from "@/utils/function";
import SetErrorsPasswordRegister from "./SetErrorsPasswordRegister";
import { useTranslation } from "react-i18next"; // Import useTranslation

const RegisterForm = () => {
  const { t } = useTranslation(); // Use useTranslation hook
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const form = useForm({ mode: "onSubmit" });
  const { register, handleSubmit, reset, formState, watch } = form;

  const { errors: errorsForm } = formState;

  // Handle form submission
  const onSubmit = async (data) => {
    setErrors({}); // Clear existing errors
    const email = data["register-email"];

    // Check if email already exists
    const hasEmail = await hasExisted("email", email);
    if (hasEmail) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: t("registerForm.emailExists") // Translate email exists error
      }));
      return;
    }

    // Dispatch registration action
    dispatch(registerUser(data["register-username"], email, data["register-password"]));
    toast.success(t("registerForm.successMessage")); // Translate success message
    reset(); // Reset form fields
  };

  // Handle form validation errors
  const onError = (error) => {
    setErrors(error);
  };

  const password = watch("register-password");

  return (
    <div className={styles.accountForm}>
      <h2>{t("registerForm.title")}</h2> {/* Translate form title */}
      <div className={styles["form-content"]}>
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          {/* Username Field */}
          <div style={{ width: "100%" }}>
            <InputField
              id="register-username"
              label={t("registerForm.username")}
              register={register}
            />
            <span style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
              {errors["register-username"]?.message}
            </span>
          </div>

          {/* Email Field */}
          <div style={{ width: "100%" }}>
            <InputField
              id="register-email"
              label={t("registerForm.email")}
              type="email"
              register={register}
            />
            <span style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
              {errors["register-email"]?.message || errors?.email}
            </span>
          </div>

          {/* Password Field */}
          <div style={{ width: "100%" }}>
            <InputField
              id="register-password"
              label={t("registerForm.password")}
              type="password"
              register={register}
            />
            <span style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
              {errorsForm["register-password"]?.message}
            </span>
            <SetErrorsPasswordRegister value={password} />
          </div>

          {/* Submit Button */}
          <div>
            <p className={styles.submitBtn}>
              <button
                disabled={password?.length < 8}
                className={password?.length < 8 ? styles.disabled : ""}>
                {t("registerForm.signUp")}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
