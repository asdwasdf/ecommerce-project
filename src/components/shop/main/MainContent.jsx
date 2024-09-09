import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@style/shop/main/MainContent.module.css";
import ProductToolbar from "./product-tool-bar/ProductToolbar";
import Products from "./products/Products";
import PaginationList from "./PaginationList";
import LayoutToggle from "./product-tool-bar/LayoutToggle";
import ActiveFiltersDisplay from "./ActiveFiltersDisplay";
import useURLParams from "@/hooks/useURLParams";
import { filterSearchResults } from "@/utils/function";
import NoProductComponent from "../NoProductComponent";
import LoadingComponent from "@/components/common/LoadingComponent";
import { setProductsList, setItemsPerPage, setLoading } from "@/features/productsSlice";
import { PRODUCTS } from "@/data/product";

const MainContent = ({ openModal }) => {
  const [filterLayout, setFilterLayout] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { productsList, itemsPerPage, loading, hasNoProducts } = useSelector(
    (state) => state.products
  );

  const { onsale, orderby, perPage, querySearch, minPrice, maxPrice } = useURLParams();

  useEffect(() => {
    const getFilteredAndSortedProducts = () => {
      let filteredProducts = querySearch ? filterSearchResults(querySearch) : PRODUCTS;

      if (onsale) {
        filteredProducts = filteredProducts.filter(
          (product) => product.discount !== "0%" && product.discount !== "SOLD OUT"
        );
      }

      if (minPrice) {
        filteredProducts = filteredProducts.filter(
          (product) => product.discounted_price > +minPrice
        );
      }

      if (maxPrice) {
        filteredProducts = filteredProducts.filter(
          (product) => product.discounted_price < +maxPrice
        );
      }

      const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (orderby === "rating") return b.starrate - a.starrate;
        if (orderby === "price") return a.discounted_price - b.discounted_price;
        if (orderby === "price-desc") return b.discounted_price - a.discounted_price;
        return 0;
      });

      return sortedProducts;
    };

    dispatch(setLoading(true));
    const sortedProducts = getFilteredAndSortedProducts();
    dispatch(setProductsList(sortedProducts));
    dispatch(setItemsPerPage(+perPage || 20));
    dispatch(setLoading(false));
  }, [onsale, orderby, perPage, querySearch, minPrice, maxPrice, dispatch]);

  const handleChangePage = (_, value) => dispatch(setPage(value));

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = productsList.slice(startIndex, startIndex + itemsPerPage);

  if (loading) return <LoadingComponent />;
  if (hasNoProducts) return <NoProductComponent />;

  return (
    <div className={styles.box}>
      {(minPrice || maxPrice) && <ActiveFiltersDisplay />}
      <ProductToolbar openModal={openModal}>
        <LayoutToggle filterLayout={filterLayout} setFilterLayout={setFilterLayout} />
      </ProductToolbar>
      <Products products={currentItems} filterLayout={filterLayout} />
      <PaginationList
        itemsPerPage={itemsPerPage}
        page={page}
        handleChange={handleChangePage}
        products={productsList}
      />
    </div>
  );
};

export default MainContent;
