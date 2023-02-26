import { FAKE_USER } from "../FakeData";
import { ActiveLink } from "./ActiveLink";

/**
 * Navigation item for "Profile" section. Shows "Hi, <user>!" when a user has logged in
 * @return {JSX.Element|null}
 * @constructor
 */
export function ProfileNavItem() {
  const user = FAKE_USER;
  if (user) {
    return (
      <li>
        <ActiveLink to="/profile">Hi, {user.name}!</ActiveLink>
      </li>
    );
  } else {
    return null;
  }
}
