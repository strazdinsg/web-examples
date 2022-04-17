import "./Navigation.css"
import {useContext} from "react";
import {ProductContext} from "./ProductContext";
import {ThemeContext} from "./ThemeContext";


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
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const themeToggler = themeContext.toggleTheme;

    return (
        <nav>
            <ul className={theme.themeClass}>
                <li className={theme.themeClass}>Home</li>
                <li className={"selected " + theme.themeClass}>Products {productCountHint}</li>
                <li className={theme.themeClass}>Profile</li>
                <li className={theme.themeClass}>
                    <label>
                        <input type="checkbox" className="dark-theme-switch" onClick={themeToggler}/>
                        Dark theme
                    </label>
                </li>
            </ul>
        </nav>
    );
}
