import { useTranslation } from "react-i18next";
import styles from "@style/header/header-sticky/header-bottom/LaptopsMenuDrop.module.css";
import ListCategories from "./ListCategories";
import useWindowWidth from "@/hooks/useWindowWidth";

const LaptopsMenuDrop = () => {
  const { t } = useTranslation();
  const width = useWindowWidth();

  const menuItems = [
    {
      title: t("laptopsMenuDrop.computersAndTablets"),
      links: [
        t("laptopsMenuDrop.laptopsAndDesktops"),
        t("laptopsMenuDrop.tablets"),
        t("laptopsMenuDrop.monitors"),
        t("laptops"),
        t("laptopsMenuDrop.accessories")
      ]
    },
    {
      title: t("laptopsMenuDrop.cellPhone"),
      links: [
        t("laptopsMenuDrop.smartphone"),
        t("laptopsMenuDrop.att"),
        t("laptopsMenuDrop.iphone"),
        t("laptopsMenuDrop.prepaidPhones"),
        t("laptopsMenuDrop.samsungGalaxy"),
        t("laptopsMenuDrop.unlockedPhones")
      ]
    },
    {
      title: t("laptopsMenuDrop.audio"),
      links: [
        t("laptopsMenuDrop.bluetoothSpeakers"),
        t("laptopsMenuDrop.portableSpeakers"),
        t("laptopsMenuDrop.professionalSpeakers"),
        t("laptopsMenuDrop.waterproofSpeakers"),
        t("laptopsMenuDrop.headphones"),
        t("laptopsMenuDrop.speakers")
      ]
    },
    {
      title: t("laptopsMenuDrop.videoGames"),
      links: [
        t("laptopsMenuDrop.xboxSeries"),
        t("laptopsMenuDrop.playstation4"),
        t("laptopsMenuDrop.playstation5"),
        t("laptopsMenuDrop.gamingHeadsets"),
        t("laptopsMenuDrop.accessories")
      ]
    },
    {
      title: t("laptopsMenuDrop.camera"),
      links: [
        t("laptopsMenuDrop.camera"),
        t("laptopsMenuDrop.accessories"),
        t("laptopsMenuDrop.cameraAndLenses"),
        t("laptopsMenuDrop.drones"),
        t("laptopsMenuDrop.securityCameras")
      ]
    },
    {
      title: t("laptopsMenuDrop.tvAndHomeTheater"),
      links: [
        t("laptopsMenuDrop.television"),
        t("laptopsMenuDrop.55InchTvs"),
        t("laptopsMenuDrop.65InchTvs"),
        t("laptopsMenuDrop.oledTvs"),
        t("laptopsMenuDrop.qledTvs")
      ]
    },
    {
      title: t("laptopsMenuDrop.smartHome"),
      links: [
        t("laptopsMenuDrop.smartHome"),
        t("laptopsMenuDrop.securityCameras"),
        t("laptopsMenuDrop.television")
      ]
    },
    {
      title: t("laptopsMenuDrop.headphones"),
      links: [
        t("laptopsMenuDrop.headphones"),
        t("airpods"),
        t("laptopsMenuDrop.gamingHeadsets"),
        t("laptopsMenuDrop.kidsHeadphones"),
        t("laptopsMenuDrop.wirelessEarbuds")
      ]
    }
  ];

  return (
    <div className={styles.box} style={{ width: `${width - 100}px` }}>
      <ul className={styles.submenu}>
        <li>
          <div>
            {menuItems.map((item, index) => (
              <ListCategories key={index} menu={item.links} title={item.title} />
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LaptopsMenuDrop;
