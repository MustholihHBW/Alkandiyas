import React from 'react'

export default function SectionLogin() {
    return (
        <section className=''>
            <div className='container py-20 flex justify-center'>
                <form className='flex flex-col items-center py-10 gap-5 bg-sky-800 border w-96 rounded-md'>
                    <img src="https://picsum.photos/100/100" alt="" className='rounded-full' />
                    <p className='font-bold text-3xl text-white'>
                        Login
                    </p>

                    {/* input */}
                    <div className='flex flex-col gap-5 mb-5'>
                        <input type="username" placeholder='username' className='py-2 px-2 border rounded w-60' />
                        <input type="password" placeholder='password' className='py-2 px-2 border rounded w-60' />
                    </div>

                    <button className='bg-green-500 py-2 px-2 rounded text-white w-60'>
                        <a href="">
                            Login
                        </a>
                    </button>

                </form>
            </div>
        </section>
    )
}
