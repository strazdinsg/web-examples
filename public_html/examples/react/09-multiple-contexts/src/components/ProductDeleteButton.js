import "./ProductDeleteButton.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ThemeContext } from "../context/ThemeContext";

/**
 * Represents the component for deleting the product
 * @param id ID of the associated product (which will be deleted when the button is pressed)
 * @return {JSX.Element}
 * @constructor
 */
export function ProductDeleteButton({ id }) {
  const { handleDelete } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={"product-delete " + theme.themeClass}
      onClick={() => handleDelete(id)}
    >
      Delete
    </button>
  );
}
