import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    itemsPerPage: 20,
    loading: true,
    hasNoProducts: false
  },
  reducers: {
    setProductsList(state, action) {
      state.productsList = action.payload;
      state.hasNoProducts = action.payload.length === 0;
    },
    setItemsPerPage(state, action) {
      state.itemsPerPage = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  }
});

export const { setProductsList, setItemsPerPage, setLoading } = productsSlice.actions;
export default productsSlice.reducer;
