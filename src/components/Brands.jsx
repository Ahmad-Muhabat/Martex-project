import React from 'react';
import '../index.css'; // Make sure this is imported if not already

const Brands = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 overflow-hidden">
      <h2 className="text-lg font-normal mb-5 text-[#353f4f]">
        Martex is loved and trusted by thousands:
      </h2>

      {/* Outer overflow-hidden container */}
      <div className="w-full overflow-hidden">
        {/* Scrolling content wrapper */}
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {/* Repeat logos twice for seamless scroll */}
          {[
            "brand-1",
            "brand-2",
            "brand-4",
            "brand-5",
            "brand-6",
            "brand-7",
            "brand-8",
            "brand-9",
          ].map((brand, index) => (
            <img
              key={`first-${index}`}
              className="w-1/3 sm:w-1/5 md:w-36 inline-block"
              src={`images/${brand}.png`}
              alt={`brand-logo-${brand}`}
            />
          ))}

          {/* Duplicate the same set again for loop effect */}
          {[
            "brand-1",
            "brand-2",
            "brand-4",
            "brand-5",
            "brand-6",
            "brand-7",
            "brand-8",
            "brand-9",
          ].map((brand, index) => (
            <img
              key={`second-${index}`}
              className="w-1/3 sm:w-1/5 md:w-36 inline-block"
              src={`images/${brand}.png`}
              alt={`brand-logo-${brand}`}
            />
          ))}
        </div>
      </div>
      {/* divider */}
      <hr className="divider w-full h-px bg-transparent bg-[linear-gradient(90deg,rgba(206,211,246,0)_0,#bbb_38%,#bbb_64%,rgba(206,211,246,0)_99%)] opacity-40 m-0 mt-16 [border:none]"></hr>
    </div>
  );
};

export default Brands;
