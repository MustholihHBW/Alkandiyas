import React from 'react'
import bg from '../assets/Backgroundhero.jpg'

export default function SectionHero() {
    return (
        <section className='relative overflow-hidden'>
            <div className='bg-gradient-to-tr from-white to-white/0'>
                {/* konten */}
                <div className='container max-w-screen-lg flex flex-col items-center text-center text-gray-800 py-16 md:py-32'>
                    <h4 className='font-bold text-4xl md:text-5xl mb-10'>
                        Selamat Datang di Situs Resmi <br />
                        Pondok Pesantren Alkandiyas Krapyak
                    </h4>
                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur et, quisquam dolorem reiciendis autem. Placeat asperiores quam quaerat dolores amet quod soluta? Necessitatibus minus atque ea! Voluptate impedit debitis, vero repellendus, nobis expedita non nesciunt maxime aut laborum sapiente fugit perspiciatis aliquid explicabo a magnam soluta nulla officia voluptas?
                    </p>

                    {/* gambar belakang */}
                    <img src={bg} alt="foto background hero" className='absolute top-0 left-0 size-full object-cover -z-10' />
                </div>
            </div>
        </section>
    )
}
