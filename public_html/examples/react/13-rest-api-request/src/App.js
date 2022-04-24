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

    // This effect is called every time when the component is updated and (re)mounted
    // Therefore we need to do a check before re-loading products every time
    useEffect(() => {
        if (products.length === 0) {
            loadProducts();
        }
    });

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
        sendApiRequest("GET", "/products", function (p) {
            setProducts(p);
        });
    }
}
