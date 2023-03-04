// Here we manage the Redux store slice responsible for holding shopping cart state

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {},
  },
  reducers: {
    /**
     * Add a single item from the shopping cart
     * @param state
     * @param action action.payload must contain the product to add
     */
    addItemToCart: function (state, action) {
      const product = action.payload;
      const propertyName = generateItemPropertyName(product.id);
      if (!state.cart[propertyName]) {
        // No item of the same type already in the cart
        state.cart[propertyName] = { product: product, count: 1 };
      } else {
        // Item already in the cart, increase count
        state.cart[propertyName].count++;
      }
    },
    /**
     * Remove a single item from the cart
     * @param state
     * @param action action.payload must contain the ID of the product to remove
     */
    removeCartItem: function (state, action) {
      const productId = action.payload;
      const propertyName = generateItemPropertyName(productId);
      delete state.cart[propertyName];
    },
    emptyCart: function (state, action) {
      state.cart = {};
    },
  },
});

export const { addItemToCart, emptyCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;

/**
 * Generate a property name used to index the items in the shopping cart. This function ensures that we use the same
 * format in all the reducer functions
 * @param productId ID of the product
 * @return {string} Name of the property inside the cart object for storing items of the specified product
 */
function generateItemPropertyName(productId) {
  return "product_" + productId;
}
