import React, { useEffect, useState } from 'react'
import OnYourMind from './OnYourMind.jsx'
import TopRestaurent from './TopRestaurent.jsx'

function Body() {

   

    return (
        <div className='w-full '>

            <div className='w-[80%] mx-auto  mt-3 overflow-hidden'>
                
                <OnYourMind/>
                <TopRestaurent/>
            </div>
        </div>
    )
}

export default Body