import BreadcrumbsComponent from "@/components/BreadcrumbsComponent";
import styles from "@style/wishlist/AppLayout.module.css";
import TableWishlist from "./TableWishlist";
import { FaFacebookF, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { useTranslation } from "react-i18next"; // Import useTranslation

const AppLayout = () => {
  const { t } = useTranslation(); // Sử dụng useTranslation hook

  const breadcrumb = [
    { name: t("wishlist.breadcrumbHome"), link: "/" },
    { name: t("wishlist.breadcrumbWishlist"), link: "" }
  ];

  return (
    <>
      {/* Breadcrumbs for navigation */}
      <BreadcrumbsComponent paths={breadcrumb} />

      <div className={styles.box}>
        <div className="container">
          <div style={{ width: "100%" }}>
            {/* Title and Wishlist Table */}
            <div className={styles["wishlist-title-container"]}>
              <h2>{t("wishlist.wishlistTitle")}</h2>
            </div>
            <TableWishlist />

            {/* Share buttons section */}
            <div className={styles.share}>
              <h4>{t("wishlist.shareTitle")}</h4>
              <ul>
                {/* Facebook Share Button */}
                <li className={styles["share-button"]}>
                  <a href="#" style={{ background: "#39599E" }}>
                    <FaFacebookF />
                  </a>
                </li>

                {/* Twitter Share Button */}
                <li className={styles["share-button"]}>
                  <a href="#" style={{ background: "#45AFE2" }}>
                    <CiTwitter />
                  </a>
                </li>

                {/* Pinterest Share Button */}
                <li className={styles["share-button"]}>
                  <a href="#" style={{ background: "#AB2E31" }}>
                    <FaPinterestP />
                  </a>
                </li>

                {/* Email Share Button */}
                <li className={styles["share-button"]}>
                  <a href="#" style={{ background: "#FBB102" }}>
                    <AiOutlineMail />
                  </a>
                </li>

                {/* WhatsApp Share Button */}
                <li className={styles["share-button"]}>
                  <a href="#" style={{ background: "#00A901" }}>
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
