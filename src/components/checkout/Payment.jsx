import { useTranslation } from "react-i18next";
import styles from "@style/checkout/Payment.module.css";
import { TailSpin } from "react-loader-spinner";

const Payment = ({
  selectedPayment,
  setSelectedPayment,
  agreed,
  handleCheckboxChange,
  handlePlaceOrder,
  loading,
  children
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.box}>
      <ul className={styles.payment_methods}>
        <li>
          <input
            id="payment_method_cod"
            type="radio"
            name="payment"
            value="Cash on delivery"
            checked={selectedPayment === "Cash on delivery"}
            onChange={() => setSelectedPayment("Cash on delivery")}
          />
          <label htmlFor="payment_method_cheque">{t("payment.cashOnDelivery")}</label>
          {selectedPayment === "Cash on delivery" && (
            <div className={styles.payment_box}>
              <p>{t("payment.checkPaymentsDescription")}</p>
            </div>
          )}
        </li>
        <li>
          <input
            id="payment_method_cheque"
            type="radio"
            name="payment"
            value="Check payments"
            checked={selectedPayment === "Check payments"}
            onChange={() => setSelectedPayment("Check payments")}
          />
          <label htmlFor="payment_method_cod">{t("payment.checkPayments")}</label>
          {selectedPayment === "Check payments" && (
            <div className={styles.payment_box}>{children}</div>
          )}
        </li>
        <li>
          <input
            id="payment_method_paypal"
            type="radio"
            name="payment"
            value="paypal"
            checked={selectedPayment === "paypal"}
            onChange={() => setSelectedPayment("paypal")}
          />
          <label htmlFor="payment_method_paypal">
            {t("payment.paypal")}
            <img
              src="https://demo.theme-sky.com/ecomall/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
              alt=""
            />
            <a className={styles.sublink}>{t("payment.paypalInfo")}</a>
          </label>
          {selectedPayment === "paypal" && (
            <div className={styles.payment_box}>
              <p>{t("payment.paypalDescription")}</p>
            </div>
          )}
        </li>
      </ul>
      <div className={styles.termsAndPlaceOrder}>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="terms" checked={agreed} onChange={handleCheckboxChange} />
          <label htmlFor="terms">
            {t("payment.agreeTerms")} <a href="#">terms and conditions</a>{" "}
            <span className={styles.required}>*</span>
          </label>
        </div>
        <button type="submit" className={styles.button} onClick={handlePlaceOrder}>
          {loading ? (
            <div className="spinner-container">
              <TailSpin
                visible={true}
                height="20"
                width="20"
                color="#000"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            t("payment.placeOrder")
          )}
        </button>
      </div>
    </div>
  );
};

export default Payment;
