import React from 'react'

function Head() {

    const navItems=[
        {
            name:"swiggy corporate",
            icon:<i className="fi fi-rr-shopping-bag text-xl"></i>
        },
        {
            name:"Search",
            icon:<i className="fi fi-rs-search text-xl"></i>
        },
        {
            name:"Offers",
            icon:<i className="fi fi-rs-badge-percent text-xl"></i>
        },
        {
            name:"Help",
            icon:<i className="fi fi-rr-interrogation text-xl"></i>
        },
        {
            name:"Sign in",
            icon:<i className="fi fi-sr-user text-xl"></i>
        },
        {
            name:"Cart",
            icon:<i className="fi fi-rr-shopping-cart text-xl"></i>
        }
    ]

    return (
        <div className='w-full shadow-md h-20 flex justify-center items-center'>

            <div className='w-[70%] flex justify-between'>


                <div className='flex  items-center'>
                    <img className='w-25' src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png' alt='' />
                    <p className='font-bold border-b-2 border-black'>Other</p>
                    <i className="fi fi-rs-angle-small-down flex items-center p-1 text-2xl text-orange-500"></i>
                </div>

                <div className='flex items-center gap-10 font-bold'>
                    {navItems.map((item)=>(
                        <div className='flex items-center gap-2 cursor-pointer text-gray-600'>
                            {item.icon}
                            <p className='text-gray-600'>{item.name}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Head