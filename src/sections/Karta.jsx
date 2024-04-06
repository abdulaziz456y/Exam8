import React from 'react'
import Kartaa from '../assets/images/Karta.png'

export default function Karta() {
  return (
    <div className='w-[100%] h-[920px] bg-[#F8F7F3] max-md:h-[720px]'>
       <div className='w-[650px] h-[610px] ml-[77px] mt-[150px] absolute border-[2px] border-[#E5E2EE] rounded-[12px] max-md:ml-[60px] max-md:mt-[60px]'><img src={Kartaa} alt="" /></div>
       <div className='w-[650px] h-[610px] ml-[767px] mt-[150px] absolute border-[2px] border-[#E5E2EE] rounded-[12px] bg-[#FFFFFF] max-md:hidden'>
        <h1 className='ml-[40px] mt-[40px] text-3xl font-[500]'>Остались вопросы?</h1>
        <p className='ml-[40px] mt-[25px] font-[500] text-[#7A7687]'>Задайте их по номеру телефона +7 (495) <br /> 000-00-00 или оставьте свои координаты и наш <br /> менеджер перезвонит вам через 10 минут</p>
       </div>
    </div>
  )
}
