import React from 'react'
// need work on width of screen
const ImageContent = () => {
  return (
    <div className='bg-[url(./images/bg-04.jpg)] bg-cover bg-center h-[370px] lg:h-[800px] w-full relative'>
      <div className='flex flex-col gap-10 items-center justify-around px-5 md:px-28 py-20 sm:py-10'>
        {/* text part */}
        <div className='flex flex-col justify-start w-[500px] sm:w-[400px] md:w-[530px] lg:w-[650px] text-center md:text-left text-[#353f4f]'>
            <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6'>Track the progress towards objectives with key results</h1>
            <h3 className='mb-10 text-center text-[#808080] text-md font-semibold sm:text-sm lg:text-lg'>Ligula risus auctor tempus magna feugiat lacinia.</h3>
        </div>
        {/* Image */}
        <div className='absolute -bottom-20 w-[380px] sm:w-[450px] md:w-[450px] lg:w-[1000px]'>
          <img src="images/dashboard-01.png" alt="video-preview"/>
        </div>
      </div>
    </div>
  )
}

export default ImageContent