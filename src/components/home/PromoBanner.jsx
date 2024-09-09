import styles from "@style/home/PromoBanner.module.css";

const PromoBanner = () => {
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles["ts-banner"]}>
          <div className={styles["banner-wrapper"]}>
            <div className={`${styles["box-content"]} ${styles["box-left"]}`}>
              <div className={styles["description"]}>
                USE CODE: <strong>SALE35%</strong>
              </div>
              <h2>Heavy On Features Light On Price</h2>
              <div className={styles["description-bottom"]}> AMAZING DISCOUNTS AND DEALS</div>
              <div className={styles["ts-banner-button"]}>
                <button className={styles.button}>shop now</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["ts-banner"]}>
          <div className={styles["banner-wrapper"]}>
            <div className={`${styles["box-content"]}  ${styles["box-right"]}`}>
              <div className={styles["description"]}>NEW PRODUCT</div>
              <h2>Red Dead 2 Even Bette</h2>
              <div className={styles["description-bottom"]}>RELEASE DATE &amp; PRICE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
