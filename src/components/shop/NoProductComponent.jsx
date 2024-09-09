import { useTranslation } from "react-i18next";
import styles from "@style/shop/NoProductComponent.module.css";

const NoProductComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      <div>{t("noProductsFound")}</div>
    </div>
  );
};

export default NoProductComponent;
