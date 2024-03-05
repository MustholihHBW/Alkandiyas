import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <section className="w-full bg-sky-900">
            {/* container */}
            <div className="container flex justify-between items-center py-3 gap-5">
                {/* logo */}

                <NavLink to={'/'} className="flex gap-3">
                    <img src="https://picsum.photos/100/100" alt="logo alkandiyas" className="rounded-full h-14 w-14" />
                    <h4 className="font-bold text-xl text-white">
                        Pondok Pesantren <br />
                        Alkandiyas Krapyak
                    </h4>
                </NavLink>


                {/* menu navbar */}
                <div className="">
                    <ul className="flex justify-between items-center gap-10 text-white">
                        <li><NavLink to={'/'}>Beranda</NavLink></li>
                        <li><NavLink to={'/pendaftaran'}>Pendaftaran</NavLink></li>
                        <li><NavLink to={'/tentang-kami'}>Tentang kami</NavLink></li>
                        <li><NavLink to={'/article'}>Artikel</NavLink></li>
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