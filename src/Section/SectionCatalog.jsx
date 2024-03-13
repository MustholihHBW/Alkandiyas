import React, { useState, useEffect } from 'react'
import ArticleCard from '../components/ArticleCard'
import { NavLink } from 'react-router-dom'
import { getPosts } from '../utils'

export default function SectionCatalog() {
    const [posts, setPosts] = useState([]);

    async function fetchdata() {
        const data = await getPosts();
        if (data !== false) {
            setPosts(data);
        }
        console.log(data)
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <section className='flex flex-col justify-center items-center py-10 gap-5'>
            {/* navbar artikel */}
            <div className='container flex justify-between py-5 bg-white'>
                <NavLink to={'/article'}>
                    <p className='font-bold text-xl md:text-2xl'>
                        My Article
                    </p>
                </NavLink>

                {/* search */}
                <div className='flex'>
                    <input type="cari" placeholder='cari' className='border rounded py-2 px-2 w-24 md:w-48' />
                    <button className='bg-green-500 rounded py-2 px-2 text-white text-sm md:text-base w-10 md:w-20'>
                        Cari
                    </button>
                </div>
            </div>

            <div className='container grid grid-cols-1 md:grid-cols-4 gap-x-3 md:gap-x-5 gap-y-5 md:gap-y-10'>

                {
                    // jika data post lebih dari 0, maka tampilkan data post
                    posts.length > 0
                        ? posts.map((item) => {
                            return (<ArticleCard key={item.id} data={item} />)
                        }) : "kosong"}
            </div>

            {/* pagination */}
            <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Page 1</button>
                <button className="join-item btn">»</button>
            </div>
        </section>
    )
}
