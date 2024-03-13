import React from 'react'

export default function Example() {
    return (
        <section>
            <div className='container py-10 flex flex-col items-center'>
                {/* Kurikulum */}
                <p className='font-bold text-neutral-800 text-2xl text-center mb-10'>
                    Kurikulum Pembelajaran
                </p>

                {/* kurikulum card */}
                <div className='grid md:grid-cols-2 grid-cols-1 justify-between gap-5 '>
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

            {/* resposive hidden */}
            <div className="container text-3xl">
                <h2 className='hidden'>hello world desktop</h2>
                <h2 className='md:hidden flex'>hello world mobile</h2>

                <button className='md:hidden block'>
                    <img src="./kajsdkf" alt="" />
                </button>


            </div>
        </section>

    )
}
