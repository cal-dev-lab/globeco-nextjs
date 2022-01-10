import React from 'react'

function CardThree() {
    return (
        <div className='rounded-2xl p-6 shadow-xl'>
            <li className="mx-auto items-center justify-center text-left p-2 md:h-full h-full">
                <h1 className='text-7xl font-bold tracking-tight'>48M</h1>
                <h5 className="text-lg font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                    Tonnes of Carbon Stored
                </h5>
                <p className="text-sm mx-auto mt-2">
                    Carbon is being stored and kept out of the atmosphere in all of our partnerships in the Amazon, Congo and New Guinea rainforests.
                </p>
                <button className='mt-4'>
                <a href='#' className='transition duration-300 uppercase hover:text-black text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500'>
                        Read More &rarr;
                    </a>
                </button>
            </li>
        </div>
    )
}

export default CardThree








