import React from 'react'
// need work
const IntegrationLogos = () => {
  return (
    <div className='bg-white p-7'>
      <div className='bg-[url(/images/bg-02.jpg)] bg-cover bg-center bg-no-repeat h-auto w-auto p-16 rounded-2xl'>
      <div className='flex flex-col items-center justify-center'>
        {/* text part */}
        <div className='flex flex-col justify-start w-[300px] sm:w-[400px] md:w-[700px] text-center md:text-left text-[#353f4f]'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6'>
            Automate your workflow with our integrations
          </h1>
          <h3 className='mb-10 text-center text-[#808080] text-lg sm:text-sm lg:text-lg'>
            Ligula risus auctor tempus magna feugiat lacinia.
          </h3>
        </div>
        {/* logo part */}
          <div className='flex flex-col sm:flex-row sm:flex-nowrap items-center justify-center gap-4'>
            {[
              { name: 'Zapier', icon: 'tool-1.png' },
              { name: 'Google Analytics', icon: 'tool-2.png' },
              { name: 'Amplitude', icon: 'tool-3.png' },
              { name: 'Hubspot', icon: 'tool-4.png' },
              { name: 'MailChimp', icon: 'tool-5.png' },
            ].map((tool, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='bg-white rounded-xl p-6 md:px-12 md:py-8 shadow'>
                  <img className='w-10 md:w-16' src={`images/png_icons/${tool.icon}`} alt={tool.name} />
                </div>
                <a href='#' className='text-sm sm:text-xs md:text-sm text-[#353f4f] font-semibold my-3 cursor-pointer'>
                  {tool.name}
                </a>
              </div>
            ))}
          </div>
        {/* button */}
        <a href="#">
            <button className='hover:text-white text-sm font-semibold hover:bg-[#f74780] duration-300 py-2 px-7 rounded-sm bg-transparent border-[1.5px] my-6'>
              View all integrations
            </button>
          </a>
      </div>
      </div> 
    </div>
  )
}

export default IntegrationLogos
