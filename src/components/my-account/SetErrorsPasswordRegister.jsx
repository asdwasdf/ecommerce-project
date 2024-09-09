/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from "react-i18next";
import styles from "@style/my-account/SetErrorsPasswordRegister.module.css";

const SetErrorsPasswordRegister = ({ value }) => {
  const { t } = useTranslation();

  if (!value || value.length === 0) return null;
  if (value.length < 4)
    return (
      <>
        <div className={styles.box} style={{ borderColor: "#e35b5b", backgroundColor: "#f1adad" }}>
          {t("passwordStrength.veryWeak")}
        </div>
        <small className={styles["password-hint"]}>{t("passwordStrength.hint")}</small>
      </>
    );
  if (value.length < 8)
    return (
      <>
        <div className={styles.box} style={{ borderColor: "#f78b53", backgroundColor: "#fbc5a9" }}>
          {t("passwordStrength.weak")}
        </div>
        <small className={styles["password-hint"]}>{t("passwordStrength.hint")}</small>
      </>
    );
  if (value.length < 12)
    return (
      <>
        <div className={styles.box} style={{ borderColor: "#ffc733", backgroundColor: "#ffe399" }}>
          {t("passwordStrength.medium")}
        </div>
      </>
    );
  if (value.length >= 12)
    return (
      <>
        <div className={styles.box} style={{ borderColor: "#83c373", backgroundColor: "#c1e1b9" }}>
          {t("passwordStrength.strong")}
        </div>
      </>
    );
};

export default SetErrorsPasswordRegister;
