export default function Navbar() {
    return (
        <section className="w-full bg-blue-900">
            {/* container */}
            <div className="bg-blue-900 container flex justify-between items-center py-3 gap-5">
                {/* logo */}
                <div className="flex gap-3">
                    <img src="https://picsum.photos/100/100" alt="logo alkandiyas" className="rounded-full h-14 w-14" />
                    <h4 className="font-bold text-xl text-white">
                        Pondok Pesantren <br />
                        Alkandiyas Krapyak
                    </h4>
                </div>

                {/* menu navbar */}
                <div className="">
                    <ul className="flex justify-between items-center gap-10 text-white">
                        <li><a href="">Beranda</a></li>
                        <li><a href="">Pendaftaran</a></li>
                        <li><a href="">Tentang kami</a></li>
                        <li><a href="">Artikel</a></li>
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