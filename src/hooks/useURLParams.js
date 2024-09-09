import { useSearchParams } from "react-router-dom";

const useURLParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const onsale = searchParams.get("onsale");
  const orderby = searchParams.get("orderby");
  const perPage = searchParams.get("per_page");
  const minPrice = searchParams.get("min_price");
  const maxPrice = searchParams.get("max_price");
  const querySearch = searchParams.get("search");

  const toggleParam = (param, value) => {
    if (searchParams.has(param)) {
      searchParams.delete(param);
    } else {
      searchParams.set(param, value);
    }
    setSearchParams(searchParams);
  };

  const setParam = (param, value) => {
    searchParams.set(param, value);
    setSearchParams(searchParams);
  };

  const removeParam = (param) => {
    searchParams.delete(param);
    setSearchParams(searchParams);
  };

  return {
    onsale,
    orderby,
    perPage,
    minPrice,
    maxPrice,
    querySearch,
    setSearchParams,
    toggleParam,
    setParam,
    removeParam
  };
};

export default useURLParams;
