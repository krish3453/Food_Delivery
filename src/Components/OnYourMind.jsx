import React, { useEffect, useState } from 'react'


function OnYourMind() {

    const [data, setData] = useState([]);

    const [value, setvalue] = useState(0)
    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4506002&lng=77.5861805&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const result = await data.json();
        //console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }

    useEffect(() => {
        fetchData();
    }, [])
    

    function handlePrev() {
        value <= 0 ? "" : setvalue((prev) => prev - 27)
    }

    function handleNext() {
        value >= 108 ? "" : setvalue((prev) => prev + 27)
    }

    return (
        <div>
            <div className='flex justify-between items-center'>
            <h1 className='font-bold text-2xl'>What's on your mind?</h1>

            <div className='flex '>
                <div onClick={handlePrev} className={` rounded-full w-7 h-7 flex justify-center items-center cursor-pointer` + (value <= 0 ? " bg-gray-300" : " bg-orange-500")}>
                    <i class="fi fi-rr-arrow-small-left text-xl"></i>
                </div>
                <div onClick={handleNext} className={` rounded-full w-7 h-7 flex justify-center items-center cursor-pointer` + (value >= 108 ? " bg-gray-300" : " bg-orange-500")}>
                    <i class="fi fi-rr-arrow-small-right text-xl"></i>

                </div>
            </div>
            </div>


            <div
                style={{ translate: `-${value}%` }}
                className={`flex  duration-1000`}>
                {data.map((item) => (
                    <img className='w-40' src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`} alt='' />
                ))}
            </div>
            <hr className='border-0.2 text-gray-300'/>
        </div>
    )
}

export default OnYourMind