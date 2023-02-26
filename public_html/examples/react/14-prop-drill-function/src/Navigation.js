import "./Navigation.css";

/**
 * Represents navigation.
 * No real navigation yet, just placeholders.
 * @returns {JSX.Element}
 * @constructor
 */
export function Navigation(props) {
  const productCount = props.products.length;
  let productCountHint = "";
  if (productCount > 0) {
    productCountHint = "(" + productCount + ")";
  }

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
