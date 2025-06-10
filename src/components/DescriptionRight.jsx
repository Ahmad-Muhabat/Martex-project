import React from 'react'

const DescriptionRight = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 lg:gap-8 sm:flex-row items-center justify-around px-5 md:px-28 py-10'>
        {/* Image */}
        <div className='w-[350px] md:w-[450px] lg:w-[500px] sm:order-2'>
          <img src="images/img-06.png" alt="content-image" />
        </div>
        {/* Text Part */}
        <div className='flex flex-col justify-start w-[400px] sm:w-[300px] md:w-[530px]  text-left sm:order-1'>
          <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl mb-2'>Solution that grows with you</h2>
          <h3 className='text-[#696969] text-[13px] font-normal sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-5'>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
          </h3>
          <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl mb-2'>Connect your data sources</h2>
          <h3 className='text-[#696969] text-[13px] font-normal sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-5'>
            Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus an ipsum vitae suscipit purus
          </h3>
          <ul>
            <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-2'>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus</li>
            <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-5'>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DescriptionRight