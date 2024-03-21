import React, { useState, useEffect } from 'react'
import { editPost, getSinglePost } from '../utils'
import { useParams } from 'react-router-dom'


export default function SectionEditPost() {
    const [judul, setJudul] = useState('')
    const [konten, setKonten] = useState('')

    const { id } = useParams()

    // function untuk handle submit
    async function handleSubmit(e) {
        e.preventDefault()

        const data = {
            title: judul,
            content: konten,
        }
        try {
            const res = await editPost(data, id)
            console.log(await res.json())
            alert('post berhas,il dibuat')
        } catch (e) {
            console.log('Error:', e);
        }
    }

    async function fetchData() {
        // get single data
        const single_post = await getSinglePost(id);
        setJudul(single_post.title.rendered)
        setKonten(single_post.content.rendered)
    }

    // mount
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <div className='container py-20 flex justify-center'>
                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3 md:gap-5 w-72 md:w-96 border rounded-md py-10 bg-sky-900'>
                    <p className='font-bold text-2xl md:text-3xl text-white'>
                        Edit Post
                    </p>

                    {/* edit judul artikel */}
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-lg md:text-xl text-white'>
                            Judul
                        </label>

                        <input
                            onInput={(e) => setJudul(e.target.value)}
                            value={judul}
                            type="judul"
                            placeholder='judul'
                            className='w-48 md:w-60 border rounded py-2 px-2'
                        />
                    </div>

                    {/* edit konten artikel */}
                    <div className='flex flex-col mb-3 md:mb-5'>
                        <label htmlFor="" className='text-lg md:text-xl text-white'>
                            Konten
                        </label>

                        <textarea
                            onInput={(e) => setKonten(e.target.value)}
                            value={konten}
                            type="konten"
                            placeholder='konten'
                            className='w-48 md:w-60 border rounded py-2 px-2'
                        />
                    </div>

                    <button className='bg-green-500 rounded py-2 px-2 text-white text-sm md:text-base w-20 md:w-28'>
                        Edit
                    </button>
                </form>
            </div>
        </section>
    )
}
