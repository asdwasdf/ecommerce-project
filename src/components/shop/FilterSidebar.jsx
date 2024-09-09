import { useTranslation } from "react-i18next";
import styles from "@style/shop/FilterSidebar.module.css";
import FilterPrice from "./FilterPrice";
import {
  brands,
  screenSizes,
  hardDriveSize,
  colorOptions,
  Ram,
  operatingSystem,
  laptopComputerType,
  storageCapacity,
  conditionOptions
} from "@/utils/constants";
import FilterComponent from "./FilterComponent";
import FilterSaleItems from "./main/product-tool-bar/FilterSaleItems";
import { IoIosClose } from "react-icons/io";

const filterData = [
  { titleKey: "filter.brands", options: brands },
  { titleKey: "filter.screenSize", options: screenSizes },
  { titleKey: "filter.hardDriveSize", options: hardDriveSize },
  { titleKey: "filter.ram", options: Ram },
  { titleKey: "filter.operatingSystem", options: operatingSystem },
  { titleKey: "filter.laptopComputerType", options: laptopComputerType },
  { titleKey: "filter.storageCapacity", options: storageCapacity },
  { titleKey: "filter.color", options: colorOptions },
  { titleKey: "filter.condition", options: conditionOptions }
];

const FilterSidebar = ({ open, closeModal }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.box} ${open ? styles.active : ""}`}>
      <aside>
        <div className={styles["sidebar-header"]}>
          <div>
            <FilterSaleItems />
          </div>
          <div className={styles.close} onClick={() => closeModal(false)}>
            <IoIosClose />
          </div>
        </div>
        <FilterPrice />
        {filterData.map((filter) => (
          <FilterComponent
            key={filter.titleKey}
            title={t(filter.titleKey)}
            options={filter.options}
          />
        ))}
      </aside>
    </div>
  );
};

export default FilterSidebar;
