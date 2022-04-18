import "./Navigation.css"
import {ProfileNavItem} from "./ProfileNavItem";
import {ActiveLink} from "./ActiveLink";

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
                <li><ActiveLink to="/">Home</ActiveLink></li>
                <li><ActiveLink to="/products">Products</ActiveLink></li>
                <li><ActiveLink to="/cart">Shopping cart</ActiveLink></li>
                <ProfileNavItem />
            </ul>
        </nav>
    );
}
