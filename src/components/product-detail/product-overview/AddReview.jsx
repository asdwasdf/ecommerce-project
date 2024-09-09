import styles from "@style/product-detail/product-overview/Addreview.module.css";
import ReactStars from "react-stars";
import { useTranslation } from "react-i18next";

const AddReview = ({ star, name }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      <span>{star > 4 ? t("addReview.addReview") : t("addReview.firstReview", { name })}</span>
      <form onClick={(e) => e.preventDefault()}>
        <p className={styles["comment-notes"]}>
          <span>{t("addReview.emailNotPublished")}</span>
          <span>
            {t("addReview.requiredFields")} <span>*</span>
          </span>
        </p>
        <div className={styles["comment-form-rating"]}>
          <label>
            {t("addReview.yourRating")}
            <span className="required">*</span>
          </label>
          <ReactStars
            half={false}
            count={5}
            value={0}
            size={30}
            color1="#848484"
            color2={"#ffd700"}
          />
        </div>
        <p className={styles["comment-form-comment"]}>
          <textarea
            placeholder={t("addReview.yourReview")}
            id="comment"
            name="comment"
            cols="45"
            rows="8"></textarea>
        </p>
        <p className={styles["comment-form"]}>
          <input
            id="author"
            name="author"
            placeholder={t("addReview.name")}
            type="text"
            size="30"
            required=""
          />
        </p>
        <p className={styles["comment-form"]}>
          <input
            id="author"
            name="author"
            placeholder={t("addReview.email")}
            type="email"
            size="30"
          />
        </p>
        <button className={styles.button}>{t("addReview.submit")}</button>
      </form>
    </div>
  );
};

export default AddReview;
