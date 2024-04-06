import React, { useState } from 'react';
import Katalogtovarov from '../assets/images/Novosti.png'
import Katalogtovarov2 from '../assets/images/Novosti2.png'
import Katalogtovarov3 from '../assets/images/Novosti3.png'


const Carousel5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const divs = [
    { id: 1,  image: Katalogtovarov },
    { id: 2,  image: Katalogtovarov2 },
    { id: 3,  image: Katalogtovarov3 },
    { id: 4,  image: Katalogtovarov },
    { id: 5,  image:Katalogtovarov2  },
    { id: 6,  image: Katalogtovarov3 },
    { id: 7,  image: Katalogtovarov },
    { id: 8,  image:Katalogtovarov2  },
    { id: 9,  image: Katalogtovarov3 },
    { id: 10,  image: Katalogtovarov },
    { id: 11,  image:Katalogtovarov2  },
    { id: 12,  image: Katalogtovarov3 },
  ];

  const handleClickNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % (divs.length - 2));
  };

  const handleClickBack = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + (divs.length - 2)) % (divs.length - 2));
  };

  return (
    <div className="flex bg-[#F8F7F3] w-[100%] h-[700px] ">
      <h1 className='mt-[63px] absolute ml-[77px] font-[500] text-[33px] max-md:ml-[25px]'>Новости <br /> компании</h1>
      <div className='w-[397px] h-[300px] max-md:hidden'></div>
      {divs.slice(activeIndex, activeIndex + 3).map(div => (
        <div key={div.id} className="w-[320px] h-[522px] ml-[29px] border-[2px] border-[#E5E2EE] rounded-[10px] bg-[#F8F7F3] mt-[70px] max-md:mt-[200px] max-md:w-[220px] max-md:ml-[20px] max-md:h-[420px]">
        <div className='w-[317px] h-[232px] bg-white rounded-[10px] border-[1.5px] max-md:w-[218px] max-md:h-[212px]'>
          <img src={div.image} alt={`Image ${div.id}`}  />
        </div>
          <p className='mt-[100px] ml-[15px] text-[#7A7687] max-md:mt-[10px]'>07.11.2022</p>
          <h1 className='font-[600] ml-[15px] mt-[5px] text-2xl'>Название новости</h1>
          <p className='font-[500] ml-[15px] mt-[45px] text-[#7A7687] max-md:mt-[10px]'>Допускает внедрение <br /> поэтапного и развития общества.</p>
        </div>
      ))}
      <div className="mt-[660px] w-[1310px] h-[41px] ml-[83px] absolute max-md:ml-[-330px]">
        <button
          className=" border-[2px] border-[#E5E2EE] w-[40px] h-[40px] px-1 rounded-full hover:text-white hover:bg-[#088269] ml-[350px] absolute mt-[-10px]"
          onClick={handleClickBack}
          disabled={activeIndex === 0}
        >
           <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-[-3px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
           </svg>
        </button>
        <button
          className=" border-[2px] border-[#E5E2EE] w-[40px] h-[40px] px-1 rounded-full ml-[400px] hover:text-white hover:bg-[#088269] absolute mt-[-10px]"
          onClick={handleClickNext}
          disabled={activeIndex === divs.length - 3}
        >
           <svg className='ml-[3px]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        <button className='w-[241px] h-[41px] border-[2px] border-[#D5D1E1] text-[#088269] rounded-full mt-[-5px] absolute ml-[966px] font-[500] max-md:hidden'>Бесплатная консультация</button>
        <button className='w-[138px] h-[42px] border-none bg-[#088269] text-white rounded-full mt-[-5px] absolute ml-[1217px] font-[500] max-md:ml-[916px]'>Все товары</button>
      </div>
    </div>
  );
};

export default Carousel5;
