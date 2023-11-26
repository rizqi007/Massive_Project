import { useState } from "react";
import IKMI from "../assets/img/ikmi.png";
import { Link } from "react-router-dom";
import NavLink from "./Navlink";
import "../App.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap fixed -mt-2 p-2.5 shadow-md xl:fixed bg-white w-full z-10">
            <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 xl:ml-20">
                <img src={IKMI} className="w-100 h-10 mr-2" alt="Logo" />
                <Link
                    className="mr-2 text-sm font-bold uppercase text-primary "
                    to="/"
                >
                    PEMIRA IKMI
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-3 w-3 ${
                            isOpen ? "hidden" : "block"
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-3 w-3 ${
                            isOpen ? "block" : "hidden"
                        }`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex  lg:items-center lg:w-auto ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <div className="text-sm lg:flex-grow  xl:ml-96 items-end">
                    <ul className="menu xl:menu-horizontal md:menu-horizontal px-1 mt-2  ">
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
                                        <NavLink href="/Tentang">
                                            Tentang
                                        </NavLink>
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
                <div></div>
            </div>
        </nav>
    );
}
