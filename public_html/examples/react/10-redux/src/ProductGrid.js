import { ProductCard } from "./ProductCard";
import "./ProductGrid.css";
import { useSelector } from "react-redux";

/**
 * Component representing the product grid
 * @return {JSX.Element}
 * @constructor
 */
export function ProductGrid() {
  const products = useSelector((state) => state.productStore.products);

  if (products.length > 0) {
    const cards = products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
    return <div className="product-container">{cards}</div>;
  } else {
    return <p className="loading">Loading products...</p>;
  }
}
