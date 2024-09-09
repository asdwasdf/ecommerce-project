import styles from "@style/product-detail/product-overview/Reviews.module.css";
import StarRatings from "react-star-ratings";
import AddReview from "./AddReview";
import { useTranslation } from "react-i18next";

const Reviews = ({ star, name }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      <h2>{t("productDetail.reviews.title")}</h2>
      {star > 4 && (
        <div className={styles["product-rating"]}>
          <StarRatings rating={star} starRatedColor="#ffd700" numberOfStars={5} />
          <span> ({t("productDetail.reviews.ratingCount", { count: 1 })})</span>
        </div>
      )}
      <div className={styles.comments}>
        {star > 4 ? (
          <ul className={styles.commentsList}>
            <li>
              <div className={styles["comment_container"]}>
                <img src="https://secure.gravatar.com/avatar/f458ff8b61e871611d3de680ec718a03?s=150&d=mm&r=g" />
                <div className={styles["comment-text"]}>
                  <div className={styles["description"]}>
                    <p>{t("productDetail.reviews.commentText")}</p>
                  </div>
                  <p className={styles["meta"]}>
                    <strong>Andrew </strong>
                    <span>.</span>{" "}
                    <time>{t("productDetail.reviews.date", { date: "Jan 22, 2024" })}</time>
                  </p>
                  <StarRatings rating={5.0} starRatedColor="#ffd700" numberOfStars={5} />
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <p style={{ textAlign: "center" }}>{t("productDetail.reviews.noReviews")}</p>
        )}
      </div>
      <AddReview star={star} name={name} />
    </div>
  );
};

export default Reviews;
