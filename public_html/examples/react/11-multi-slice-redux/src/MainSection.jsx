import { ProductGrid } from "./ProductGrid";
import { useSelector } from "react-redux";
import { ShoppingCart } from "./ShoppingCart";

/**
 * Component representing the main section
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
  const products = useSelector((state) => state.productStore.products);
  const user = useSelector((state) => state.userStore.user);

  let productContainer;
  if (products.length > 0) {
    productContainer = <ProductGrid />;
  } else {
    productContainer = <p className="loading">Loading products...</p>;
  }

  let shoppingCartContainer = user ?  <ShoppingCart /> : null;

  return (
    <main>
      {productContainer}
      {shoppingCartContainer}
    </main>
  );
}
