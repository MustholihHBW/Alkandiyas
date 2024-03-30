import { NavLink } from "react-router-dom";

import MenuIcon from '../assets/Menu Icon.svg'

import Alkandiyas from '../assets/Alkandiyas.svg'

export default function Navbar() {
    return (
        <section className="w-full bg-sky-900">
            {/* container */}
            <div className="container flex justify-between items-center py-3 gap-5">
                {/* logo */}

                <NavLink to={'/'} className="flex gap-3">
                    <img src={Alkandiyas} alt="logo alkandiyas" className="rounded-full h-10 w-10 md:h-14 md:w-14" />
                    <h4 className="hidden md:block font-bold text-xl text-white">
                        Pondok Pesantren <br />
                        Alkandiyas Krapyak
                    </h4>
                </NavLink>


                {/* menu navbar */}
                <div className="">

                    {/* dropdown menu */}
                    <div className="md:hidden dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-square m-1 rounded-md">
                            <img src={MenuIcon} alt="" className="md:hidden h-10 w-10" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] mt-3 menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'}>Beranda</NavLink></li>
                            <li><NavLink to={'/pendaftaran'}>Pendaftaran</NavLink></li>
                            <li><NavLink to={'/tentang-kami'}>Tentang kami</NavLink></li>
                            <li><NavLink to={'/article'}>Artikel</NavLink></li>
                        </ul>
                    </div>

                    <ul className="hidden gap-10 text-white md:flex justify-between items-center">
                        {/* Beranda */}
                        <li><NavLink to={'/'}>Beranda</NavLink></li>

                        {/* Pendaftaran */}
                        <li><NavLink to={''}>Pendaftaran</NavLink></li>

                        {/* kegiatan */}
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="m-1">Kegiatan</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] mt-6 menu p-2 shadow bg-sky-900 rounded w-52">
                                <li><NavLink to={'/kegiatan-harian'}>Kegiatan Harian</NavLink></li>
                                <li><NavLink to={'/kegiatan-rutin'}>Kegiatan Rutin</NavLink></li>
                            </ul>
                        </div>

                        {/* tentang kami */}
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="m-1">Tentang Kami</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu mt-6 p-2 shadow bg-sky-900 rounded w-52">
                                <li><NavLink to={'/sejarah'}>Sejarah</NavLink></li>
                                <li><NavLink to={'/profil-pengasuh'}>Dewan Pengasuh</NavLink></li>
                                <li><NavLink to={'/kurikulum-pondok'}>Kurikulum</NavLink></li>
                            </ul>
                        </div>

                        {/* Artikel */}
                        <li><NavLink to={'/article'}>Artikel</NavLink></li>

                        {/* Fasilitas */}
                        <li><NavLink to={'/fasilitas-pondok'}>Fasiltas</NavLink></li>
                    </ul>
                </div>

                {/* <div>
                    <input type="search" className="rounded py-2 px-2" />
                    <button className="bg-green-500 rounded py-2 px-2 text-white">
                        Search
                    </button>
                </div> */}
            </div>
        </section>
    )
}