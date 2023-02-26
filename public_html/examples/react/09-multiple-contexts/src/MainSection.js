import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { ProductGrid } from "./ProductGrid";
import { ThemeContext } from "./ThemeContext";
import "./MainSection.css";

/**
 * Component representing the main section
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
  const productContext = useContext(ProductContext);
  const products = productContext.products;
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;

  let content;
  if (products.length > 0) {
    content = <ProductGrid />;
  } else {
    content = <p className="loading">Loading products...</p>;
  }

  return <main className={theme.themeClass}>{content}</main>;
}
