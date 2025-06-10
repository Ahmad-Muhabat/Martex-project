import React from 'react'

const Solution = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto p:16 sm:p-0 lg:p-20 mt-10'>
        {/* text part */}
        <div className='flex flex-col justify-start w-[300px] font-semibold sm:w-[400px] md:w-[530px] lg:w-[650px] text-center md:text-left text-[#353f4f]'>
            <h1 className='text-3xl sm:text-3xl lg:text-5xl text-center mb-4'>The Complete Solutions</h1>
            <h3 className='mb-10 text-center text-[#808080] text-lg sm:text-sm lg:text-lg'>Ligula risus auctor tempus magna feugiat lacinia.</h3>
        </div>
        {/* card part */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-5'>
            <span className='flex flex-col justify-center items-center p-8 sm:p-4 lg:p-12 bg-gradient-to-b from-[#F8F8FF] to-white rounded-xl'>
                <img className='w-[260px] sm:w-[500px] md:w-[450px] lg:w-[350px] mb-10' src="images/f_01.png" alt="feature-image"/>
                <span>
                  <h2 className='-mt-4 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl mb-2'>Intuitive Dashboard</h2>
                  <h3 className='text-[#696969] text-[13px] font-normal max-w-[300px] sm:min-w-[150px] md:min-w-[210px] lg:mix-w-[300px] sm:text-[10px] md:text-sm lg:max-w-[450px] mb-5'>
                    Luctus egestas augue undo ultrice aliquam in lacus congue dapibus
                  </h3>
                </span>
            </span>
            <span className='flex flex-col justify-center items-center p-8 sm:p-4 lg:p-12 bg-gradient-to-b from-[#F8F8FF] to-white rounded-xl'>
                <img className='w-[260px] sm:w-[500px] md:w-[450px] lg:w-[350px] mb-10' src="images/f_05.png" alt="feature-image" />
                <span>
                  <h2 className='-mt-4 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl mb-2'>Effortless Integration</h2>
                  <h3 className='text-[#696969] text-[13px] font-normal max-w-[300px] sm:min-w-[150px] md:min-w-[210px] lg:mix-w-[300px] sm:text-[10px] md:text-sm lg:max-w-[450px] mb-5'>
                    Tempor laoreet augue undo ultrice aliquam in lacusq luctus feugiat
                  </h3>
                </span>
            </span>
            <span className='flex flex-col justify-center items-center p-8 sm:p-4 lg:p-12 bg-gradient-to-b from-[#F8F8FF] to-white rounded-xl'>
                <img className='w-[260px] sm:w-[500px] md:w-[450px] lg:w-[350px] mb-10' src="images/f_02.png" alt="feature-image" />
                <span>
                  <h2 className='-mt-4 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl mb-2'>Engagement Analysis</h2>
                  <h3 className='text-[#696969] text-[13px] font-normal  sm:min-w-[150px] md:min-w-[210px] lg:mix-w-[300px] max-w-[300px] sm:text-[10px] md:text-sm  lg:max-w-[450px] mb-5'>
                    Egestas luctus augue undo ultrice aliquam in lacus feugiat cursus
                  </h3>
                </span>
            </span>
        </div>
        {/* divider part */}
        <hr className="divider w-full h-px bg-transparent bg-[linear-gradient(90deg,rgba(206,211,246,0)_0,#bbb_38%,#bbb_64%,rgba(206,211,246,0)_99%)] opacity-40 m-0 mt-10 [border:none]"></hr>
    </div>
  )
}

export default Solution