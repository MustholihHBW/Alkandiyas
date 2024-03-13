import React from 'react'

export default function SectionLogin() {
    return (
        <section className=''>
            <div className='container py-20 flex justify-center'>
                <form className='flex flex-col items-center py-10 gap-3 md:gap-5 bg-sky-900 border w-72 md:w-96 rounded-md'>

                    {/* logo alkandiyas */}
                    <img src="https://picsum.photos/100/100" alt="" className='rounded-full h-20 w-20 md:h-24 md:w-24' />
                    <p className='font-bold text-2xl md:text-3xl text-white'>
                        Login
                    </p>

                    {/* input username dan password */}
                    <div className='flex flex-col gap-5 mb-5'>
                        <input type="username" placeholder='username' className='py-2 px-2 border rounded w-48 md:w-60' />
                        <input type="password" placeholder='password' className='py-2 px-2 border rounded w-48 md:w-60' />
                    </div>

                    <button className='bg-green-500 py-2 px-2 rounded text-white w-20 md:w-28 text-sm md:text-base'>
                        <a href="">
                            Login
                        </a>
                    </button>

                </form>
            </div>
        </section>
    )
}
