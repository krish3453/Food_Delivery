
import React, { useEffect, useState } from 'react'
import Restaurants from './Restaurants.jsx'

function TopRestaurent({ data }) {

    const [value, setValue] = useState(0)
    //const [data, setData] = useState([])
    // async function fetchData() {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4506002&lng=77.5861805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //     const result = await data.json();
    //     console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])
    // console.log(value)

    function handlePrev() {
        value <= 0 ? "" : setValue((prev) => prev - 45)
    }

    function handleNext() {
        value >= 300 ? "" : setValue((prev) => prev + 45)
    }

    return (


        <div className='mt-3 mb-3'>


            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>Top Restaurent chains in Delhi</h1>

                <div className='flex '>
                    <div onClick={handlePrev} className={` rounded-full w-7 h-7 flex justify-center items-center cursor-pointer` + (value <= 0 ? " bg-gray-300" : " bg-orange-500")}>
                        <i className="fi fi-rr-arrow-small-left text-xl"></i>
                    </div>
                    <div onClick={handleNext} className={` rounded-full w-7 h-7 flex justify-center items-center cursor-pointer` + (value >= 108 ? " bg-gray-300" : " bg-orange-500")}>
                        <i className="fi fi-rr-arrow-small-right text-xl"></i>

                    </div>
                </div>
            </div>


            <div

                className={`flex  gap-4 mt-3 w-full  duration-1000`} style={{ translate: `-${value}%` }}>
                {
                    data.map((restr) => {
                        return (
                            <div className="hover:scale-105 duration-300 cursor-pointer">
                               <Restaurants restr={restr}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default TopRestaurent