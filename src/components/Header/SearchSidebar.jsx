import { IoIosClose } from "react-icons/io";

import styles from "@style/header/SearchSidebar.module.css";

import SearchResultContainer from "../common/SearchResultContainer";

const SearchSidebar = ({ toggleSearchSidebar, children, query, handleInputChange }) => {
  return (
    <div className={styles.content}>
      <div className={styles.close} onClick={() => toggleSearchSidebar(false)}>
        <IoIosClose />
      </div>
      <div>
        <form>{children}</form>
      </div>
      {query.length >= 3 && (
        <SearchResultContainer
          className="mobile"
          query={query}
          handleInputChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default SearchSidebar;
