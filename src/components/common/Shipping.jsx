import { useTranslation } from "react-i18next";

const Shipping = ({ shippingCost, setShippingCost }) => {
  const { t } = useTranslation();

  const handleShippingChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "free_shipping") {
      setShippingCost(0);
    } else if (selectedValue === "local_pickup") {
      setShippingCost(5.0);
    } else if (selectedValue === "flat_rate") {
      setShippingCost(10.0);
    }
  };

  return (
    <ul>
      <li>
        <input
          type="radio"
          value="free_shipping"
          className="shipping_method"
          checked={shippingCost === 0}
          onChange={handleShippingChange}
        />
        <label>{t("shipping.freeShipping")}</label>
      </li>
      <li>
        <input
          type="radio"
          value="local_pickup"
          className="shipping_method"
          checked={shippingCost === 5.0}
          onChange={handleShippingChange}
        />
        <label>{t("shipping.localPickup", { cost: 5.0 })}</label>
      </li>
      <li>
        <input
          type="radio"
          value="flat_rate"
          className="shipping_method"
          checked={shippingCost === 10.0}
          onChange={handleShippingChange}
        />
        <label>{t("shipping.flatRate", { cost: 10.0 })}</label>
      </li>
    </ul>
  );
};

export default Shipping;
