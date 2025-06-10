import React from 'react'

const RatingStars = () => {
  return (
    <div className='flex flex-col items-center justify-center p-10'>
        <h3 className='text-[#696969] text-[13px] font-normal sm:text-xs md:text-sm lg:text-lg md:max-w-[400px] lg:max-w-[450px] mb-5'>Our clients love us as much as we love them</h3>
        <div className='flex flex-col items-center justify-center sm:flex-row sm:gap-5 md:gap-10 lg:gap-16'>
            <div className='flex flex-col items-center justify-center p-2 rounded-4xl'>
                <img className='w-28 mb-2' src="images/brand-21.png" alt="feature-image"/>
                {/* <!-- Rating Stars 1 --> */}
                    <div
                    class="star-rating ico-10 bg--white-100 r-100 rounded-[100px] clearfix inline-block text-[0.86rem] leading-none font-medium border border-neutral-100 shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] px-[18px] py-[5px] border-solid lg:text-[0.9rem] lg:leading-none md:text-[1rem] sm:text-[0.9rem] sm:leading-none xsm:text-[0.9rem] xsm:leading-none [vertical-align:inherit]">
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span
                        class="flaticon-star-half-empty mr-[5px] relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    &nbsp; <span className='text-gray-500 text-xs'>4.7/5</span>
                    </div>
            </div>
            <div className='flex flex-col items-center justify-center p-2 rounded-4xl'>
                <img className='w-28 mb-2' src="images/brand-22.png" alt="feature-image"/>
                {/* <!-- Rating Stars 2 --> */}
                    <div
                    class="star-rating ico-10 bg--white-100 r-100 rounded-[100px] clearfix inline-block text-[0.86rem] leading-none font-medium border border-neutral-100 shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] px-[18px] py-[5px] border-solid lg:text-[0.9rem] lg:leading-none md:text-[1rem] sm:text-[0.9rem] sm:leading-none xsm:text-[0.9rem] xsm:leading-none [vertical-align:inherit]">
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span
                        class="flaticon-star-half-empty mr-[5px] relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    &nbsp; <span className='text-gray-500 text-xs'>4.95/5</span>
                    </div>
            </div>
            <div className='flex flex-col items-center justify-center p-2 rounded-4xl'>
                <img className='w-28 mb-2' src="images/brand-23.png" alt="feature-image"/>
                {/* <!-- Rating Stars 3 --> */}
                    <div
                    class="star-rating ico-10 bg--white-100 r-100 rounded-[100px] clearfix inline-block text-[0.86rem] leading-none font-medium border border-neutral-100 shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] px-[18px] py-[5px] border-solid lg:text-[0.9rem] lg:leading-none md:text-[1rem] sm:text-[0.9rem] sm:leading-none xsm:text-[0.9rem] xsm:leading-none [vertical-align:inherit]">
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span class="flaticon-star relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    <span
                        class="flaticon-star-half-empty mr-[5px] relative text-[#ffb30c] top-[1.5px] xsm:top-[2px] sm:top-[2px]"></span>
                    &nbsp; <span className='text-gray-500 text-xs'>4.24/5</span>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default RatingStars