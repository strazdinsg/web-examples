import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductGrid } from "./ProductGrid";
import { ThemeContext } from "../context/ThemeContext";
import "./MainSection.css";

/**
 * Component representing the main section
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
  const { products } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);

  let content;
  if (products.length > 0) {
    content = <ProductGrid />;
  } else {
    content = <p className="loading">Loading products...</p>;
  }

  return <main className={theme.themeClass}>{content}</main>;
}
