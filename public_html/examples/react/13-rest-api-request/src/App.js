import {useEffect, useState} from "react";
import {Navigation} from "./Navigation";
import {ProductGrid} from "./ProductGrid";
import {sendApiRequest} from "./tools/requests";

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
    // Store the products in the state of the App component. It would be better to save it in Redux store, but
    // we want to keep this example simple
    const [products, setProducts] = useState([]);

    useEffect(() => loadProducts()); // Load products at startup

    return (
        <>
            <Navigation/>
            <main>
                <ProductGrid products={products}/>
            </main>
        </>
    );

    /**
     * Pretend that we are loading products
     */
    function loadProducts() {
        // Only send request once, when no products are loaded. Otherwise, we get a never-ending fetch+update loop
        if (products.length === 0) {
            sendApiRequest("GET", "/products", function (p) {
                setProducts(p);
            });
        }
    }
}
