import "./Navigation.css";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

/**
 * Represents navigation
 * No real navigation yet, just placeholders.
 * @returns {JSX.Element}
 * @constructor
 */
export function Navigation() {
  const productContext = useContext(ProductContext);
  const products = productContext.products;
  const productCountHint = products.length > 0 ? `(${products.length})` : "";

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li className="selected">Products {productCountHint}</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
}
