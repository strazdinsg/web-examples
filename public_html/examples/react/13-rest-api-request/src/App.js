import {useState} from "react";
import {Navigation} from "./Navigation";
import {ProductGrid} from "./ProductGrid";

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
    const [products, setProducts] = useState([]);

    loadProducts(); // Start loading products at startup

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
        // TODO - send REST API request
    }
}
