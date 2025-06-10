import React from 'react'

const Integration = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 lg:gap-8 sm:flex-row items-center justify-around px-5 md:px-28 py-20'>
        {/* Image */}
        <div className='w-[350px] md:w-[450px] lg:w-[500px]'>
          <img src="images/img-02.png" alt="content-image"/>
        </div>
        {/* Text Part */}
        <div className='flex flex-col justify-start w-[400px] sm:w-[300px] md:w-[700px]  text-left'>
          <h3 className='font-semibold text-[#696969] text-[11px] sm:text-[10px] md:text-sm md:max-w-[230px] mb-2 uppercase'>Easy Integration</h3>
          <h1 className='text-3xl text-[#353f4f] sm:text-2xl lg:text-5xl font-semibold mb-4'>
            Plug your essential tools in few clicks
          </h1>
          <ul>
            <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-2'>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis sodales magna undo aoreet primis</li>
            <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[10px] md:text-sm md:max-w-[230px] lg:max-w-[450px] mb-5'>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien a blandit</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Integration