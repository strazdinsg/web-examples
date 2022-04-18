import {NavLink} from "react-router-dom";

/**
 * Our own component which wraps the NavLInk and provides a nicer syntax to handle the active/selected class
 * @param props
 * @return {JSX.Element}
 * @constructor
 */
export function ActiveLink(props) {
    return <NavLink to={props.to} className={({isActive}) => isActive ? "selected" : ""}>{props.children}</NavLink>
}
