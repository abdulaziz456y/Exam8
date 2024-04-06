import React from 'react'
import Logo from '../assets/images/Logo.png'
import Vektor from '../assets/images/Vector.png'
import Vektor2 from '../assets/images/Vector 2.png'
import Vektor3 from '../assets/images/Vector3.png'
import Vektor4 from '../assets/images/Vector4.png'
import Vektor5 from '../assets/images/Vector5.png'
import Vektor6 from '../assets/images/Vector6.png'
import City from '../assets/images/City.png'
import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../componentss/Modal.jsx";



export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setMessage(value);
  };
  return (
    <div className='w-full h-[193px] bg-[#F8F7F3] '>
      <h1 className='ml-[77px] text-[#7A7687] mt-[5px] hover:text-[#088269] max-md:ml-[20px]'>О компании</h1>
      <h1 className='ml-[192px] mt-[-24px] text-[#7A7687]  hover:text-[#088269] max-md:ml-[130px]'>Доставка</h1>
      <h1 className='ml-[290px] mt-[-24px] text-[#7A7687]  hover:text-[#088269] max-md:ml-[215px]'>Оплата</h1>
      <h1 className='ml-[370px] mt-[-24px] text-[#7A7687]  hover:text-[#088269] max-md:ml-[290px]'>Гарантии</h1>
      <h1 className='ml-[465px] mt-[-24px] text-[#7A7687]  hover:text-[#088269] max-md:ml-[380px]'>Блог</h1>
      <h1 className='ml-[1070px] mt-[-24px] text-[#7A7687] max-md:ml-[650px] '>info@mail.ru</h1>
      <h1 className='ml-[1200px] mt-[-24px] text-[#7A7687] max-md:hidden '>г. Москва, ул. Московская, д. 35</h1>
      <hr className='bg-[#E5E2EE] mt-[5px]' />
      <a href="/"><img className='ml-[77px] mt-[20px] max-md:ml-[20px]' src={Logo} alt="" /></a>
      <div className='bg-[#F8F7F3] w-[550px] h-[41px] border-2 border-solid border-gray-300 rounded-full ml-[240px] mt-[-37px] absolute max-md:ml-[130px] max-md:w-[400px]' >
        <button className='h-[37px] w-[140px] bg-[#EFEFEF] rounded-full text-[#7A7687] border-[1.5px] '>Все категории</button>
        <input className='h-[38px] w-[375px] border-none outline-none bg-[#F8F7F3] rounded-full z-90 max-md:w-[100px]' type="text" placeholder='     Поиск' />
        <button className='w-[60px] h-[38px] bg-[#D5D1E1] ml-[-27px] rounded-[0px]  rounded-r-[30px] absolute max-md:ml-[100px]'><img className='ml-[20px]' src={Vektor} alt="" /></button>
      </div>
      <h3 className='text-[#7A7687] mt-[-39px] text-[14px] absolute ml-[840px] max-md:hidden'>Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной</h3>
      <div>
        {message}
        <button  onClick={() => setModalOpen(true)}>
        <img className='absalute ml-[1140px] mt-[-35px] max-md:ml-[560px]' src={Vektor2} alt="" />
         <h1 className=' ml-[1128px] mt-[5px] text-[#7A7687] max-md:ml-[547px]'>Войти</h1>
        </button>
        {modalOpen
        &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <a href="/product"><h1>Product</h1></a>
            <a href="/katalog"><h1>Katalog</h1></a>
            <a href="/cart"><h1>Корзина</h1></a>
            <br />
          </Modal>,
          document.body
        )}
      </div>
      <a href="/product">
      <img className=' ml-[1220px] mt-[-50px] max-md:ml-[630px]' src={Vektor3} alt="" />
      <h1 className=' ml-[1193px] mt-[8px] text-[#7A7687]  max-md:ml-[605px]'>Избраное</h1>
      </a>
      <img className=' ml-[1300px] mt-[-50px] max-md:hidden' src={Vektor4} alt="" />
      <h1 className=' ml-[1280px] mt-[5px] text-[#7A7687] max-md:hidden'>Сравнить</h1>
      <a href="/cart">
      <img className=' ml-[1380px] mt-[-50px] max-md:ml-[700px]' src={Vektor5} alt="" />
      <h1 className=' ml-[1362px] mt-[6px] text-[#7A7687] max-md:ml-[683px] '>Корзина</h1>
      </a>
      <hr className='bg-[#E5E2EE] mt-[20px]' />
      <div>
        {message}
      <button  className='ml-[77px] mt-[26px] max-md:ml-[20px]' onClick={() => setModalOpen(true)}><img src={Vektor6} alt="" /></button>
        {modalOpen
        &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <a href="/product"><h1>Product</h1></a>
            <a href="/katalog"><h1>Katalog</h1></a>
            <a href="/cart"><h1>Корзина</h1></a>
            <br />
          </Modal>,
          document.body
        )}
      </div>
      <a href="/katalog"><h1 className='ml-[100px] mt-[-24px] max-md:ml-[42px]'>Каталог</h1></a>
      <h1 className='ml-[180px] mt-[-24px] max-md:ml-[110px]'>Производители</h1>
      <h1 className='ml-[325px] mt-[-24px] max-md:hidden'>Кабинеты под ключ</h1>
      <h1 className='ml-[500px] mt-[-24px] max-md:ml-[236px]'>Услуги</h1>
      <h1 className='ml-[580px] mt-[-24px] max-md:ml-[300px]'>Акции</h1>
      <h1 className='ml-[650px] mt-[-24px] max-md:hidden'>Покупателям</h1>
      <img className='mt-[-24px] ml-[960px] max-md:hidden' src={City} alt="" />
      <button className=' absolute mt-[-30px] ml-[1075px] w-[168px] h-[41px] rounded-full border-[1px] border-[#088269] max-md:ml-[635px] max-md:w-[108px] max-md:text-[13px]'>+7(495)000-00-00</button>
      {message}
      <button onClick={() => setModalOpen(true)} className=' absolute mt-[-30px] ml-[1260px] w-[168px] h-[41px] rounded-full bg-[#088269] text-[#FFF] max-md:ml-[520px] max-md:w-[108px]'>Заказать</button>
      {modalOpen
        &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            onSubmit={handleButtonClick}
            onCancel={handleButtonClick}
          >
            <a href="/product"><h1>Product</h1></a>
            <a href="/katalog"><h1>Katalog</h1></a>
            <a href="/cart"><h1>Корзина</h1></a>
            <br />
          </Modal>,
          document.body
        )}
      <hr className='bg-[#E5E2EE] mt-[22px] max-md:mt-[14px]' />
    </div>
  )
}
