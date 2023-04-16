import { createContext } from "react";

export const ProductContext = createContext({
  products: [],
  handleDelete: function (id) {},
});
