import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SectionRutin() {
    return (
        <section className='bg-sky-900'>
            <div className='container py-5'>
                {/* card */}
                <div className='card border rounded-md shadow-xl bg-white'>
                    <div className='card-body'>
                        {/* konten card */}
                        <div className='flex flex-col md:flex-row justify-between gap-5 py-5'>
                            {/* kegiatan rutin */}
                            <div className='flex flex-col gap-5 md:order-1 order-2'>
                                <p className='font-bold text-right text-lg md:text-xl'>
                                    Kegiatan Rutin
                                </p>
                                <p className='text-right text-sm md:text-base'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quas odio eaque quod accusantium eius temporibus quidem magnam quia facilis. Repudiandae reprehenderit error pariatur. Excepturi cum minus necessitatibus dolorum delectus.
                                </p>
                                <button className='bg-green-500 ml-auto rounded py-2 px-2 text-white text-sm w-28 md:w-32 md:text-base'>
                                    <NavLink to={'/kegiatan-rutin'}>
                                        Selengkapnya
                                    </NavLink>
                                </button>
                            </div>

                            <img src="https://picsum.photos/100/100" alt="kegiatan rutin" className='md:order-2 order-1 aspect-video h-52 rounded-md object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
