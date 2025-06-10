import React from 'react'

const FAQs = () => {
  return (
    <div className='p-16 w-full h-auto flex flex-col justify-center items-center'>
        {/* title part */}
        <div className='flex flex-col justify-start w-[400px] sm:w-[400px] md:w-[700px] text-center md:text-left text-[#353f4f]'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6'>
            Questions & Answers
          </h1>
          <h3 className='mb-10 text-center text-[#808080] text-lg sm:text-sm lg:text-lg'>
            Ligula risus auctor tempus magna feugiat lacinia.
          </h3>
        </div>
        {/* questions and answers part */}
        <div className='my-5 flex flex-col justify-center items-center md:flex-row gap-6 text-left w-[400px] sm:w-[500px] md:w-[550px]'>
            {/* 1 to 3 */}
            <div>
                <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-sm lg:text-xl mb-2'><span className='mr-2'>1.</span>Getting started with Martex</h2>
                <h3 className='text-[#696969] text-[13px] font-normal sm:text-[11px] lg:text-sm md:min-w-[350px] md:max-w-[400px] lg:min-w-[480px] mb-5'>Etiam amet mauris suscipit in odio integer congue metus and vitae arcu mollis blandit ultrice ligula egestas magna suscipit lectus magna suscipit luctus blandit and laoreet</h3>

                <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-sm lg:text-xl mb-2'><span className='mr-2'>2.</span>What's inside the package?</h2>
                <h3 className='text-[#696969] text-[13px] font-normal sm:text-[11px] lg:text-sm md:min-w-[350px] md:max-w-[400px] lg:min-w-[480px] mb-5'>An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula</h3>

                <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-sm lg:text-xl mb-2'><span className='mr-2'>3.</span>How do I choose a plan?</h2>
                <ul>
                    <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[11px] lg:text-sm md:min-w-[350px] md:max-w-[400px] lg:min-w-[480px] mb-2'>Fringilla risus, luctus mauris orci auctor purus ligula euismod pretium purus pretium rutrum tempor sapien</li>
                    <li className='list-disc marker:text-xs ml-4 text-[#696969] text-[13px] sm:text-[11px] lg:text-sm md:min-w-[350px] md:max-w-[400px] lg:min-w-[480px] mb-5'>Nemo ipsam egestas volute undo turpis purus lipsum primis aliquam sapien quaerat sodales pretium a purus</li>
                </ul>
            </div>
            {/* 4 to 6 */}
            <div>
                <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-sm lg:text-xl mb-2'><span className='mr-2'>4.</span>How does Martex handle my privacy?</h2>
                <h3 className='text-[#696969] text-[13px] font-normal sm:text-[11px] lg:text-sm md:min-w-[350px] md:max-w-[400px] lg:min-w-[480px] mb-5'>Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus dolor luctus</h3>
                <h3 className='text-[#696969] text-[13px] font-normal sm:text-[11px] lg:text-sm md:min-w-[350px] md:max-w-[400px] lg:min-w-[480px] mb-5'>An enim nullam tempor sapien gravida donec congue metus. Vitae arcu mollis blandit integer nemo volute velna</h3>

                <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-sm lg:text-xl mb-2'><span className='mr-2'>5.</span>I have an issue with my account</h2>
                <h3 className='text-[#696969] text-[13px] font-normal sm:text-[11px] lg:text-sm md:min-w-[350px] md:max-w-[400px] lg:min-w-[480px] mb-5'>Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida donec neque blandit justo aliquam molestie nunc sapien justo</h3>

                <h2 className='mt-1 text-[#353f4f] font-bold text-xl sm:text-sm md:text-sm lg:text-xl mb-2'><span className='mr-2'>6.</span>Can I cancel at anytime?</h2>
                <h3 className='text-[#696969] text-[13px] font-normal sm:text-[11px] lg:text-sm md:min-w-[350px] md:max-w-[400px] lg:min-w-[480px] mb-5'>An enim nullam tempor sapien gravida donec ipsum and enim porta justo integer at velna vitae auctor integer congue undo magna laoreet augue pretium purus pretium ligula</h3>
            </div>
        </div>
        {/* button */}
        <button className='py-3 px-8 bg-gray-100 text-gray-500 text-sm sm:text-xs md:text-sm rounded-3xl'>Have any questions? <a className='text-[#f74780] font-semibold underline hover:text-black'>Get in touch</a></button>
    </div>
  )
}

export default FAQs