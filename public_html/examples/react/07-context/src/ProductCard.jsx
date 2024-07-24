import "./ProductCard.css";

/**
 * A component representing a single product card
 * @param props Properties containing the product object
 * @return {JSX.Element}
 * @constructor
 */
export function ProductCard(props) {
  const imageUrl = new URL(
    "./img/products/" + props.product.id + ".jpg",
    import.meta.url
  ).href;
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={imageUrl} alt="product" />
      </div>
      <h2 className="product-card-title">{props.product.name}</h2>
      <h3 className="product-card-price">{props.product.price} Kr</h3>
      <div className="product-card-description">
        {props.product.description}
      </div>
    </div>
  );
}
