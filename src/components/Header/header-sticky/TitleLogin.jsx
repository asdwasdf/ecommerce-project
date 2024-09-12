import styles from "@style/header/header-sticky/LoginHeader.module.css";
import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

const TitleLogin = () => {
  const { t } = useTranslation();

  const { userInfo, isLoggedIn, isLoading } = useSelector((state) => state.auth);

  return (
    <div>
      <span className={styles.label}>{t("loginHeader.my_account")}</span>
      {isLoading && isLoggedIn ? (
        <TailSpin
          visible={true}
          height="20"
          width="20"
          color="#000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <span
          className={
            styles.number
          }>{`${isLoggedIn ? userInfo.username : t("loginHeader.login")}`}</span>
      )}
    </div>
  );
};

export default TitleLogin;
