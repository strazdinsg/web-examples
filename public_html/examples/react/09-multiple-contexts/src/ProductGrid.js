import {ProductCard} from "./ProductCard";
import "./ProductGrid.css"
import {useContext} from "react";
import {ProductContext} from "./ProductContext";

/**
 * Component representing the product grid
 * @return {JSX.Element}
 * @constructor
 */
export function ProductGrid() {
    const productContext = useContext(ProductContext);
    const products = productContext.products;

    if (products.length > 0) {
        const cards = products.map(product => <ProductCard product={product} key={product.id}/>);
        return <div className="product-container">{cards}</div>;
    } else {
        return <p className="loading">Loading products...</p>;
    }
}