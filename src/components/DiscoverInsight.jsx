import React from 'react'

const DiscoverInsight = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto p:16 sm:p-0 lg:p-16 mt-8'>
        {/* text part */}
        <div className='flex flex-col justify-center items-center w-[400px] font-semibold sm:w-[400px] md:w-[530px] lg:w-[800px] text-center md:text-left text-[#353f4f]'>
            <h1 className='text-3xl sm:text-3xl lg:text-5xl text-center mb-4'>Discover insights across all your data with Martex</h1>
            <h3 className='mb-10 text-center text-[#808080] text-lg sm:text-sm lg:text-lg'>Ligula risus auctor tempus magna feugiat lacinia.</h3>
            <img className='w-[400px] sm:w-[500px] md:w-[450px] lg:w-[900px] mb-10' src="images/img-19.png" alt="video-preview"/>
            <a href="#">
                <button className='hover:text-white text-sm font-bold hover:bg-[#f74780] duration-300 py-2 px-7 rounded-sm bg-transparent border-[1.5px] mb-4'>
                Monitor your activity
                </button>
            </a>
            <p className='text-[13px] font-semibold'>
                Free 14-day trial 
                <span class="flaticon-check relative right-[2px] top-[0.5px] ml-1"> Exclusive Support </span>
                <span class="flaticon-check relative right-[2px] top-[0.5px]"> No Fees </span>
            </p>
        </div>

    </div>
  )
}

export default DiscoverInsight