import styles from "@style/shop/PageContainer.module.css";
import FilterSidebar from "./FilterSidebar";
import MainContent from "./main/MainContent";
import SearchNoResult from "./SearchNoResult";
import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

import useURLParams from "@/hooks/useURLParams";
import { filterSearchResults } from "@/utils/function";

const PageContainer = () => {
  const [filterSidebarMobile, setFilterSidebarMobile] = useState(false);
  const { querySearch } = useURLParams();
  const [hasSearchResult, setHasSearchResult] = useState(false);

  useEffect(() => {
    const filteredProducts = querySearch && filterSearchResults(querySearch);
    setHasSearchResult(filteredProducts?.length === 0 && querySearch);
  }, [querySearch]);

  return (
    <>
      <div className={styles.box}>
        <FilterSidebar open={filterSidebarMobile} closeModal={setFilterSidebarMobile} />
        {hasSearchResult ? <SearchNoResult /> : <MainContent openModal={setFilterSidebarMobile} />}
      </div>
      <Outlet />
    </>
  );
};

export default PageContainer;
