import React from 'react'

export default function SectionRutin() {
    return (
        <section>
            <div className='container py-5'>
                {/* card */}
                <div className='card border reounded-md shadow-xl'>
                    <div className='card-body'>
                        {/* konten card */}
                        <div className='flex justify-between items-center gap-5 py-5'>
                            {/* kegiatan rutin */}
                            <div className='flex flex-col gap-5'>
                                <p className='font-bold text-xl text-right'>
                                    Kegiatan Rutin
                                </p>
                                <p className='text-right'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quas odio eaque quod accusantium eius temporibus quidem magnam quia facilis. Repudiandae reprehenderit error pariatur. Excepturi cum minus necessitatibus dolorum delectus.
                                </p>
                                <button className='bg-green-500 rounded py-2 px-2 text-white w-32'>
                                    selengkapnya
                                </button>
                            </div>

                            <img src="https://picsum.photos/100/100" alt="kegiatan rutin" className='w-1/2 rounded-md object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
