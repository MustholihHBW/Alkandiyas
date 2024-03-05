import React from 'react'

export default function SectionCreatePost() {
    return (
        <section className=''>
            <div className='container py-20 flex justify-center'>
                <form action="" className='flex flex-col items-center gap-5 border rounded-xl py-10 bg-sky-800 w-1/2 h-full'>
                    <p className='font-bold text-2xl text-white'>
                        Create Post
                    </p>
                    {/* judul */}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-xl text-white'>
                            Judul
                        </label>
                        <input type="judul" placeholder='judul' className='w-64 border rounded py-2 px-2' />
                    </div>

                    {/* konten yang ingin dibuat */}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-xl text-white'>
                            Konten
                        </label>
                        <textarea type="konten" placeholder='konten' className='w-64 border rounded py-2 px-2' />
                    </div>

                    {/* button post */}
                    <button className='bg-green-500 rounded py-2 px-2 text-white w-24'>
                        Create
                    </button>
                </form>
            </div>
        </section>
    )
}
