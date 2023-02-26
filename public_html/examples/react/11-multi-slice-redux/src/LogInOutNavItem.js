import { useDispatch, useSelector } from "react-redux";
import { setUser, unsetUser } from "./redux/userSlice";

const FAKE_USER = {
  name: "Chuck",
  email: "microsoft@com.chuck",
};

/**
 * Navigation item for "Log in"/"Log out" button. Simulates user log-in process
 * @return {JSX.Element}
 * @constructor
 */
export function LogInOutNavItem() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userStore.user);
  if (user) {
    return <li onClick={() => dispatch(unsetUser())}>Log out</li>;
  } else {
    return <li onClick={() => dispatch(setUser(FAKE_USER))}>Log in</li>;
  }
}
