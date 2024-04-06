import React from 'react'
import Next from '../assets/images/Next.png'
import Katalog1 from '../assets/images/Katalog1.png'
import Katalog2 from '../assets/images/Katalog2.png'
import Katalog3 from '../assets/images/Katalog3.png'
import Katalog4 from '../assets/images/Katalog4.png'
import Katalog5 from '../assets/images/Katalog5.png'
import Katalog6 from '../assets/images/Katalog6.png'
import Katalog7 from '../assets/images/Katalog7.png'
import Katalog8 from '../assets/images/Katalog8.png'
import Katalog9 from '../assets/images/Katalog9.png'
import Katalog10 from '../assets/images/Katalog10.png'
import Carousel2 from '../carousel/Carousel2'
import Icon from '../sections/Icon';
import Carousel3 from '../carousel/Carousel3'
import Carousel4 from '../carousel/Carousel4'
import Carousel5 from '../carousel/Carousel5'


export default function Katalog() {
  return (
    <div >
      <div className='w-[100%] h-[1400px] bg-[#F8F7F3]'>
        <a href="/"><h1 className='ml-[77px] mt-[25px] absolute font-[600] text-[#7A7687]'>Главная</h1></a>
        <img className='ml-[150px] mt-[35px] absolute' src={Next} alt="" />
        <h1 className='ml-[170px] mt-[25px] absolute font-[600] text-black'>Каталог</h1>
        <div className='border-[2px] border-[#E5E2EE] w-[320px] h-[595px] rounded-[12px] ml-[77px] mt-[62px] absolute'>
          <h1 className='mt-[15px] ml-[25px] text-2xl font-[600]'>Направления</h1>
          <hr className='w-[280px] h-[2px] ml-[20px] mt-[15px] bg-[#E5E2EE]'  />
          <div className='w-[286px] h-[360px] ml-[20px] mt-[20px] gap-[12px]'>
            <h1 className='font-[600]'>Реанимация <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Хирургия <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Офтальмология <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Лабораторная диагностика <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Акушерство и Гинекология <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Гистология <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Косметология <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Оториноларингология <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Рентгенология и томография <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Стерилизация <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Физиотерапия и реабилитация <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Функциональная диагностика <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Эндоскопия <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Новинки <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Распродажи <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
            <h1 className='font-[600] mt-[7px]'>Кабинеты под ключ <img className='ml-[260px] mt-[-10px]' src={Next} alt="" /></h1>
          </div>
        </div>
      <section>
      <div className=" h-[280px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[73px] ml-[420px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[196px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="  h-[187px] w-[187px] rounded-[10px]  absolute ml-[71px] "
              src={Katalog1}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Ветеринарное оборудование</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[73px] ml-[750px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[196px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="  h-[187px] w-[187px] rounded-[10px]  absolute ml-[71px] "
              src={Katalog2}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Анестезиология</h1>
        </div>
        <div className=" h-[610px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[73px] ml-[1080px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[534px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="   rounded-[10px]  absolute ml-[108px] "
              src={Katalog3}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Анестезиология</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[402px] ml-[420px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[196px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className=" mt-[20px]  h-[144px] w-[169px] rounded-[10px]  absolute ml-[71px] "
              src={Katalog4}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Ветеринарное оборудование</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[402px] ml-[750px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[196px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="  h-[187px] w-[187px] rounded-[10px]  absolute ml-[71px] "
              src={Katalog5}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Анестезиология</h1>
        </div>
        <div className=" h-[610px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[712px] ml-[420px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[534px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="   rounded-[10px] mt-[79px]  absolute ml-[91px] "
              src={Katalog6}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Анестезиология</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[712px] ml-[750px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[196px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="  h-[187px] w-[187px] rounded-[10px]  absolute ml-[71px] "
              src={Katalog7}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Анестезиология</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[1042px] ml-[750px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[196px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="  h-[187px] w-[187px] rounded-[10px]  absolute ml-[71px] "
              src={Katalog8}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Анестезиология</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[712px] ml-[1080px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[196px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="  h-[187px] w-[187px] rounded-[10px]  absolute ml-[71px] "
              src={Katalog9}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Анестезиология</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px]  bg-[#F8F7F3] shadow-xl mt-[1042px] ml-[1080px] absolute">
          <a href="/product">
           <div className="w-[320px] h-[196px] border-[2px] border-[#E5E2EE] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="  h-[187px] w-[187px] rounded-[10px]  absolute ml-[71px] "
              src={Katalog10}
            />
           </div>
          </a>
          <h1 className="mt-[35px] ml-[25px] font-[500] text-[#202020]">Анестезиология</h1>
        </div>
      </section>
      </div>
      <Carousel2/>
      <div>
        <Icon/>
      </div>
      <div>
        <Carousel3/>
      </div>
      <div>
        <Carousel4/>
      </div>
      <div>
        <Carousel5/>
      </div>
    </div>
  )
}
