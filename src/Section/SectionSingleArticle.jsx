import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePost } from '../utils';

export default function SectionSingleArticle() {
    const [post, setPost] = useState(null);

    // mengambil parameter id dari url
    const { id } = useParams();

    // mendapatkan dat post dari api
    async function fetchdata() {
        const data = await getSinglePost(id);
        if (data !== false) {
            setPost(data);
        }
        console.log(data)
    }

    useEffect(() => {
        fetchdata();
    }, [])

    return post !== null ?
        <section className='py-10'>
            <div className='container max-w-screen-lg py-5'>
                {/* featured image */}
                <img
                    className='object-cover aspect-video rounded-xl mb-5'
                    src={post._embedded['wp:featuredmedia']['0'].source_url}
                    alt={"featured image" + post.title.rendered} />

                {/* Judul */}
                <h1 className='font-bold text-2xl md:text-4xl text-center mb-5 md:mb-10'>{post.title.rendered}</h1>

                {/* konten */}
                <div className='prose-base md:prose-lg prose-headings:font-bold' dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                </div>
            </div>

        </section>
        : "kosong"

}
