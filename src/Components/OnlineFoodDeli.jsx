import React from 'react'
import Restaurants from './Restaurants.jsx'
function OnlineFoodDeli({ data }) {



    return (
        <div>
            <p className='text-2xl font-bold'>Restaurants with online food delivery</p>

            <div className="grid grid-cols-4 mt-3 rounded-xl overflow-hidden gap-4">
                {data.map((restr) => {
                    return (
                        <div className=''>
                            <Restaurants restr={restr} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OnlineFoodDeli