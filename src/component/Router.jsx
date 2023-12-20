import { Route, Routes } from "react-router-dom";
import Beranda from "./Beranda";
import Ormawa from "./Ormawa";
import TentangKami from "./TentangKami";
import Tentang from "./Tentang";
import Pemira from "./pemira";
import Pemira2 from "./Pemira2";
import Onetime from "./Onetime";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="Ormawa" element={<Ormawa />} />
            <Route path="Tentang" element={<Tentang />} />
            <Route path="Pemira" element={<Pemira />} />
            <Route path="Pemira2" element={<Pemira2 />} />
            <Route path="Onetime" element={<Onetime />} />
            <Route path="TentangKami" element={<TentangKami />} />
            
        </Routes>
    );
}
