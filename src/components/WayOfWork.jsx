import React from 'react'

function WayOfWork() {
  return (
    <div>
        <div className='flex flex-col gap-5 lg:gap-8 sm:flex-row items-center justify-around px-5 md:px-10 py-10'>
        {/* Image */}
        <div className='w-[350px] md:w-[450px] lg:w-[500px]'>
          <img src="images/img-03.png" alt="content-image"/>
        </div>
        {/* Text Part */}
        <div className='flex flex-col justify-start w-[400px] sm:w-[300px] md:w-[530px]  text-left'>
          <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl mb-2'>The smarter way to work</h2>
          <h3 className='text-[#696969] text-[13px] font-normal sm:text-[10px] md:text-sm md:max-w-[600px] lg:max-w-[450px] mb-4'>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit
          </h3>
          <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl mb-2'>Full access to all features</h2>
          <ul>
            <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[10px] md:text-sm md:max-w-[600px] lg:max-w-[450px] mb-2'>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis sodales magna undo aoreet primis</li>
            <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[10px] md:text-sm md:max-w-[600px] lg:max-w-[450px] mb-5'>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien a blandit</li>
          </ul>
          <a href="#">
            <button className='hover:text-white text-xs md:text-sm font-semibold hover:bg-[#f74780] duration-500 py-2 px-4 md:py-2 md:px-5 rounded-sm bg-transparent border-[1.5px] mb-4'>
              What's Possible?
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WayOfWork