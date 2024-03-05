import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleArticle() {
    const { id } = useParams()

    return (
        <div>

            {/* title */}
            <h1>kjaksdjf</h1>

            {/* content */}
            <div className='prose'>
                <h3>cara nembak cewe</h3>
                <p>kjsdakfja</p>
                <p>kjsdkfjksjdf</p>
                <p>lorem100</p>
            </div>

            <section className='flex flex-col justify-center items-center py-5 gap-10'>
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

                {/* konten */}
                <div className='container flex flex-col gap-10 mb-10'>
                    <h2 className='font-bold text-4xl text-center'>
                        Ini Contoh Artikel
                    </h2>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aut sequi molestiae error ipsum molestias, animi totam quis minima esse officiis tempore nesciunt! Maxime, necessitatibus sunt! In officiis voluptates vitae, molestias unde aspernatur recusandae neque repudiandae dignissimos optio. Necessitatibus vitae explicabo exercitationem earum, consectetur eveniet repudiandae, dolorum suscipit fuga quidem, labore vel! Ab recusandae assumenda beatae veritatis dolorem ratione at eligendi aut et tenetur provident illum reiciendis a magnam excepturi quis non, consequuntur earum culpa nam quos magni suscipit. A quisquam quo rem libero accusantium magni dignissimos est ad. Quis porro aliquam accusantium inventore libero, ad illum maxime. Dicta est tempora sapiente ex, nam tenetur! Aperiam dolore possimus deleniti natus consectetur excepturi. Inventore sunt obcaecati quos placeat at dolorum omnis atque, quaerat dolore molestiae illo, eaque facilis itaque aperiam quibusdam vero cum modi quo nulla dolores, incidunt qui fugit. Consequatur maiores quia aspernatur quae, expedita modi. Voluptatibus accusantium minus id tempora debitis? Earum quas officia quos, recusandae itaque porro ullam eum, esse blanditiis sunt minima dolorem corporis. Vero totam voluptatem, soluta reiciendis voluptate impedit, debitis repellat illo quas autem, maiores accusantium. Aut quasi asperiores magnam animi impedit enim consequuntur aperiam cumque distinctio illum laboriosam, possimus nobis beatae sunt dolores culpa earum officia molestias facere. Ea, cumque sit ab quos veniam distinctio, dignissimos neque laboriosam soluta molestias a provident fugiat nam illum laborum impedit repellat architecto illo, assumenda quisquam maxime dolorem voluptate. Voluptatem quibusdam fugit earum perferendis in mollitia beatae repellendus! Porro nesciunt voluptas, cum natus aliquid et iure vel, molestiae ex atque ipsum corrupti laborum deleniti quibusdam ipsam consequuntur pariatur doloribus dolor eveniet rem laudantium itaque tempore architecto? Iusto laborum architecto adipisci praesentium ducimus eligendi, esse molestiae consectetur eveniet quidem maxime alias optio reprehenderit officia repudiandae cupiditate fugiat, harum, voluptatibus facere? Expedita ea amet inventore repellendus corporis! Officiis, ut consequuntur?
                    </p>
                </div>
            </section>

        </div>
    )
}
