import NavLink from "./Navlink";
import { Link } from "react-router-dom";
import Case from "./Case";

export default function Navbar() {
    return (
        <div className="bg-white shadow-lg shadow-slate-350 py-2">
            <Case>
                <div className="flex items-center">
                    <Link
                        className="mr-2 text-sm font-bold uppercase text-primary "
                        to="/"
                    >
                        PEMIRA IKMI
                    </Link>
                    <NavLink href="/">Beranda</NavLink>
                    <NavLink href="/Ormawa">Ormawa</NavLink>
                    <NavLink href="/Bem">BEM</NavLink>
                    <NavLink href="/TentangKami">Tentang Kami</NavLink>
                </div>
            </Case>
        </div>
    );
}


// const Navbar = () => {
//   return (
    
//     <div className="navbar bg-base-100">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="flex-none">
//     <ul className="menu menu-horizontal px-1">
//       <li><NavLink href="/Ormawa">Ormawa</NavLink></li>
//       <li><NavLink href="/Ormawa">Ormawa</NavLink></li>
//       <li>
//         <details>
//           <summary>
//             Parent
//           </summary>
//           <ul className="p-2 bg-base-100">
//             <li><a>Link 1</a></li>
//             <li><a>Link 2</a></li>
//           </ul>
//         </details>
//       </li>
//     </ul>
//   </div>
// </div>
//   )
// }

// export default Navbar
