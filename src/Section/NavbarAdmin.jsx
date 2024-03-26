import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function NavbarAdmin() {
    const logout = useNavigate()

    const handleLogout = () => {
        // confirm , then true
        if (confirm('tekan tombol oke')) {

            // remove localstorage
            localStorage.removeItem('token')

            // navigate to /admin login
            logout('/admin-login')
            alert('Logout berhasil')
        }
    }

    return (
        <section className='bg-sky-800'>
            <div className='container flex justify-between items-center py-3'>
                <p className='font-bold text-sm md:text-xl text-white'>
                    <NavLink to={'/admin'}>
                        Admin Alkandiyas
                    </NavLink>
                </p>

                <ul className='flex justify-between items-center gap-3 md:gap-10 text-white text-xs md:text-base'>
                    <li><NavLink to={'/admin/create-post'}>Create Post</NavLink></li>
                    {/* <li><NavLink to={'/admin/edit-post'}>Edit Post</NavLink></li> */}

                    <li>
                        <button className='btn btn-error btn-xs md:btn-sm text-white text-xs md:text-base' onClick={handleLogout}>Log Out</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}
