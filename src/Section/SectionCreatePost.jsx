import { useState } from 'react'
import React from 'react'
import { createPost, createMediaItem } from '../utils'

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditorComponent from 'react-froala-wysiwyg';


export default function SectionCreatePost() {
    const [judul, setJudul] = useState('')
    const [konten, setKonten] = useState('')
    const [featuredMedia, setFeaturedMedia] = useState('')
    const [featuredMediaId, setFeaturedMediaId] = useState(null)

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
            const res = await createPost(data)
            console.log(await res.json())
            alert('post berhasil dibuat')
        } catch (e) {
            console.log('Error:', e);
        }
    }

    return (
        <section className=''>
            <div className='container py-20 flex justify-center'>
                <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3 md:gap-5 border rounded-md py-10 bg-sky-900 w-72 md:w-96'>
                    <p className='font-bold text-2xl md:text-3xl text-white'>
                        Create Post
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

                    {/* judul artikel yang ingin dibuat*/}
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

                    {/* konten artikel yang ingin dibuat */}
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

                    {/* button post */}
                    <button className='bg-green-500 rounded py-2 px-2 text-white w-20 md:w-28 text-sm md:text-base'>
                        Create
                    </button>
                </form>
            </div>
        </section>
    )
}
