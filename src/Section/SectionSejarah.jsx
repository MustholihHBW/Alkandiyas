import React from 'react'

export default function SectionSejarah() {
    return (
        <section className=''>
            {/* sejarah */}
            <div className='container flex flex-col items-center gap-10 py-16'>
                <p className='font-bold text-3xl text-center'>
                    Sejarah Pondok Pesantren Alkandiyas
                </p>
                <img src="https://picsum.photos/100/100" className='rounded-md w-1/2 h-72 object-cover' alt="foto alkandiyas" />
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos explicabo mollitia a, libero sit culpa aut natus nulla laborum et nihil voluptate rerum repellendus, dolorum fugit possimus iure itaque deleniti voluptates voluptatem distinctio illo? Maiores, unde quidem, ipsam quisquam aliquam laborum illum ullam, maxime incidunt distinctio placeat beatae et blanditiis sint alias ipsum? Error culpa soluta voluptate iusto eos alias dolorum vitae perferendis odio temporibus eius, impedit sed, tempora doloribus! Minima alias veritatis dolore aut neque, autem ab, animi fugiat dolores molestiae eos sunt exercitationem doloremque ad ducimus, reprehenderit consequatur expedita dolor quod quibusdam. Ea cupiditate molestias porro corporis aperiam.
                </p>
            </div>

            {/* visi dan misi */}
            <div className='container flex flex-col item-center gap-10 py-16 mb-10'>
                <p className='font-bold text-3xl text-center'>
                    Visi dan Misi
                </p>
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure temporibus a quibusdam incidunt ullam ut molestiae vero hic aliquid reprehenderit labore doloremque voluptatem ex eos, iusto, voluptas, magni nisi nihil. Animi voluptates earum atque, eum quis nisi adipisci dolor, blanditiis molestiae repellendus officiis ex iste rerum obcaecati eius debitis.
                </p>
            </div>
        </section>
    )
}
