import { useTranslation } from "react-i18next";
import Modal from "@mui/material/Modal";
import styles from "@style/compare-product/CompareProduct.module.css";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCompare } from "@/features/compareProductSlice";

import AddToCartModal from "@/components/common/AddToCartModal";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

import useAddToCart from "@/hooks/useAddToCart";

const CompareProduct = ({ open, handleClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const compareProductsItems = useSelector((state) => state.compareProduct.items);

  const handleRemoveCompareProduct = (id) => {
    dispatch(removeFromCompare(id));
  };

  const [openAddCart, setOpenAddCart] = useState(false);
  const { handleOpenAddCart, currentProductId, loading } = useAddToCart(setOpenAddCart);

  const handleCloseAddCart = () => setOpenAddCart(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className={styles.box}>
          <button className={styles.close} onClick={handleClose}>
            <IoMdClose />
          </button>
          <h1>{t("compareProduct.title")}</h1>
          <div className={styles["table-compare"]}>
            <div>
              <table className={styles["compare-list"]}>
                <thead>
                  <tr style={{ Height: "0px" }}></tr>
                </thead>
                <tfoot>
                  <tr style={{ Height: "0px" }}></tr>
                </tfoot>
                <tbody>
                  {compareProductsItems.length === 0 ? (
                    <tr className={styles["no-products"]}>
                      <td>{t("compareProduct.noProducts")}</td>
                    </tr>
                  ) : (
                    <>
                      <tr className={styles["remove"]}>
                        <th>&nbsp;</th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>
                            <IoMdClose onClick={() => handleRemoveCompareProduct(item.id)} />
                          </td>
                        ))}
                      </tr>
                      <tr className={styles["image"]}>
                        <th></th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>
                            <div className={styles["image-wrap"]}>
                              <img src={`${item.img}-400x400.jpg`} />
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className={styles["title"]}>
                        <th></th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>{item.name}</td>
                        ))}
                      </tr>
                      <tr className={styles["price"]}>
                        <th></th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>
                            <div className={styles["product-price"]}>
                              {item.original_price > 0 && <span>${item.original_price}</span>}
                              <span>${item.discounted_price} </span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className={styles["add-to-cart"]}>
                        <th></th>
                        {compareProductsItems.map((item, index) => (
                          <td key={item.id}>
                            <div>
                              {item.discount !== "SOLD OUT" && (
                                <a onClick={() => handleOpenAddCart(item.id)}>
                                  {loading[item.id] ? (
                                    <div className="spinner-container">
                                      <TailSpin
                                        visible={true}
                                        height="20"
                                        width="20"
                                        color="#000"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                      />
                                    </div>
                                  ) : (
                                    t("productCard.addToCart")
                                  )}
                                </a>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className={styles["description"]}>
                        <th>{t("compareProduct.description")}</th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>
                            <ul>
                              <li>RAM: 16GB</li>
                              <li>Hard Drive: 256GB SSD</li>
                              <li>Screen Size: 13.3 inches</li>
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr className={styles.sku}>
                        <th>{t("compareProduct.sku")}</th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>0093-2-6 </td>
                        ))}
                      </tr>
                      <tr style={{ Height: "53px" }}>
                        <th>{t("compareProduct.availability")}</th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>
                            <span>27 in stock</span>{" "}
                          </td>
                        ))}
                      </tr>
                      <tr style={{ Height: "53px" }}>
                        <th>{t("compareProduct.weight")}</th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>
                            <span>-</span>
                          </td>
                        ))}
                      </tr>
                      <tr style={{ Height: "53px" }}>
                        <th>{t("compareProduct.dimensions")}</th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}>
                            <span>N/A</span>
                          </td>
                        ))}
                      </tr>
                      <tr style={{ Height: "53px" }}>
                        <th>{t("compareProduct.color")}</th>
                        {compareProductsItems.map((item) => (
                          <td key={item.id}> </td>
                        ))}
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal>
      {currentProductId && (
        <AddToCartModal
          id={currentProductId}
          name={compareProductsItems.find((product) => product.id === currentProductId)?.name}
          img={compareProductsItems.find((product) => product.id === currentProductId)?.img}
          original_price={
            compareProductsItems.find((product) => product.id === currentProductId)?.original_price
          }
          discounted_price={
            compareProductsItems.find((product) => product.id === currentProductId)
              ?.discounted_price
          }
          open={openAddCart}
          handleClose={handleCloseAddCart}
        />
      )}
    </>
  );
};

export default CompareProduct;
