/**
 * Represents product page
 * @param props Properties containing the products
 * @return {null}
 * @constructor
 */
export function ProductPage(props) {
  let content;
  if (props.error) {
    content = <p className="error">Error: {props.error}</p>;
  } else {
    let productContent;
    if (props.products.length > 0) {
      productContent = props.products.map((product) => (
        <li key={product.id}>{product.name + " ($" + product.price + ")"}</li>
      ));
    } else {
      productContent = <p>Loading...</p>;
    }
    content = (
      <>
        <h1>Products</h1>
        <p>Here you can see all our products.</p>
        <ul id="product-container">{productContent}</ul>
      </>
    );
  }

  return content;
}
