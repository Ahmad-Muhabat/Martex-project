import React from 'react'
// the svg has problem in size 
const FeaturesInfo = ({title, desc}) => {
  return (
    <div>
        <span>
          {/* <!-- Icon --> */}
          <div className="fbox-ico ico-55 m-4">
            <div className="shape-ico color--theme relative inline-block m-[0_auto]">
              {/* <!-- Vector Icon --> */}
              <span className="flaticon-idea flaticon-size-2xl relative z-[2]"></span>
              {/* <!-- Shape --> */}
              <svg
                className="mb-4 w-[100px] h-[100px] top-[-30px] left-[calc(50%_-_60px)] lg:w-[115px] lg:h-[115px] lg:top-[-30px] lg:left-[calc(50%_-_60px)] md:w-[100px] md:h-[100px] md:top-[-30px] md:left-[calc(50%_-_55px)] sm:w-[135px] sm:h-[135px] sm:top-[-30px] sm:left-[calc(50%_-_70px)] xsm:w-[125px] xsm:h-[125px] xsm:top-[-30px] xsm:left-[calc(50%_-_65px)] absolute z-[1]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          {/* <!-- End Icon --> */}
        </span>
        <h3 className='mt-1 text-[#353f4f] font-semibold text-xl sm:text-sm md:text-xl mb-2 sm:mt-5'>{title}</h3>
        <h4 className='text-[#696969] text-sm sm:text-[10px] md:text-sm md:max-w-[230px] mb-5'>{desc}</h4>
    </div>
  )
}

export default FeaturesInfo