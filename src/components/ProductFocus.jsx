import React from 'react'

const ProductFocus = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 sm:flex-row items-center justify-around px-5 md:px-10 py-20'>
        {/* Image */}
        <div className='w-[350px] md:w-[600px] lg:w-[500px] sm:order-2'>
          <img src="images/img-13.png" alt="content-image" />
        </div>
        {/* Text Part */}
        <div className='flex flex-col justify-start w-[400px] sm:w-[350px] md:w-[430px] text-left sm:order-1'>
          <h3 className='font-semibold text-[#696969] text-[11px] sm:text-[10px] md:text-sm md:max-w-[230px] mb-2 lg:mb-6 uppercase'>Productivity Focused</h3>
          <h1 className='text-3xl text-[#353f4f] sm:text-3xl md:text-5xl lg:text-5xl md:min-w-[500px] font-semibold mb-4 lg:mb-6'>
            Achieve more with better workflows
          </h1>
          <h3 className='text-[#696969] text-[13px] font-normal sm:text-[10px] md:text-sm md:max-w-[400px] lg:max-w-[450px] mb-5'>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
          </h3>
          <span className='flex items-center justify-start'>
            <span className="flaticon-check relative right-[2px] top-[0.5px] text-[#f74780] mr-2 mb-1"></span>
            <p className='text-[13px] text-justify sm:text-[10px] md:text-[12px] lg:text-[13px] font-normal text-[#696969]'>Magna dolor luctus at egestas sapien</p>
          </span>

          <span className='flex items-center justify-start'>
            <span className="flaticon-check relative right-[2px] top-[0.5px] text-[#f74780] mr-2 mb-1"></span>
            <p className='text-[13px] text-justify sm:text-[10px] md:text-[12px] lg:text-[13px] font-normal text-[#696969]'>
Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis</p>
          </span>

          <span className='flex items-center justify-start'>
            <span className="flaticon-check relative right-[2px] top-[0.5px] text-[#f74780] mr-2 mb-1"></span>
            <p className='text-[13px] text-justify sm:text-[10px] md:text-[12px] lg:text-[13px] font-normal text-[#696969]'>
Volute turpis dolores and sagittis congue</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductFocus