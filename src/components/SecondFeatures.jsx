import React from 'react'
// edit the amont part
const SecondFeatures = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto p:16 sm:p-8 lg:p-20'>
        {/* text part */}
        <div className='flex flex-col justify-start w-[300px] font-semibold sm:w-[400px] md:w-[530px] lg:w-[650px] text-center md:text-left text-[#353f4f]'>
            <h1 className='text-3xl sm:text-3xl lg:text-5xl text-center my-4'>Reach your audience through social media marketing</h1>
            <h3 className='mb-10 text-center text-[#808080] text-lg sm:text-sm lg:text-lg'>Ligula risus auctor tempus magna feugiat lacinia.</h3>
        </div>
        {/* card part */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-5'>
            <span className='flex flex-col justify-center items-center p-8 lg:p-12 bg-[#F8F8FF] rounded-2xl'>
                <img className='w-[300px] sm:order-2 sm:w-[650px] md:w-[450px] lg:w-[350px] mb-10' src="images/f_06.png" alt="feature-image" />
                <span className='sm:order-1'>
                  <h2 className='-mt-4 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl lg:text-2xl mb-2'>Marketing Integrations</h2>
                  <h3 className='text-[#696969] text-[13px] font-normal max-w-[300px] sm:text-[10px] md:text-sm sm:max-w-[200px] lg:max-w-[450px] mb-5'>
                    Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero
                  </h3>
                </span>
            </span>
            <span className='flex flex-col justify-center items-center p-8 lg:p-12 bg-[#F8F8FF] rounded-2xl'>
                <img className='w-[300px] sm:order-1 sm:w-[650px] md:w-[450px] lg:w-[350px] mb-10' src="images/f_04.png" alt="feature-image" />
                <span className='sm:order-2'>
                  <h2 className='-mt-4 text-[#353f4f] font-bold text-xl sm:text-sm md:text-xl lg:text-2xl mb-2'>Productivity Focused</h2>
                  <h3 className='text-[#696969] text-[13px] font-normal max-w-[300px] sm:text-[10px] md:text-sm sm:max-w-[200px] lg:max-w-[450px] mb-5'>
                    Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero
                  </h3>
                </span>
            </span>
        </div>
        {/* amount part */}
        <div className='flex flex-col justify-center items-center sm:flex-row sm:gap-4 mt-8 text-left sm:text-center md:text-left'>
            <div className='flex flex-col md:flex-row items-center lg:items-center py-4 justify-center'>
                <h2 className='text-[#353f4f] font-bold text-3xl sm:text-2xl  md:text-4xl lg:text-5xl m-3 sm:m-0 md:m-3'>89k</h2>
                <h3 className='text-[#696969] text-[13px] lg:text-[14.5px] font-normal my-4 w-[250px] sm:w-[150px]'>Porta justo integer and velna vitae auctor</h3>
            </div>
            <div className='flex flex-col md:flex-row items-center lg:items-center py-4 justify-center'>
                <h2 className='text-[#353f4f] font-bold text-3xl sm:text-2xl md:text-4xl lg:text-5xl m-3 sm:m-0 md:m-3'>76%</h2>
                <h3 className='text-[#696969] text-[13px] lg:text-[14.5px] font-normal my-4 w-[250px] sm:w-[150px]'>Ligula magna suscipit vitae and rutrum</h3>
            </div>
            <div className='flex flex-col md:flex-row items-center lg:items-center py-4 justify-center'>
                <h2 className='text-[#353f4f] font-bold text-3xl sm:text-2xl md:text-4xl lg:text-5xl m-3 sm:m-0 md:m-3'>4.93</h2>
                <h3 className='text-[#696969] text-[13px] lg:text-[14.5px] font-normal my-4 w-[250px] sm:w-[150px]'>Sagittis congue augue egestas an egestas</h3>
            </div>
        </div>
        {/* divider part */}
        <hr className="divider w-full h-px bg-transparent bg-[linear-gradient(90deg,rgba(206,211,246,0)_0,#bbb_38%,#bbb_64%,rgba(206,211,246,0)_99%)] opacity-40 m-0 mt-16 [border:none]"></hr>
    </div>
  )
}

export default SecondFeatures