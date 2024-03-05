import React from 'react'

export default function LayoutTest({ children }) {
    return (
        <>
            <h1>ini navbar</h1>

            <main>
                {children}
            </main>

            <h1>ini footer</h1>
        </>
    )
}
