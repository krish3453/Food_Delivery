import React, { useEffect, useState } from 'react'
import OnYourMind from './OnYourMind.jsx'
import TopRestaurent from './TopRestaurent.jsx'
import OnlineFoodDeli from './OnlineFoodDeli.jsx'

function Body() {

   const [topRestaurentData, setTopRestaurent] = useState([])
   const[OnYourMindData,setOnYourMindData] = useState([])
   async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4506002&lng=77.5861805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const result = await data.json();
        console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTopRestaurent(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }
    useEffect(() => {
            fetchData();
        }, [])

    return (
        <div className='w-full '>

            <div className='w-[80%] mx-auto  mt-3 overflow-hidden'>
                
                <OnYourMind data={OnYourMindData}/>
                <TopRestaurent data={topRestaurentData}/>
                <OnlineFoodDeli data={topRestaurentData}/>
            </div>
        </div>
    )
}

export default Body