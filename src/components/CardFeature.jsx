import React from 'react'
import CardOfFeature from '../small-component/CardOfFeature'

const CardFeature = () => {
  return (
    <div>
      <div className='flex flex-col gap-5 sm:gap-8 sm:flex-row items-center justify-around px-5 md:px-10 pb-28'>

        {/* Gray Box with Cards */}
        <div className='relative mb-28 sm:mb-0 mt-64 w-[400px] sm:w-[460px] md:w-[500px] h-[400px] bg-gray-100 flex items-center justify-center order-2'>

          {/* Top Left */}
          <div className='absolute hidden sm:block sm:-top-2 sm:-left-5 md:-top-12 lg:-left-10 lg:-top-10'>
            <CardOfFeature title="Content Marketing" />
          </div>

          {/* Top Right */}
          <div className='absolute hidden sm:block sm:-top-2 sm:right-5 md:-top-12 lg:right-14 lg:-top-10'>
            <CardOfFeature title="Video Marketing" />
          </div>

          {/* Bottom Left */}
          <div className='absolute hidden sm:block sm:-bottom-3 sm:-left-5 md:-bottom-12 lg:-left-10 lg:-bottom-10'>
            <CardOfFeature title="Pay Per Click (PPC)" />
          </div>

          {/* Bottom Right */}
          <div className='absolute hidden sm:block sm:-bottom-3 sm:right-5 md:-bottom-12 lg:right-14 lg:-bottom-10'>
            <CardOfFeature title="Business Analytics" />
          </div>

          {/* Mobile view - center stacked cards */}
          <div className='flex flex-col items-center gap-3 sm:hidden '>
            <CardOfFeature title="Content Marketing" />
            <CardOfFeature title="Video Marketing" />
            <CardOfFeature title="Pay Per Click (PPC)" />
            <CardOfFeature title="Business Analytics" />
          </div>
        </div>

        {/* Text Content */}
        <div className='flex flex-col justify-start w-[400px] sm:w-[300px] md:w-[430px] max-w-[430px] text-left order-1'>
          <h3 className='font-semibold text-[#696969] text-[11px] sm:text-[10px] md:text-xs mb-6 uppercase'>One-Stop Solution</h3>
          <h1 className='text-3xl text-[#353f4f] sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4'>
            Smart solutions, real-time results
          </h1>
          <h3 className='text-[#696969] text-[13px] font-normal sm:text-xs md:text-[13px] lg:text-sm md:max-w-[230px] lg:max-w-[450px] mb-5'>
            Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis neque auctor turpis vitae dolor luctus placerat magna ligula and cursus vitae
          </h3>
          <p className='text-sm sm:text-[11px] lg:text-sm text-[#696969] font-normal mb-2'>
            <span className="flaticon-check flaticon-size-xs text-red-500 relative right-[2px] top-[0.5px]"></span> Magna dolor luctus at egestas sapien
          </p>
          <p className='text-sm sm:text-[11px] lg:text-sm text-[#696969] font-normal mb-2'>
            <span className="flaticon-check flaticon-size-xs text-red-500 relative right-[2px] top-[0.5px]"></span> Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis
          </p>
          <p className='text-sm sm:text-[11px] lg:text-sm text-[#696969] font-normal'>
            <span className="flaticon-check flaticon-size-xs text-red-500 relative right-[2px] top-[0.5px]"></span> Volute turpis dolores and sagittis congue
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardFeature
