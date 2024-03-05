import React from 'react'
import SectionCatalog from '../Section/SectionCatalog'
import LayoutAdmin from '../layout/LayoutAdmin'
import LayoutClient from '../layout/LayoutClient'

export default function Article() {
    return (
        <LayoutClient>
            <SectionCatalog />
        </LayoutClient>
    )
}
