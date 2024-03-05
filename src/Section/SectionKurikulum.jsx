import React from 'react'

export default function SectionKurikulum() {
    return (
        <section>
            <div className='container py-10 flex flex-col items-center'>
                {/* Kurikulum */}
                <p className='font-bold text-neutral-800 text-2xl text-center mb-10'>
                    Kurikulum Pembelajaran
                </p>

                {/* kurikulum card */}
                <div className='flex justify-between items-center gap-5'>
                    <div className='card border rounded-md shadow-xl'>
                        <div className='card-body'>
                            <p className='font-bold text-center text-xl'>
                                Program Takhosus
                            </p>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id dolor iste minus dignissimos recusandae expedita ut fugit officia ad temporibus!
                            </p>
                        </div>
                    </div>

                    <div className='card border rounded-md shadow-xl'>
                        <div className='card-body'>
                            <p className='font-bold text-center text-xl'>
                                Program Mahasiswa
                            </p>
                            <p className='text-center'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut incidunt dolorem quibusdam, laboriosam porro ipsa. Consequuntur porro fugit corrupti maiores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
