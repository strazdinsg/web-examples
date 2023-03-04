/**
 * Component representing the navigation for the application
 * @return {JSX.Element}
 * @constructor
 */
import { isAdmin } from "../tools/authentication";
import { Link } from "react-router-dom";
import "./Navigation.css";

/**
 * Navigation component
 * @param props Properties, contains user and logoutFunction
 * @return {JSX.Element}
 * @constructor
 */
export function Navigation(props) {
  const user = props.user;

  const navigationItems = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
  ];

  if (user) {
    if (isAdmin(user)) {
      navigationItems.push({ title: "Administration", link: "/admin" });
    }
    navigationItems.push({
      title: `Welcome, ${user.username}!`,
      link: "/profile",
    });
    navigationItems.push({
      title: "Logout",
      link: "",
      action: props.logoutFunction,
    });
  } else {
    navigationItems.push({ title: "Login", link: "/login" });
    navigationItems.push({ title: "Sign up", link: "/signup" });
  }

  const navigationLinks = [];
  for (let i = 0; i < navigationItems.length; ++i) {
    const navItem = navigationItems[i];
    let anchor;
    if (navItem.action) {
      anchor = (
        <button className="link" onClick={navItem.action}>
          {navItem.title}
        </button>
      );
    } else {
      anchor = <Link to={navItem.link}>{navItem.title}</Link>;
    }
    navigationLinks.push(<li key={i}>{anchor}</li>);
  }

  return (
    <nav>
      <ul className="navigation">{navigationLinks}</ul>
    </nav>
  );
}
