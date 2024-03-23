import React, { useState, useEffect } from 'react'
import { editPost, getSinglePost, createMediaItem } from '../utils'
import { useParams } from 'react-router-dom'

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditorComponent from 'react-froala-wysiwyg';

export default function SectionEditPost() {
    const [judul, setJudul] = useState('')
    const [konten, setKonten] = useState('')
    const [featuredMedia, setFeaturedMedia] = useState('')
    const [featuredMediaId, setFeaturedMediaId] = useState(null)

    const { id } = useParams()

    const BASE_URL = 'https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json';

    const config = {
        placeholderText: "Edit Your Content Here!",
        height: 300,
        imageUploadURL: `${BASE_URL}/wp/v2/media`,
        imageUploadMethod: 'POST',
        imageAllowedTypes: ['jpeg', 'jpg', 'png'],
        requestHeaders: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    }

    // handle fatured media
    const handleFeaturedMedia = async (e) => {
        // upload image to media
        const file = e.target.files[0]
        setFeaturedMedia(e.target.value)

        const response = await createMediaItem(file)

        setFeaturedMediaId(response.id)
    }

    // function untuk handle submit
    async function handleSubmit(e) {
        e.preventDefault()

        const data = {
            title: judul,
            content: konten,
            featured_media: featuredMediaId
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

                    {/* featured media */}
                    <div className='flex flex-col'>
                        <label className='text-lg md:text-xl text-white'>
                            Gambar
                        </label>

                        <input

                            onInput={handleFeaturedMedia}
                            value={featuredMedia}
                            type="file"
                            placeholder='judul'
                            className='w-48 md:w-60 border rounded py-2 px-2'
                        />
                    </div>

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
                    <div className='flex flex-col mb-3 md:mb-5 w-48 md:w-60'>
                        <label htmlFor="" className='text-lg md:text-xl text-white'>
                            Konten
                        </label>

                        <FroalaEditorComponent tag='textarea'
                            onModelChange={(model) => setKonten(model)}
                            config={config}
                            model={konten}
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
