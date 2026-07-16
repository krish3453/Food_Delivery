import React from 'react'

function Restaurants({restr}) {
    return (
        <>
            <div className='min-w-73.75 h-\[183px\] border-gray-200 relative rounded-3xl overflow-hidden'>
                <img className=' w-full h-full rounded-3xl aspect-video object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/${restr?.info?.cloudinaryImageId}`} alt='' />
                <div className='bg-linear-to-t from-black from 1%  to-transparent to-40% to-gray-100 w-full h-full absolute top-0'></div>
                <div className="absolute bottom-0 text-white text-2xl ml-2 mb-1 font-bold">
                    {restr?.info?.aggregatedDiscountInfoV3?.header}{" "}
                    {restr?.info?.aggregatedDiscountInfoV3?.subHeader}
                </div>

            </div>
            <div className='mt-3'>
                <h2 className='text-lg font-semibold'>Chinese Wonk</h2>
                <p className="flex items-center gap-1 text-base font-semibold"><i className="fi fi-sr-star-christmas text-green-500"></i><span>{restr?.info?.avgRating} • {restr?.info?.sla?.slaString}</span></p>
                <p className='line-clamp-1 text-black/60 font-medium'>{restr?.info?.cuisines.join(", ")}</p>
                <p className='text-black/60'>{restr?.info?.locality}</p>
            </div>
        </>
    )
}

export default Restaurants