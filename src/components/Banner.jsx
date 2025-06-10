import React from 'react'

const Banner = () => {
  return (
    <div className='bg-white p-1 lg:p-16'>
      <div className='bg-[url(/images/bg-03.jpg)] bg-cover bg-center bg-no-repeat h-auto w-auto p-14 rounded-2xl'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-start w-[300px] sm:w-[400px] md:w-[450px] text-center md:text-left text-white'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6'>
                    Starting with Martex is easy, fast and free
                </h1>
                <h3 className='mb-10 text-center text-white text-lg sm:text-sm lg:text-lg'>
                    It only takes a few clicks to get started
                </h3>
                <div className='flex flex-col justify-center items-center'>
                    <a href="#">
                        <button className='text-white text-sm font-semibold bg-[#f74780] duration-300 py-2 px-7 rounded-sm hover:bg-transparent hover:border-1 mb-4'>
                        Get started - it's free
                        </button>
                    </a>
                    <p className='text-[13px] font-semibold'><span class="flaticon-check flaticon-size-xs relative right-[2px] top-[0.5px]"></span>Free for 14 days, no credit card required.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner