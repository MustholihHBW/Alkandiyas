
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Article from './pages/Article'
import SingleArticle from './pages/SingleArticle'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Pendaftaran from './pages/Pendaftaran'
import TentangKami from './pages/TentangKami'
import Example from "./pages/Example"
import KegiatanHarian from './pages/KegiatanHarian'
import Sejarah from './pages/Sejarah'
import ProfilPengasuh from './pages/ProfilPengasuh'
import KurikulumPondok from './pages/KurikulumPondok'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article' element={<Article />} />
        <Route path='/article/:id' element={<SingleArticle />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/create-post' element={<CreatePost />} />
        <Route path='/admin/edit-post/:id' element={<EditPost />} />
        <Route path='/pendaftaran' element={<Pendaftaran />} />
        <Route path='/tentang-kami' element={<TentangKami />} />
        <Route path='/example' element={<Example />} />
        <Route path='/kegiatan-harian' element={<KegiatanHarian />} />
        <Route path='/kegiatan-rutin' element={<KegiatanHarian />} />
        <Route path='/sejarah' element={<Sejarah />} />
        <Route path='/profil-pengasuh' element={<ProfilPengasuh />} />
        <Route path='/kurikulum-pondok' element={<KurikulumPondok />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App