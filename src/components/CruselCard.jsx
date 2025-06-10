import React, { useEffect, useState } from 'react';

const CruselCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(1);

  const allCards = [
    {
      desc: 'Etiam sapien sagittis congue augue a massa varius egestas ultrice varius magna a tempus aliquet undo cursus suscipit',
      src: 'images/review-author-1.jpg',
      name: 'Scott Boxer',
      major: '@scott_boxer',
    },
    {
      desc: 'At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis and cubilia laoreet augue egestas a luctus donec ltrice ligula porta augue magna suscipit lectus gestas',
      src: 'images/review-author-2.jpg',
      name: 'Joel Peterson',
      major: 'Internet Surfer',
    },
    {
      desc: 'Mauris gestas magnis a sapien etiam sapien congue an augue egestas and ultrice vitae purus diam an integer congue magna ligula egestas magna suscipit',
      src: 'images/review-author-3.jpg',
      name: 'Marisol19',
      major: '@marisol19',
    },
    {
      desc: 'Mauris donec a magnis sapien etiam pretium a congue augue volutpat lectus aenean magna and undo mauris lectus laoreet tempor egestas rutrum',
      src: 'images/review-author-4.jpg',
      name: 'Leslie D.',
      major: 'Web Developer',
    },
    {
      desc: 'An augue cubilia undo laoreet magna suscipit egestas ipsum lectus purus ipsum and primis augue an ultrice ligula egestas suscipit a lectus gestas auctor tempus feugiat impedit',
      src: 'images/review-author-5.jpg',
      name: 'Jennifer Harper',
      major: 'App Developer',
    },
    {
      desc: 'An augue cubilia laoreet undo magna ipsum semper suscipit egestas magna ipsum ligula a vitae purus and ipsum primis cubilia magna suscipit',
      src: 'images/review-author-6.jpg',
      name: 'Jonathan Barnes',
      major: 'jQuery Programmer',
    },
    {
      desc: 'Augue egestas porta tempus volutpat egestas augue cubilia laoreet a magna suscipit luctus dolor blandit vitae purus neque tempus an aliquet porta gestas rutrum blandit vitae',
      src: 'images/review-author-7.jpg',
      name: 'Mike Harris',
      major: 'Graphic Designer',
    },
    {
      desc: 'Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna suscipit luctus dolor blandit at purus tempus feugiat impedit',
      src: 'images/review-author-8.jpg',
      name: 'Evelyn Martinez',
      major: 'WordPress Consultant',
    }
  ];

  const updateCardsPerSlide = () => {
    const width = window.innerWidth;
    if (width < 640) setCardsPerSlide(1);
    else if (width < 768) setCardsPerSlide(2);
    else setCardsPerSlide(3);
  };

  useEffect(() => {
    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(allCards.length / cardsPerSlide);
  const startIndex = currentSlide * cardsPerSlide;
  const visibleCards = allCards.slice(startIndex, startIndex + cardsPerSlide);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='crusel flex flex-col items-center justify-center w-full h-auto bg-gradient-to-b from-[#F8F8FF] to-white sm:p-20 mt-10 p-10'>
      {/* text part */}
      <div className='text-center w-full max-w-4xl mb-10'>
        <h1 className='text-3xl font-semibold sm:text-4xl lg:text-5xl mb-6 text-[#353f4f]'>Here’s what our amazing clients are saying</h1>
        <h3 className='text-[#808080] text-md sm:text-sm lg:text-lg'>Ligula risus auctor tempus magna feugiat lacinia.</h3>
      </div>

      {/* cards part */}
      <div className='flex gap-4 justify-center flex-nowrap'>
        {visibleCards.map((card, index) => (
          <div key={index} className='bg-white p-5 shadow-lg rounded-lg w-[350px] sm:w-[300px]'>
            <h3 className='text-gray-500 text-left text-sm sm:text-xs md:text-sm mb-4'>{card.desc}</h3>
            <div className='flex items-center'>
              <img className='w-10 sm:w-8 md:w-10 rounded-full' src={card.src} alt='review-avatar' />
              <div className='ml-2'>
                <h2 className='text-[#353f4f] font-semibold sm:text-xs md:text-sm'>{card.name}</h2>
                <p className='text-gray-500 text-sm sm:text-xs md:text-sm'>{card.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className='flex gap-2 mt-6'>
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-gray-400' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CruselCard;
