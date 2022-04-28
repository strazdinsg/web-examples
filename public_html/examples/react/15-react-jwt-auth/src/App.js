import {Navigation} from "./components/Navigation";
import {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {MainContent} from "./MainContent";
import {sendApiRequest} from "./tools/requests";
import {deleteAuthorizationCookies, getAuthenticatedUser} from "./tools/authentication";

/**
 * A component representing "game" board
 */
export function App() {
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);

    useEffect(loadProducts);
    useEffect(tryRestoreUserSession);

    return (
        <Router>
            <Navigation user={user} logoutFunction={doLogout}/>
            <MainContent user={user} products={products} setUser={setUser}/>
        </Router>
    );

    /**
     * Perform user logout
     */
    function doLogout() {
        console.log("Logout");
        deleteAuthorizationCookies();
        setUser(null);
    }

    /**
     * Send API request, load products
     */
    function loadProducts() {
        if (products.length === 0 && !productsLoaded) {
            setProductsLoaded(true);
            console.log("Loading products...");
            sendApiRequest("GET", "/products", function (loadedProducts) {
                console.log("Products received");
                setProducts(loadedProducts);
            });
        }
    }

    /**
     * Check cookies - is user logged in? If so, set the user from cookies
     */
    function tryRestoreUserSession() {
        if (!user) {
            const loggedInUser = getAuthenticatedUser();
            if (loggedInUser) {
                console.log("User session found in cookies, restoring");
                setUser(loggedInUser);
            }
        }
    }
}
