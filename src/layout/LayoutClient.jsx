import React from 'react'
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'

export default function LayoutClient({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
