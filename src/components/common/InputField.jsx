import styles from "@style/common/InputField.module.css";
import { useTranslation } from "react-i18next";

const InputField = ({ id, label, type = "text", register }) => {
  const { t } = useTranslation();

  return (
    <div className={styles["input-field"]}>
      <label htmlFor={id}>
        {label} <span className={styles.required}>*</span>
      </label>
      {type !== "email" ? (
        <input
          id={id}
          type={type}
          {...register(`${id}`, { required: `${id} ${t("inputField.required")}` })}
          className="input"
        />
      ) : (
        <input
          id={id}
          type={type}
          {...register(id, {
            required: `${id} is required`,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: t("inputField.emailPattern")
            }
          })}
          className="input"
        />
      )}
    </div>
  );
};

export default InputField;
