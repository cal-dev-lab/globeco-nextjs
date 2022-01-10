import React from 'react'
import CardOne from './CardGallery/CardOne'
import CardTwo from './CardGallery/CardTwo'
import CardThree from './CardGallery/CardThree'

function WhatWeDo() {
    return (
        <>
        <div className='bg-black'>
            <div>
                <video
                    autoPlay
                    muted
                    loop
                    className="object-cover h-48 w-screen"
                >
                    <source
                        src="./media/Pexels Videos 2063228.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="flex items-center mx-auto justify-center p-20">
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
