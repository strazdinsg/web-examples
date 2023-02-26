import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "./pages/WelcomePage";
import { ProductPage } from "./pages/ProductPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { AdminPage } from "./pages/AdminPage";
import { ProfilePage } from "./pages/ProfilePage";

/**
 * Represents the main content of the page
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function MainContent(props) {
  const username = props.user ? props.user.username : null;

  return (
    <main>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/products"
          element={<ProductPage products={props.products} />}
        />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<ProfilePage username={username} />} />
        <Route path="/login" element={<LoginPage setUser={props.setUser} />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </main>
  );
}
