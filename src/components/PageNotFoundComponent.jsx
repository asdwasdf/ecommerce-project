import { useTranslation } from "react-i18next";
import styles from "@style/PageNotFoundComponent.module.css";

const PageNotFoundComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      <div className="container">
        <div className={styles["main-content"]}>
          <article style={{ width: "100%" }}>
            <div className={styles["not-found"]}>
              <div className={styles["image-404"]}>
                <div className={styles["text-clipping"]}>404</div>
              </div>
              <h1>{t("pageNotFound.notFoundTitle")}</h1>
              <p>{t("pageNotFound.notFoundDescription")}</p>
              <a className={styles["button"]} href="/">
                {t("pageNotFound.backToHomepage")}
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundComponent;
