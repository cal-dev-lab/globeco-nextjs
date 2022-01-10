import React from 'react'
import CardOne from './CardGallery/CardOne'
import CardTwo from './CardGallery/CardTwo'
import CardThree from './CardGallery/CardThree'

function WhatWeDo() {
    return (
        <>
        <div className='p-20'>
            <div className="text-left md:text-center mx-auto">
                <h1
                    className="text-4xl md:text-6xl uppercase tracking-snug font-bold mb-2 text-black"
                >
                    Globeco in Numbers
                </h1>
            </div>
            <div className="flex items-left mx-auto mt-20">
                <div className="flex-1 max-w-6xl mx-auto items-left">
                    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <CardOne />
                        <CardTwo />
                        <CardThree />
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default WhatWeDo
