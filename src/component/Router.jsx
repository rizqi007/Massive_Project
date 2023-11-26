import { Route, Routes } from "react-router-dom";
import Beranda from "./Beranda";
import About from "./About";
import Ormawa from "./Ormawa";
import TentangKami from "./TentangKami";
import Tentang from "./Tentang";
import Pemira from "./pemira";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="about" element={<About />} />
            <Route path="Ormawa" element={<Ormawa />} />
            <Route path="Tentang" element={<Tentang />} />
            <Route path="Pemira" element={<Pemira />} />
            <Route path="TentangKami" element={<TentangKami />} />
        </Routes>
    );
}
