import { ProductSection } from "./products/ProductSection";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { ProfilePage } from "./profile/ProfilePage";
import { ShoppingCart } from "./cart/ShoppingCart";

/**
 * Component representing the main section. Here we select the section (component) to render, based on the path (route)
 * @return {JSX.Element}
 * @constructor
 */
export function MainSection() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductSection />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </main>
  );
}
