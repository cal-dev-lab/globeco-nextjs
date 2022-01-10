import React from 'react'

function CardOne() {
    return (
        <div className='rounded-2xl p-6 shadow-xl'>
            <li className="mx-auto items-center justify-center text-left p-2 md:h-full h-full">
                <h1 className='text-7xl font-bold tracking-tight'>40</h1>
                <h5 className="text-lg font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                People-Powered Projects
                    </h5>
                <p className="text-sm mx-auto mt-2">
                From the Amazon to New Guinea to the Congo Basin, communities all over the world are fighting deforestation. 
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

export default CardOne








