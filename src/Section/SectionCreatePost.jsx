import React from 'react'

export default function SectionCreatePost() {
    return (
        <section className=''>
            <div className='container py-20 flex justify-center'>
                <form action="" className='flex flex-col items-center gap-3 md:gap-5 border rounded-md py-10 bg-sky-900 w-72 md:w-96'>
                    <p className='font-bold text-2xl md:text-3xl text-white'>
                        Create Post
                    </p>

                    {/* judul artikel yang ingin dibuat*/}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-lg md:text-xl text-white'>
                            Judul
                        </label>
                        <input type="judul" placeholder='judul' className='w-48 md:w-60 border rounded py-2 px-2' />
                    </div>

                    {/* konten artikel yang ingin dibuat */}
                    <div className='flex flex-col mb-3 md:mb-5'>
                        <label htmlFor="" className='text-lg md:text-xl text-white'>
                            Konten
                        </label>
                        <textarea type="konten" placeholder='konten' className='w-48 md:w-60 border rounded py-2 px-2' />
                    </div>

                    {/* button post */}
                    <button className='bg-green-500 rounded py-2 px-2 text-white w-20 md:w-28 text-sm md:text-base'>
                        Create
                    </button>
                </form>
            </div>
        </section>
    )
}
