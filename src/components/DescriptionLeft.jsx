import React from 'react'

const DescriptionLeft = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 lg:gap-8 sm:flex-row items-center justify-around px-5 md:px-28 py-20'>
        {/* Image */}
        <div className='w-[350px] md:w-[450px] lg:w-[500px]'>
          <img src="images/img-10.png" alt="content-image" />
        </div>
        {/* Text Part */}
        <div className='flex flex-col justify-start w-[400px] sm:w-[300px] md:w-[530px]  text-left'>
          <h3 className='font-semibold text-[#696969] text-[11px] sm:text-[10px] md:text-sm md:max-w-[230px] mb-2 uppercase'>Enhance Engagement</h3>
          <h1 className='text-3xl text-[#353f4f] sm:text-2xl lg:text-5xl font-semibold mb-4'>
            Engage your most valuable visitors
          </h1>
          <h3 className='text-[#696969] text-[13px] font-normal sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-5'>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
          </h3>
          <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl mb-2'>Digits that define growth</h2>
          <ul>
            <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-2'>Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue cursus dolor</li>
            <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-5'>Purus suscipit cursus vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DescriptionLeft