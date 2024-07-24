import { Navigation } from "./Navigation";
import { useEffect } from "react";
import { MainSection } from "./MainSection";
import { FAKE_PRODUCTS } from "./ProductData";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/productSlice";

// Products loading takes 3 seconds
const PRODUCT_LOAD_TIMEOUT = 3000;

/**
 * A component representing the whole application
 * @return {JSX.Element}
 * @constructor
 */
export function App() {
  // Get products from the store and subscribe to updates
  const products = useSelector((state) => state.productStore.products);
  // dispatch is used to send update actions to Redux store
  const dispatch = useDispatch();

  // This effect is called every time when the component is updated and (re)mounted
  useEffect(() => {
    if (products.length === 0) {
      loadProducts();
    }
  });

  // Here we pass both the products and a reference to delete-function as the data for the context
  return (
    <>
      <Navigation />
      <MainSection />
    </>
  );

  /**
   * Pretend that we are loading products
   */
  function loadProducts() {
    console.log("Loading products...");
    setTimeout(setFakeProducts, PRODUCT_LOAD_TIMEOUT);
  }

  /**
   * Pretend that the fake products are returned from an API, set them as current products
   */
  function setFakeProducts() {
    console.log("Products received from the 'backend API'");
    dispatch(setProducts(FAKE_PRODUCTS));
  }
}
