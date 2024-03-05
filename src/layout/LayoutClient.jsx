import React from 'react'
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'

export default function LayoutClient({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
