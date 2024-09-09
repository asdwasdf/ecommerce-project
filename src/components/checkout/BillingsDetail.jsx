import styles from "@style/checkout/Checkout.module.css";
import CountrySelect from "./CountrySelect";
import React from "react";
import { useTranslation } from "react-i18next";

const BillingsDetail = ({ register, errors }) => {
  const { t } = useTranslation();

  const fields = [
    {
      id: "first_name",
      type: "text",
      required: true
    },
    {
      id: "last_name",
      type: "text",
      required: true
    },
    {
      id: "company",
      type: "text"
    },
    {
      type: "CountrySelect"
    },
    {
      id: "address_1",
      type: "text",
      required: true
    },
    {
      id: "address_2",
      type: "text"
    },
    {
      id: "postcode",
      type: "text"
    },
    {
      id: "city",
      type: "text",
      required: true
    },
    {
      id: "phone",
      type: "tel",
      required: true
    },
    {
      id: "email",
      type: "email",
      required: true,
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: t("inputField.emailPattern")
      }
    }
  ];

  return (
    <div className={styles["billing-fields"]}>
      <h3>{t("ordersDetail.billing_details")}</h3>
      <div className={styles["field-wrapper"]}>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            {field.type !== "CountrySelect" && field.id !== "address_2" && (
              <div
                className={`${styles["form-row"]} ${
                  field.id === "first_name" || field.id === "last_name"
                    ? styles["form-row-first"]
                    : ""
                }`}>
                <div style={{ width: "100%" }}>
                  <label htmlFor={field.id}>
                    {t(`ordersDetail.fields.${field.id}.label`)}
                    {field.required && <span className={styles.required}>*</span>}
                  </label>
                  <input
                    type={field.type}
                    className={styles["input-text"]}
                    id={field.id}
                    placeholder={t(`ordersDetail.fields.${field.id}.placeholder`)}
                    {...register(field.id, {
                      pattern: field?.pattern,
                      required:
                        field.required &&
                        `${t(`ordersDetail.fields.${field.id}.label`)} ${t("inputField.required")}`
                    })}
                  />
                  {errors[field.id] && (
                    <span
                      className={styles.error}
                      style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
                      {errors[field.id]?.message}
                    </span>
                  )}
                </div>
              </div>
            )}
            {field.type !== "CountrySelect" && field.id === "address_2" && (
              <div
                className={`${styles["form-row"]} ${
                  field.id === "first_name" || field.id === "last_name"
                    ? styles["form-row-first"]
                    : ""
                }`}>
                <div style={{ width: "100%" }}>
                  <input
                    type={field.type}
                    className={styles["input-text"]}
                    id={field.id}
                    placeholder={t(`ordersDetail.fields.${field.id}.placeholder`)}
                    {...register(field.id)}
                  />
                  {errors[field.id] && (
                    <span
                      className={styles.error}
                      style={{ height: "10px", width: "100%", display: "block", color: "red" }}>
                      {errors[field.id]?.message}
                    </span>
                  )}
                </div>
              </div>
            )}
            {field.type === "CountrySelect" && <CountrySelect />}
          </React.Fragment>
        ))}
        <div className={`${styles["form-row"]} ${styles.notes}`}>
          <label htmlFor="order_comments">{t("ordersDetail.fields.order_comments.label")}</label>
          <textarea
            className={styles["input-text"]}
            id="order_comments"
            placeholder={t("ordersDetail.fields.order_comments.placeholder")}
            {...register("order_comments")}
          />
        </div>
      </div>
    </div>
  );
};

export default BillingsDetail;
