import React from 'react'

const Hero = () => {
  return (
    <div className='hero bg-[url(./images/hero-1.jpg)] bg-cover'>
      <div className='flex flex-col gap-10 sm:flex-row items-center justify-around px-5 sm:px-20 md:px-28 py-20'>
        {/* Text Part */}
        <div className='flex flex-col justify-start w-[300px] md:w-[530px] text-center sm:text-left text-white'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold text-left mb-4'>
            Content is the key to building an audience
          </h1>
          <h3 className='mb-4 sm:text-sm md:text-lg'>
            Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a volute ligula and aliquet tortor
          </h3>
          <a href="#">
            <button className='text-white text-sm font-semibold bg-[#f74780] duration-300 py-2 px-7 rounded-sm hover:bg-transparent hover:border-1 mb-4'>
              Get started for free
            </button>
          </a>
          <p className='text-[13px] sm:text-xs md:text-[13px] font-normal'><span className="flaticon-check flaticon-size-xs relative right-[2px] top-[0.5px]"></span>No credit card needed, free 14-day trial</p>
        </div>

        {/* Image */}
        <div className='w-[350px] md:w-[450px] lg:w-[500px]'>
          <img src="images/hero-1-img.png" alt="hero-image" />
        </div>
      </div>
    </div>
  )
}

export default Hero
