import NavLink from "./Navlink";
import { Link } from "react-router-dom";
import IKMI from "../assets/img/ikmi.png";
import "../App.css";

export default function Navbar() {
    return (
        <div className="navbar shadow-md z-50">
            <div className="flex-1">
                <img className="w-10 ml-8 mr-3 mb-1" src={IKMI} alt="" />
                <Link
                    className="mr-2 text-sm font-bold uppercase text-primary "
                    to="/"
                >
                    PEMIRA IKMI
                </Link>
            </div>
            <div className="flex-none mr-5">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li>
                        <NavLink href="/">Beranda</NavLink>
                    </li>
                    <li>
                        <NavLink href="/Ormawa">Ormawa</NavLink>
                    </li>
                    <li>
                        <details>
                            <summary>BEM</summary>
                            <ul className="p-1 bg-white z-40">
                                <li>
                                    <NavLink href="/Tentang">Tentang</NavLink>
                                </li>
                                <li>
                                    <NavLink href="/Pemira">Pemira</NavLink>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <NavLink href="/TentangKami">Tentang Kami</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
