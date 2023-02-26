import { ProductCard } from "./ProductCard";
import "./ProductGrid.css";
import { FAKE_PRODUCTS } from "../FakeData";

/**
 * Component representing the product grid
 * @return {JSX.Element}
 * @constructor
 */
export function ProductSection() {
  const products = FAKE_PRODUCTS;

  if (products.length > 0) {
    const cards = products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
    return <div className="product-container">{cards}</div>;
  } else {
    return <p className="loading">Loading products...</p>;
  }
}
