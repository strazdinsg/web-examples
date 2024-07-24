import "./Navigation.css";
import { useSelector } from "react-redux";
import { LogInOutNavItem } from "./LogInOutNavItem";
import { ProfileNavItem } from "./ProfileNavItem";

/**
 * Represents navigation
 * No real navigation yet, just placeholders.
 * @returns {JSX.Element}
 * @constructor
 */
export function Navigation() {
  const products = useSelector((state) => state.productStore.products);
  // Show hint on product count only when there are some products
  const productCountHint = products.length > 0 ? `(${products.length})` : "";

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li className="selected">Products {productCountHint}</li>
        <ProfileNavItem />
        <LogInOutNavItem />
      </ul>
    </nav>
  );
}
