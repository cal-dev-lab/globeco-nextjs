import React from 'react'

function CardTwo() {
    return (
        <div className='rounded-2xl p-6 shadow-xl'>
            <li className="mx-auto items-center justify-center text-left p-2 md:h-full h-full">
                <h1 className='text-7xl font-bold tracking-tight'>105M</h1>
                <h5 className="text-lg font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                    Trees in our Partnerships
                </h5>
                <p className="text-sm mx-auto mt-2">
                    Trees are our greatest natural carbon-storing technology in the fight against the climate crisis.
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

export default CardTwo