import { Link } from "react-router-dom";
const NavItem = ({path}) => {
    return <li>
        <Link to={`/${path}`} className="capitalize">{path}</Link>
    </li>;
};

export default NavItem;
