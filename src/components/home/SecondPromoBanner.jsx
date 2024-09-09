import styles from "@style/home/SecondPromoBanner.module.css";

const bannerSmall = [
  {
    label: "New Product",
    title: "Release Date & Price",
    description: "TODAY'S SUPER OFFER",
    image: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/banner-8-2.jpg"
  },
  {
    label: "Big Sale",
    title: "Biggest Discount",
    description: "UP TO 75% OFF",
    image: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/banner-9.jpg"
  },
  {
    label: "Weekend Deal",
    title: "The Great Sale",
    description: "GIFT CARD $150",
    image: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/banner-10.jpg"
  },
  {
    label: "Month Deal",
    title: "Spring Clean Sale",
    description: "UP TO 45% OFF",
    image: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/banner-11.jpg"
  }
];

const SecondPromoBanner = () => {
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles["grid-wrapper"]}>
          <div className={styles["ts-banner"]}>
            <div
              className={styles["banner-wrapper"]}
              style={{
                backgroundImage: `url(${"https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/11/banner-7.jpg"})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}>
              <div className={`${styles["box-content"]} ${styles["box-top"]}`}>
                <div className={styles["description"]}>EXCLUSIVE HEADPHONE</div>
                <h2>Discounts 50% On All Headphone</h2>
                <div className={styles["ts-banner-button"]}>
                  <button className={styles.button}>shop now</button>
                </div>
              </div>
            </div>
          </div>
          {bannerSmall.map((item, index) => (
            <div key={index} className={styles["ts-banner"]}>
              <div
                className={styles["banner-wrapper"]}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className={`${styles["box-content"]}  ${styles["box-bottom"]}`}>
                  <div className={styles["description"]}>{item.label}</div>
                  <h2>{item.title}</h2>
                  <div className={styles["description-bottom"]}>{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPromoBanner;
