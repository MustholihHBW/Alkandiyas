import React, { useState } from 'react'
import { login } from '../utils'
import { useNavigate } from 'react-router-dom'

export default function SectionLogin() {
    const navigate = useNavigate()

    // state untuk menyimpan username dan password
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // handle login
    const handleLogin = async (e) => {
        e.preventDefault()

        // memanggil fungsi login
        const data = await login(username, password)

        if (data.token) {
            // menyimpan token ke local storage
            localStorage.setItem('token', data.token)

            // alert login succes dan redirect/mengarahkan ke halaman login
            alert('Login succes')
            navigate('/admin')
        } else {
            // alert login gagal/failed
            alert('Login failed')
        }

    }

    return (
        <section>
            <div className='container py-20 flex justify-center'>
                <form onSubmit={handleLogin} className='flex flex-col items-center py-10 gap-3 md:gap-5 bg-sky-900 border w-72 md:w-96 rounded-md'>

                    {/* logo alkandiyas */}
                    <img src="https://picsum.photos/100/100" alt="" className='rounded-full h-20 w-20 md:h-24 md:w-24' />
                    <p className='font-bold text-2xl md:text-3xl text-white'>
                        Login
                    </p>

                    {/* input username dan password */}
                    <div className='flex flex-col gap-5 mb-5'>
                        <input
                            onInput={(e) => setUserName(e.target.value)}
                            value={username}
                            type="username"
                            placeholder='username'
                            className='py-2 px-2 border rounded w-48 md:w-60'
                        />


                        <input
                            onInput={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder='password'
                            className='py-2 px-2 border rounded w-48 md:w-60'
                        />
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
