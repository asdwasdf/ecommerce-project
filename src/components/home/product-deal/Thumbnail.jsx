import { useState } from "react";
import styles from "@style/home/product-deal/Thumbnail.module.css";

import ProductGroupButton from "../../common/ProductGroupButton";

const Thumbnail = ({ imgs, isHovered, id, name, original_price, discounted_price, discount }) => {
  const [imgCurrent, setImgCurrent] = useState(imgs[0]);

  const handleClick = (item) => {
    setImgCurrent(item);
  };

  return (
    <div className={styles["thumbnail-wrapper"]}>
      <div>
        <img src={`${imgCurrent}-400x400.jpg`} alt="" />
      </div>
      <ProductGroupButton
        isHovered={isHovered}
        id={id}
        name={name}
        original_price={original_price}
        discounted_price={discounted_price}
        discount={discount}
        img={imgs[0]}
      />
      <div className={styles["product-galleries"]}>
        {imgs.map((item, index) => (
          <div key={index} className={`${item === imgCurrent ? styles.active : ""}`}>
            <img
              src={`${item}-400x400.jpg`}
              alt=""
              width="400"
              height="400"
              onClick={() => handleClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;
