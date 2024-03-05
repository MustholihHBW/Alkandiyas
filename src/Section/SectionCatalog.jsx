import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { NavLink } from 'react-router-dom'
export default function SectionCatalog() {
    return (
        <section className='flex flex-col justify-center items-center py-10 gap-5'>
            {/* navbar artikel */}
            <div className='container flex justify-between py-5 bg-white'>
                <NavLink to={'/article'}>
                    <p className='font-bold text-2xl'>
                        My Article
                    </p>
                </NavLink>

                {/* search */}
                <div className='flex'>
                    <input type="cari" placeholder='cari' className='border rounded py-2 px-2' />
                    <button className='bg-green-500 rounded py-2 px-2 text-white w-20'>
                        Cari
                    </button>
                </div>
            </div>

            <div className='container grid grid-cols-4 gap-x-5 gap-y-10'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
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
