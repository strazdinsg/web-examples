import { createContext } from "react";

/**
 * The product context which stores both the product list and a function for deleting a product from the list
 * @type {React.Context<{products: *[], handleDelete: function(id)}>}
 */
export const ProductContext = createContext({
  products: [],
  handleDelete: function (id) {},
});
