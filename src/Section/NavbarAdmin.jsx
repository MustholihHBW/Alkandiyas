import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarAdmin() {
    return (
        <section className='bg-sky-800'>
            <div className='container flex justify-between items-center py-3'>
                <p className='font-bold text-base md:text-xl text-white'>
                    <NavLink to={'/admin'}>
                        Admin Alkandiyas
                    </NavLink>
                </p>

                <ul className='flex justify-between gap-3 md:gap-10 text-white text-sm md:text-base'>
                    <li><NavLink to={'/admin/create-post'}>Create Post</NavLink></li>
                    {/* <li><NavLink to={'/admin/edit-post'}>Edit Post</NavLink></li> */}
                </ul>
            </div>
        </section>
    )
}
