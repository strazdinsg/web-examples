import "./ProductDeleteButton.css";

/**
 * Represents the component for deleting the product
 * @param props Properties, containing the product id
 * @return {JSX.Element}
 * @constructor
 */
export function ProductDeleteButton(props) {
  return (
    <button
      className="product-delete"
      onClick={() => props.deleteFunction(props.productId)}
    >
      Delete
    </button>
  );
}
