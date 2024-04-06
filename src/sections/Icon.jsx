import React from 'react'
import Icon1 from '../assets/images/icon1.png'
import Icon2 from '../assets/images/icon2.png'
import Icon3 from '../assets/images/icon3.png'
import Icon4 from '../assets/images/icon4.png'




export default function Icon() {
  return (
    <div className='w-[100%] h-[396px] bg-[#F8F7F3] max-md:h-[320px]'>
      <h1 className='ml-[77px] text-xl max-md:ml-[25px] '>Почему выбирают нас?</h1>
      <div className='w-[320px] h-[320px] bg-[#F8F7F3] border-[2px] border-[#E5E2EE] rounded ml-[77px] mt-[20px] max-md:w-[220px] max-md:h-[220px] max-md:ml-[25px]'><img className='ml-[141px] mt-[83px] max-md:mt-[30px] max-md:ml-[90px]' src={Icon1} alt="" /><h1 className='ml-[90px] mt-[41px] max-md:ml-[40px]'>Быстрая  доставка</h1></div>
      <div className='w-[320px] h-[320px] bg-[#F8F7F3] border-[2px] border-[#E5E2EE] rounded ml-[425px]  mt-[-320px] max-md:w-[220px] max-md:h-[220px] max-md:ml-[270px] max-md:mt-[-220px]'><img className='ml-[131px] mt-[83px] max-md:mt-[30px] max-md:ml-[80px]' src={Icon2} alt="" /><h1 className='ml-[80px] mt-[41px] max-md:ml-[30px]'>Весь  сертифицирован</h1></div>
      <div className='w-[320px] h-[320px] bg-[#F8F7F3] border-[2px] border-[#E5E2EE] rounded ml-[773px]  mt-[-320px] max-md:w-[220px] max-md:h-[220px] max-md:ml-[516px] max-md:mt-[-220px]'><img className='ml-[127px] mt-[89px] max-md:mt-[30px] max-md:ml-[80px]' src={Icon3} alt="" /><h1 className='ml-[80px] mt-[52px] max-md:ml-[30px]'>Гибкая система скидок</h1></div>
      <div className='w-[320px] h-[320px] bg-[#F8F7F3] border-[2px] border-[#E5E2EE] rounded ml-[1120px]  mt-[-320px] max-md:hidden '><img className='ml-[141px] mt-[89px] ' src={Icon4} alt="" /><h1 className='ml-[98px] mt-[52px]'>Лет на рынке</h1></div>
    </div>
  )
}
