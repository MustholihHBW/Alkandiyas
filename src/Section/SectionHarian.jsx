import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SectionHarian() {
    return (
        <section className='bg-sky-900'>
            <div className='container py-5'>
                {/* card */}
                <div className='card border rounded-md shadow-xl bg-white'>
                    <div className='card-body'>
                        {/* konten card */}
                        <div className='flex flex-col md:flex-row justify-between gap-5 py-5'>
                            <img src="https://picsum.photos/100/100" alt="" className='md:aspect-video h-52 rounded-md object-cover' />

                            {/* kegiatan harian */}
                            <div className='flex flex-col gap-5'>
                                <p className='font-bold text-left text-lg md:text-xl'>
                                    Kegiatan Harian
                                </p>

                                <p className='text-left text-sm md:text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas qui esse asperiores obcaecati voluptates, exercitationem accusantium alias eaque illo voluptate cum porro adipisci facere excepturi, repellendus necessitatibus laboriosam eius commodi.
                                </p>
                                <button className='bg-green-500 rounded py-2 px-2 text-white text-sm w-28 md:w-32 md:text-base'>
                                    <NavLink to={'/kegiatan-harian'}>
                                        Selengkapnya
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
