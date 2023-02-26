import "./ProductDeleteButton.css";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { ThemeContext } from "./ThemeContext";

/**
 * Represents the component for deleting the product
 * @param props Properties, containing the product id
 * @return {JSX.Element}
 * @constructor
 */
export function ProductDeleteButton(props) {
  const productContext = useContext(ProductContext);
  const deleteFunction = productContext.handleDelete;
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;

  return (
    <button
      className={"product-delete " + theme.themeClass}
      onClick={() => deleteFunction(props.id)}
    >
      Delete
    </button>
  );
}
