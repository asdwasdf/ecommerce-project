import styles from "@style/home/NewsletterSignupForm.module.css";
import { useTranslation } from "react-i18next";

const NewsletterSignupForm = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles["widget-container"]}>
            <div className={styles["widget-title-wrapper"]}>
              <h3>{t("newsletter.title")}</h3>
            </div>
            <div className={styles["subscribe-widget"]}>
              <form>
                <div className={styles["subscribe-email"]}>
                  <input type="email" name="EMAIL" placeholder={t("newsletter.placeholder")} />
                  <button className={styles.button} type="submit">
                    {t("newsletter.subscribe")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignupForm;
