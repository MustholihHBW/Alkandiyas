import React from 'react'
import ArticleCard from '../components/ArticleCard'
export default function SectionCatalog() {
    return (
        <section className='container'>
            <div className='grid grid-cols-4 gap-x-5 gap-y-10'>
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </section>
    )
}
