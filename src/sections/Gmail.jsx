import React from 'react'
import Vektorhmail from '../assets/images/Gmail.png'


export default function Gmail() {
  return (
    <div className='w-[100%] h-[276px] bg-[#E5E4ED]'>
      <img className='absolute h-[250px] w-[300px] ml-[140px] mt-[15px] max-md:ml-[0px]' src={Vektorhmail} alt="" />
      <h1 className='ml-[750px] font-[500] text-3xl mt-[35px] absolute max-md:ml-[350px]' >Подпишитесь и будьте в курсе!</h1>
      <p className='ml-[750px] mt-[90px] absolute text-[#7A7687] max-md:ml-[350px] max-md:mt-[130px]'>Акции, скидки, распродажи ждут!</p>
      <div>
        <input className='w-[540px] h-[43px] rounded-full ml-[750px] mt-[130px] absolute max-md:ml-[350px] max-md:w-[300px] max-md:mt-[200px]' type="text" placeholder='      Введите email' />
        <button className='w-[151px] h-[43px] absolute mt-[130px] ml-[1140px] outline-none border-none bg-[#088269] rounded-full text-white max-md:mt-[200px] max-md:ml-[550px]'>Подписаться</button>
      </div>
    </div>
  )
}
 