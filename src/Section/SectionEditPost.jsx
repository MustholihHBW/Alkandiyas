import React from 'react'

export default function SectionEditPost() {
    return (
        <section>
            <div className='container py-20 flex justify-center'>
                <form action="" className='flex flex-col items-center gap-5 w-1/2 h-full border rounded-xl py-10 bg-sky-800'>
                    <p className='font-bold text-2xl text-white'>
                        Edit Post
                    </p>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-xl text-white'>
                            Judul
                        </label>
                        <input type="judul" placeholder='judul' className='w-64 border rounded py-2 px-2' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-xl text-white'>
                            Konten
                        </label>
                        <textarea type="konten" placeholder='konten' className='w-64 border rounded py-2 px-2' />
                    </div>

                    <button className='bg-green-500 rounded-md py-2 px-2 text-white w-24'>
                        Edit
                    </button>
                </form>
            </div>
        </section>
    )
}
