import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function NavLink({ href, children }) {
    return (
        <Link
            className="flex justify-between px-3 py-2 text-primary"
            to={href}
        >
            {children}
        </Link>
    );
}