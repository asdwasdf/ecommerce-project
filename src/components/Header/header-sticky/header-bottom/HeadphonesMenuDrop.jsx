import styles from "@style/header/header-sticky/header-bottom/HeadphonesMenuDrop.module.css";
import ListCategories from "./ListCategories";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useTranslation } from "react-i18next";

const HeadphonesMenuDrop = () => {
  const { t } = useTranslation();
  const width = useWindowWidth();

  const menu = [
    {
      title: t("headphonesMenuDrop.categories.computersTablets"),
      links: [
        t("headphonesMenuDrop.links.laptopsDesktops"),
        t("headphonesMenuDrop.links.tablets"),
        t("headphonesMenuDrop.links.monitors"),
        t("headphonesMenuDrop.links.laptops"),
        t("headphonesMenuDrop.links.accessories"),
        t("headphonesMenuDrop.links.macbook")
      ]
    },
    {
      title: t("headphonesMenuDrop.categories.cellPhone"),
      links: [
        t("headphonesMenuDrop.links.smartphone"),
        t("headphonesMenuDrop.links.att"),
        t("headphonesMenuDrop.links.iphone"),
        t("headphonesMenuDrop.links.prepaidPhones"),
        t("headphonesMenuDrop.links.samsungGalaxy"),
        t("headphonesMenuDrop.links.unlockedPhones")
      ]
    },
    {
      title: t("headphonesMenuDrop.categories.audio"),
      links: [
        t("headphonesMenuDrop.links.bluetoothSpeakers"),
        t("headphonesMenuDrop.links.portableSpeakers"),
        t("headphonesMenuDrop.links.professionalSpeakers"),
        t("headphonesMenuDrop.links.waterproofSpeakers"),
        t("headphonesMenuDrop.links.headphones"),
        t("headphonesMenuDrop.links.speakers")
      ]
    },
    {
      title: t("headphonesMenuDrop.categories.videoGames"),
      links: [
        t("headphonesMenuDrop.links.xboxSeries"),
        t("headphonesMenuDrop.links.ps4"),
        t("headphonesMenuDrop.links.ps5"),
        t("headphonesMenuDrop.links.gamingHeadsets"),
        t("headphonesMenuDrop.links.accessories"),
        t("headphonesMenuDrop.links.pcGaming")
      ]
    }
  ];

  const urlImg = [
    {
      url: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2024/01/mega-cat-1.jpg",
      title: t("headphonesMenuDrop.banners.computers"),
      products: 36
    },
    {
      url: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2024/01/mega-cat-2.jpg",
      title: t("headphonesMenuDrop.banners.cellPhone"),
      products: 17
    },
    {
      url: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2024/01/mega-cat-3.jpg",
      title: t("headphonesMenuDrop.banners.audio"),
      products: 15
    },
    {
      url: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2024/01/mega-cat-4.jpg",
      title: t("headphonesMenuDrop.banners.videoGames"),
      products: 20
    }
  ];

  return (
    <div className={styles.box} style={{ width: `${width - 100}px` }}>
      <ul className={styles.submenu}>
        <li>
          <div>
            {menu.map((item) => (
              <ListCategories key={item.title} menu={item.links} title={item.title} />
            ))}
            {urlImg.map((data) => (
              <div
                key={data.title}
                className={styles["product-banner"]}
                style={{
                  backgroundImage: `url('${data.url}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className={styles["box-content"]}>
                  <h6>
                    <a href="#">{data.title}</a>
                  </h6>
                  <span>
                    {data.products} {t("headphonesMenuDrop.banners.products")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeadphonesMenuDrop;
