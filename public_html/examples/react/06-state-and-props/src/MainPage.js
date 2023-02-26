import { ProductGrid } from "./ProductGrid";

/**
 * Component representing the main page
 * @param props Properties containing the products
 * @return {JSX.Element}
 * @constructor
 */
export function MainPage(props) {
  return (
    <main>
      <ProductGrid products={props.products} />
    </main>
  );
}
