import { useSelector } from "react-redux";

/**
 * Navigation item for "Profile" section. Shows "Hi, <user>!" when a user has logged in
 * @return {JSX.Element|null}
 * @constructor
 */
export function ProfileNavItem() {
  const user = useSelector((state) => state.userStore.user);
  if (user) {
    return <li>Hi, {user.name}!</li>;
  } else {
    return null;
  }
}
