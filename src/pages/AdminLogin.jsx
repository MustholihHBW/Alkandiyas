import React from 'react'
import SectionLogin from '../Section/SectionLogin'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { checkAuthToken } from '../utils'


export default function AdminLogin() {
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

        // kalo token di storage sudah ada navigate ke admin
        if (localStorage.getItem("token")) {
            // navigate ke admin
            navigate('/admin')
        }

        // kalo ada, bener ga?
        // kalo salah di navigate ke adminlogin
        if (!checkAuthToken()) {
            navigate('/admin-login')
        }

        // kalo bener navigate ke admin
        if (checkAuthToken()) {
            navigate('/admin')
        }

    }

    // saat mounting jalan function cek diatas
    useEffect(() => {
        checkAuth();
    }, [location.pathname])

    return (
        <>
            <SectionLogin />
        </>
    )
}

