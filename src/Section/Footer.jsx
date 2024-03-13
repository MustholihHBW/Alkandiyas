import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-sky-900 w-full mt-auto">
            <div className="container 
            flex justify-between items-center gap-10 py-5">
                {/* pondok */}
                <div className="flex flex-col items-start md:items-center">
                    <NavLink to={'/'}>
                        <div className="flex justify-between items-center gap-2">
                            <img src="https://picsum.photos/100/100" alt="" className="h-10 w-10 md:h-16 md:w-16 rounded-full" />
                            <h4 className="text-white font-bold text-lg md:text-xl">Pondok Pesantren <br />
                                Alkandiyas Krapyak
                            </h4>
                        </div>
                    </NavLink>
                    <p className="text-white mt-2 text-sm md:text-base">
                        Jl. Krapyak Wetan No.RT.05, Krapyak Kulon, <br />
                        Panggungharjo, Kec. Sewon, Kabupaten Bantul,<br />
                        Daerah Istimewa Yogyakarta 55188
                    </p>
                </div>

                {/* menu navbar */}
                <div className="hidden md:block space-y-5">
                    <h4 className="font-bold text-white text-xl">
                        Tentang kami
                    </h4>
                    <ul className="text-white space-y-2">
                        <li><a href="">Visi misi</a></li>
                        <li><a href="">Dewan pengasuh</a></li>
                        <li><a href="">Kurikulum</a></li>
                    </ul>
                </div>

                {/* Kegiatan santri */}
                <div className="hidden md:block space-y-5">
                    <h4 className="font-bold text-white text-xl">
                        Kegiatan santri
                    </h4>
                    <ul className="text-white space-y-2">
                        <li><a href="">Kegiatan Harian</a></li>
                        <li><a href="">Kegiatan Rutin</a></li>
                    </ul>
                </div>

                {/* medsos */}
                <div className="hidden md:block space-y-5">
                    <h4 className="font-bold text-white text-xl">
                        Media Sosial
                    </h4>
                    <ul className="text-white space-y-2">
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
            </div>

            {/* copyright */}
            <div className="bg-gray-800 flex justify-center w-full">
                <p className="text-white text-xs">
                    Copyright &copy; 2024 Pondok Pesantren Alkandiyas
                </p>
            </div>
        </footer>
    )
}