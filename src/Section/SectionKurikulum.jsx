import React from 'react'

export default function SectionKurikulum() {
    return (
        <section className='bg-sky-900'>
            <div className='container'>
                <div className='container py-10 flex flex-col items-center'>
                    {/* Kurikulum */}
                    <p className='font-bold text-white text-xl md:text-2xl text-center mb-10'>
                        Kurikulum Pembelajaran
                    </p>

                    {/* kurikulum card */}
                    <div className='flex flex-col justify-between gap-5 md:flex-row'>
                        <div className='card border rounded-md shadow-xl bg-white'>
                            <div className='card-body'>
                                <p className='font-bold text-center text-lg md:text-xl'>
                                    Program Tahfidz
                                </p>
                                <p className='text-center text-sm md:text-base'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolor iste minus dignissimos recusandae expedita ut fugit officia ad temporibus!
                                </p>
                            </div>
                        </div>

                        <div className='card border rounded-md shadow-xl bg-white'>
                            <div className='card-body'>
                                <p className='font-bold text-center text-lg md:text-xl'>
                                    Program Kitab Kuning
                                </p>
                                <p className='text-center text-sm md:text-base'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut incidunt dolorem quibusdam, laboriosam porro ipsa. Consequuntur porro fugit corrupti maiores.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
