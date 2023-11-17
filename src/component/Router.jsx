import { Route, Routes } from 'react-router-dom'
import Beranda from './Beranda';
import About from './About';
import Ormawa from './Ormawa';
import Bem from './BEM';
import TentangKami from './TentangKami';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="about" element={<About />} />
      <Route path="Bem" element={<Bem />} />
      <Route path="Ormawa" element={<Ormawa />} />
      <Route path="TentangKami" element={<TentangKami />} />

    </Routes>
  )
}