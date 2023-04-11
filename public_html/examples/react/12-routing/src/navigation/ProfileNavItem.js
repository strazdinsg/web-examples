import { FAKE_USER } from "../FakeData";
import {NavLink} from "react-router-dom";

/**
 * Navigation item for "Profile" section. Shows "Hi, <user>!" when a
 * user has logged in
 * @return {JSX.Element|null}
 * @constructor
 */
export function ProfileNavItem() {
  const user = FAKE_USER;
  if (user) {
    return (
      <li>
        <NavLink to="/profile">Hi, {user.name}!</NavLink>
      </li>
    );
  } else {
    return null;
  }
}
