import styles from "@style/home/ServiceFeatures.module.css";
import { CiCreditCard2, CiDeliveryTruck, CiDollar, CiHeadphones } from "react-icons/ci";
import { useTranslation } from "react-i18next";

// Define the service features with title, description, and icon
const services = [
  {
    key: "free_delivery",
    icon: <CiDeliveryTruck className={styles["box-icon"]} />
  },
  {
    key: "returns",
    icon: <CiDollar className={styles["box-icon"]} />
  },
  {
    key: "support_24_7",
    icon: <CiHeadphones className={styles["box-icon"]} />
  },
  {
    key: "payments",
    icon: <CiCreditCard2 className={styles["box-icon"]} />
  }
];

const ServiceFeatures = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Map through the services array and render each service feature */}
          {services.map((item, index) => (
            <div className={styles["box-wrapper"]} key={index}>
              {/* Render the icon */}
              {item.icon}

              <div className={styles["box-content"]}>
                {/* Render the service title */}
                <h3 className={styles["box-title"]}>
                  <span>{t(`services.${item.key}.title`)}</span>
                </h3>

                {/* Render the service description */}
                <p className={styles["box-description"]}>{t(`services.${item.key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
