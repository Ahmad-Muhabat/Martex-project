import React, { useEffect, useState } from 'react';

const contentData = [
  {
    title: 'Register in 30 seconds',
    desc: 'Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat',
  },
  {
    title: 'Customizable Dashboards',
    desc: 'Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat',
  },
  {
    title: 'Improved Productivity',
    desc: 'Ligula risus auctor tempus feugiat dolor lacinia nemo purus in lipsum purus sapien quaerat a primis viverra tellus vitae luctus dolor ipsum neque ligula quaerat',
  },
];

const AnimeContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto change active button every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % contentData.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='px-5 md:px-28 py-20'>
      <div className='flex flex-col gap-10 sm:flex-row items-start justify-around'>
        
        {/* Left Image */}
        <div className='flex-1 w-full sm:w-auto'>
          <img
            src='images/img-09.png'
            alt='content-image'
            className='w-full h-auto object-contain'
          />
        </div>

        {/* Right Side: Combined Button + Text Rows */}
        <div className='flex flex-1 flex-col gap-0 w-full'>

          {contentData.map((item, index) => (
            <div key={index} className='flex gap-5 items-start'>
              
              {/* Button and line column */}
              <div className='flex flex-col items-center'>
                <button
                  className={`w-10 h-10 rounded-full font-bold transition-all duration-500 shrink-0
                    ${
                      activeIndex === index
                        ? 'bg-[#f74780] text-white scale-110'
                        : 'bg-transparent border-2 border-[#f74780] text-[#f74780] hover:bg-[#f74780] hover:text-white'
                    }
                  `}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {index + 1}
                </button>

                {/* Gray vertical line */}
                {index !== contentData.length - 1 && (
                  <div className='w-[2px] h-16 bg-gray-200 my-2'></div>
                )}
              </div>

              {/* Text content */}
              <div className='text-left flex-1 pb-6'>
                <h2 className='font-bold text-xl sm:text-sm md:text-xl mb-2 text-[#353f4f]'>
                  {item.title}
                </h2>
                <p className='text-[#696969] text-[13px] sm:text-[10px] md:text-sm'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AnimeContent;
