import React from 'react'
import Next from '../assets/images/Next.png'
import Vektor3 from '../assets/images/Vector3.png'
import Vektor4 from '../assets/images/Vector4.png'
import Productt from '../assets/images/Product.png'
import Yulduz from '../assets/images/Yulduz.png'
import ProductPage from '../carousel/Carousel3'
import Carousel2 from '../carousel/Carousel2'
import Carousel4 from '../carousel/Carousel4'
import Gmail from '../sections/Gmail'



export default function Product() {
  return (
 <div>
     <div className='w-[100%] h-[610px] bg-[#F8F7F3]'>
        <a href="/"><h1 className='ml-[77px] mt-[25px] absolute font-[600] text-[#7A7687]'>Главная</h1></a>
        <img className='ml-[150px] mt-[35px] absolute' src={Next} alt="" />
        <a href="/katalog"><h1 className='ml-[170px] mt-[25px] absolute font-[600] text-[#7A7687]'>Каталог</h1></a>
        <img className='ml-[240px] mt-[35px] absolute' src={Next} alt="" />
        <h1 className='ml-[260px] mt-[27px] absolute font-[600] text-black'>Страница товара</h1>
        <div className='w-[1362px] h-[509px]  border-[2px] rounded-[8px] border-[#D5D1E1] ml-[77px] mt-[70px] absolute'>
          <div className='w-[760px] h-[506px] bg-white rounded-[7px] border border-[#D5D1E1]'>
          <button className='w-[77px] h-[27px] border-[2px] border-[#088269] rounded-full bg-[#E1EFE6] text-[#088269] ml-[20px] mt-[18px]'>Новинка</button>
            <a href="/cart">
            <img className='absolute mt-[-26px] ml-[665px]' src={Vektor4} alt="" />
            <img className='absolute mt-[-24px] ml-[700px]' src={Vektor3} alt="" />
            </a>
            <img className='ml-[163px]' src={Productt} alt="" />
          </div>
          <div className='w-[542px] h-[460px]  absolute mt-[-480px] ml-[800px]'>
            <h1 className='font-[600] text-2xl'>Анализатор мочи  MIND UA-66</h1>
            <img className='mt-[10px]' src={Yulduz} alt="" />
            <p className='mt-[15px] font-[500] text-[12px] text-[#7A7687]'>Категория: Лабораторное оборудование</p>
            <p className='mt-[10px] font-[500] text-[12px] text-[#7A7687]'>Производитель: Lorem</p>
            <p className='mt-[10px] font-[500] text-[12px] text-[#7A7687]'>Артикул: 213134</p>
            <p className='mt-[10px] font-[500] text-[12px] text-[#7A7687]'>В наличии</p>
            <h1 className='mt-[15px] text-[18px] font-[700]'>300 000 руб.</h1>
            <a href="/cart">
            <button className='w-[241px] h-[41px] border-[2px] border-[#D5D1E1] text-[#088269] rounded-full mt-[25px] absolute font-[500]'>Бесплатная консультация</button>
            <button className='w-[138px] h-[42px] border-none bg-[#088269] text-white rounded-full mt-[25px] absolute ml-[250px] font-[500]'>Все товары</button>
            </a>
            <h1 className='font-[500] mt-[78px]'>О товаре</h1>
            <p className='mt-[10px] text-[14px] text-[#7A7687] '>Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма    в науке будут функционально разнесены.</p>
          </div>
       </div>
    </div>
    <ProductPage/>
    <Carousel2/>
    <ProductPage/>
    <Carousel4/>
    <Gmail/>
 </div>
  )
}
