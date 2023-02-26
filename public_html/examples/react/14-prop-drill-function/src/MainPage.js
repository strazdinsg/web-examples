import { ProductGrid } from "./ProductGrid";

/**
 * Component representing the main page
 * @param props Properties containing the products and deleteFunction
 * @return {JSX.Element}
 * @constructor
 */
export function MainPage(props) {
  return (
    <main>
      <ProductGrid
        products={props.products}
        deleteFunction={props.deleteFunction}
      />
    </main>
  );
}
