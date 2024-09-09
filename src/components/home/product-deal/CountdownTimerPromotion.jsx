import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "@style/home/product-deal/CountdownTimerPromotion.module.css";

const CountdownTimerPromotion = () => {
  const { t } = useTranslation();
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;
        setMinutes((prevMinutes) => {
          if (prevMinutes > 0) return prevMinutes - 1;
          setHours((prevHours) => {
            if (prevHours > 0) return prevHours - 1;
            clearInterval(intervalId);
            return 0;
          });
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [hours, seconds, minutes]);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className={styles.content}>
      <div>
        <div className={styles["sub-title"]}>{t("promotion.only_for_today")}</div>
        <div>
          <h3 className={styles["shortcode-title"]}>{t("promotion.deal_of_the_day")}</h3>
        </div>
        <div className={styles["description"]}>{t("promotion.deal_description")}</div>
        <div className={styles["ts-countdown"]}>
          <div className={styles["counter-wrapper"]}>
            <div className={styles["hours"]}>
              <div className={styles["number-wrapper"]}>
                <span className={styles["number"]}>{formatTime(hours)}</span>
              </div>
              <div className={styles["ref-wrapper"]}>{t("promotion.hours")}</div>
            </div>
            <div className={styles["minutes"]}>
              <div className={styles["number-wrapper"]}>
                <span className={styles["number"]}>{formatTime(minutes)}</span>
              </div>
              <div className={styles["ref-wrapper"]}>{t("promotion.mins")}</div>
            </div>
            <div className={styles["seconds"]}>
              <div className={styles["number-wrapper"]}>
                <span className={styles["number"]}>{formatTime(seconds)}</span>
              </div>
              <div className={styles["ref-wrapper"]}>{t("promotion.secs")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimerPromotion;
