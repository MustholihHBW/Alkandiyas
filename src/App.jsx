import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Section/Navbar'
import Footer from './Section/Footer'
import SectionCatalog from './Section/SectionCatalog'
import SectionHero from './Section/SectionHero'
import SectionKurikulum from './Section/SectionKurikulum'
import SectionHarian from './Section/SectionHarian'
import SectionRutin from "./Section/SectionRutin"

export default function App() {
  return (
    <>
      <Navbar />
      <SectionHero />
      <SectionKurikulum />
      <SectionHarian />
      <SectionRutin />
      <Footer />
    </>
  )
}