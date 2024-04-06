import React, { useState } from 'react';
import Carousel2img from '../assets/images/Carousel2-img.png';
import Carousel2img2 from '../assets/images/Carousel2-img2.png';
import Carousel2img3 from '../assets/images/Carousel2-img3.png';


const Carousel2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const divs = [
    { id: 1, content: 'Экспресс лаборатория', image: Carousel2img },
    { id: 2, content: 'Лазерная терапия', image: Carousel2img2 },
    { id: 3, content: 'Операционный блок', image: Carousel2img3 },
    { id: 4, content: 'Экспресс лаборатория', image: Carousel2img },
    { id: 5, content: 'Лазерная терапия', image: Carousel2img2 },
    { id: 3, content: 'Операционный блок', image: Carousel2img3 },
    { id: 1, content: 'Экспресс лаборатория', image: Carousel2img },
    { id: 2, content: 'Лазерная терапия', image: Carousel2img2 },
    { id: 3, content: 'Операционный блок', image: Carousel2img3 },
    { id: 1, content: 'Экспресс лаборатория', image: Carousel2img },
    { id: 2, content: 'Лазерная терапия', image: Carousel2img2 },
    { id: 3, content: 'Операционный блок', image: Carousel2img3 },
  ];

  const handleClickNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % (divs.length - 2));
  };

  const handleClickBack = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + (divs.length - 2)) % (divs.length - 2));
  };

  return (
    <div className="flex bg-[#F8F7F3] w-[100%] h-[750px] max-md:h-[530px]">
      <h1 className='mt-[20px] absolute ml-[87px] font-[500] text-3xl max-md:text-[22px] max-md:ml-[25px]'>Комплексное оснащение кабинетов</h1>
      <div className='w-[56px] h-[500px] max-md:w-[36px]'></div>
      {divs.slice(activeIndex, activeIndex + 3).map(div => (
        <div key={div.id} className="w-[430px] h-[579px] ml-[29px] border-[2px] border-[#E5E2EE] rounded-[10px] bg-[#F8F7F3] mt-[70px] max-md:ml-[5px] max-md:h-[350px]">
          <img src={div.image} alt={`Image ${div.id}`} className="w-full h-auto" />
          <a className='ml-[25px] mt-[20px] absolute' href="">{div.content}</a>
        </div>
      ))}
      <div className="mt-[680px] w-[1310px] h-[41px] ml-[83px] absolute max-md:mt-[450px] max-md:ml-[25px] max-md:w-[400px]">
        <button
          className=" border-[2px] border-[#E5E2EE] w-[30px] h-[30px] px-1 rounded-full hover:text-white hover:bg-[#088269]"
          onClick={handleClickBack}
          disabled={activeIndex === 0}
        >
           <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-[-3px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
           </svg>
        </button>
        <button
          className=" border-[2px] border-[#E5E2EE] w-[30px] h-[30px] px-1 rounded-full ml-[10px] hover:text-white hover:bg-[#088269]"
          onClick={handleClickNext}
          disabled={activeIndex === divs.length - 3}
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        <button className='w-[241px] h-[41px] border-[2px] border-[##D5D1E1] text-[#088269] rounded-full mt-[-5px] absolute ml-[786px] font-[500]  max-md:hidden'>Бесплатная консультация</button>
        <button className='w-[241px] h-[42px] border-none bg-[#088269] text-white rounded-full mt-[-5px] absolute ml-[1037px] font-[500] max-md:ml-[400px]'>Рассчитать стоимость</button>
      </div>
    </div>
  );
};

export default Carousel2;
