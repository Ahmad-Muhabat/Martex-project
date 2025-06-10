import React from 'react'
import FeaturesInfo from '../small-component/FeaturesInfo'

const Features = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto p:16 sm:p-20'>
        {/* text part */}
        <div className='flex flex-col justify-start w-[300px] font-semibold sm:w-[400px] md:w-[530px] text-center md:text-left text-[#353f4f]'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-center mb-6'>Build a customer-centric marketing strategy</h1>
            <h3 className='mb-10 text-center text-[#808080] text-lg sm:text-sm lg:text-lg'>Ligula risus auctor tempus magna feugiat lacinia.</h3>
        </div>
        {/* small component part */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 justify-center items-center'>
            <FeaturesInfo 
                title='Market Research'
                desc='Luctus augue egestas undo ultrice and quisque lacus'
            />
            <FeaturesInfo 
                title='User Experience'
                desc='Luctus augue egestas undo ultrice and quisque lacus'
            />
            <FeaturesInfo 
                title='Digital Marketing'
                desc='Luctus augue egestas undo ultrice and quisque lacus'
            />
            <FeaturesInfo 
                title='SEO Services'
                desc='Luctus augue egestas undo ultrice and quisque lacus'
            />
        </div>
        <hr className="divider w-full h-px bg-transparent bg-[linear-gradient(90deg,rgba(206,211,246,0)_0,#bbb_38%,#bbb_64%,rgba(206,211,246,0)_99%)] opacity-40 m-0 mt-16 [border:none]"></hr>
    </div>
  )
}

export default Features