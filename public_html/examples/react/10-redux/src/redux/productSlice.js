// Here we manage the Redux store slice responsible for holding product state

import { createSlice } from "@reduxjs/toolkit";

// A slice of the Redux state store - responsible for keeping state for products within the store
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: function (state, action) {
      state.products = action.payload;
    },
    deleteProduct: function (state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { setProducts, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
