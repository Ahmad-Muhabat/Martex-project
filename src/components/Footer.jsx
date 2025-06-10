import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-start items-start md:flex-row md:justify-around md:items-start p-8'>
        {/* logo */}
        <div className='mb-5 md:mr-12'>
            <img className='w-32' src="images/logo-pink.png" alt="footer-logo"/>
        </div>
        {/* links and email */}
        <div className='flex flex-col justify-center items-start md:flex-row md:justify-around md:items-start md:gap-10'>
            {/* links */}
            <div className='flex justify-between items-start gap-12 sm:gap-16 mb-5'>
                <div className='flex flex-col justify-start items-start w-auto text-left'>
                    <h3 className='text-[#353f4f] text-sm sm:text-xs md:text-lg font-semibold'>Company</h3>
                    <ul>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">About Us</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Our Blog</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Customers</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Community</a></li>
                    </ul>
                </div>

                <div className='flex flex-col justify-start items-start w-auto text-left'>
                    <h3 className='text-[#353f4f] text-sm sm:text-xs md:text-lg font-semibold'>Product</h3>
                    <ul>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Integration</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">What's New</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Pricing</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Help Center</a></li>
                    </ul>
                </div>

                <div className='flex flex-col justify-start items-start w-auto text-left'>
                    <h3 className='text-[#353f4f] text-sm sm:text-xs md:text-lg font-semibold'>Legal</h3>
                    <ul>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Terms of Use</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Privacy Policy</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Cookie Policy</a></li>
                        <li className='text-gray-500 text-[13px] font-normal sm:text-xs md:text-[14px] my-3'><a href="#">Site Map</a></li>
                    </ul>
                </div>
            </div>
            {/* email */}
            <div className='flex flex-col justify-start items-start'>
                <h3 className='text-[#353f4f] sm:text-xs md:text-lg font-semibold mb-3 text-left'>Follow the Best</h3>
                <span className='bg-gray-100 rounded-lg py-3 px-4 text-[13px] sm:text-xs md:text-[14px] min-w-[400px] sm:min-w-[350px] md:min-w-[200px] text-left flex justify-between items-center'><input type="email" placeholder='Email Address' /><button className="flaticon-check relative right-[2px] top-[0.5px] text-[#f74780] text-xs"></button></span>
            </div>
        </div>
    </div>
  )
}

export default Footer