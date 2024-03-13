import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SectionSingleArticle() {
    return (
        <section className='py-10'>
            <div className='container max-w-screen-lg py-5'>
                {/* Judul */}
                <h1 className='font-bold text-2xl md:text-4xl text-center mb-5 md:mb-10'>Cara mengatasi stres</h1>

                {/* konten */}
                <div className='prose-base md:prose-lg prose-headings:font-bold'>
                    <h3>
                        Berikut adalah langkah langkah untuk mengatasi stres
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, magnam. Delectus soluta quo nemo distinctio quas iste, minima iure deserunt consequatur, sunt earum cum ex architecto impedit ea dignissimos ducimus. Ipsam, nam! Facere sint ad qui nisi fugiat explicabo quam debitis sunt, dolor nulla quos numquam nemo repudiandae sapiente aliquam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempore delectus non, impedit amet doloribus aliquam, excepturi earum mollitia vero consectetur, distinctio illo laudantium. Incidunt excepturi numquam laudantium quod ullam eius officia. Soluta, non. Vel at consequatur molestias consectetur quaerat, dicta tempore vero voluptatem, provident nisi sapiente officiis cupiditate expedita.
                    </p>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id odit possimus sit assumenda sed, rem ab provident vel reprehenderit vitae sequi ratione minima maxime quod quia error et voluptatum doloribus, nulla cum dolor illum cupiditate labore aliquam. Quis nostrum consequatur iste aut dicta, soluta quos. Voluptatem assumenda corporis labore cum!
                    </p>
                </div>
            </div>

        </section>
    )
}
