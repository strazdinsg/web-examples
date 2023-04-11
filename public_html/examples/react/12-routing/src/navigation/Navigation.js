import "./Navigation.css";
import { ProfileNavItem } from "./ProfileNavItem";
import {NavLink} from "react-router-dom";

/**
 * Represents navigation
 * No real navigation yet, just placeholders.
 * @returns {JSX.Element}
 * @constructor
 */
export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Shopping cart</NavLink>
        </li>
        <ProfileNavItem />
      </ul>
    </nav>
  );
}
