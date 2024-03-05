import React from 'react'

export default function SectionHarian() {
    return (
        <section className=''>
            <div className='container py-5'>
                {/* card */}
                <div className='card border rounded-md shadow-xl'>
                    <div className='card-body'>
                        {/* konten card */}
                        <div className='flex justify-between items-center gap-5 py-5'>
                            <img src="https://picsum.photos/100/100" alt="" className='w-1/2 h-64 rounded-md object-cover' />

                            {/* kegiatan harian */}
                            <div className='flex flex-col gap-5'>
                                <p className='font-bold text-left text-xl'>
                                    Kegiatan Harian
                                </p>
                                <p className='text-left'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas qui esse asperiores obcaecati voluptates, exercitationem accusantium alias eaque illo voluptate cum porro adipisci facere excepturi, repellendus necessitatibus laboriosam eius commodi.
                                </p>
                                <button className='bg-green-500 rounded py-2 px-2 text-white w-32'>
                                    Selengkapnya
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
