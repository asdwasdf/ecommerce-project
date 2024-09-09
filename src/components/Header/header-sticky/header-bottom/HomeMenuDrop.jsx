import { useTranslation } from "react-i18next";
import styles from "@style/header/header-sticky/header-bottom/HomeMenuDrop.module.css";
import ListCategories from "./ListCategories";
import useWindowWidth from "@/hooks/useWindowWidth";

const HomeMenuDrop = () => {
  const { t } = useTranslation();
  const width = useWindowWidth();

  const menu = [
    {
      title: t("homeMenuDrop.homepage"),
      links: [
        t("homeMenuDrop.links.home01"),
        t("homeMenuDrop.links.home02"),
        t("homeMenuDrop.links.home03"),
        t("homeMenuDrop.links.home04"),
        t("homeMenuDrop.links.home05"),
        t("homeMenuDrop.links.home06")
      ]
    },
    {
      title: t("homeMenuDrop.shopLayouts"),
      links: [
        t("homeMenuDrop.links.shopTopCategories"),
        t("homeMenuDrop.links.shopTopBrands"),
        t("homeMenuDrop.links.shopList"),
        t("homeMenuDrop.links.shopScrollSidebar"),
        t("homeMenuDrop.links.shopTopFilter"),
        t("homeMenuDrop.links.shopLoadMoreButton"),
        t("homeMenuDrop.links.shopInfinityScroll"),
        t("homeMenuDrop.links.shopAjaxPagination")
      ]
    },
    {
      title: t("homeMenuDrop.productLayouts"),
      links: [
        t("homeMenuDrop.links.horizontalThumbnails"),
        t("homeMenuDrop.links.verticalThumbnails"),
        t("homeMenuDrop.links.gridThumbnails"),
        t("homeMenuDrop.links.variationThumbnails"),
        t("homeMenuDrop.links.variationDropdown"),
        t("homeMenuDrop.links.productDeal"),
        t("homeMenuDrop.links.groupProducts"),
        t("homeMenuDrop.links.productVideo")
      ]
    },
    {
      title: t("homeMenuDrop.others"),
      links: [
        t("homeMenuDrop.links.aboutUs"),
        t("homeMenuDrop.links.contactUs"),
        t("homeMenuDrop.links.blog"),
        t("homeMenuDrop.links.blogDetail"),
        t("homeMenuDrop.links.trackOrder"),
        t("homeMenuDrop.links.flashSale"),
        t("homeMenuDrop.links.comingSoon"),
        t("homeMenuDrop.links.404")
      ]
    }
  ];

  return (
    <div className={styles.box} style={{ width: `${width - 100}px` }}>
      <ul className={styles.submenu}>
        <li>
          <div>
            {menu.map((item, index) => (
              <ListCategories key={index} menu={item.links} title={item.title} />
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeMenuDrop;
