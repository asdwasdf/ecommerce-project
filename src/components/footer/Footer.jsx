import { useTranslation } from "react-i18next";
import styles from "@style/footer/Footer.module.css";
import LogoPng from "@img/logo.png";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

const sections = [
  {
    title: "About us",
    links: [
      { text: "aboutUs", url: "#" },
      { text: "newsAndBlog", url: "#" },
      { text: "brands", url: "#" },
      { text: "pressCenter", url: "#" },
      { text: "advertising", url: "#" },
      { text: "investors", url: "#" }
    ]
  },
  {
    title: "Support",
    links: [
      { text: "supportCenter", url: "#" },
      { text: "manage", url: "#" },
      { text: "service", url: "#" },
      { text: "haulAway", url: "#" },
      { text: "securityCenter", url: "#" },
      { text: "contact", url: "#" }
    ]
  },
  {
    title: "Order",
    links: [
      { text: "checkOrder", url: "#" },
      { text: "deliveryAndPickup", url: "#" },
      { text: "returns", url: "#" },
      { text: "exchanges", url: "#" },
      { text: "developers", url: "#" },
      { text: "giftCards", url: "#" }
    ]
  }
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div>
          <div className={styles.header}>
            <div>
              <div className={styles.logoWrapper}>
                <img src={LogoPng} alt="logo" className="" />
              </div>
              <div className={styles["widget-container"]}>
                {t("footer.findLocation")}{" "}
                <span>
                  <a href="#">{t("footer.ourStores")}</a>
                </span>
              </div>
              <div className={styles["widget-container"]}>
                <p>{t("footer.supportEmail")}</p>
              </div>
              <div className={styles["widget-container"]}>
                <p>
                  <a className={styles.phone} href={`tel:+0892298228`}>
                    {t("footer.phone")}
                  </a>
                </p>
              </div>
              <div className={styles["social-links"]}>
                <a href="#">
                  <CiFacebook className={styles.socialLink} />
                </a>
                <a href="#">
                  <CiTwitter className={styles.socialLink} />
                </a>
                <a href="#">
                  <CiInstagram className={styles.socialLink} />
                </a>
                <a href="#">
                  <AiOutlinePinterest className={styles.socialLink} />
                </a>
              </div>
            </div>
            {sections.map((item, index) => (
              <div key={index} className={styles.nav}>
                <h2>{item.title}</h2>
                <ul>
                  {item.links.map((nav, index) => (
                    <li key={index}>
                      <a href={nav.url}>{t(`footer.${nav.text}`)}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles["trending-tags"]}>
            <h5>{t("footer.trendingTags")}:</h5>
            <div className={styles["tagcloud"]}>
              <a href="#">{t("footer.accessories")}</a>
              <a href="#">{t("footer.appleIphone")}</a>
              <a href="#">{t("footer.cameraVideo")}</a>
              <a href="#">{t("footer.cellphone")}</a>
              <a href="#">{t("footer.desktopComputers")}</a>
              <a href="#">{t("footer.electronic")}</a>
              <a href="#">{t("footer.game")}</a>
              <a href="#">{t("footer.gamingHeadsets")}</a>
              <a href="#">{t("footer.headphone")}</a>
              <a href="#">{t("footer.iwatch")}</a>
              <a href="#">{t("footer.kidsElectronics")}</a>
              <a href="#">{t("footer.laptop")}</a>
              <a href="#">{t("footer.mobileTablet")}</a>
              <a href="#">{t("footer.panasonic")}</a>
              <a href="#">{t("footer.pcGaming")}</a>
              <a href="#">{t("footer.smartwatches")}</a>
              <a href="#">{t("footer.speaker")}</a>
              <a href="#">{t("footer.techAccessories")}</a>
              <a href="#">{t("footer.television")}</a>
            </div>
          </div>
          <div className={styles["copyright"]}>
            <div className="">
              <p>{t("footer.copyright")}</p>
            </div>
            <div className="">
              <img
                width="286"
                height="26"
                src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2024/01/payment.png"
                className=""
                alt="payment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
