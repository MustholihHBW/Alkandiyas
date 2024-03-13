import React from 'react'

export default function SectionEditPost() {
    return (
        <section>
            <div className='container py-20 flex justify-center'>
                <form action="" className='flex flex-col items-center gap-3 md:gap-5 w-72 md:w-96 border rounded-md py-10 bg-sky-900'>
                    <p className='font-bold text-2xl md:text-3xl text-white'>
                        Edit Post
                    </p>

                    {/* edit judul artikel */}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-lg md:text-xl text-white'>
                            Judul
                        </label>
                        <input type="judul" placeholder='judul' className='w-48 md:w-60 border rounded py-2 px-2' />
                    </div>

                    {/* edit konten artikel */}
                    <div className='flex flex-col mb-3 md:mb-5'>
                        <label htmlFor="" className='text-lg md:text-xl text-white'>
                            Konten
                        </label>
                        <textarea type="konten" placeholder='konten' className='w-48 md:w-60 border rounded py-2 px-2' />
                    </div>

                    <button className='bg-green-500 rounded py-2 px-2 text-white text-sm md:text-base w-20 md:w-28'>
                        Edit
                    </button>
                </form>
            </div>
        </section>
    )
}
