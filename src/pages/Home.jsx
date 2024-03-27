import React from 'react'
import Navbar from '../Section/Navbar'
import SectionHero from '../Section/SectionHero'
import SectionKurikulum from '../Section/SectionKurikulum'
import SectionHarian from '../Section/SectionHarian'
import Footer from '../Section/Footer'
import SectionRutin from '../Section/SectionRutin'
import LayoutTest from '../layout/LayoutTest'
import LayoutClient from '../layout/LayoutClient'

export default function Home() {
    return (
        <LayoutClient >
            <SectionHero />
            <SectionKurikulum />
            <div className='bg-sky-900'>
                <p className='font-bold text-white text-2xl text-center'>
                    Kegiatan Santri
                </p>
                <SectionHarian />
                <SectionRutin />
            </div>
        </LayoutClient>
    )
}
