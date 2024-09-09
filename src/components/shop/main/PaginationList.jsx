import { Pagination, styled } from "@mui/material";

import "@style/shop/main/PaginationList.css";

const CustomPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    color: "#000"
  },
  "& .MuiPaginationItem-page.Mui-selected": {
    backgroundColor: "#000",
    color: "#fff",
    borderColor: "transparent"
  },
  "& .MuiPaginationItem-ellipsis": {
    border: "none"
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent"
  }
});

const PaginationList = ({ itemsPerPage, products, page, handleChange }) => {
  return (
    <div className="pagination">
      <CustomPagination
        count={Math.ceil(products.length / itemsPerPage)}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default PaginationList;
