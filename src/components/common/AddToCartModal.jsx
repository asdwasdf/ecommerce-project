import { Modal } from "@mui/material";
import styles from "@style/common/AddToCartModal.module.css";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AddToCartModal = ({ id, name, img, original_price, discounted_price, open, handleClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={styles.box}>
        <span className={styles.close}>
          <MdClose onClick={handleClose} />
        </span>
        <div className={styles["add-to-cart-popup-content"]}>
          <div className={styles["heading"]}>
            <h5 className={styles["theme-title"]}>{t("addToCartModal.productAdded")}</h5>
          </div>
          <div className={styles.item}>
            <div className={styles["product-image"]}>
              <img src={`${img}-400x400.jpg`} alt={name} />
            </div>
            <div className={styles["product-meta"]}>
              <h3
                className={styles["product-name"]}
                onClick={() => navigate(`/shop/${id}`, { replace: -1 })}>
                {name}
              </h3>
              <div className={styles["product-price"]}>
                <span>${discounted_price}</span>
                {original_price > 0 && <span>${original_price}</span>}
              </div>
            </div>
          </div>
          <div className={styles.action}>
            <button
              className={`${styles.button} ${styles["empty-cart-button"]}`}
              onClick={() => navigate("/cart")}>
              {t("addToCartModal.viewCart")}
            </button>
            <button className={styles.button} onClick={() => navigate("/checkout")}>
              {t("addToCartModal.checkOut")}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
