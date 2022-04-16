import {useState} from "react";
import {Navigation} from "./Navigation";
import {ProductGrid} from "./ProductGrid";

// Pretend that these products are loaded from a backend
const FAKE_PRODUCTS = [
    {
        "id": 1,
        "name": "Jeans",
        "description": "Blue Jeans",
        "price": 123
    },
    {
        "id": 2,
        "name": "Sneakers",
        "description": "Regular sneakers",
        "price": 226.99
    },
    {
        "id": 3,
        "name": "T-shirt",
        "description": "A shirt that reminds everyone of 'green thinking'",
        "price": 57
    },
];

// Products loading takes 3 seconds
const PRODUCT_LOAD_TIMEOUT = 3000;

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
        setTimeout(setFakeProducts, PRODUCT_LOAD_TIMEOUT);
    }

    /**
     * Pretend that the fake products are returned from an API, set them as current products
     */
    function setFakeProducts() {
        setProducts(FAKE_PRODUCTS);
    }
}
