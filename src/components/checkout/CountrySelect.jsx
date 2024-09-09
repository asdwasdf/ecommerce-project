import { useState } from "react";
import Select from "react-select";
import countries from "world-countries";
import styles from "@style/checkout/Checkout.module.css";
import { useTranslation } from "react-i18next";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "4px",
    padding: "5px",
    border: "1px solid #ccc"
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 2
  })
};

const CountrySelect = () => {
  const { t } = useTranslation();

  const countryOptions = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common
  }));

  const [selectedCountry, setSelectedCountry] = useState({
    value: "VN",
    label: "Vietnam"
  });

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className={`${styles["form-row"]} `}>
      <label htmlFor="country">
        {t("ordersDetail.fields.country.label")} <span className={styles.required}>*</span>
      </label>
      <Select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countryOptions}
        isSearchable
        placeholder={t("ordersDetail.fields.country.placeholder")}
        styles={customStyles}
      />
    </div>
  );
};

export default CountrySelect;
