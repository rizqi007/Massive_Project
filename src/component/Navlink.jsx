import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavLink({ href, children }) {
    return (
        <Link className=" px-3 py-2 text-primary hover:bg-orange-600" to={href}>
            {children}
        </Link>
    );
}
