import { useTranslation } from "react-i18next";
import { SlArrowDown } from "react-icons/sl";
import styles from "@style/header/header-sticky/FormSelect.module.css";

const FormSelect = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.selectCategory}>
      <select name="term">
        <option value="">{t("allCategories")}</option>
        <option value="camera">{t("camera")}</option>
        <option value="camera-accessories">&nbsp;&nbsp;&nbsp;{t("cameraAccessories")}</option>
        <option value="camera-lenses">&nbsp;&nbsp;&nbsp;{t("cameraLenses")}</option>
        <option value="drones">&nbsp;&nbsp;&nbsp;{t("drones")}</option>
        <option value="security-cameras">&nbsp;&nbsp;&nbsp;{t("securityCameras")}</option>
        <option value="games">{t("games")}</option>
        <option value="game-accessories">&nbsp;&nbsp;&nbsp;{t("gameAccessories")}</option>
        <option value="playstation-4">&nbsp;&nbsp;&nbsp;{t("playstation4")}</option>
        <option value="playstation-5">&nbsp;&nbsp;&nbsp;{t("playstation5")}</option>
        <option value="xbox-series">&nbsp;&nbsp;&nbsp;{t("xboxSeries")}</option>
        <option value="headphones">{t("headphones")}</option>
        <option value="airpods">&nbsp;&nbsp;&nbsp;{t("airpods")}</option>
        <option value="gaming-headsets">&nbsp;&nbsp;&nbsp;{t("gamingHeadsets")}</option>
        <option value="kids-headphones">&nbsp;&nbsp;&nbsp;{t("kidsHeadphones")}</option>
        <option value="wireless-earbuds">&nbsp;&nbsp;&nbsp;{t("wirelessEarbuds")}</option>
        <option value="iwatch">{t("iwatch")}</option>
        <option value="laptops-desktops">{t("laptopsDesktops")}</option>
        <option value="laptop-accessories">&nbsp;&nbsp;&nbsp;{t("laptopAccessories")}</option>
        <option value="laptops">&nbsp;&nbsp;&nbsp;{t("laptops")}</option>
        <option value="monitors">&nbsp;&nbsp;&nbsp;{t("monitors")}</option>
        <option value="smart-home">{t("smartHome")}</option>
        <option value="smartphone">{t("smartphone")}</option>
        <option value="iphone">&nbsp;&nbsp;&nbsp;{t("iphone")}</option>
        <option value="prepaid-phones">&nbsp;&nbsp;&nbsp;{t("prepaidPhones")}</option>
        <option value="samsung-galaxy">&nbsp;&nbsp;&nbsp;{t("samsungGalaxy")}</option>
        <option value="unlocked-phones">&nbsp;&nbsp;&nbsp;{t("unlockedPhones")}</option>
        <option value="speakers">{t("speakers")}</option>
        <option value="bluetooth-speakers">&nbsp;&nbsp;&nbsp;{t("bluetoothSpeakers")}</option>
        <option value="portable-speakers">&nbsp;&nbsp;&nbsp;{t("portableSpeakers")}</option>
        <option value="professional-speakers">&nbsp;&nbsp;&nbsp;{t("professionalSpeakers")}</option>
        <option value="waterproof-speakers">&nbsp;&nbsp;&nbsp;{t("waterproofSpeakers")}</option>
        <option value="tablets">{t("tablets")}</option>
        <option value="television">{t("television")}</option>
        <option value="55-tvs">&nbsp;&nbsp;&nbsp;{t("55Tvs")}</option>
        <option value="65-tvs">&nbsp;&nbsp;&nbsp;{t("65Tvs")}</option>
        <option value="oled-tvs">&nbsp;&nbsp;&nbsp;{t("oledTvs")}</option>
        <option value="qled-tvs">&nbsp;&nbsp;&nbsp;{t("qledTvs")}</option>
      </select>
      <SlArrowDown className={styles.icon} />
    </div>
  );
};

export default FormSelect;
