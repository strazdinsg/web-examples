import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { ProductGrid } from "./ProductGrid";

/**
 * Component representing the main section
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
  // This is another way of getting access to productContext.products, using destructuring assignment syntax
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { products } = useContext(ProductContext);
  // Notice that we don't use the `handleDelete` function and hence just skip it in the destructuring assignment

  // This would be an alternative way of achieving the same:
  // const productContext = useContext(ProductContext);
  // const products = productContext.products;

  if (products.length > 0) {
    return <ProductGrid />;
  } else {
    return <p className="loading">Loading products...</p>;
  }
}
