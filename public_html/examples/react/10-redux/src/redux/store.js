// Here we create the Redux Store which will maintain our globally shared application state

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

export default configureStore({
  reducer: {
    productStore: productReducer,
  },
});
