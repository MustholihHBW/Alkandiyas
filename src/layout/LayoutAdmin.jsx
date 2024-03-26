import React, { useEffect } from 'react'
import NavbarAdmin from '../Section/NavbarAdmin'
import FooterAdmin from '../Section/FooterAdmin'
import { checkAuthToken } from '../utils'
import { useNavigate, useLocation } from 'react-router-dom'

export default function LayoutAdmin({ children }) {
    const navigate = useNavigate()
    const location = useLocation()

    // bikin function cek local storage token
    function checkAuth() {
        // apakah localstorage nya ada?
        // kalo salah di navigate ke adminlogin
        if (!localStorage.getItem("token")) {
            // navgiate ke admin login
            navigate('/admin-login')
            return false
        }

        // kalo ada, bener ga?
        // kalo salah di navigate ke adminlogin
        if (!checkAuthToken()) {
            navigate('/admin-login')
        }
    }

    // saat mounting jalan function cek diatas
    useEffect(() => {
        checkAuth();
    }, [location.pathname])

    return (
        <div className='min-h-[100dvh] flex flex-col'>
            <NavbarAdmin />
            <main>
                {children}
            </main>
            <FooterAdmin />
        </div>
    )
}
