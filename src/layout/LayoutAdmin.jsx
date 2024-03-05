import React from 'react'
import NavbarAdmin from '../Section/NavbarAdmin'
import FooterAdmin from '../Section/FooterAdmin'

export default function LayoutAdmin({ children }) {
    return (
        <>
            <NavbarAdmin />
            <main>
                {children}
            </main>
            <FooterAdmin />
        </>
    )
}
